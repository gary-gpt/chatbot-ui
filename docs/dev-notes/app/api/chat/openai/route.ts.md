**📄 Source File:** `/app/api/chat/openai/route.ts`  
**🕒 Generated:** 2025-06-07 13:22:59 UTC  
**🤖 Model:** gpt-4

---

# server-chat.ts

This TypeScript file is part of a server-side application that interacts with the OpenAI API to create chat completions. It exports a runtime configuration and a POST function to handle incoming requests.

## Exports

### `runtime: ServerRuntime`

This is a constant that sets the server runtime to "edge". The `ServerRuntime` type is imported from the "next" package.

### `POST(request: Request)`

This is an asynchronous function that handles POST requests. It expects a `Request` object as an argument.

The function first parses the request's JSON body to extract `chatSettings` and `messages`. It then retrieves the server profile and checks the OpenAI API key.

If the API key is valid, it creates a new instance of OpenAI with the API key and organization ID from the server profile. It then uses this instance to create chat completions based on the provided chat settings and messages.

If the model is "gpt-4-vision-preview" or "gpt-4o", the maximum number of tokens is set to 4096. If the model is different, the maximum number of tokens is not set. This is a point of interest that may need to be addressed in future updates (as indicated by the TODO comment).

The function then streams the response from the OpenAI API and returns a new `StreamingTextResponse` with the stream.

If any errors occur during this process, the function catches them and returns a new `Response` with an error message and status code. The error message is customized based on whether the error is related to the API key not being found or being incorrect.

## Usage

This file is likely used as part of a server-side application that handles chat-related requests. The `POST` function would be used to handle incoming POST requests, parse their JSON bodies, and interact with the OpenAI API to create chat completions based on the provided chat settings and messages.

## Interesting Structure or Nuance

The error handling in the `POST` function is notable for its detailed error messages. If an error occurs, the function doesn't just return the error's message and status code. Instead, it checks if the error message includes certain phrases related to the API key. If it does, it returns a customized error message that instructs the user to fix their API key in their profile settings. This makes the error handling more user-friendly and helpful.