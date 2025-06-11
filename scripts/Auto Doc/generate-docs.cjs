#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
// const { encode } = require("gpt-3-encoder");

const { getChunksFromFile } = require("./utils/chunk-utils.cjs");
const { getMarkdownFromChunks } = require("./utils/llm-utils.cjs");


const sourceIndex = require(path.resolve(__dirname, "source-index.json"));

const dryRun = process.argv.includes("--dryRun");

function log(...args) {
  console.log(`[docs]`, ...args);
}

function safeWriteFile(filePath, content) {
  if (dryRun) {
    log(`[dryRun] Would write: ${filePath}`);
    return;
  }

  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
  log(`[write] Saved: ${filePath}`);
}

function getHashFromMarkdownFrontmatter(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = matter(raw);
    return parsed.data?.hash || null;
  } catch (err) {
    return null;
  }
}

(async () => {
  let generated = 0;
  let skipped = 0;

  for (const entry of sourceIndex) {
    const { path: sourcePath, docPath, contentHash, exists } = entry;

    if (!exists) {
      log(`[skip] Source missing: ${sourcePath}`);
      continue;
    }

    const mdExists = fs.existsSync(docPath);

    if (!mdExists) {
      log(`[generate] No doc found for: ${sourcePath}`);
    } else {
      const docHash = getHashFromMarkdownFrontmatter(docPath);
      if (docHash === contentHash) {
        skipped++;
        log(`[skip] No changes: ${sourcePath}`);
        continue;
      } else {
        log(`[update] Hash changed: ${sourcePath}`);
      }
    }

    const chunks = getChunksFromFile(sourcePath);
    const markdown = await getMarkdownFromChunks(chunks, {
      path: sourcePath,
      hash: contentHash,
    });

    safeWriteFile(docPath, markdown);
    generated++;
  }

  log(`✅ Done. ${generated} written | ${skipped} skipped`);
})();
