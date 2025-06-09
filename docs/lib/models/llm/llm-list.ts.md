---
source: lib/models/llm/llm-list.ts
generated: 2025-06-08T22:35:10.359Z
tags: []
hash: a0b040062e23d6bad3f37bcf82c374e50f959a07214d9a0a1b783bf92ce8c3d3
---

# LLM List

This file is located at `/Users/garymason/chatbot-ui/lib/models/llm/llm-list.ts`. It's a TypeScript file that exports two constants: `LLM_LIST` and `LLM_LIST_MAP`. These constants are used to manage and access different sets of Language Learning Models (LLMs) from various providers.

## Imports

The file imports several LLM lists from different sources:

```ts
import { LLM } from "@/types"
import { ANTHROPIC_LLM_LIST } from "./anthropic-llm-list"
import { GOOGLE_LLM_LIST } from "./google-llm-list"
import { MISTRAL_LLM_LIST } from "./mistral-llm-list"
import { GROQ_LLM_LIST } from "./groq-llm-list"
import { OPENAI_LLM_LIST } from "./openai-llm-list"
import { PERPLEXITY_LLM_LIST } from "./perplexity-llm-list"
```

## LLM_LIST

`LLM_LIST` is a constant that combines all imported LLM lists into one array:

```ts
export const LLM_LIST: LLM[] = [
  ...OPENAI_LLM_LIST,
  ...GOOGLE_LLM_LIST,
  ...MISTRAL_LLM_LIST,
  ...GROQ_LLM_LIST,
  ...PERPLEXITY_LLM_LIST,
  ...ANTHROPIC_LLM_LIST
]
```

The `...` operator is used to spread the elements of each LLM list into the `LLM_LIST` array.

## LLM_LIST_MAP

`LLM_LIST_MAP` is a constant that maps the name of each LLM provider to its corresponding LLM list:

```ts
export const LLM_LIST_MAP: Record<string, LLM[]> = {
  openai: OPENAI_LLM_LIST,
  azure: OPENAI_LLM_LIST,
  google: GOOGLE_LLM_LIST,
  mistral: MISTRAL_LLM_LIST,
  groq: GROQ_LLM_LIST,
  perplexity: PERPLEXITY_LLM_LIST,
  anthropic: ANTHROPIC_LLM_LIST
}
```

This map provides a convenient way to access the LLM list of a specific provider by its name. Note that both 'openai' and 'azure' are mapped to `OPENAI_LLM_LIST`. This might be due to a shared infrastructure or similar LLMs between these two providers.