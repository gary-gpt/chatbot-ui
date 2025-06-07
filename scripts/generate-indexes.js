// scripts/generate-indexes.js
const fs = require("fs");
const path = require("path");

const rootDir = "./docs/dev-notes";
const outputJson = path.join(rootDir, "index.json");
const globalIndexMd = path.join(rootDir, "index.md");

// Optional: customize folder descriptions here
const folderDescriptions = {
  api: "Handles communication with external services via HTTP APIs.",
  core: "Contains the heart of the chat logic, session state, and routing.",
  utils: "Reusable helper utilities like logging and formatting.",
};

function getMarkdownFiles(dir) {
  return fs.readdirSync(dir)
    .filter((file) => file.endsWith(".md") && file !== "index.md");
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
  const folders = fs.readdirSync(rootDir).filter((f) => {
    const fullPath = path.join(rootDir, f);
    return fs.statSync(fullPath).isDirectory();
  });

  const globalLines = [
    "# Project Documentation Index\n",
    "This index provides an overview of all documented components grouped by folder.\n",
  ];

  const indexJson = [];

  folders.forEach((folder) => {
    const folderPath = path.join(rootDir, folder);
    const files = getMarkdownFiles(folderPath);

    const folderSummary = folderDescriptions[folder] || "No description available.";
    const folderLines = [`# ${folder.charAt(0).toUpperCase() + folder.slice(1)} Module\n`, folderSummary + "\n"];

    globalLines.push(`\n## ${folder.charAt(0).toUpperCase() + folder.slice(1)} Folder`);
    globalLines.push(folderSummary + "\n");

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      const relPath = path.relative(rootDir, filePath);
      const content = fs.readFileSync(filePath, "utf8");
      const { title, desc } = getTitleAndDescription(content);
      const words = wordCount(content);
      const modified = Math.floor(fs.statSync(filePath).mtimeMs / 1000);

      folderLines.push(`- **[${title}](${file})** – ${desc}`);
      globalLines.push(`- **[${title}](${path.join(folder, file).replace(/\\/g, "/")})** – ${desc}`);

      indexJson.push({
        file,
        path: relPath.replace(/\\/g, "/"),
        title,
        words,
        modified,
      });
    });

    fs.writeFileSync(path.join(folderPath, "index.md"), folderLines.join("\n"));
  });

  fs.writeFileSync(outputJson, JSON.stringify(indexJson, null, 2));
  fs.writeFileSync(globalIndexMd, globalLines.join("\n"));
  console.log("✅ Indexes generated: index.md + index.json + per-folder index.md files");
}

generateIndexes();
