// generate-docs.js
// This script scans project source files, generates documentation using an LLM,
// and saves Markdown output to the docs/dev-notes folder. It supports chunking
// large files, retrying on LLM failure, and tracking changes via index.json.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateMarkdownFromCode } from './utils/llm-utils.js';
import { chunkText, combineChunks, retryWithBackoff } from './utils/chunk-utils.js';

// File config
const __filename = fileURLToPath(import.meta.url); // Get current file path
const __dirname = path.dirname(__filename);        // Get current folder

const SOURCE_DIR = '.';                             // Root directory to scan
const OUTPUT_DIR = 'docs/dev-notes';                // Where to store Markdown docs
const INDEX_FILE = path.join('docs', 'index.json'); // Index of all generated docs

// Allowed file extensions
const SUPPORTED_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];

// Read existing index if available
let index = {};
if (fs.existsSync(INDEX_FILE)) {
  index = JSON.parse(fs.readFileSync(INDEX_FILE, 'utf-8'));
}

// Recursively scan the source directory
function walk(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !['node_modules', '.next', '.git', 'public', 'docs'].includes(file)) {
      files = files.concat(walk(fullPath));
    } else if (stat.isFile() && SUPPORTED_EXTENSIONS.includes(path.extname(file))) {
      files.push(fullPath);
    }
  }
  return files;
}

// Main logic
async function generateDocs() {
  const files = walk(SOURCE_DIR);

  for (const file of files) {
    const stat = fs.statSync(file);
    const modified = stat.mtimeMs;

    // Skip unchanged files
    if (index[file] && index[file].modified === modified) continue;

    const content = fs.readFileSync(file, 'utf-8');

    // Chunk if file is very large
    const chunks = content.length > 9000 ? chunkText(content, 6000) : [content];

    let combinedMarkdown = '';
    for (const chunk of chunks) {
      const md = await retryWithBackoff(() => generateMarkdownFromCode(chunk, file));
      combinedMarkdown += `\n\n${md}`;
    }

    // Save markdown file
    const relPath = path.relative(SOURCE_DIR, file);
    const mdPath = path.join(OUTPUT_DIR, relPath + '.md');

    fs.mkdirSync(path.dirname(mdPath), { recursive: true });
    fs.writeFileSync(mdPath, combinedMarkdown.trim());

    // Update index
    index[file] = {
      modified,
      markdown: mdPath,
      updated: new Date().toISOString()
    };

    console.log(`✅ Documented: ${file}`);
  }

  // Save index
  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));
  console.log(`🧠 Index updated: ${INDEX_FILE}`);
}

generateDocs();
