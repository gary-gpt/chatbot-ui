# Source Code Documentation

This source code file is primarily concerned with defining and exporting a list of language models provided by Perplexity. Each model is defined as an object of type `LLM` and contains information such as the model's ID, name, provider, hosted ID, a link to the platform, and a boolean indicating whether the model accepts image input.

## Constants

### `PERPLEXITY_PLATORM_LINK`

This constant holds the URL to the Perplexity getting started documentation.

### `MIXTRAL_8X7B_INSTRUCT`, `MISTRAL_7B_INSTRUCT`, `CODELLAMA_70B_INSTRUCT`, `PERPLEXITY_SONAR_SMALL_CHAT_7B`, `PERPLEXITY_SONAR_SMALL_ONLINE_7B`, `PERPLEXITY_SONAR_MEDIUM_CHAT_8x7B`, `PERPLEXITY_SONAR_MEDIUM_ONLINE_8x7B`

These constants are objects of type `LLM` that represent different language models provided by Perplexity. Each object contains the following properties:

- `modelId`: A string representing the unique identifier of the model.
- `modelName`: A string representing the name of the model.
- `provider`: A string representing the provider of the model. In this case, all models are provided by Perplexity.
- `hostedId`: A string representing the hosted identifier of the model.
- `platformLink`: A string representing the URL to the platform where the model is hosted.
- `imageInput`: A boolean indicating whether the model accepts image input. In this case, all models do not accept image input.

## Exported Constants

### `PERPLEXITY_LLM_LIST`

This constant is an array of `LLM` objects representing all the Perplexity language models defined in this file. This list is exported and can be imported by other modules.

## Deprecation Notice

Please note that on March 15, the `pplx-70b-chat`, `pplx-70b-online`, `llama-2-70b-chat`, and `codellama-34b-instruct` models will no longer be available through the Perplexity API.