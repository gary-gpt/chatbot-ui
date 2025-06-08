import fetch from 'node-fetch';

/**
 * Calls OpenAI API to generate markdown documentation from source code.
 * @param {string} code - The raw code to document
 * @param {string} filePath - The file path (used for logging)
 * @returns {Promise<string|null>} Markdown string or null on error
 */
export async function generateMarkdownFromCode(code, filePath) {
  const apiKey = process.env.OPENAI_API_KEY || process.env.OPENAI_API;
  const apiBase = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

  const payload = {
    model: 'gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a technical writer generating documentation for source code files.',
      },
      {
        role: 'user',
        content: `Generate high-quality documentation in Markdown for the following file:\n\n${code}`,
      },
    ],
    temperature: 0.3,
  };

  try {
    const response = await fetch(apiBase, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`❌ OpenAI error for ${filePath}:`, data);
      return null;
    }

    const docText = data.choices?.[0]?.message?.content || '';
    if (!docText.trim()) {
      console.warn(`⚠️ Empty response from LLM for ${filePath}`);
    }

    // TEMP DEBUG:
    console.log(`📦 LLM returned for ${filePath}:`, docText.slice(0, 80).replace(/\n/g, ' ') + '...');

    return docText;

  } catch (error) {
    console.error(`❌ LLM call failed for ${filePath}`, error);
    return null;
  }
}
