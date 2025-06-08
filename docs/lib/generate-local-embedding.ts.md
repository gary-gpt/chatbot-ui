---
source: lib/generate-local-embedding.ts
generated: '2025-06-08T13:21:01.631Z'
tags: []
hash: 6295ab3fdd9253c42f07a2049a772375697328de3b40e21883246486b780b184
---
# Documentation

## Module: generateLocalEmbedding

This module is a part of the `@xenova/transformers` package. It exports an asynchronous function `generateLocalEmbedding` which generates an embedding for the provided content.

### Import

```javascript
import { generateLocalEmbedding } from "<module-path>";
```

### Function: generateLocalEmbedding(content: string)

This function takes a string as an argument and generates an embedding for it.

#### Parameters

- `content` (string): The content for which the embedding needs to be generated.

#### Returns

- Returns a Promise that resolves to an array of numbers. This array is the embedding for the provided content.

#### Example

```javascript
const content = "This is a sample content";
const embedding = await generateLocalEmbedding(content);
console.log(embedding); // Logs the generated embedding
```

#### How it works

1. The function uses the `pipeline` function from the `@xenova/transformers` package to create a `generateEmbedding` function. This function uses the `feature-extraction` pipeline and the `Xenova/all-MiniLM-L6-v2` model.

2. The `generateEmbedding` function is then called with the `content` and an options object. The options object specifies that the `pooling` should be `mean` and normalization should be done.

3. The output of the `generateEmbedding` function is an object with a `data` property. This `data` property is an iterable that contains the embedding for the `content`.

4. The `data` property is converted to an array and returned.
