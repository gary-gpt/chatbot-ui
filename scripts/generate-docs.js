// scripts/generate-docs.js
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENAI_API_BASE = process.env.OPENAI_API_BASE || "https://api.openai.com/v1";
const OPENROUTER_API_BASE = process.env.OPENROUTER_API_BASE || "https://openrouter.ai/api/v1";
const model = "gpt-4";

const sourceRoot = "./";
const outputRoot = "./docs/dev-notes";
const indexPath = path.join(outputRoot, "index.json");

function walkSourceFiles(dir, all = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !fullPath.includes("node_modules")) {
      walkSourceFiles(fullPath, all);
    } else if (entry.isFile() && /\.(js|ts|tsx)$/.test(entry.name)) {
      all.push(fullPath);
    }
  }
  return all;
}

function chunkText(text, maxLength = 12000) {
  const lines = text.split("\n");
  const chunks = [];
  let current = [];
  for (const line of lines) {
    current.push(line);
    if (current.join("\n").length >= maxLength) {
      chunks.push(current.join("\n"));
      current = [];
    }
  }
  if (current.length) chunks.push(current.join("\n"));
  return chunks;
}

function formatPrompt(filename, content) {
  return `You are an expert AI code documenter. Create a clear and professional Markdown doc that explains the following file:

Filename: ${filename}

\`\`\`js
${content}
\`\`\``;
}

function readIndexJson() {
  if (!fs.existsSync(indexPath)) return {};
  const raw = fs.readFileSync(indexPath, "utf8");
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveIndexJson(entries) {
  fs.writeFileSync(indexPath, JSON.stringify(Object.values(entries), null, 2));
}

async function callLLM(prompt, useOpenRouter = false) {
  const url = useOpenRouter
    ? `${OPENROUTER_API_BASE}/chat/completions`
    : `${OPENAI_API_BASE}/chat/completions`;

  const headers = {
    Authorization: `Bearer ${useOpenRouter ? OPENROUTER_API_KEY : OPENAI_API_KEY}`,
    "Content-Type": "application/json"
  };

  const body = {
    model: useOpenRouter ? "openai/gpt-4" : "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2
  };

  try {
    const res = await axios.post(url, body, { headers });
    return res.data.choices[0].message.content;
  } catch (err) {
    if (!useOpenRouter) {
      console.warn("⚠️ OpenAI failed, retrying with OpenRouter...");
      return callLLM(prompt, true);
    } else {
      throw new Error("❌ Both OpenAI and OpenRouter failed.");
    }
  }
}

async function generateDocs() {
  const files = walkSourceFiles(sourceRoot);
  const previousIndex = readIndexJson();
  const newIndex = {};

  if (!fs.existsSync(outputRoot)) fs.mkdirSync(outputRoot, { recursive: true });

  for (const file of files) {
    const stat = fs.statSync(file);
    const modified = Math.floor(stat.mtimeMs / 1000);
    const relPath = path.relative(sourceRoot, file);
    const mdPath = path.join(outputRoot, relPath + ".md");
    const mdDir = path.dirname(mdPath);

    if (previousIndex[relPath] && previousIndex[relPath].modified === modified) {
      newIndex[relPath] = previousIndex[relPath];
      continue;
    }

    if (!fs.existsSync(mdDir)) fs.mkdirSync(mdDir, { recursive: true });

    console.log(`📄 Generating: ${relPath}`);
    const raw = fs.readFileSync(file, "utf8");
    const chunks = chunkText(raw);
    let fullDoc = "";

    for (const chunk of chunks) {
      const prompt = formatPrompt(relPath, chunk);
      try {
        const result = await callLLM(prompt);
        fullDoc += result + "\n\n";
      } catch (err) {
        console.error(`❌ Failed for ${relPath}: ${err.message}`);
        continue;
      }
    }

    fs.writeFileSync(mdPath, fullDoc.trim());
    const words = fullDoc.trim().split(/\s+/).length;

    newIndex[relPath] = {
      file: path.basename(file),
      path: relPath,
      title: relPath,
      words,
      modified
    };
  }

  saveIndexJson(newIndex);
  console.log("✅ Docs regenerated and index updated.");
}

generateDocs();
