---
source: app/api/chat/azure/route.ts
generated: '2025-06-08T13:21:01.660Z'
tags: []
hash: 64305e19c327ced96b42e29f035e6c1e4d0008894b482850d21c8b4245a0bb7f
---
# Azure OpenAI Chat API Handler

This module exports a single function `POST` that handles POST requests to the Azure OpenAI Chat API.

## Imports

- `checkApiKey` and `getServerProfile` from "@/lib/server/server-chat-helpers"
- `ChatAPIPayload` from "@/types"
- `OpenAIStream` and `StreamingTextResponse` from "ai"
- `OpenAI` from "openai"
- `ChatCompletionCreateParamsBase` from "openai/resources/chat/completions.mjs"

## Constants

- `runtime`: A constant string set to "edge".

## Functions

### POST(request: Request)

This function handles POST requests. It takes a `Request` object as an argument and returns a `Promise` that resolves to a `Response` object.

#### Parameters

- `request`: A `Request` object representing the incoming request.

#### Returns

A `Promise` that resolves to a `Response` object. The response can be one of the following:

- A `StreamingTextResponse` object if the request is successful.
- A `Response` object with a status of 400 and a message of "Model not found" if the specified model is not found.
- A `Response` object with a status of 400 and a message of "Azure resources not found" if the required Azure resources (ENDPOINT, KEY, DEPLOYMENT_ID) are not found.
- A `Response` object with a status of 500 and a message of "An unexpected error occurred" if an unexpected error occurs.

#### Logic

1. The function first parses the JSON body of the request and extracts the `chatSettings` and `messages` properties.

2. It then retrieves the server profile and checks the API key.

3. Depending on the model specified in `chatSettings`, it sets the `DEPLOYMENT_ID`. If the model is not recognized, it returns a `Response` object with a status of 400 and a message of "Model not found".

4. If any of the required Azure resources (ENDPOINT, KEY, DEPLOYMENT_ID) are not found, it returns a `Response` object with a status of 400 and a message of "Azure resources not found".

5. It then creates a new instance of `OpenAI` and makes a request to the Azure OpenAI Chat API.

6. If the request is successful, it returns a `StreamingTextResponse` object. If an error occurs, it returns a `Response` object with the appropriate status and error message.
