---
source: types/llms.ts
generated: 2025-06-08T22:45:36.436Z
tags: []
hash: 7ac18a0a96424c0dc333b11b600fe905177f1d78a86b96854d756d883d162c01
---

# Documentation for `llms.ts`

This TypeScript file, `llms.ts`, is part of a Chatbot UI and is responsible for defining types and interfaces related to Language Learning Models (LLMs). The file is located at `/Users/garymason/chatbot-ui/types/llms.ts`.

## Code Summary

The file begins by importing the `ModelProvider` type from the current directory. It then defines a series of types for different LLMs from various providers, such as OpenAI, Google, Anthropic, Mistral, Groq, and Perplexity.

Following this, it defines two interfaces: `LLM` and `OpenRouterLLM`. The `LLM` interface represents a general language learning model, while `OpenRouterLLM` extends `LLM` with an additional property.

## Code Details

### LLMID Type

```ts
export type LLMID =
  | OpenAILLMID
  | GoogleLLMID
  | AnthropicLLMID
  | MistralLLMID
  | GroqLLMID
  | PerplexityLLMID
```

`LLMID` is a type that can be any of the IDs from the different LLM providers.

### Provider-Specific LLMID Types

Each provider has its own set of LLMIDs. For example, the `OpenAILLMID` type can be any of the IDs associated with OpenAI's models:

```ts
export type OpenAILLMID =
  | "gpt-4o"
  | "gpt-4-turbo-preview"
  | "gpt-4-vision-preview"
  | "gpt-4"
  | "gpt-3.5-turbo"
```

### LLM Interface

```ts
export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}
```

The `LLM` interface represents a language learning model. It includes properties such as `modelId`, `modelName`, `provider`, `hostedId`, `platformLink`, `imageInput`, and an optional `pricing` object.

### OpenRouterLLM Interface

```ts
export interface OpenRouterLLM extends LLM {
  maxContext: number
}
```

The `OpenRouterLLM` interface extends the `LLM` interface with an additional property, `maxContext`, which presumably represents the maximum context length that the model can handle.