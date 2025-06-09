import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { generateMarkdownFromCode } from './utils/llm-utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const isDryRun = process.argv.includes('--dry-run');

function getAllHumanFiles(dir, fileList = []) {
  const excludeDirs = new Set([
    'node_modules', '.git', '.next', '.turbo', 'out',
    'public', 'docs', 'dist', 'build', 'scripts', '.vercel'
  ]);

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!excludeDirs.has(entry.name)) {
        getAllHumanFiles(fullPath, fileList);
      }
    } else if (
      entry.isFile() &&
      (entry.name.endsWith('.ts') ||
        entry.name.endsWith('.tsx') ||
        entry.name.endsWith('.js') ||
        entry.name.endsWith('.jsx') ||
        entry.name.endsWith('.mjs') ||
        entry.name.endsWith('.cjs') ||
        entry.name.endsWith('.css'))
    ) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

function computeHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

function parseFrontmatter(mdContent) {
  const match = mdContent.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const yaml = Object.fromEntries(
    match[1]
      .split('\n')
      .map((line) => line.split(/:\s(.+)/))
      .filter(([k, v]) => k && v)
  );
  return yaml;
}

function hasValidFrontmatter(docPath, sourceHash) {
  if (!fs.existsSync(docPath)) return false;
  const content = fs.readFileSync(docPath, 'utf8');
  const fm = parseFrontmatter(content);
  return fm && fm.hash === sourceHash;
}

function addOrUpdateFrontmatter(markdown, meta) {
  const existing = parseFrontmatter(markdown);
  const newFrontmatter = `---\nsource: ${meta.source}\ngenerated: ${meta.generated}\ntags: []\nhash: ${meta.hash}\n---`;
  const contentWithoutFM = markdown.replace(/^---\n[\s\S]*?\n---/, '').trim();
  return `${newFrontmatter}\n\n${contentWithoutFM}`;
}

async function main() {
  const files = getAllHumanFiles(ROOT_DIR);
  const results = [];

  for (const filePath of files) {
    const reasons = [];

    const relativePath = path.relative(ROOT_DIR, filePath);
    const docPath = path.join(DOCS_DIR, `${relativePath}.md`);

    const sourceExists = fs.existsSync(filePath);
    if (!sourceExists) {
      reasons.push('Source file missing');
    }

    const sourceCode = sourceExists ? fs.readFileSync(filePath, 'utf8') : '';
    const sourceHash = computeHash(sourceCode);

    const docExists = fs.existsSync(docPath);
    const docContent = docExists ? fs.readFileSync(docPath, 'utf8').trim() : '';
    const isDocEmpty = docContent === '';

    const hasValid = hasValidFrontmatter(docPath, sourceHash);
    const shouldGenerate = !docExists || isDocEmpty || !hasValid;

    if (!shouldGenerate) {
      reasons.push('Doc exists and frontmatter is valid — skipping');
    }

    if (shouldGenerate) {
      if (isDryRun) {
        results.push({ file: docPath, action: 'Generate', reasons });
      } else {
        const markdown = await generateMarkdownFromCode(sourceCode, filePath);
        const updatedMarkdown = addOrUpdateFrontmatter(markdown, {
          source: relativePath,
          generated: new Date().toISOString(),
          hash: sourceHash
        });

        fs.mkdirSync(path.dirname(docPath), { recursive: true });
        fs.writeFileSync(docPath, updatedMarkdown, 'utf8');
        results.push({ file: docPath, action: 'Generate', reasons });
      }
    } else {
      results.push({ file: docPath, action: 'Skip', reasons });
    }

    console.log(`${relativePath} → ${shouldGenerate ? '📝 GENERATE' : '⏭️ SKIP'} | ${reasons.join('; ')}`);
  }

  const summary = results.reduce(
    (acc, r) => {
      acc[r.action]++;
      return acc;
    },
    { Generate: 0, Skip: 0 }
  );

  console.log(`\n📄 Docs Generation Summary${isDryRun ? ' (DRY RUN)' : ''}`);
  console.log(`📝 Will Generate: ${summary.Generate}`);
  console.log(`⏭️ Will Skip: ${summary.Skip}`);
}

main();
