**📄 Source File:** `/lib/models/llm/anthropic-llm-list.ts`  
**🕒 Generated:** 2025-06-07 14:23:56 UTC  
**🤖 Model:** gpt-4

---

# Source File Documentation: `anthropicModels.ts`

This TypeScript file, `anthropicModels.ts`, is primarily used to define and export a list of language models provided by Anthropic. Each model is defined as a constant object of type `LLM` (Language Learning Model), which is imported from "@/types".

## Constants

The file defines several constants, each representing a different language model. Each constant is an object of type `LLM` with the following properties:

- `modelId`: A unique identifier for the model.
- `modelName`: The name of the model.
- `provider`: The provider of the model, in this case, "anthropic".
- `hostedId`: The identifier used by the hosting platform.
- `platformLink`: A link to the documentation for the model on the provider's platform.
- `imageInput`: A boolean indicating whether the model accepts image input.
- `pricing`: An object detailing the pricing for the model, including the currency, unit, input cost, and output cost.

The constants defined in this file are:

- `CLAUDE_2`
- `CLAUDE_INSTANT`
- `CLAUDE_3_HAIKU`
- `CLAUDE_3_SONNET`
- `CLAUDE_3_OPUS`
- `CLAUDE_3_5_SONNET`

Each of these constants represents a different model, with unique identifiers, names, and pricing details.

## Exports

The file exports a single constant, `ANTHROPIC_LLM_LIST`, which is an array of the defined `LLM` constants. This list can be imported in other parts of the application to access the details of the Anthropic language models.

## Usage

While the file itself does not contain any functions or methods, the exported `ANTHROPIC_LLM_LIST` can be used in other parts of the application to access the details of the Anthropic language models. For example, this list could be used to display information about the models in a user interface, or to programmatically interact with the models based on their properties.

## Structure and Nuance

Each `LLM` object is structured in a consistent way, making it easy to understand the properties of each model. The use of a consistent type for these objects also helps ensure that all necessary information is included for each model.

One interesting nuance is the use of the `ANTHROPIC_PLATFORM_LINK` constant. This constant is defined at the top of the file and is used as the `platformLink` for each `LLM` object. This approach makes it easy to update the link if it changes in the future, as it only needs to be updated in one place.