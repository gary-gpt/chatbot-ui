---
source: lib/retrieval/processing/json.ts
generated: '2025-06-08T13:21:01.659Z'
tags: []
hash: 10e46ce62ad4a2722b5467e088ceb7ccad7ed02d317909dc3f1a295cdf31ef0b
---
# processJSON Function Documentation

## Overview

The `processJSON` function is an asynchronous function that processes a JSON file and returns an array of `FileItemChunk` objects.

## Import Statements

The function uses several import statements:

- `FileItemChunk` from "@/types": This is a type definition for the chunks of file items.
- `encode` from "gpt-tokenizer": This is a function used to tokenize the content of each document.
- `JSONLoader` from "langchain/document_loaders/fs/json": This is a class used to load JSON documents.
- `RecursiveCharacterTextSplitter` from "langchain/text_splitter": This is a class used to split the text into chunks.
- `CHUNK_OVERLAP` and `CHUNK_SIZE` from ".": These are constants that define the size and overlap of the chunks.

## Function Signature

```typescript
export const processJSON = async (json: Blob): Promise<FileItemChunk[]>
```

The function takes a `Blob` object as an argument, which represents the JSON file to be processed. It returns a `Promise` that resolves to an array of `FileItemChunk` objects.

## Function Body

The function first creates a new `JSONLoader` instance with the provided JSON file and loads the documents. It then concatenates all the page content from the documents into a single string.

Next, it creates a new `RecursiveCharacterTextSplitter` instance with the `CHUNK_SIZE` and `CHUNK_OVERLAP` constants. It uses this splitter to create an array of documents from the concatenated string.

The function then initializes an empty array of `FileItemChunk` objects. It iterates over the split documents, tokenizes the page content of each document, and pushes a new `FileItemChunk` object to the array for each document. The `FileItemChunk` object contains the content of the document and the number of tokens in the content.

Finally, the function returns the array of `FileItemChunk` objects.

## Example Usage

```typescript
const json = new Blob([JSON.stringify({ pageContent: 'Hello, world!' })]);
const chunks = await processJSON(json);
console.log(chunks);
```

This will log an array of `FileItemChunk` objects to the console. Each object will contain the content of a document and the number of tokens in the content.
