# processPdf Function Documentation

This function is used to process a PDF file and split it into chunks of text. The function is asynchronous and returns a Promise that resolves to an array of `FileItemChunk` objects.

## Import Statements

- `FileItemChunk` from "@/types": This is a custom type that represents a chunk of a document.
- `encode` from "gpt-tokenizer": This is a function used to tokenize the text content of a document.
- `PDFLoader` from "langchain/document_loaders/fs/pdf": This is a class used to load PDF documents.
- `RecursiveCharacterTextSplitter` from "langchain/text_splitter": This is a class used to split the text content of a document into chunks.
- `CHUNK_OVERLAP`, `CHUNK_SIZE` from ".": These are constants that define the size of the chunks and the overlap between them.

## Function Signature

```typescript
export const processPdf = async (pdf: Blob): Promise<FileItemChunk[]>
```

## Parameters

- `pdf (Blob)`: This is the PDF file that will be processed.

## Return Value

This function returns a Promise that resolves to an array of `FileItemChunk` objects. Each `FileItemChunk` object contains the following properties:

- `content (string)`: This is the text content of the chunk.
- `tokens (number)`: This is the number of tokens in the chunk.

## Function Description

The function starts by creating a new instance of the `PDFLoader` class with the provided PDF file. It then loads the document and joins all the page contents into a single string.

Next, it creates a new instance of the `RecursiveCharacterTextSplitter` class with the chunk size and overlap defined by the `CHUNK_SIZE` and `CHUNK_OVERLAP` constants. It then uses this splitter to split the complete text into chunks.

Finally, it loops over the split documents, tokenizes the content of each document, and pushes a new `FileItemChunk` object to the `chunks` array for each document. This array is then returned as the result of the function.