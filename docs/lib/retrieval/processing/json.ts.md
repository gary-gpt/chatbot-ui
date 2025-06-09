---
source: lib/retrieval/processing/json.ts
generated: 2025-06-08T22:38:00.456Z
tags: []
hash: d2b1cc92f21f7998677cbf7e16e7fb83c1c37087393208c3db3e7c4f39af3a1c
---

# JSON Processing Documentation

This document explains the purpose and logic of the `json.ts` file located in the directory `/Users/garymason/chatbot-ui/lib/retrieval/processing/`. This file is responsible for processing JSON files, splitting the content into chunks, and encoding the chunks into tokens.

## Code Summary

The `json.ts` file exports a single asynchronous function, `processJSON`, which takes a JSON blob as input and returns a promise that resolves to an array of `FileItemChunk` objects.

## Detailed Code Walkthrough

### Imports

```ts
import { FileItemChunk } from "@/types"
import { encode } from "gpt-tokenizer"
import { JSONLoader } from "langchain/document_loaders/fs/json"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import { CHUNK_OVERLAP, CHUNK_SIZE } from "."
```

The code begins by importing necessary modules and types. `FileItemChunk` is a type representing a chunk of file content and its associated token count. `encode` is a function from `gpt-tokenizer` used to convert text into tokens. `JSONLoader` is a class for loading JSON documents, and `RecursiveCharacterTextSplitter` is a class for splitting text into chunks. `CHUNK_OVERLAP` and `CHUNK_SIZE` are constants defining the overlap and size of the chunks.

### processJSON Function

```ts
export const processJSON = async (json: Blob): Promise<FileItemChunk[]> => {
  // ...
}
```

`processJSON` is an asynchronous function that takes a JSON blob as input and returns a promise that resolves to an array of `FileItemChunk` objects.

Inside the function, the JSON blob is loaded and the documents are extracted. The documents are then concatenated into a single string, `completeText`.

```ts
  const loader = new JSONLoader(json)
  const docs = await loader.load()
  let completeText = docs.map(doc => doc.pageContent).join(" ")
```

The `completeText` is then split into chunks using the `RecursiveCharacterTextSplitter` class. The chunk size and overlap are defined by the `CHUNK_SIZE` and `CHUNK_OVERLAP` constants.

```ts
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: CHUNK_SIZE,
    chunkOverlap: CHUNK_OVERLAP
  })
  const splitDocs = await splitter.createDocuments([completeText])
```

Each chunk is then encoded into tokens using the `encode` function from `gpt-tokenizer`. The content of the chunk and the number of tokens are stored in a `FileItemChunk` object, which is added to the `chunks` array.

```ts
  let chunks: FileItemChunk[] = []

  for (let i = 0; i < splitDocs.length; i++) {
    const doc = splitDocs[i]

    chunks.push({
      content: doc.pageContent,
      tokens: encode(doc.pageContent).length
    })
  }
```

Finally, the function returns the `chunks` array.

```ts
  return chunks
}
```

This function is useful for processing large JSON documents, splitting them into manageable chunks, and encoding the chunks into tokens for further processing or analysis.