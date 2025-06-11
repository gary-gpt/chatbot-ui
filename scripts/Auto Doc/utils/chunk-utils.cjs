const fs = require("fs");
const path = require("path");

function getChunksFromFile(filePath) {
  const code = fs.readFileSync(filePath, "utf8");

  // If it's JSON, stringify it with indentation
  const content = path.extname(filePath) === ".json"
    ? JSON.stringify(JSON.parse(code), null, 2)
    : code;

  const chunk = {
    content,
    type: "code",
    tokens: content.length,
  };

  return [chunk];
}

function getChunksFromText(text) {
  return [
    {
      content: text,
      type: "text",
      tokens: text.length,
    },
  ];
}

function getChunksFromMarkdown(md) {
  return [
    {
      content: md,
      type: "markdown",
      tokens: md.length,
    },
  ];
}

function getChunksFromJSON(json) {
  const content = typeof json === "string" ? json : JSON.stringify(json, null, 2);

  return [
    {
      content,
      type: "json",
      tokens: content.length,
    },
  ];
}

function getChunksFromLines(lines) {
  return lines.map((line) => ({
    content: line,
    type: "line",
    tokens: line.length,
  }));
}

module.exports = {
  getChunksFromFile,
  getChunksFromText,
  getChunksFromMarkdown,
  getChunksFromJSON,
  getChunksFromLines,
};
