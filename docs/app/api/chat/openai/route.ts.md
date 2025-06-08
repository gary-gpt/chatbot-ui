---
source: app/api/chat/openai/route.ts
generated: '2025-06-08T13:21:01.660Z'
tags: []
hash: e17f21fa1fa98e3088de38be356dd6cf0bf61f05bd82ba73bb82b6a7a408e970
---
# Server Chat API

This file exports a `POST` function which handles a POST request to create a chat completion with OpenAI's API.

## Imports

The file imports several helper functions, types, and classes from various libraries and local files:

- `checkApiKey` and `getServerProfile` from the local `server-chat-helpers` file.
- `ChatSettings` type from the local `types` file.
- `OpenAIStream` and `StreamingTextResponse` from the `ai` library.
- `ServerRuntime` from the `next` library.
- `OpenAI` and `ChatCompletionCreateParamsBase` from the `openai` library.

## Runtime

The `runtime` constant is set to `"edge"`.

## POST Function

The `POST` function is an asynchronous function that takes a `request` object as a parameter.

### Parameters

- `request`: A `Request` object.

### Process

1. The function first parses the request's JSON body and destructures it into `chatSettings` and `messages`.

2. It then retrieves the server profile using the `getServerProfile` helper function and checks the validity of the OpenAI API key using the `checkApiKey` function.

3. A new instance of `OpenAI` is created using the API key and organization ID from the server profile.

4. A chat completion is created using the `openai.chat.completions.create` method with the following parameters:
   - `model`: The model from the chat settings.
   - `messages`: The messages from the request.
   - `temperature`: The temperature from the chat settings.
   - `max_tokens`: Set to 4096 if the model is either "gpt-4-vision-preview" or "gpt-4o", otherwise it's set to `null`.
   - `stream`: Set to `true`.

5. The response from the chat completion is then streamed using `OpenAIStream`.

6. If the process is successful, a new `StreamingTextResponse` is returned with the stream. If an error occurs, a new `Response` is returned with a JSON stringified object containing an error message and status code. The error message can vary depending on the error, but it defaults to "An unexpected error occurred" with a status code of 500.
