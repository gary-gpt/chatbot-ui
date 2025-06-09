---
source: lib/models/llm/perplexity-llm-list.ts
generated: 2025-06-08T22:36:27.372Z
tags: []
hash: 8d7682371152a7dfe9974122c1ef3a233a7319ee8201e77c370bf2dac15ec094
---

# Documentation for `perplexity-llm-list.ts`

This file is located at `/Users/garymason/chatbot-ui/lib/models/llm/perplexity-llm-list.ts`. It contains the definitions of several Language Learning Models (LLMs) provided by Perplexity. Each model is defined as a constant object of type `LLM`.

## Import Statements

```ts
import { LLM } from "@/types"
```

This line imports the `LLM` type from the `@/types` module. `LLM` is a type that defines the structure of a language learning model.

## Constants

```ts
const PERPLEXITY_PLATORM_LINK =
  "https://docs.perplexity.ai/docs/getting-started"
```

This constant stores the link to the Perplexity platform's getting started page.

## Language Learning Models (LLMs)

Each LLM is defined as a constant object of type `LLM`. The properties of the `LLM` type are:

- `modelId`: A unique identifier for the model.
- `modelName`: The name of the model.
- `provider`: The provider of the model.
- `hostedId`: The identifier for the hosted version of the model.
- `platformLink`: A link to the platform where the model is hosted.
- `imageInput`: A boolean indicating whether the model accepts image input.

Here is an example of an LLM definition:

```ts
// Mixtral 8x7B Instruct (UPDATED 1/31/24)
const MIXTRAL_8X7B_INSTRUCT: LLM = {
  modelId: "mixtral-8x7b-instruct",
  modelName: "Mixtral 8x7B Instruct",
  provider: "perplexity",
  hostedId: "mixtral-8x7b-instruct",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}
```

## Exported Constants

```ts
export const PERPLEXITY_LLM_LIST: LLM[] = [
  MIXTRAL_8X7B_INSTRUCT,
  MISTRAL_7B_INSTRUCT,
  CODELLAMA_70B_INSTRUCT,
  PERPLEXITY_SONAR_SMALL_CHAT_7B,
  PERPLEXITY_SONAR_SMALL_ONLINE_7B,
  PERPLEXITY_SONAR_MEDIUM_CHAT_8x7B,
  PERPLEXITY_SONAR_MEDIUM_ONLINE_8x7B
]
```

This line exports a constant array `PERPLEXITY_LLM_LIST` that contains all the defined LLMs. This array can be imported by other modules to access the list of Perplexity LLMs.