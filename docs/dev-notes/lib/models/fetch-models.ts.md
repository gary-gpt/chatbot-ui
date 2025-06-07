**📄 Source File:** `/lib/models/fetch-models.ts`  
**🕒 Generated:** 2025-06-07 14:23:40 UTC  
**🤖 Model:** gpt-4

---

# Source File Documentation: Unknown Filename

This source file is a JavaScript/TypeScript module that exports three asynchronous functions: `fetchHostedModels`, `fetchOllamaModels`, and `fetchOpenRouterModels`. These functions are used to fetch data from different APIs and return the data in a specific format.

## Exports

### `fetchHostedModels(profile: Tables<"profiles">)`

This function fetches hosted models from various providers. It takes a `profile` object as an argument, which is of type `Tables<"profiles">`. The function constructs an array of providers, which can include "google", "anthropic", "mistral", "groq", "perplexity", "azure", or "openai" depending on the `use_azure_openai` property of the `profile` object.

The function then makes a request to the "/api/keys" endpoint and processes the response. If the response is not okay, it throws an error. If the response is okay, it processes the data and constructs an array of models to add (`modelsToAdd`), based on the providers and the `LLM_LIST_MAP`.

The function returns an object containing `envKeyMap` and `hostedModels`.

### `fetchOllamaModels()`

This function fetches models from the Ollama API. It makes a request to the "/api/tags" endpoint of the Ollama API and processes the response. If the response is not okay, it throws an error. If the response is okay, it processes the data and constructs an array of local models (`localModels`).

The function returns the `localModels` array.

### `fetchOpenRouterModels()`

This function fetches models from the OpenRouter API. It makes a request to the "/api/v1/models" endpoint of the OpenRouter API and processes the response. If the response is not okay, it throws an error and shows a toast notification. If the response is okay, it processes the data and constructs an array of OpenRouter models (`openRouterModels`).

The function returns the `openRouterModels` array.

## Types

The file imports several types, including `Tables`, `LLM`, `LLMID`, and `OpenRouterLLM`. These types are used to type-check the data structures in the file.

## Usage

The exported functions can be used in other parts of the application to fetch data from the respective APIs. The functions are asynchronous and return Promises, so they should be used with `await` or `.then()`.

## Interesting Structure or Nuance

The `fetchHostedModels` function uses a dynamic key to access properties of the `profile` object. This is done using the `keyof typeof` TypeScript feature. This allows the function to dynamically construct the key based on the provider.

The `fetchOpenRouterModels` function uses destructuring to extract the `data` property from the response object. This is a common pattern in JavaScript and TypeScript to simplify code and improve readability.