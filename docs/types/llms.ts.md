---
source: types/llms.ts
generated: '2025-06-08T13:21:01.633Z'
tags: []
hash: 65a98a9766f7d056d911430243d49c4d26c076b9f1ff4fa0d8c500bd64c71268
---
# Source Code Documentation

This source code file defines the types and interfaces for various language learning models (LLMs) from different providers.

## Types

### LLMID

This is a union type that includes the following types:

- `OpenAILLMID`
- `GoogleLLMID`
- `AnthropicLLMID`
- `MistralLLMID`
- `GroqLLMID`
- `PerplexityLLMID`

Each of these types represents a different provider's set of models.

### OpenAILLMID

This type represents the models provided by OpenAI. It includes the following models:

- "gpt-4o"
- "gpt-4-turbo-preview"
- "gpt-4-vision-preview"
- "gpt-4"
- "gpt-3.5-turbo"

### GoogleLLMID

This type represents the models provided by Google. It includes the following models:

- "gemini-pro"
- "gemini-pro-vision"
- "gemini-1.5-pro-latest"
- "gemini-1.5-flash"

### AnthropicLLMID

This type represents the models provided by Anthropic. It includes the following models:

- "claude-2.1"
- "claude-instant-1.2"
- "claude-3-haiku-20240307"
- "claude-3-sonnet-20240229"
- "claude-3-opus-20240229"
- "claude-3-5-sonnet-20240620"

### MistralLLMID

This type represents the models provided by Mistral. It includes the following models:

- "mistral-tiny"
- "mistral-small-latest"
- "mistral-medium-latest"
- "mistral-large-latest"

### GroqLLMID

This type represents the models provided by Groq. It includes the following models:

- "llama3-8b-8192"
- "llama3-70b-8192"
- "mixtral-8x7b-32768"
- "gemma-7b-it"

### PerplexityLLMID

This type represents the models provided by Perplexity. It includes the following models:

- "pplx-7b-online"
- "pplx-70b-online"
- "pplx-7b-chat"
- "pplx-70b-chat"
- "mixtral-8x7b-instruct"
- "mistral-7b-instruct"
- "llama-2-70b-chat"
- "codellama-34b-instruct"
- "codellama-70b-instruct"
- "sonar-small-chat"
- "sonar-small-online"
- "sonar-medium-chat"
- "sonar-medium-online"

## Interfaces

### LLM

This interface represents a language learning model. It includes the following properties:

- `modelId`: A `LLMID` type that represents the model's identifier.
- `modelName`: A string that represents the model's name.
- `provider`: A `ModelProvider` type that represents the model's provider.
- `hostedId`: A string that represents the model's hosted identifier.
- `platformLink`: A string that represents the link to the platform where the model is hosted.
- `imageInput`: A boolean that indicates whether the model accepts image input.
- `pricing`: An optional object that includes the following properties:
  - `currency`: A string that represents the currency in which the model's cost is expressed.
  - `unit`: A string that represents the unit of measurement for the model's cost.
  - `inputCost`: A number that represents the cost of input for the model.
  - `outputCost`: An optional number that represents the cost of output for the model.

### OpenRouterLLM

This interface extends the `LLM` interface and includes an additional property:

- `maxContext`: A number that represents the maximum context for the model.
