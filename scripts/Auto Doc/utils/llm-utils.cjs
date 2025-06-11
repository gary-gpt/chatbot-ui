const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const os = require("os");

function formatChunk(chunk, i) {
  const header = `### Chunk ${i + 1}`;
  const body = chunk.type === "code"
    ? `\`\`\`\n${chunk.content.trim()}\n\`\`\``
    : chunk.content.trim();

  return `${header}\n\n${body}`;
}

async function getMarkdownFromChunks(chunks, { path: filePath, hash }) {
  const contentBlocks = chunks.map(formatChunk);
  const frontmatter = [
    "---",
    `hash: ${hash}`,
    `source: ${filePath}`,
    `date: ${new Date().toISOString()}`,
    "---",
    "",
  ].join(os.EOL);

  const title = `# Documentation for ${path.basename(filePath)}`;

  return [frontmatter, title, "", ...contentBlocks].join(os.EOL + os.EOL);
}

function parseFrontmatterHash(docPath) {
  try {
    const raw = fs.readFileSync(docPath, "utf8");
    const parsed = matter(raw);
    return parsed.data?.hash || null;
  } catch (err) {
    return null;
  }
}

module.exports = {
  getMarkdownFromChunks,
  parseFrontmatterHash,
};
