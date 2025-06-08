import dotenv from 'dotenv';
import path from 'path';

// Force load .env.local using absolute path
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

if (!process.env.OPENAI_API_KEY) {
  console.warn('⚠️  OPENAI_API_KEY not loaded.');
} else {
  console.log('✅ Loaded OPENAI_API_KEY:', process.env.OPENAI_API_KEY.slice(0, 5) + '...');
}

import fs from 'fs';
import matter from 'gray-matter';
import crypto from 'crypto';
import { chunkFile } from './utils/chunk-utils.js';
import { generateMarkdownFromCode } from './utils/llm-utils.js';

const PROJECT_ROOT = process.cwd();
const DOCS_DIR = path.join(PROJECT_ROOT, 'docs');

const EXCLUDED_PATHS = [
  '__tests__', 'test', 'playwright', '.next', 'node_modules', 'public', 'docs', 'scripts'
];

function getAllProjectFiles(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (!EXCLUDED_PATHS.includes(entry.name)) {
        files = files.concat(getAllProjectFiles(fullPath));
      }
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function ensureDirExists(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
}

function computeHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

function addMetadataHeader(markdown, sourcePath) {
  const generated = new Date().toISOString();
  const hash = computeHash(markdown);

  const yamlHeader = [
    '---',
    `source: "${sourcePath.replace(PROJECT_ROOT + '/', '')}"`,
    `generated: "${generated}"`,
    `hash: "${hash}"`,
    `tags: []`,
    '---\n\n'
  ].join('\n');

  return yamlHeader + markdown;
}

async function documentFile(filePath) {
  const outputPath = path.join(DOCS_DIR, filePath.replace(PROJECT_ROOT + '/', '') + '.md');
  ensureDirExists(outputPath);

  try {
    const chunks = await chunkFile(filePath);
    let finalMarkdown = '';

    for (const chunk of chunks) {
      const partial = await generateMarkdownFromCode(chunk, filePath);
      finalMarkdown += `\n\n` + partial;
    }

    const withMetadata = addMetadataHeader(finalMarkdown.trim(), filePath);
    fs.writeFileSync(outputPath, withMetadata, 'utf8');
    console.log(`✅ Documented: ${filePath.replace(PROJECT_ROOT + '/', '')}`);
  } catch (err) {
    console.error(`❌ Error processing ${filePath}:`, err.message || err);
  }
}

async function main() {
  const targetFiles = process.argv.slice(2);
  const files = targetFiles.length
    ? targetFiles.map(p => path.resolve(PROJECT_ROOT, p))
    : getAllProjectFiles(PROJECT_ROOT);

  console.log(`📁 Found ${files.length} eligible files`);

  for (const file of files) {
    await documentFile(file);
  }

  console.log('✨ Done generating documentation.');
}

main();
