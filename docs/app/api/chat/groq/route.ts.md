---
source: app/api/chat/groq/route.ts
generated: '2025-06-08T13:21:01.660Z'
tags: []
hash: 424dbe7d91e90f34487e931577814072731e81602c03b86e2fadf34a1a956641
---
# Chat API Documentation

This file exports a `POST` function which is used to create chat completions using the Groq API. 

## Imports

- `CHAT_SETTING_LIMITS` from "@/lib/chat-setting-limits"
- `checkApiKey`, `getServerProfile` from "@/lib/server/server-chat-helpers"
- `ChatSettings` from "@/types"
- `OpenAIStream`, `StreamingTextResponse` from "ai"
- `OpenAI` from "openai"

## Constants

- `runtime` is set to "edge"

## Functions

### POST(request: Request)

This function is an asynchronous function that takes a `Request` object as an argument.

#### Parameters

- `request`: The request object.

#### Process

1. The function starts by parsing the JSON body of the request into a `chatSettings` object and a `messages` array.
2. It then fetches the server profile and checks the API key.
3. A new instance of `OpenAI` is created with the API key and base URL.
4. A chat completion is created using the `chatSettings` and `messages`.
5. The response is converted into a stream using `OpenAIStream`.
6. The function returns a new `StreamingTextResponse` with the stream.

#### Error Handling

If an error occurs during the process, the function catches it and returns a response with an error message and status code. The error message is customized based on the error:

- If the error message includes "api key not found", the error message is set to "Groq API Key not found. Please set it in your profile settings."
- If the status code is 401, the error message is set to "Groq API Key is incorrect. Please fix it in your profile settings."
- For all other errors, the error message is set to "An unexpected error occurred" if no message is provided by the error.

The response is then returned with the error message and status code.
