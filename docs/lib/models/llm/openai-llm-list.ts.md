# OpenAI Models Documentation

This file contains the definitions of several OpenAI models, including their IDs, names, providers, hosted IDs, platform links, image input capabilities, and pricing information.

## Constants

- `OPENAI_PLATORM_LINK`: This constant holds the URL to the OpenAI platform documentation.

## Models

### GPT-4o

This model has the following properties:

- `modelId`: "gpt-4o"
- `modelName`: "GPT-4o"
- `provider`: "openai"
- `hostedId`: "gpt-4o"
- `platformLink`: OPENAI_PLATORM_LINK
- `imageInput`: true
- `pricing`: 
  - `currency`: "USD"
  - `unit`: "1M tokens"
  - `inputCost`: 5
  - `outputCost`: 15

### GPT-4 Turbo

This model has the following properties:

- `modelId`: "gpt-4-turbo-preview"
- `modelName`: "GPT-4 Turbo"
- `provider`: "openai"
- `hostedId`: "gpt-4-turbo-preview"
- `platformLink`: OPENAI_PLATORM_LINK
- `imageInput`: true
- `pricing`: 
  - `currency`: "USD"
  - `unit`: "1M tokens"
  - `inputCost`: 10
  - `outputCost`: 30

### GPT-4 Vision

This model has the following properties:

- `modelId`: "gpt-4-vision-preview"
- `modelName`: "GPT-4 Vision"
- `provider`: "openai"
- `hostedId`: "gpt-4-vision-preview"
- `platformLink`: OPENAI_PLATORM_LINK
- `imageInput`: true
- `pricing`: 
  - `currency`: "USD"
  - `unit`: "1M tokens"
  - `inputCost`: 10

### GPT-4

This model has the following properties:

- `modelId`: "gpt-4"
- `modelName`: "GPT-4"
- `provider`: "openai"
- `hostedId`: "gpt-4"
- `platformLink`: OPENAI_PLATORM_LINK
- `imageInput`: false
- `pricing`: 
  - `currency`: "USD"
  - `unit`: "1M tokens"
  - `inputCost`: 30
  - `outputCost`: 60

### GPT-3.5 Turbo

This model has the following properties:

- `modelId`: "gpt-3.5-turbo"
- `modelName`: "GPT-3.5 Turbo"
- `provider`: "openai"
- `hostedId`: "gpt-3.5-turbo"
- `platformLink`: OPENAI_PLATORM_LINK
- `imageInput`: false
- `pricing`: 
  - `currency`: "USD"
  - `unit`: "1M tokens"
  - `inputCost`: 0.5
  - `outputCost`: 1.5

## Exports

- `OPENAI_LLM_LIST`: This is an array containing all the above models.