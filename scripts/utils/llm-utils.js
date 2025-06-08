// Load environment variables from .env.local
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log('✅ OPENAI KEY LOADED:', process.env.OPENAI_API_KEY?.slice(0, 5) + '...');
console.log('✅ OPENROUTER KEY LOADED:', process.env.OPENROUTER_API_KEY?.slice(0, 5) + '...');

import { retryWithBackoff } from './chunk-utils.js';

// Uses OpenAI or OpenRouter API to generate documentation
export async function generateMarkdownFromCode(code, filePath, model = 'gpt-4') {
  const systemPrompt = "You are an expert code documentation tool. Generate a clean, clear, well-structured Markdown (.md) file that explains the purpose and logic of the following code. Include headers, code summaries, and comments where appropriate.";

  const userPrompt = `Document the following file: \`\`\`${filePath}\`\`\`\n\n\`\`\`ts\n${code}\n\`\`\``;

  const payload = {
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.3,
  };

  const useOpenRouter = !!process.env.OPENROUTER_API_KEY && !process.env.OPENAI_API_KEY;
  const apiKey = useOpenRouter ? process.env.OPENROUTER_API_KEY : process.env.OPENAI_API_KEY;
  const apiBase = useOpenRouter
    ? 'https://openrouter.ai/api/v1/chat/completions'
    : 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  console.log('🧪 Using API Key:', apiKey?.slice(0, 5) + '...');
  console.log('📤 Sending prompt to:', useOpenRouter ? 'OpenRouter' : 'OpenAI');

  try {
    const response = await retryWithBackoff(() =>
      fetch(apiBase, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      })
    );

    const result = await response.json();
    console.log(`🧠 LLM raw response for ${filePath}:\n`, result);

    return result.choices?.[0]?.message?.content || '';
  } catch (error) {
    console.error(`❌ LLM call failed for ${filePath}`, error);
    return '';
  }
}
