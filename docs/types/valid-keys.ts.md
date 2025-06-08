---
source: types/valid-keys.ts
generated: '2025-06-08T13:21:01.633Z'
tags: []
hash: 2a57b17caff3b3893025650816d690992e723666b4a84a38b48628743923e76c
---
# Documentation for VALID_ENV_KEYS

`VALID_ENV_KEYS` is an enumeration that contains the keys for various environment variables. These keys are used to access the corresponding values from the environment.

## Enum Members

- `OPENAI_API_KEY`: Key for the OpenAI API key environment variable.
- `ANTHROPIC_API_KEY`: Key for the Anthropic API key environment variable.
- `GOOGLE_GEMINI_API_KEY`: Key for the Google Gemini API key environment variable.
- `MISTRAL_API_KEY`: Key for the Mistral API key environment variable.
- `GROQ_API_KEY`: Key for the GROQ API key environment variable.
- `PERPLEXITY_API_KEY`: Key for the Perplexity API key environment variable.
- `AZURE_OPENAI_API_KEY`: Key for the Azure OpenAI API key environment variable.
- `OPENROUTER_API_KEY`: Key for the OpenRouter API key environment variable.
- `OPENAI_ORGANIZATION_ID`: Key for the OpenAI Organization ID environment variable.
- `AZURE_OPENAI_ENDPOINT`: Key for the Azure OpenAI endpoint environment variable.
- `AZURE_GPT_35_TURBO_NAME`: Key for the Azure GPT-3.5 Turbo name environment variable.
- `AZURE_GPT_45_VISION_NAME`: Key for the Azure GPT-4.5 Vision name environment variable.
- `AZURE_GPT_45_TURBO_NAME`: Key for the Azure GPT-4.5 Turbo name environment variable.
- `AZURE_EMBEDDINGS_NAME`: Key for the Azure Embeddings name environment variable.

## Usage

These keys are used to retrieve the corresponding environment variable values. The appropriate key should be used depending on the specific API or service you are interacting with. For example, if you are using the OpenAI API, you would use the `OPENAI_API_KEY` to get the API key from the environment variables.
