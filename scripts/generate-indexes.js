// scripts/generate-indexes.js
const fs = require("fs");
const path = require("path");

const rootDir = "./docs/dev-notes";
const outputJson = path.join(rootDir, "index.json");
const globalIndexMd = path.join(rootDir, "index.md");

function walkFolders(dir) {
  let folders = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      folders.push(fullPath);
      folders = folders.concat(walkFolders(fullPath));
    }
  }
  return folders;
}

function getMarkdownFiles(dir) {
  return fs.readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !["index.md", "index.json"].includes(file));
}

function getTitleAndDescription(content) {
  const lines = content.split("\n");
  const title = lines[0]?.replace(/^#\s*/, "").trim() || "Untitled";
  const desc = lines.find((line, i) => i > 0 && line.trim())?.trim() || "";
  return { title, desc };
}

function wordCount(content) {
  return content
    .replace(/[\#>*_`-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
}

function generateIndexes() {
  const allFolders = [rootDir].concat(walkFolders(rootDir));
  const globalLines = [
    "# Project Documentation Index\n",
    "This index provides an overview of all documented components grouped by folder.\n"
  ];
  const indexJson = [];

  for (const folder of allFolders) {
    const relFolder = path.relative(rootDir, folder) || ".";
    const files = getMarkdownFiles(folder);
    if (files.length === 0) continue;

    const folderLines = [
      `# ${relFolder.replace(/\\|\//g, " / ").replace(/^\./, "Root")} Folder\n`,
      "No description available.\n"
    ];

    globalLines.push(`\n## ${relFolder.replace(/\\|\//g, " / ")}`);
    globalLines.push("No description available.\n");

    for (const file of files) {
      const filePath = path.join(folder, file);
      const relPath = path.relative(rootDir, filePath).replace(/\\/g, "/");
      const content = fs.readFileSync(filePath, "utf8");
      const { title, desc } = getTitleAndDescription(content);
      const words = wordCount(content);
      const modified = Math.floor(fs.statSync(filePath).mtimeMs / 1000);

      folderLines.push(`- **[${title}](${file})** – ${desc}`);
      globalLines.push(`- **[${title}](${relPath})** – ${desc}`);

      indexJson.push({
        file,
        path: relPath,
        title,
        words,
        modified
      });
    }

    fs.writeFileSync(path.join(folder, "index.md"), folderLines.join("\n"));
  }

  fs.writeFileSync(globalIndexMd, globalLines.join("\n"));
  fs.writeFileSync(outputJson, JSON.stringify(indexJson, null, 2));

  console.log("✅ Recursive indexes generated.");
}

generateIndexes();
