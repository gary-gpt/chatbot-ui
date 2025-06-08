---
source: app/api/chat/mistral/route.ts
generated: '2025-06-08T13:21:01.660Z'
tags: []
hash: 01265c8b920749417a6f6d843a4857719d0d049233f69a8d1f7a794011a4e60f
---
# Chat Server

This module is responsible for handling chat requests and responses using the Mistral AI service.

## Imports

- `CHAT_SETTING_LIMITS` from "@/lib/chat-setting-limits"
- `checkApiKey`, `getServerProfile` from "@/lib/server/server-chat-helpers"
- `ChatSettings` from "@/types"
- `OpenAIStream`, `StreamingTextResponse` from "ai"
- `OpenAI` from "openai"

## Constants

- `runtime`: This is set to "edge".

## Functions

### POST(request: Request)

This is an asynchronous function that handles POST requests.

#### Parameters

- `request`: An instance of `Request` which contains the HTTP request.

#### Returns

- A `StreamingTextResponse` instance if the request is processed successfully.
- A `Response` instance with an error message and status code if an error occurs.

#### Process

1. The function first extracts `chatSettings` and `messages` from the request's JSON body.
2. It fetches the server profile using `getServerProfile()`.
3. It checks whether the Mistral API key exists and is valid using `checkApiKey()`.
4. It creates a new instance of `OpenAI` with the Mistral API key and the Mistral API base URL.
5. It sends a chat completion request to the Mistral API.
6. The response from the Mistral API is converted into a text stream using `OpenAIStream()`.
7. The function returns the text stream as a `StreamingTextResponse`.

If an error occurs during this process, the function catches it and returns a `Response` with an error message and status code. The error message is customized based on the error type. For example, if the error message includes "api key not found", the returned error message will instruct the user to set the Mistral API key in their profile settings. If the status code is 401, the returned error message will instruct the user to correct the Mistral API key in their profile settings. If the error is unexpected, a generic error message is returned.
