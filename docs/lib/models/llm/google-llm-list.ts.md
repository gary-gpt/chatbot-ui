---
source: lib/models/llm/google-llm-list.ts
generated: '2025-06-08T13:21:01.658Z'
tags: []
hash: 97d4bfdff576efff1fb3abecf4fadedc4842bc54a4c9fc14f0c90cb0ef92c508
---
# Google Models Documentation

This file contains the definitions of several Google models. Each model is an object of type `LLM`, which is imported from "@/types". The models are stored as constants and are exported as part of the `GOOGLE_LLM_LIST` array.

## Constants

### `GOOGLE_PLATORM_LINK`

This is a string constant that contains the URL of the Google AI platform.

```javascript
const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"
```

### `GEMINI_1_5_FLASH`

This is an object that represents the Gemini 1.5 Flash model. It was last updated on 12/22/23.

```javascript
const GEMINI_1_5_FLASH: LLM = {
  modelId: "gemini-1.5-flash",
  modelName: "Gemini 1.5 Flash",
  provider: "google",
  hostedId: "gemini-1.5-flash",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}
```

### `GEMINI_1_5_PRO`

This object represents the Gemini 1.5 Pro model. It was last updated on 05/28/24.

```javascript
const GEMINI_1_5_PRO: LLM = {
  modelId: "gemini-1.5-pro-latest",
  modelName: "Gemini 1.5 Pro",
  provider: "google",
  hostedId: "gemini-1.5-pro-latest",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}
```

### `GEMINI_PRO`

This object represents the Gemini Pro model. It was last updated on 12/22/23.

```javascript
const GEMINI_PRO: LLM = {
  modelId: "gemini-pro",
  modelName: "Gemini Pro",
  provider: "google",
  hostedId: "gemini-pro",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: false
}
```

### `GEMINI_PRO_VISION`

This object represents the Gemini Pro Vision model. It was last updated on 12/22/23.

```javascript
const GEMINI_PRO_VISION: LLM = {
  modelId: "gemini-pro-vision",
  modelName: "Gemini Pro Vision",
  provider: "google",
  hostedId: "gemini-pro-vision",
  platformLink: GOOGLE_PLATORM_LINK,
  imageInput: true
}
```

## Exported Constants

### `GOOGLE_LLM_LIST`

This is an array that contains all the Google model objects.

```javascript
export const GOOGLE_LLM_LIST: LLM[] = [
  GEMINI_PRO,
  GEMINI_PRO_VISION,
  GEMINI_1_5_PRO,
  GEMINI_1_5_FLASH
]
```
