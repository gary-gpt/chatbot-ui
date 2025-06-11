#!/usr/bin/env node

const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const globby = require("globby");
const getTags = require("./utils/get-tags.cjs");


const ROOT = path.resolve(__dirname, "..");
const DOCS_DIR = "docs";
const OUTPUT_FILE = path.join(__dirname, "source-index.json");

const VALID_EXTENSIONS = [".ts", ".tsx", ".js", ".cjs"];
const IGNORE_DIRS = ["node_modules", "docs", ".next", "dist", "coverage"];
const COMMENT_REGEX = /^\s*\/\/.*$/;

const hashContent = (buffer) =>
  crypto.createHash("sha256").update(buffer).digest("hex");

const countCodeLines = (content) =>
  content
    .split("\n")
    .filter((line) => line.trim() && !COMMENT_REGEX.test(line))
    .length;

const getFileType = (filePath) => {
  if (filePath.includes("__tests__") || filePath.includes("test")) return "test";
  if (filePath.includes("components")) return "component";
  if (filePath.includes("scripts")) return "script";
  if (filePath.includes("lib")) return "source";
  if (filePath.includes("app") || filePath.includes("pages")) return "source";
  if (filePath.includes("db")) return "source";
  return "source";
};

const main = async () => {
  const patterns = [
    "**/*.ts",
    "**/*.tsx",
    "**/*.js",
    "**/*.jsx",
    "**/*.json",
    "**/*.yml",
    "**/*.css",
    "**/*.scss",
    "**/*.config.js",
    "**/*.config.ts",
    "!node_modules",
    "!dist",
    "!.next",
    "!**/__tests__",
    "!**/__mocks__",
    "!**/*.test.*",
    "!**/*.spec.*",
    "!coverage",
    "!build",
    "!out",
    "!public"


  ];
  const files = await globby(patterns, {
    cwd: ROOT,
    gitignore: true,
    ignore: IGNORE_DIRS.map((d) => `${d}/**`),
    onlyFiles: true,
  });

  const entries = [];

  for (const relativePath of files) {
    const fullPath = path.join(ROOT, relativePath);
    const stats = await fs.stat(fullPath);
    const buffer = await fs.readFile(fullPath);
    const content = buffer.toString();

    const docPath = path.join(
      DOCS_DIR,
      relativePath.replace(/\\/g, "/") + ".md"
    );

    entries.push({
      path: fullPath,
      docPath: docPath,
      exists: true,
      contentHash: crypto.createHash('sha256').update(content).digest('hex'),
      tags: ["build"]
    });
  }

  entries.sort((a, b) => {
    if (!a.path || !b.path) return 0;
    return a.path.localeCompare(b.path);
  });

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(entries, null, 2));

  console.log(`✅ Wrote ${entries.length} entries to source-index.json`);
};

main().catch((err) => {
  console.error("❌ Failed to build source index:", err);
  process.exit(1);
});