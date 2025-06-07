**📄 Source File:** `/lib/models/llm/perplexity-llm-list.ts`  
**🕒 Generated:** 2025-06-07 14:25:38 UTC  
**🤖 Model:** gpt-4

---

# Source File Documentation

## Filename: perplexity.ts

This TypeScript file is part of a project that interacts with the Perplexity AI platform. It defines several constants that represent different models provided by Perplexity, and exports a list of these models.

### Constants

Each constant is an object of type `LLM` (presumably a custom type defined elsewhere in the project), which includes the following properties:

- `modelId`: A unique identifier for the model.
- `modelName`: A human-readable name for the model.
- `provider`: The provider of the model, in this case, "perplexity".
- `hostedId`: Another identifier for the model, which appears to be the same as the `modelId` in these examples.
- `platformLink`: A link to the Perplexity platform's documentation.
- `imageInput`: A boolean indicating whether the model accepts image input. In all these examples, it is `false`.

The constants defined in this file are:

- `MIXTRAL_8X7B_INSTRUCT`
- `MISTRAL_7B_INSTRUCT`
- `CODELLAMA_70B_INSTRUCT`
- `PERPLEXITY_SONAR_SMALL_CHAT_7B`
- `PERPLEXITY_SONAR_SMALL_ONLINE_7B`
- `PERPLEXITY_SONAR_MEDIUM_CHAT_8x7B`
- `PERPLEXITY_SONAR_MEDIUM_ONLINE_8x7B`

### Export

The file exports a single constant, `PERPLEXITY_LLM_LIST`, which is an array of the `LLM` objects defined above.

### Usage

While the exact usage of these constants isn't clear from this file alone, it's reasonable to infer that they could be used elsewhere in the project to interact with the corresponding models on the Perplexity platform. For example, a function might accept an `LLM` object as an argument and use its properties to make a request to the Perplexity API.

### Interesting Structure or Nuance

The file includes comments indicating that the models were updated on certain dates, and a notice that some models will be deprecated in the future. This suggests that the file is regularly updated to reflect changes in the available models. The `LLM` objects themselves are quite straightforward, but the duplication of the `modelId` and `hostedId` properties might suggest some nuance in how the models are identified in different contexts.