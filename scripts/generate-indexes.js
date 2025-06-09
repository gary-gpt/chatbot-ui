// @ts-check

/**
 * @typedef {Object} FileMeta
 * @property {string} folder - Folder path relative to docs root (e.g. "components/ui")
 * @property {string} filename - Markdown filename (e.g. "button.tsx.md")
 * @property {string} fullPath - Full file path on disk
 * @property {string|null} summary - Description of the file’s purpose
 * @property {string|null} hash - Content hash from frontmatter
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsRoot = 'docs';


// STEP 1: SCAN MARKDOWN DOCS

/**
 * Recursively scans the docs/ directory and extracts metadata from each .md file.
 * Skips any `index.md` file to avoid circular references.
 *
 * @param {string} docsRoot
 * @returns {Array<FileMeta>}
 */
function scanMarkdownDocs(docsRoot = 'docs') {
  const results = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath); // Recurse into subdirectory
      } else if (
        entry.name.endsWith('.md') &&
        entry.name.toLowerCase() !== 'index.md'
      ) {
        const raw = fs.readFileSync(fullPath, 'utf8');
        const parsed = matter(raw);
        const relativePath = path.relative(docsRoot, fullPath);
        const folder = path.dirname(relativePath);
        const filename = path.basename(relativePath);

        results.push({
          folder,
          filename,
          fullPath,
          summary: parsed.data.summary || null,
          hash: parsed.data.hash || null,
        });
      }
    }
  }

  walk(docsRoot);
  return results;
}


// STEP 2: GROUP BY FOLDER & DETECT CHANGES

/**
 * Loads the existing index.json file from the docs root (if available).
 *
 * @param {string} docsRoot
 * @returns {Object}
 */
function loadIndexTrackingFile(docsRoot = 'docs') {
  const indexPath = path.join(docsRoot, 'index.json');
  if (fs.existsSync(indexPath)) {
    return JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  }
  return {};
}

/**
 * Groups docs by folder, tracks which folders changed (based on hash), and which are missing summaries.
 *
 * @param {Array<FileMeta>} files
 * @param {Object} indexData
 * @returns {{
 *   groupedDocs: Map<string, Array<FileMeta>>,
 *   changedFolders: Set<string>,
 *   missingSummaries: Array<FileMeta>
 * }}
 */
function groupDocsAndDetectChanges(files, indexData) {
  const groupedDocs = new Map();
  const changedFolders = new Set();
  const missingSummaries = [];

  for (const file of files) {
    const { folder, filename, summary, hash } = file;

    if (!groupedDocs.has(folder)) {
      groupedDocs.set(folder, []);
    }
    groupedDocs.get(folder).push(file);

    if (!summary) {
      missingSummaries.push(file);
    }

    const prevHash = indexData[folder]?.hashes?.[filename];
    if (!prevHash || prevHash !== hash) {
      changedFolders.add(folder);
    }
  }

  return { groupedDocs, changedFolders, missingSummaries };
}


// STEP 3: WRITE FOLDER-LEVEL INDEX.MD FILES

/**
 * Writes an index.md file into each folder that has changed.
 *
 * @param {Map<string, Array<FileMeta>>} groupedDocs
 * @param {Set<string>} changedFolders
 * @param {string} docsRoot
 */
function writeFolderIndexes(groupedDocs, changedFolders, docsRoot = 'docs') {
  for (const [folder, files] of groupedDocs.entries()) {
    if (!changedFolders.has(folder)) continue;

    const heading = `# ${folder} Index\n\n`;
    const description = `Auto-generated index for **${folder}**.\n\n`;

    const body = files.map(file => {
      const link = `./${file.filename}`;
      const summary = file.summary || '⚠️ No summary available.';
      return `- [\`${file.filename.replace(/`/g, '')}\`](${link}) — ${summary}`;
    }).join('\n');

    const outputPath = path.join(docsRoot, folder, 'index.md');
    fs.writeFileSync(outputPath, heading + description + body + '\n');
  }
}


// STEP 4: WRITE GLOBAL INDEX.MD

/**
 * Writes the global docs/index.md file with all folders and entries.
 *
 * @param {Map<string, Array<FileMeta>>} groupedDocs
 * @param {string} docsRoot
 */
function writeGlobalIndex(groupedDocs, docsRoot = 'docs') {
  let content = `# Project Documentation Index\n\n`;
  content += `This is an auto-generated overview of all markdown documentation in the project.\n\n`;

  const sortedFolders = [...groupedDocs.keys()].sort();

  for (const folder of sortedFolders) {
    const files = groupedDocs.get(folder);

    const folderHeading = `## ${folder}\n\n`;
    const folderDescription = `Overview of docs in \`${folder}\`.\n\n`;

    const entries = files.map(file => {
      const relativePath = path.join(folder, file.filename).replace(/\\/g, '/');
      const summary = file.summary || '⚠️ No summary available.';
      return `- [\`${relativePath}\`](${relativePath}) — ${summary}`;
    }).join('\n');

    content += folderHeading + folderDescription + entries + '\n\n';
  }

  const globalIndexPath = path.join(docsRoot, 'index.md');
  fs.writeFileSync(globalIndexPath, content.trim() + '\n');
}


// STEP 5: WRITE MISSING-SUMMARIES.MD

/**
 * Outputs a list of .md files missing summaries.
 *
 * @param {Array<FileMeta>} missingSummaries
 * @param {string} docsRoot
 */
function writeMissingSummariesFile(missingSummaries, docsRoot = 'docs') {
  if (!missingSummaries.length) return;

  const lines = [
    '# Missing Descriptions in Docs\n',
    'The following markdown files are missing summaries and should be reviewed manually.\n'
  ];

  for (const file of missingSummaries) {
    lines.push(`- \`${path.join(file.folder, file.filename).replace(/\\/g, '/')}\``);
  }

  const outputPath = path.join(docsRoot, 'missing-summaries.md');
  fs.writeFileSync(outputPath, lines.join('\n') + '\n');
}


// STEP 6: WRITE INDEX.JSON TRACKING FILE

/**
 * Writes an updated index.json file with folder hashes and missing summary data.
 *
 * @param {Map<string, Array<FileMeta>>} groupedDocs
 * @param {string} docsRoot
 * @param {Array<FileMeta>} missingSummaries
 */
function writeIndexTrackingFile(groupedDocs, docsRoot = 'docs', missingSummaries = []) {
  const output = {};

  for (const [folder, files] of groupedDocs.entries()) {
    output[folder] = {
      lastIndexed: new Date().toISOString(),
      hashes: {}
    };

    for (const file of files) {
      output[folder].hashes[file.filename] = file.hash || null;
    }
  }

  if (missingSummaries.length > 0) {
    output.missingSummaries = {};
    for (const file of missingSummaries) {
      const relPath = path.join(file.folder, file.filename).replace(/\\/g, '/');
      output.missingSummaries[relPath] = 'No summary found';
    }
  }

  const outputPath = path.join(docsRoot, 'index.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
}


// MAIN EXECUTION

const files = scanMarkdownDocs(docsRoot);
const indexData = loadIndexTrackingFile(docsRoot);
const { groupedDocs, changedFolders, missingSummaries } = groupDocsAndDetectChanges(files, indexData);

writeFolderIndexes(groupedDocs, changedFolders, docsRoot);
writeGlobalIndex(groupedDocs, docsRoot);
writeMissingSummariesFile(missingSummaries, docsRoot);
writeIndexTrackingFile(groupedDocs, docsRoot, missingSummaries);
