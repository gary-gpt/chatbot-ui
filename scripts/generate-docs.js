
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import fs from 'fs';
import path from 'path';
import { generateMarkdownFromCode } from './utils/llm-utils.js';

const ROOT_DIR = './';
const OUTPUT_DIR = './docs/';
const INCLUDE_EXTENSIONS = ['.js', '.ts', '.tsx'];
const EXCLUDE_DIRS = [
  'node_modules', '.git', 'dist', 'build', 'docs',
  '.next', 'public', 'coverage', '.turbo', '.vscode'
];

/**
 * Recursively find all files matching the allowed extensions.
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const isDirectory = fs.statSync(fullPath).isDirectory();

    if (isDirectory && !EXCLUDE_DIRS.includes(file)) {
      getAllFiles(fullPath, arrayOfFiles);
    } else if (!isDirectory && INCLUDE_EXTENSIONS.includes(path.extname(file))) {
      arrayOfFiles.push(fullPath);
    }
  }

  return arrayOfFiles;
}

/**
 * Writes the documentation to a markdown file in the output folder.
 */
function writeDocs(filePath, docs) {
  const relativePath = path.relative(ROOT_DIR, filePath);
  const outputFilePath = path.join(OUTPUT_DIR, `${relativePath}.md`);

  fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
  fs.writeFileSync(outputFilePath, docs, 'utf-8');

  console.log(`✅ Documented: ${relativePath}`);
}

async function generateDocs() {
  const files = getAllFiles(ROOT_DIR);
  console.log(`📁 Found ${files.length} eligible files`);

  for (const filePath of files) {
    try {
      // Optional: skip test files
      if (
        filePath.includes('__tests__') ||
        filePath.endsWith('.spec.ts') ||
        filePath.endsWith('.test.ts')
      ) {
        console.log(`⚠️ Skipping test file: ${filePath}`);
        continue;
      }

      const content = fs.readFileSync(filePath, 'utf-8');
      if (!content.trim()) {
        console.warn(`⚠️ Skipping empty file: ${filePath}`);
        continue;
      }

      const docs = await generateMarkdownFromCode(content, filePath);

      if (docs && docs.trim()) {
        writeDocs(filePath, docs.trim());
      } else {
        console.warn(`⚠️ No docs returned for: ${filePath}`);
      }

    } catch (err) {
      console.error(`❌ Error processing ${filePath}:`, err.message || err);
    }
  }

  console.log('✨ Done generating documentation.');
}

generateDocs();
