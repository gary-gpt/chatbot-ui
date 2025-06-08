
import { retryWithBackoff } from './chunk-utils.js';
import fetch from 'node-fetch';

// Uses OpenAI or OpenRouter API to generate documentation
export async function generateMarkdownFromCode(code, filePath, model = 'gpt-4') {
  const systemPrompt = "You are an expert code documentation tool. Generate a clean, clear, well-structured Markdown (.md) file that explains the purpose and logic of the following code. Include headers, code summaries, and comments where appropriate.";

  const userPrompt = `Document the following file: \`\`\`${filePath}\`\`\`

\`\`\`ts\n${code}\n\\`\`\``;

  const payload = {
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.3,
  };

  const apiKey = process.env.OPENAI_API_KEY || process.env.OPENROUTER_API_KEY;
  const apiBase = process.env.OPENROUTER_API_KEY
    ? 'https://openrouter.ai/api/v1/chat/completions'
    : 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  try {
    const response = await retryWithBackoff(() =>
      fetch(apiBase, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      })
    );

    const result = await response.json();
    return result.choices?.[0]?.message?.content || '';
  } catch (error) {
    console.error(`❌ LLM call failed for ${filePath}`, error);
    return '';
  }
}
