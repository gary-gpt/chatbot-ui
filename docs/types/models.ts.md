# ModelProvider Type Documentation

The `ModelProvider` type is a TypeScript export that is used to define the source of the AI model. This type is a union type, meaning it can be any one of the listed string literals.

## Type Definition

```typescript
export type ModelProvider =
  | "openai"
  | "google"
  | "anthropic"
  | "mistral"
  | "groq"
  | "perplexity"
  | "ollama"
  | "openrouter"
  | "custom";
```

## Options

- `"openai"`: This value is used when the AI model is provided by OpenAI.
- `"google"`: This value is used when the AI model is provided by Google.
- `"anthropic"`: This value is used when the AI model is provided by Anthropic.
- `"mistral"`: This value is used when the AI model is provided by Mistral.
- `"groq"`: This value is used when the AI model is provided by Groq.
- `"perplexity"`: This value is used when the AI model is provided by Perplexity.
- `"ollama"`: This value is used when the AI model is provided by Ollama.
- `"openrouter"`: This value is used when the AI model is provided by OpenRouter.
- `"custom"`: This value is used when the AI model is provided by a custom source.

## Usage

The `ModelProvider` type is typically used in function parameters or variable declarations where the source of the AI model needs to be specified. For example:

```typescript
let modelSource: ModelProvider;
modelSource = "openai"; // This is valid
modelSource = "google"; // This is also valid
modelSource = "other"; // This would throw an error
```