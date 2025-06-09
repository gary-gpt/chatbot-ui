---
source: types/models.ts
generated: 2025-06-08T22:45:50.062Z
tags: []
hash: e9a356fcd680f2ebaf7b27f8886ca30c8863d8ef7af615d6db204b52ba711dfa
---

# Documentation for `models.ts`

This file is located at `/Users/garymason/chatbot-ui/types/models.ts`. It is a TypeScript (`.ts`) file that defines a type named `ModelProvider`.

## ModelProvider

`ModelProvider` is a TypeScript type that represents the different AI model providers that can be used in the chatbot UI. This type is used to ensure that only valid model providers are used in the code, reducing the risk of errors.

The `ModelProvider` type is defined as a union of string literals. Each string literal represents a different AI model provider. The available model providers are:

- `"openai"`
- `"google"`
- `"anthropic"`
- `"mistral"`
- `"groq"`
- `"perplexity"`
- `"ollama"`
- `"openrouter"`
- `"custom"`

Here is the code:

```ts
export type ModelProvider =
  | "openai"
  | "google"
  | "anthropic"
  | "mistral"
  | "groq"
  | "perplexity"
  | "ollama"
  | "openrouter"
  | "custom"
```

When using the `ModelProvider` type, TypeScript will enforce that only one of these string literals is used. If a string that is not in this list is used, TypeScript will throw an error. This helps to ensure that only valid model providers are used in the code.

### Example Usage

Here is an example of how to use the `ModelProvider` type:

```ts
let provider: ModelProvider;

provider = "openai"; // This is valid
provider = "google"; // This is also valid

provider = "not-a-real-provider"; // This will cause a TypeScript error
```

In this example, `provider` is a variable of type `ModelProvider`. It can be assigned any of the valid model providers. If it is assigned a string that is not a valid model provider, TypeScript will throw an error.