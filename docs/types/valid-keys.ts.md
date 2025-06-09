---
source: types/valid-keys.ts
generated: 2025-06-08T22:46:36.346Z
tags: []
hash: 4b683c5a5c6c7308cc81043f522c7d2de49128650e7954e34053874b7f6991f0
---

# Documentation for `valid-keys.ts`

This file is located at `/Users/garymason/chatbot-ui/types/valid-keys.ts`.

## Overview

The `valid-keys.ts` file exports an enumeration `VALID_ENV_KEYS` that lists all the valid environment variable keys that are used in the application. These keys are used to access various API keys and identifiers required for the application to function correctly.

## Code Summary

```ts
export enum VALID_ENV_KEYS {
  OPENAI_API_KEY = "OPENAI_API_KEY",
  ANTHROPIC_API_KEY = "ANTHROPIC_API_KEY",
  GOOGLE_GEMINI_API_KEY = "GOOGLE_GEMINI_API_KEY",
  MISTRAL_API_KEY = "MISTRAL_API_KEY",
  GROQ_API_KEY = "GROQ_API_KEY",
  PERPLEXITY_API_KEY = "PERPLEXITY_API_KEY",
  AZURE_OPENAI_API_KEY = "AZURE_OPENAI_API_KEY",
  OPENROUTER_API_KEY = "OPENROUTER_API_KEY",

  OPENAI_ORGANIZATION_ID = "OPENAI_ORGANIZATION_ID",

  AZURE_OPENAI_ENDPOINT = "AZURE_OPENAI_ENDPOINT",
  AZURE_GPT_35_TURBO_NAME = "AZURE_GPT_35_TURBO_NAME",
  AZURE_GPT_45_VISION_NAME = "AZURE_GPT_45_VISION_NAME",
  AZURE_GPT_45_TURBO_NAME = "AZURE_GPT_45_TURBO_NAME",
  AZURE_EMBEDDINGS_NAME = "AZURE_EMBEDDINGS_NAME"
}
```

## Enum: `VALID_ENV_KEYS`

This enumeration lists the valid keys for environment variables in the application. Each key is associated with a specific API or service used in the application.

### Keys

- `OPENAI_API_KEY`: The API key for OpenAI.
- `ANTHROPIC_API_KEY`: The API key for Anthropic.
- `GOOGLE_GEMINI_API_KEY`: The API key for Google Gemini.
- `MISTRAL_API_KEY`: The API key for Mistral.
- `GROQ_API_KEY`: The API key for Groq.
- `PERPLEXITY_API_KEY`: The API key for Perplexity.
- `AZURE_OPENAI_API_KEY`: The API key for Azure's OpenAI service.
- `OPENROUTER_API_KEY`: The API key for OpenRouter.

- `OPENAI_ORGANIZATION_ID`: The organization ID for OpenAI.

- `AZURE_OPENAI_ENDPOINT`: The endpoint for Azure's OpenAI service.
- `AZURE_GPT_35_TURBO_NAME`: The name of the GPT-3.5 Turbo model on Azure.
- `AZURE_GPT_45_VISION_NAME`: The name of the GPT-4.5 Vision model on Azure.
- `AZURE_GPT_45_TURBO_NAME`: The name of the GPT-4.5 Turbo model on Azure.
- `AZURE_EMBEDDINGS_NAME`: The name of the embeddings service on Azure.