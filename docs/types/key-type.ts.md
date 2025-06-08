---
source: types/key-type.ts
generated: '2025-06-08T13:21:01.633Z'
tags: []
hash: 31ed83df2269bd6c8c583cd8b4170ca4659ada16d380f3415b216f87c06195ea
---
# Source Code Documentation

This documentation provides details about the `EnvKey` type in the source code.

## `EnvKey` Type

The `EnvKey` is an exported type that represents various environment keys used in the application. It is a union type, meaning it can be any one of the specified types. In this case, the `EnvKey` can be any one of the following string literals:

- `"OPENAI_API_KEY"`
- `"ANTHROPIC_API_KEY"`
- `"GOOGLE_GEMINI_API_KEY"`
- `"MISTRAL_API_KEY"`
- `"GROQ_API_KEY"`
- `"PERPLEXITY_API_KEY"`
- `"AZURE_OPENAI_API_KEY"`

These keys are used to store and access the API keys of various services used in the application. The specific key used depends on the service that the application needs to interact with. 

Here is a brief description of each key:

- `OPENAI_API_KEY`: This is the API key for the OpenAI service.
- `ANTHROPIC_API_KEY`: This is the API key for the Anthropic service.
- `GOOGLE_GEMINI_API_KEY`: This is the API key for the Google Gemini service.
- `MISTRAL_API_KEY`: This is the API key for the Mistral service.
- `GROQ_API_KEY`: This is the API key for the GROQ service.
- `PERPLEXITY_API_KEY`: This is the API key for the Perplexity service.
- `AZURE_OPENAI_API_KEY`: This is the API key for the Azure OpenAI service.

These keys are typically stored in the environment variables for security reasons and are accessed using the `process.env` object in Node.js.
