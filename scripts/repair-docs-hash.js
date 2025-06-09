import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import crypto from 'crypto';

const DOCS_DIR = path.resolve('docs');
const PROJECT_ROOT = path.resolve('.');

function computeFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}

function fixFrontmatterHash(mdFilePath) {
  const raw = fs.readFileSync(mdFilePath, 'utf8');
  const parsed = matter(raw);

  const { source } = parsed.data;

  if (!source) {
    console.warn(`⚠️  Skipping ${mdFilePath} — no 'source' in frontmatter`);
    return;
  }

  const sourcePath = path.resolve(PROJECT_ROOT, source);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`❌ Source not found for ${mdFilePath}: ${sourcePath}`);
    return;
  }

  const correctHash = computeFileHash(sourcePath);

  if (parsed.data.hash === correctHash) {
    // Already correct
    return;
  }

  parsed.data.hash = correctHash;
  const newRaw = matter.stringify(parsed.content, parsed.data);
  fs.writeFileSync(mdFilePath, newRaw);
  console.log(`✅ Fixed hash in ${mdFilePath}`);
}

function walkAndFix(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkAndFix(fullPath);
    } else if (entry.isFile() && fullPath.endsWith('.md')) {
      fixFrontmatterHash(fullPath);
    }
  }
}

walkAndFix(DOCS_DIR);
