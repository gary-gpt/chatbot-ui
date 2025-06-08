import path from 'path';

const MAX_CHUNK_SIZE = 3000; // Adjust based on token budget

/**
 * Splits file content into reasonably sized chunks for LLM processing.
 * Currently uses a line-based greedy algorithm.
 */
export function chunkFile(content, filePath = '') {
  if (!content || typeof content !== 'string') {
    console.warn(`⚠️ No content to chunk for ${filePath}`);
    return [];
  }

  const lines = content.split('\n');
  const chunks = [];
  let currentChunk = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Greedily accumulate lines until max size is reached
    if ((currentChunk + line + '\n').length > MAX_CHUNK_SIZE) {
      chunks.push(currentChunk.trim());
      currentChunk = line + '\n';
    } else {
      currentChunk += line + '\n';
    }
  }

  // Push any remaining content
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  if (chunks.length === 0) {
    console.warn(`⚠️ No chunks created for ${filePath}`);
  } else {
    console.log(`📦 Chunked ${filePath} into ${chunks.length} part(s)`);
  }

  return chunks;
}
