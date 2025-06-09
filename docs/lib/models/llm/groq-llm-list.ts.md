---
source: lib/models/llm/groq-llm-list.ts
generated: 2025-06-08T22:34:51.452Z
tags: []
hash: dc1411071f026b9ba23cc76a701b4f02ed5657c8869510814ed893df6a387689
---

# Documentation for `groq-llm-list.ts`

This TypeScript file defines a list of Language Learning Models (LLM) provided by GROQ. Each model is represented as an object with specific properties such as modelId, modelName, provider, hostedId, platformLink, imageInput, and pricing.

## Code Overview

```ts
import { LLM } from "@/types"
```
This line imports the `LLM` type from the types module. `LLM` is a custom type that represents a Language Learning Model.

```ts
const GROQ_PLATORM_LINK = "https://groq.com/"
```
This constant holds the URL to the GROQ platform.

The following constants `LLaMA3_8B`, `LLaMA3_70B`, `MIXTRAL_8X7B`, and `GEMMA_7B_IT` are objects that represent different Language Learning Models. Each object has the following properties:

- `modelId`: A unique identifier for the model.
- `modelName`: The name of the model.
- `provider`: The provider of the model. In this case, all models are provided by GROQ.
- `hostedId`: The identifier for the hosted model.
- `platformLink`: The link to the platform where the model is hosted.
- `imageInput`: A boolean indicating whether the model accepts image inputs.
- `pricing`: An object that contains the pricing information for the model. It includes the currency, unit, input cost, and output cost.

```ts
export const GROQ_LLM_LIST: LLM[] = [
  LLaMA3_8B,
  LLaMA3_70B,
  MIXTRAL_8X7B,
  GEMMA_7B_IT
]
```
This line exports a constant array `GROQ_LLM_LIST` that contains all the defined Language Learning Models. This list can be imported and used in other parts of the application.

## Code Summary

This file is a part of the `chatbot-ui` library and it is used to define and export a list of Language Learning Models provided by GROQ. The models are represented as objects with specific properties. This list can be imported and used in other parts of the application to access the details of the Language Learning Models.