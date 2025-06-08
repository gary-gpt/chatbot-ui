---
source: lib/models/llm/mistral-llm-list.ts
generated: '2025-06-08T13:21:01.658Z'
tags: []
hash: b97bd7fc20e037d9cc7a1f9260ec77a4c88b69c2576061d1d579fab078d6d4e2
---
# Source Code Documentation

This source code file defines and exports a list of Mistral models. Each model is defined as an object of type `LLM` and includes various properties related to the model.

## Imports

```javascript
import { LLM } from "@/types"
```

The `LLM` type is imported from the local `types` module.

## Constants

```javascript
const MISTRAL_PLATORM_LINK = "https://docs.mistral.ai/"
```

`MISTRAL_PLATORM_LINK` is a constant string that represents the URL of the Mistral platform documentation.

## Mistral Models

### Mistral 7B

```javascript
const MISTRAL_7B: LLM = {
  modelId: "mistral-tiny",
  modelName: "Mistral Tiny",
  provider: "mistral",
  hostedId: "mistral-tiny",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false
}
```

`MISTRAL_7B` is a model object with properties including the model ID, model name, provider, hosted ID, platform link, and a boolean indicating if the model accepts image input.

### Mixtral

```javascript
const MIXTRAL: LLM = {
  modelId: "mistral-small-latest",
  modelName: "Mistral Small",
  provider: "mistral",
  hostedId: "mistral-small-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2,
    outputCost: 6
  }
}
```

`MIXTRAL` is a model object similar to `MISTRAL_7B` but also includes a `pricing` object with properties for currency, unit, input cost, and output cost.

### Mistral Medium

```javascript
const MISTRAL_MEDIUM: LLM = {
  modelId: "mistral-medium-latest",
  modelName: "Mistral Medium",
  provider: "mistral",
  hostedId: "mistral-medium-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.7,
    outputCost: 8.1
  }
}
```

`MISTRAL_MEDIUM` is a model object similar to `MIXTRAL`.

### Mistral Large

```javascript
const MISTRAL_LARGE: LLM = {
  modelId: "mistral-large-latest",
  modelName: "Mistral Large",
  provider: "mistral",
  hostedId: "mistral-large-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 8,
    outputCost: 24
  }
}
```

`MISTRAL_LARGE` is a model object similar to `MISTRAL_MEDIUM`.

## Exported Constants

```javascript
export const MISTRAL_LLM_LIST: LLM[] = [
  MISTRAL_7B,
  MIXTRAL,
  MISTRAL_MEDIUM,
  MISTRAL_LARGE
]
```

`MISTRAL_LLM_LIST` is an array of the defined Mistral model objects and is exported for use in other modules.
