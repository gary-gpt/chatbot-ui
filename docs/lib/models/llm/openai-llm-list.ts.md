---
source: lib/models/llm/openai-llm-list.ts
generated: 2025-06-08T22:36:06.687Z
tags: []
hash: c74e1b9d7eed5304f023da4d63f6d1a98993cad9d8361a98d474a87c45bdf3bb
---

# OpenAI Language Model List

This TypeScript file defines a list of OpenAI's Language Learning Models (LLMs), including their IDs, names, providers, hosted IDs, platform links, whether they accept image input, and their pricing details. This list is exported as `OPENAI_LLM_LIST`.

## Code Overview

The file imports the `LLM` type from "@/types" and defines a constant `OPENAI_PLATORM_LINK` that holds the link to OpenAI's platform documentation.

The file then defines several constants, each representing a different OpenAI model. Each model is an object of type `LLM` and contains the following properties:

- `modelId`: A unique identifier for the model.
- `modelName`: The name of the model.
- `provider`: The provider of the model, in this case, "openai".
- `hostedId`: The ID under which the model is hosted.
- `platformLink`: A link to the platform's documentation.
- `imageInput`: A boolean indicating whether the model accepts image input.
- `pricing`: An object containing the pricing details for the model, including the currency, unit, input cost, and output cost.

## Code Details

### GPT-4o Model

```ts
const GPT4o: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4o",
  provider: "openai",
  hostedId: "gpt-4o",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 5,
    outputCost: 15
  }
}
```

This section defines the `GPT4o` model. This model accepts image input and its pricing details are in USD per 1M tokens, with an input cost of 5 and an output cost of 15.

### GPT-4 Turbo Model

```ts
const GPT4Turbo: LLM = {
  modelId: "gpt-4-turbo-preview",
  modelName: "GPT-4 Turbo",
  provider: "openai",
  hostedId: "gpt-4-turbo-preview",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10,
    outputCost: 30
  }
}
```

This section defines the `GPT4Turbo` model. This model also accepts image input and its pricing details are in USD per 1M tokens, with an input cost of 10 and an output cost of 30.

### GPT-4 Vision Model

```ts
const GPT4Vision: LLM = {
  modelId: "gpt-4-vision-preview",
  modelName: "GPT-4 Vision",
  provider: "openai",
  hostedId: "gpt-4-vision-preview",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10
  }
}
```

This section defines the `GPT4Vision` model. This model accepts image input and its pricing details are in USD per 1M tokens, with an input cost of 10.

### GPT-4 Model

```ts
const GPT4: LLM = {
  modelId: "gpt-4",
  modelName: "GPT-4",
  provider: "openai",
  hostedId: "gpt-4",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 30,
    outputCost: 60
  }
}
```

This section defines the `GPT4` model. This model does not accept image input and its pricing details are in USD per 1M tokens, with an input cost of 30 and an output cost of 60.

### GPT-3.5 Turbo Model

```ts
const GPT3_5Turbo: LLM = {
  modelId: "gpt-3.5-turbo",
  modelName: "GPT-3.5 Turbo",
  provider: "openai",
  hostedId: "gpt-3.5-turbo",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 1.5
  }
}
```

This section defines the `GPT3_5Turbo` model. This model does not accept image input and its pricing details are in USD per 1M tokens, with an input cost of 0.5 and an output cost of 1.5.

### Exported List

```ts
export const OPENAI_LLM_LIST: LLM[] = [
  GPT4o,
  GPT4Turbo,
  GPT4Vision,
  GPT4,
  GPT3_5Turbo
]
```

This section exports the `OPENAI_LLM_LIST` constant, which is an array of all the defined models.