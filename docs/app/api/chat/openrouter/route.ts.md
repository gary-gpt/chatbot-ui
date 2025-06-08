---
source: app/api/chat/openrouter/route.ts
generated: '2025-06-08T13:21:01.660Z'
tags: []
hash: 42cc48b05263613c790516209bcc58c25b3ec7f37130abd4e3bebb8d39274d7d
---
# Documentation

## Overview

This file contains the implementation of a POST request handler for a chat application. It uses the OpenAI API to generate chat completions based on the provided chat settings and messages. 

## Imports

The file imports helper functions, types, and classes from various modules:

- `checkApiKey` and `getServerProfile` helper functions from the `server-chat-helpers` module.
- `ChatSettings` type from the `types` module.
- `OpenAIStream` and `StreamingTextResponse` classes from the `ai` module.
- `ServerRuntime` type from the `next` module.
- `OpenAI` class and `ChatCompletionCreateParamsBase` type from the `openai` module.

## Constants

The file declares a constant `runtime` of type `ServerRuntime` and assigns it the value `"edge"`.

## Functions

### POST

This is an asynchronous function that takes a `request` of type `Request` as a parameter. It performs the following steps:

1. Parses the JSON body of the request into a `json` object.
2. Extracts `chatSettings` and `messages` from the `json` object.
3. Tries to retrieve the server profile using the `getServerProfile` helper function.
4. Checks the validity of the API key using the `checkApiKey` helper function.
5. Initializes a new instance of the `OpenAI` class with the API key and base URL.
6. Sends a chat completion creation request to the OpenAI API with the specified chat settings and messages.
7. Streams the response from the OpenAI API using the `OpenAIStream` class.
8. Returns a new `StreamingTextResponse` with the streamed response.

If any error occurs during these steps, the function catches the error, sets a default error message and status code, checks if the error message includes "api key not found", and if so, changes the error message. Finally, it returns a new `Response` with the error message and status code.

## Exports

The file exports the `runtime` constant and the `POST` function.
