---
source: types/file-item-chunk.ts
generated: 2025-06-08T22:44:00.082Z
tags: []
hash: 4b452c2e98bfada2065d264eb1b51002d62ddd4c1e9631d20481693c34239862
---

# File: /Users/garymason/chatbot-ui/types/file-item-chunk.ts

This file defines the TypeScript type `FileItemChunk`. This type is used to represent a chunk of a file item in the chatbot UI. Each chunk contains the actual content of the chunk and the number of tokens in that chunk.

## Type: FileItemChunk

```ts
export type FileItemChunk = {
  content: string
  tokens: number
}
```

### Properties

- `content: string`: This property represents the actual content of the file item chunk. It is a string type.

- `tokens: number`: This property represents the number of tokens in the file item chunk. It is a number type.

This type is exported so it can be imported and used in other parts of the application where it's needed. The `FileItemChunk` type is typically used when the application needs to process or manipulate chunks of a file item.