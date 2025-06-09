---
source: lib/models/llm/mistral-llm-list.ts
generated: 2025-06-08T22:35:30.379Z
tags: []
hash: 6bb6b08762c1a74e23f1ad5fb6b17b70988aec557af856452bf609f17e1da3ab
---

# Mistral Language Learning Models (LLM) List

This TypeScript file defines a list of Mistral's Language Learning Models (LLM) and their respective details. The file is located at `/Users/garymason/chatbot-ui/lib/models/llm/mistral-llm-list.ts`.

## Code Summary

The code begins by importing the `LLM` type from the `@/types` directory. It then defines a constant `MISTRAL_PLATORM_LINK` which is a URL string pointing to Mistral's documentation.

Following this, the code defines four objects, each representing a different Mistral model. Each object is of type `LLM` and contains the following properties:

- `modelId`: A unique identifier for the model.
- `modelName`: The name of the model.
- `provider`: The provider of the model (in this case, all models are provided by Mistral).
- `hostedId`: The identifier for the hosted model.
- `platformLink`: A link to the platform's documentation (in this case, all models link to Mistral's documentation).
- `imageInput`: A boolean value indicating whether the model accepts image input.
- `pricing`: An optional object that includes the pricing details for using the model.

The four models defined are `MISTRAL_7B`, `MIXTRAL`, `MISTRAL_MEDIUM`, and `MISTRAL_LARGE`. Each model has different pricing details, with the exception of `MISTRAL_7B` which does not include a `pricing` property.

Finally, the code exports a constant `MISTRAL_LLM_LIST` which is an array of the four defined models.

## Code Breakdown

```ts
// Import the LLM type
import { LLM } from "@/types"

// Define the link to Mistral's documentation
const MISTRAL_PLATORM_LINK = "https://docs.mistral.ai/"

// Define the Mistral models
const MISTRAL_7B: LLM = { ... }
const MIXTRAL: LLM = { ... }
const MISTRAL_MEDIUM: LLM = { ... }
const MISTRAL_LARGE: LLM = { ... }

// Export a list of the Mistral models
export const MISTRAL_LLM_LIST: LLM[] = [
  MISTRAL_7B,
  MIXTRAL,
  MISTRAL_MEDIUM,
  MISTRAL_LARGE
]
```

## Note

Each model object is annotated with a comment indicating the last update date. This can be useful for tracking changes and updates to the models.