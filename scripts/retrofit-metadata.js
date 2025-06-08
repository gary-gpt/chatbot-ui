import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import crypto from 'crypto';
import glob from 'fast-glob';

const DOCS_DIR = path.join(process.cwd(), 'docs');

// Returns SHA256 hash of the file contents
function getHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

// Check if metadata block is valid (all required keys exist)
function isValidMetadata(data) {
  return (
    data &&
    typeof data === 'object' &&
    'source' in data &&
    'generated' in data &&
    'tags' in data &&
    'hash' in data
  );
}

async function retrofitMetadata() {
  const files = await glob('**/*.md', { cwd: DOCS_DIR, absolute: true });

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(content);
    const relPath = path.relative(DOCS_DIR, filePath);

    if (isValidMetadata(parsed.data)) {
      console.log(`✅ Skipping ${relPath}: valid metadata already present.`);
      continue;
    }

    // Compute new metadata
    const hash = getHash(parsed.content.trim());
    const metadata = {
      source: relPath.replace(/\.md$/, ''),
      generated: new Date().toISOString(),
      tags: [],
      hash,
    };

    const newDoc = matter.stringify(parsed.content.trim(), metadata);
    fs.writeFileSync(filePath, newDoc, 'utf8');
    console.log(`🛠️  Metadata added to ${relPath}`);
  }

  console.log('✨ Done retrofitting metadata.');
}

retrofitMetadata().catch((err) => {
  console.error('❌ Error running retrofitMetadata:', err);
});
