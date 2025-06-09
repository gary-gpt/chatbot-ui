import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDir = path.resolve('docs');
const isDryRun = process.argv.includes('--check');

function walkMarkdownFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(walkMarkdownFiles(fullPath));
    } else if (entry.endsWith('.md') && entry.toLowerCase() !== 'index.md') {
      results.push(fullPath);
    }
  }

  return results;
}

function extractFirstParagraph(content) {
  const lines = content.split('\n').map(line => line.trim());
  const bodyStart = lines.findIndex(line => line.startsWith('#'));
  for (let i = bodyStart + 1; i < lines.length; i++) {
    if (lines[i] && !lines[i].startsWith('#')) {
      return lines[i].slice(0, 200); // Safe truncation
    }
  }
  return '';
}

function normalizeFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  if (data.description) {
    return { status: 'skipped', reason: 'already has description' };
  }

  const summary = extractFirstParagraph(content);
  if (!summary) {
    return { status: 'flagged', reason: 'no summary found' };
  }

  const newData = { ...data, description: summary };
  const updated = matter.stringify(content, newData);

  if (!isDryRun) {
    fs.writeFileSync(filePath, updated, 'utf-8');
  }

  return { status: 'updated', description: summary };
}

function run() {
  const files = walkMarkdownFiles(docsDir);
  const report = { updated: [], skipped: [], flagged: [] };

  for (const file of files) {
    const relative = path.relative(docsDir, file);
    const result = normalizeFile(file);

    if (result.status === 'updated') {
      report.updated.push({ file: relative, description: result.description });
    } else if (result.status === 'skipped') {
      report.skipped.push({ file: relative });
    } else if (result.status === 'flagged') {
      report.flagged.push({ file: relative });
    }
  }

  console.log(`\n📊 Normalize Docs Report (${isDryRun ? 'DRY RUN' : 'LIVE'})`);
  console.log(`✅ Updated: ${report.updated.length}`);
  console.log(`⏭️ Skipped: ${report.skipped.length}`);
  console.log(`❌ Flagged (no summary): ${report.flagged.length}\n`);

  if (report.flagged.length) {
    console.log('Files needing manual descriptions:');
    report.flagged.forEach(f => console.log(`  - ${f.file}`));
  }
}

run();

