---
source: app/api/chat/custom/route.ts
generated: 2025-06-08T21:19:18.617Z
tags: []
hash: ffe9bb2b8e9bdaa029b8dbdd2819affef708dd280a645ea2bff1d72bcd74076a
---

# Chatbot UI - Custom Route

This file, located at `/Users/garymason/chatbot-ui/app/api/chat/custom/route.ts`, is a TypeScript file that defines a POST function for the custom chat route. This function is responsible for processing incoming requests, interacting with the database, and returning appropriate responses.

## Imports

The file begins by importing several modules and types that are necessary for its functionality. These include:

- `Database` from "@/supabase/types"
- `ChatSettings` from "@/types"
- `createClient` from "@supabase/supabase-js"
- `OpenAIStream` and `StreamingTextResponse` from "ai"
- `ServerRuntime` from "next"
- `OpenAI` from "openai"
- `ChatCompletionCreateParamsBase` from "openai/resources/chat/completions.mjs"

## Runtime

The `runtime` constant is set to `"edge"`, which is a type of `ServerRuntime`.

## POST Function

The `POST` function is an asynchronous function that takes a `request` as an argument. This function is responsible for handling POST requests to the custom chat route.

### Request Processing

The function begins by parsing the JSON body of the request. It then destructures the resulting object to obtain `chatSettings`, `messages`, and `customModelId`.

### Database Interaction

Next, the function creates a Supabase client using the `createClient` function. It uses this client to query the "models" table in the database for a record with an `id` that matches `customModelId`.

If no matching record is found, the function throws an error.

### Chat Completion Creation

If a matching record is found, the function creates a new `OpenAI` instance using the API key and base URL from the record. It then uses this instance to create a chat completion.

The chat completion is created with the model, messages, and temperature from `chatSettings`, and with `stream` set to `true`.

### Response Streaming

The function then creates an `OpenAIStream` from the chat completion response and returns a new `StreamingTextResponse` with this stream.

### Error Handling

If any errors occur during the execution of the function, an error message and error code are generated. The error message is set to the message of the error that occurred, or to "An unexpected error occurred" if the error has no message.

If the error message includes "api key not found" or "incorrect api key", the error message is updated to provide more specific guidance to the user.

Finally, the function returns a new `Response` with the error message and error code.

```ts
export async function POST(request: Request) {
  // Request processing
  // Database interaction
  // Chat completion creation
  // Response streaming
  // Error handling
}
```

This function is exported, making it available for use in other parts of the application.