---
source: lib/retrieval/processing/pdf.ts
generated: 2025-06-08T22:38:35.471Z
tags: []
hash: 22063e63615d5e70a54e23739b4ce63cf0aef8df66e8a73090c438e6055266e3
---

# PDF Processing Module Documentation

This document provides a detailed explanation of the `pdf.ts` module located at `/Users/garymason/chatbot-ui/lib/retrieval/processing/`. This module is responsible for processing PDF files into manageable chunks of text for further processing.

## Dependencies

The `pdf.ts` module imports several dependencies:

- `FileItemChunk` from "@/types": This is a custom type that represents a chunk of text from a file.
- `encode` from "gpt-tokenizer": This function is used to tokenize the text content of a document.
- `PDFLoader` from "langchain/document_loaders/fs/pdf": This is a utility for loading PDF documents.
- `RecursiveCharacterTextSplitter` from "langchain/text_splitter": This utility is used to split the text content of a document into smaller chunks.
- `CHUNK_OVERLAP` and `CHUNK_SIZE` from ".": These are constants that define the size of the chunks and the overlap between them.

## Function: processPdf

The `processPdf` function is an asynchronous function that takes a PDF file as input and returns a promise that resolves to an array of `FileItemChunk` objects.

```ts
export const processPdf = async (pdf: Blob): Promise<FileItemChunk[]> => {
  // ...
}
```

### Step 1: Load the PDF

The function starts by creating a new instance of `PDFLoader` with the input PDF and then loading the document. The `load` function returns an array of document objects, each representing a page of the PDF.

```ts
const loader = new PDFLoader(pdf)
const docs = await loader.load()
```

### Step 2: Combine the Text

Next, the function combines the text content of all the pages into a single string.

```ts
let completeText = docs.map(doc => doc.pageContent).join(" ")
```

### Step 3: Split the Text

The function then creates a new instance of `RecursiveCharacterTextSplitter` with the chunk size and overlap defined by `CHUNK_SIZE` and `CHUNK_OVERLAP`. It uses this splitter to split the complete text into smaller chunks.

```ts
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: CHUNK_SIZE,
  chunkOverlap: CHUNK_OVERLAP
})
const splitDocs = await splitter.createDocuments([completeText])
```

### Step 4: Create the Chunks

Finally, the function iterates over the split documents, creates a new `FileItemChunk` for each one, and adds it to the `chunks` array. Each `FileItemChunk` contains the text content of the chunk and the number of tokens in the chunk.

```ts
let chunks: FileItemChunk[] = []

for (let i = 0; i < splitDocs.length; i++) {
  const doc = splitDocs[i]

  chunks.push({
    content: doc.pageContent,
    tokens: encode(doc.pageContent).length
  })
}

return chunks
```

The function then returns the `chunks` array.