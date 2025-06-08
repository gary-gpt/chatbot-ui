// Load environment variables from .env.local
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });


import fs from 'fs';
import path from 'path';

const MAX_CHUNK_SIZE = 6000;

export async function chunkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const chunks = [];
  let currentChunk = '';

  for (const line of lines) {
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
  console.log(`🧩 Chunked ${filePath} into ${chunks.length} part(s):`, chunks.map(c => c.slice(0, 30) + '...'));


  return chunks;
}

async function retryWithBackoff(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
    }
  }
}

export {
  retryWithBackoff
};
