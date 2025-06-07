const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const OpenAI = require('openai');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const ROOT_DIR = path.resolve(__dirname, '../');
const OUTPUT_ROOT = path.resolve(__dirname, '../docs/dev-notes');
const SKIP_DIRS = ['node_modules', '.git', '.next', 'public', 'docs', 'scripts'];
const VALID_EXTENSIONS = ['.ts', '.tsx', '.js', '.json'];
const MODEL = 'gpt-4';

function getTimestamp() {
  return new Date().toISOString().replace('T', ' ').split('.')[0] + ' UTC';
}

function shouldSkip(filePath) {
  return SKIP_DIRS.some(skip => filePath.includes(path.sep + skip + path.sep));
}

function walkDir(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!shouldSkip(fullPath)) {
        walkDir(fullPath, callback);
      }
    } else if (VALID_EXTENSIONS.includes(path.extname(entry.name))) {
      if (!shouldSkip(fullPath)) {
        callback(fullPath);
      }
    }
  });
}

(async () => {
  try {
    const files = [];
    walkDir(ROOT_DIR, file => files.push(file));

    for (const filePath of files) {
      const relativePath = path.relative(ROOT_DIR, filePath);
      const outputPath = path.join(OUTPUT_ROOT, `${relativePath}.md`);
      const outputDir = path.dirname(outputPath);

      console.log(`📄 Processing ${relativePath}`);
      const fileContent = fs.readFileSync(filePath, 'utf-8');

      const prompt = `
You are an expert software documentarian. Read the following source file and generate a clear, structured, human-readable Markdown document that explains:

- What this file does
- What its exports, types, or functions are for
- How it's used (if reasonably inferable)
- Any interesting structure or nuance
- Add a heading at the top with the original filename

Here is the file:

${fileContent}
`;

      const completion = await openai.chat.completions.create({
        model: MODEL,
        messages: [
          { role: 'system', content: 'You are a technical writer helping document a JavaScript/TypeScript project.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.2
      });

      const doc = completion.choices[0].message.content;
      const header = `**📄 Source File:** \`/${relativePath}\`  
**🕒 Generated:** ${getTimestamp()}  
**🤖 Model:** ${MODEL}

---

`;

      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(outputPath, header + doc, 'utf-8');

      console.log(`✅ Wrote ${outputPath}`);
    }

    console.log('🎉 All docs generated.');

  } catch (err) {
    console.error('❌ Error:', err.message || err);
  }
})();
