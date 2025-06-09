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

function getFallbackSummary(content) {
  const lines = content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0 && !line.startsWith('#'));

  return lines.find(line => line.length > 10 && /[a-zA-Z]/.test(line))?.slice(0, 200) || '';
}

function patchFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  if (data.description) {
    return { status: 'skipped', reason: 'already has description' };
  }

  const summary = getFallbackSummary(content);
  const newDescription = summary || 'TODO: Add summary.';
  const updatedFrontmatter = { ...data, description: newDescription };
  const newFile = matter.stringify(content, updatedFrontmatter);

  if (!isDryRun) {
    fs.writeFileSync(filePath, newFile, 'utf-8');
  }

  return {
    status: summary ? 'patched' : 'todo',
    description: newDescription
  };
}

function run() {
  const files = walkMarkdownFiles(docsDir);
  const report = { patched: [], todo: [], skipped: [] };

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf-8');
    const { data } = matter(raw);
    if (data.description) continue; // Already handled by normalize-docs

    const result = patchFile(file);
    const relPath = path.relative(docsDir, file);

    if (result.status === 'patched') {
      report.patched.push({ file: relPath, description: result.description });
    } else if (result.status === 'todo') {
      report.todo.push(relPath);
    } else {
      report.skipped.push(relPath);
    }
  }

  console.log(`\n📊 Patch Docs Report (${isDryRun ? 'DRY RUN' : 'LIVE'})`);
  console.log(`🩹 Patched: ${report.patched.length}`);
  console.log(`📝 TODOs inserted: ${report.todo.length}`);
  console.log(`⏭️ Skipped (unexpected): ${report.skipped.length}`);

  if (report.todo.length) {
    console.log('\nFiles still needing human-written summaries:');
    report.todo.forEach(f => console.log(`  - ${f}`));
  }

  if (!isDryRun) {
    fs.writeFileSync(path.join(docsDir, 'patch-report.json'), JSON.stringify(report, null, 2), 'utf-8');
    console.log(`\n🧾 Saved report to docs/patch-report.json`);
  }
}

run();
