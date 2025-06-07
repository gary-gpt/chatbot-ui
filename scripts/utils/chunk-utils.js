// scripts/utils/chunk-utils.js

/**
 * Splits a long string into chunks of a specified size.
 * Ensures that chunks split on line boundaries when possible.
 */
function chunkText(text, maxChunkSize = 6000) {
  const lines = text.split('\n');
  const chunks = [];
  let currentChunk = '';

  for (const line of lines) {
    if ((currentChunk + line + '\n').length > maxChunkSize) {
      chunks.push(currentChunk);
      currentChunk = '';
    }
    currentChunk += line + '\n';
  }

  if (currentChunk) {
    chunks.push(currentChunk);
  }

  return chunks;
}

/**
 * Combines an array of text chunks back into a single string.
 */
function combineChunks(chunks) {
  return chunks.join('');
}

/**
 * Retry helper with exponential backoff.
 * Used when an LLM call fails due to transient issues.
 */
async function retryWithBackoff(fn, retries = 3, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((res) => setTimeout(res, delay * Math.pow(2, i)));
    }
  }
}

// ✅ Export named functions for ESM compatibility
export { chunkText, combineChunks, retryWithBackoff };
