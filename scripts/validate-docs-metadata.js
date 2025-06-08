import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import globby from 'globby';


// Set __dirname for ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const DOCS_DIR = path.resolve(__dirname, '../docs');
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Exclusion rules — must match generate-docs.js
const EXCLUDED_PATHS = [
  '__tests__',
  'test',
  'playwright',
  '.next',
  'node_modules',
  'public',
  'docs',
  'scripts',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml'
];

const REQUIRED_FIELDS = ['source', 'generated', 'hash', 'tags'];

/**
 * Generates a SHA-256 hash of a file's contents.
 */
async function generateFileHash(filepath) {
  const content = await fs.promises.readFile(filepath, 'utf-8');
  return crypto.createHash('sha256').update(content).digest('hex');
}

/**
 * Returns all eligible source files from the project.
 */
async function getEligibleProjectFiles() {
  const allFiles = await globby(['**/*.{ts,tsx,js,jsx}'], {
    cwd: PROJECT_ROOT,
    ignore: [...EXCLUDED_PATHS.map(path => path.includes('.') ? path : `${path}/**`)],

    absolute: true
  });
  return allFiles;
}

/**
 * Scans each project file and checks for its corresponding .md doc and metadata.
 */
async function validateDocs() {
  const files = await getEligibleProjectFiles();
  const results = {
    total: files.length,
    missingMd: [],
    invalidMetadata: [],
    valid: []
  };

  for (const file of files) {
    const relativePath = path.relative(PROJECT_ROOT, file);
    const mdPath = path.join(DOCS_DIR, `${relativePath}.md`);

    if (!fs.existsSync(mdPath)) {
      results.missingMd.push(relativePath);
      continue;
    }

    const content = await fs.promises.readFile(mdPath, 'utf-8');
    let frontMatter;
    try {
      frontMatter = matter(content).data;
    } catch (e) {
      results.invalidMetadata.push({ file: relativePath, error: 'YAML parse error' });
      continue;
    }

    const missingFields = REQUIRED_FIELDS.filter(field => !(field in frontMatter));
    if (missingFields.length > 0) {
      results.invalidMetadata.push({ file: relativePath, missingFields });
      continue;
    }

    results.valid.push(relativePath);
  }

  // Display summary
  console.log(`\n📊 Metadata Validation Report`);
  console.log(`─────────────────────────────`);
  console.log(`Total project files scanned: ${results.total}`);
  console.log(`✅ Valid .md files: ${results.valid.length}`);
  console.log(`❌ Missing .md files: ${results.missingMd.length}`);
  console.log(`⚠️ Files with metadata issues: ${results.invalidMetadata.length}\n`);

  if (results.missingMd.length) {
    console.log(`🔍 Missing .md files:\n- ${results.missingMd.join('\n- ')}\n`);
  }

  if (results.invalidMetadata.length) {
    console.log(`🛠 Metadata issues:\n`);
    results.invalidMetadata.forEach(issue => {
      console.log(`- ${issue.file}: ${issue.missingFields ? `Missing fields: ${issue.missingFields.join(', ')}` : issue.error}`);
    });
    console.log('');
  }

  // Optional: write report
  const reportPath = path.join(PROJECT_ROOT, 'missing-docs-report.json');
  await fs.promises.writeFile(reportPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`📝 Report written to: ${reportPath}`);
}

validateDocs().catch(console.error);
