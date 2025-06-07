// llm-utils.js (ESM version)

// Import with relative path for retry logic
import { retryWithBackoff } from './chunk-utils.js';

/**
 * Generates Markdown documentation from source code using LLM API.
 * @param {string} code - The source code string to document.
 * @param {string} filename - The name of the source file (for context).
 * @returns {Promise<string>} - The generated Markdown documentation.
 */
export async function generateMarkdownFromCode(code, filename) {
  const prompt = `
You are an expert developer assistant. Your task is to read and explain the following JavaScript/TypeScript code in markdown format. Include:

1. An overview of what the file does
2. Explanations of key functions, constants, or classes
3. Inline code snippets where useful
4. The filename as the title
5. Use friendly but clear language for junior developers
6. Format in GitHub-flavored Markdown

Respond ONLY with valid Markdown. Do not add frontmatter or YAML headers.

### Filename: ${filename}

\`\`\`js
${code}
\`\`\`
`;

  const response = await retryWithBackoff(() =>
    fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7
      })
    })
  );

  const data = await response.json();
  return data.choices?.[0]?.message?.content ?? '';
}
