# Source Code Documentation

This file defines and exports a list of models provided by Groq. Each model is an object that conforms to the `LLM` type, which is imported from "@/types".

## Constants

- `GROQ_PLATORM_LINK`: This constant holds the URL of the Groq platform.

## Model Objects

Each model object contains the following properties:

- `modelId`: A unique identifier for the model.
- `modelName`: The name of the model.
- `provider`: The provider of the model. In this case, all models are provided by Groq.
- `hostedId`: The hosted identifier for the model.
- `platformLink`: The link to the provider's platform. It's the same for all models in this file.
- `imageInput`: A boolean indicating whether the model accepts image input. All models in this file do not accept image input.
- `pricing`: An object that contains pricing information for the model. It includes the currency (all models are priced in USD), the unit (all models are priced per 1M tokens), and the cost for input and output.

The models defined in this file are:

- `LLaMA3_8B`
- `LLaMA3_70B`
- `MIXTRAL_8X7B`
- `GEMMA_7B_IT`

## Exported Constants

- `GROQ_LLM_LIST`: An array that contains all the defined models. This list is exported and can be imported by other modules.