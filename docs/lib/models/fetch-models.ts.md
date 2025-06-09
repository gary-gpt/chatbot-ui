---
source: lib/models/fetch-models.ts
generated: 2025-06-08T22:33:41.782Z
tags: []
hash: 7c8f664b591d4a97238692928fd7647df7170921832a444cd7726e8460cb9788
---

# fetch-models.ts

This TypeScript file, located at `/Users/garymason/chatbot-ui/lib/models/fetch-models.ts`, contains three functions that fetch different types of models from various providers. These models are used in the chatbot UI.

## Import Statements

```ts
import { Tables } from "@/supabase/types"
import { LLM, LLMID, OpenRouterLLM } from "@/types"
import { toast } from "sonner"
import { LLM_LIST_MAP } from "./llm/llm-list"
```

The import statements fetch necessary types and functions from different modules. `Tables` is imported from the `supabase/types` module, `LLM`, `LLMID`, and `OpenRouterLLM` are imported from the `types` module, `toast` is imported from the `sonner` module, and `LLM_LIST_MAP` is imported from the `llm/llm-list` module.

## Function: fetchHostedModels

```ts
export const fetchHostedModels = async (profile: Tables<"profiles">) => {
  ...
}
```

This function fetches hosted models from various providers. The function takes a `profile` object as an argument, which is of the type `Tables<"profiles">`. The function returns an object containing `envKeyMap` and `hostedModels`.

## Function: fetchOllamaModels

```ts
export const fetchOllamaModels = async () => {
  ...
}
```

This function fetches models from the Ollama provider. It does not take any arguments and returns an array of `localModels`.

## Function: fetchOpenRouterModels

```ts
export const fetchOpenRouterModels = async () => {
  ...
}
```

This function fetches models from the OpenRouter provider. It does not take any arguments and returns an array of `openRouterModels`.

# Error Handling

Each function includes error handling to catch and log any errors that occur during the fetch process. For example:

```ts
} catch (error) {
  console.warn("Error fetching hosted models: " + error)
}
```

This code block catches any errors that occur during the execution of the `fetchHostedModels` function and logs a warning message to the console. Similar error handling is included in the `fetchOllamaModels` and `fetchOpenRouterModels` functions.