---
source: lib/models/llm/google-llm-list.ts
generated: 2025-06-08T22:34:35.644Z
tags: []
hash: 2a8652a1286e6ec8cacf0b59d34f75a276217c8f5759a4984cf386112b218fcd
---

# Google LLM List

This TypeScript file, located at `/Users/garymason/chatbot-ui/lib/models/llm/google-llm-list.ts`, defines a list of Google's Language Learning Models (LLMs). Each model is represented as an object with properties such as `modelId`, `modelName`, `provider`, `hostedId`, `platformLink`, and `imageInput`.

## Imports

```ts
import { LLM } from "@/types"
```

The file imports the `LLM` type from the `@/types` module. This type is used to define the structure of the LLM objects.

## Constants

```ts
const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"
```

This constant stores the URL for Google's AI platform.

## Google Models

The file defines several Google LLMs, each as a constant object of type `LLM`. 

### Gemini 1.5 Flash

```ts
// Gemini 1.5 Flash
const GEMINI_1_5_FLASH: LLM = {
  modelId: "gemini-1.5-flash",
  modelName: "Gemini 1.5 Flash",
  provider: "google",
  hostedId: "gemini-1.5-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}
```

### Gemini 1.5 Pro

```ts
// Gemini 1.5 Pro (UPDATED 05/28/24)
const GEMINI_1_5_PRO: LLM = {
  modelId: "gemini-1.5-pro-latest",
  modelName: "Gemini 1.5 Pro",
  provider: "google",
  hostedId: "gemini-1.5-pro-latest",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}
```

### Gemini Pro

```ts
// Gemini Pro (UPDATED 12/22/23)
const GEMINI_PRO: LLM = {
  modelId: "gemini-pro",
  modelName: "Gemini Pro",
  provider: "google",
  hostedId: "gemini-pro",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: false
}
```

### Gemini Pro Vision

```ts
// Gemini Pro Vision (UPDATED 12/22/23)
const GEMINI_PRO_VISION: LLM = {
  modelId: "gemini-pro-vision",
  modelName: "Gemini Pro Vision",
  provider: "google",
  hostedId: "gemini-pro-vision",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}
```

## Exported List

```ts
export const GOOGLE_LLM_LIST: LLM[] = [
  GEMINI_PRO,
  GEMINI_PRO_VISION,
  GEMINI_1_5_PRO,
  GEMINI_1_5_FLASH
]
```

Finally, the file exports a list of all the defined Google LLMs. This list can be imported by other modules to access the LLMs.