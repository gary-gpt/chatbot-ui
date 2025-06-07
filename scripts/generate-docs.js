// scripts/generate-docs.js
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENAI_API_BASE = process.env.OPENAI_API_BASE || "https://api.openai.com/v1";
const OPENROUTER_API_BASE = process.env.OPENROUTER_API_BASE || "https://openrouter.ai/api/v1";

const model = "gpt-4";
const sourceDir = "./";
const outputDir = "./docs/dev-notes";
const maxTokens = 3000;

function readFileRecursive(dir, allFiles = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory() && !fullPath.includes("node_modules")) {
      readFileRecursive(fullPath, allFiles);
    } else if (fullPath.endsWith(".js") || fullPath.endsWith(".ts")) {
      allFiles.push(fullPath);
    }
  });
  return allFiles;
}

function chunkText(text, maxLength = 12000) {
  const lines = text.split("\n");
  const chunks = [];
  let currentChunk = [];

  for (let line of lines) {
    currentChunk.push(line);
    if (currentChunk.join("\n").length >= maxLength) {
      chunks.push(currentChunk.join("\n"));
      currentChunk = [];
    }
  }

  if (currentChunk.length) {
    chunks.push(currentChunk.join("\n"));
  }

  return chunks;
}

async function callLLM(prompt, useOpenRouter = false) {
  const url = useOpenRouter
    ? `${OPENROUTER_API_BASE}/chat/completions`
    : `${OPENAI_API_BASE}/chat/completions`;

  const headers = {
    Authorization: `Bearer ${useOpenRouter ? OPENROUTER_API_KEY : OPENAI_API_KEY}`,
    "Content-Type": "application/json",
  };

  const body = {
    model: useOpenRouter ? "openai/gpt-4" : "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2,
  };

  try {
    const response = await axios.post(url, body, { headers });
    return response.data.choices[0].message.content;
  } catch (error) {
    if (!useOpenRouter) {
      console.warn("⚠️ OpenAI failed — falling back to OpenRouter...");
      return callLLM(prompt, true);
    } else {
      console.error("❌ Both OpenAI and OpenRouter failed.");
      throw error;
    }
  }
}

function formatPrompt(filename, content) {
  return `You are an expert AI code documenter.

Document the following file in clear Markdown. Start with a one-paragraph summary, then break down functions and their roles.

Filename: ${filename}

\`\`\`js
${content}
\`\`\``;
}

async function generateDocs() {
  const files = readFileRecursive(sourceDir);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  for (let file of files) {
    console.log(`📄 Processing ${file}...`);
    const content = fs.readFileSync(file, "utf8");
    const chunks = chunkText(content);

    let allResponses = "";

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const prompt = formatPrompt(file, chunk);
      try {
        const result = await callLLM(prompt);
        allResponses += result + "\n\n";
      } catch (err) {
        console.error(`❌ Failed to process chunk ${i + 1} of ${file}`);
        continue;
      }
    }

    const baseName = path.basename(file).replace(/\.(js|ts)$/, "");
    const outputFile = path.join(outputDir, `${baseName}.md`);
    fs.writeFileSync(outputFile, allResponses.trim());
    console.log(`✅ Wrote ${outputFile}`);
  }

  console.log("🎉 All docs generated.");
}

generateDocs();
