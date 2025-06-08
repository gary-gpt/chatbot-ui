---
source: lib/models/fetch-models.ts
generated: '2025-06-08T13:21:01.647Z'
tags: []
hash: bebb4f98799f25a5574f210dfb72f7cc24ca103cdddb9ece01d377a225744e0a
---
# Documentation

## Overview

This file contains three main functions: `fetchHostedModels`, `fetchOllamaModels`, and `fetchOpenRouterModels`. These functions are used to fetch different types of models from various providers.

## Functions

### fetchHostedModels

This function fetches hosted models from a list of providers. The list of providers includes Google, Anthropic, Mistral, Groq, and Perplexity. If the profile uses Azure OpenAI, Azure is added to the list of providers, otherwise, OpenAI is added.

The function sends a request to the `/api/keys` endpoint and expects a JSON response. If the response is not okay, an error is thrown.

The function then iterates over the list of providers. For each provider, it checks if the provider's API key is present in the profile or if the provider is using environment key map. If either of these conditions is true, the provider's models are added to the list of models to be returned.

The function returns an object containing the environment key map and the list of hosted models.

### fetchOllamaModels

This function fetches models from the Ollama server. It sends a request to the `/api/tags` endpoint on the Ollama server and expects a JSON response. If the response is not okay, an error is thrown.

The function then maps over the list of models in the response and transforms each model into an object with the following properties: `modelId`, `modelName`, `provider`, `hostedId`, `platformLink`, and `imageInput`.

The function returns the list of transformed models.

### fetchOpenRouterModels

This function fetches models from the OpenRouter server. It sends a request to the `/api/v1/models` endpoint on the OpenRouter server and expects a JSON response. If the response is not okay, an error is thrown.

The function then maps over the list of models in the response and transforms each model into an object with the following properties: `modelId`, `modelName`, `provider`, `hostedId`, `platformLink`, `imageInput`, and `maxContext`.

The function returns the list of transformed models. If an error occurs during the fetch operation, the error is logged to the console and displayed as a toast notification.
