---
source: types/content-type.ts
generated: 2025-06-08T22:43:45.181Z
tags: []
hash: 95537dd38928b73920ad9bd4b1855d6ddb66f1fec1d7dfb39de63135fb21289b
---

# Documentation for `content-type.ts`

This file is located at `/Users/garymason/chatbot-ui/types/content-type.ts`. It exports a TypeScript type named `ContentType`. This type is used to represent the different types of content that can be managed within the chatbot UI.

## Code Summary

```ts
export type ContentType =
  | "chats"
  | "presets"
  | "prompts"
  | "files"
  | "collections"
  | "assistants"
  | "tools"
  | "models"
```

## ContentType

`ContentType` is a TypeScript type that is used to denote the different types of content that can be managed within the chatbot UI. It is a union type, which means that a variable of type `ContentType` can be any one of the specified types. In this case, the types are string literals, so a `ContentType` variable can be any one of the following strings:

- `"chats"`: Represents chat conversations.
- `"presets"`: Represents preset configurations or settings.
- `"prompts"`: Represents prompts or questions that the chatbot can ask.
- `"files"`: Represents files that can be uploaded or managed.
- `"collections"`: Represents collections of items, such as a collection of chats or prompts.
- `"assistants"`: Represents chatbot assistants.
- `"tools"`: Represents tools or utilities that can be used.
- `"models"`: Represents machine learning models.

This type is exported, which means that it can be imported and used in other TypeScript files.