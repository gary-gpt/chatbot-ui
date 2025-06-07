// scripts/generate-indexes.js
const fs = require("fs");
const path = require("path");

const docsDir = "./docs/dev-notes";
const outputFile = path.join(docsDir, "index.json");

function extractTitle(markdown) {
  const match = markdown.match(/^#\s+(.*)/m);
  return match ? match[1].trim() : "Untitled";
}

function countWords(markdown) {
  return markdown
    .replace(/[\#>*_`-]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean).length;
}

function generateIndex() {
  if (!fs.existsSync(docsDir)) {
    console.warn("⚠️ Docs directory does not exist:", docsDir);
    return;
  }

  const files = fs.readdirSync(docsDir).filter((f) => f.endsWith(".md") && f !== "index.json");

  const index = files.map((file) => {
    const fullPath = path.join(docsDir, file);
    const content = fs.readFileSync(fullPath, "utf8");

    return {
      file,
      path: fullPath,
      title: extractTitle(content),
      words: countWords(content),
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));
  console.log(`✅ Index created with ${index.length} entries → ${outputFile}`);
}

generateIndex();
