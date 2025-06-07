**📄 Source File:** `/app/api/chat/azure/route.ts`  
**🕒 Generated:** 2025-06-07 13:21:44 UTC  
**🤖 Model:** gpt-4

---

# server-chat-api.ts

This TypeScript file, `server-chat-api.ts`, is part of a chat application that uses the Azure OpenAI API to generate chat completions. It exports a runtime constant and a POST function that handles the creation of chat completions.

## Exports

### `runtime`

This is a constant string that specifies the runtime environment. In this case, it is set to `"edge"`.

### `POST(request: Request)`

This is an asynchronous function that takes a `Request` object as an argument. It processes the request to create chat completions using the Azure OpenAI API. The function does the following:

- Parses the request to JSON and extracts `chatSettings` and `messages` from it.
- Retrieves the server profile and checks the API key.
- Determines the deployment ID based on the chat model specified in the `chatSettings`.
- If any of the required Azure resources (endpoint, key, or deployment ID) are missing, it returns a 400 response with an appropriate error message.
- Creates an instance of `OpenAI` with the necessary configurations.
- Calls the `chat.completions.create` method of the `OpenAI` instance to create chat completions.
- Returns a `StreamingTextResponse` with the chat completions.
- If any error occurs during the process, it returns a response with the error message and status code.

## Usage

This file is likely used in a server-side context where it handles POST requests to a certain endpoint. The POST requests should contain a JSON body with `chatSettings` and `messages`. The `chatSettings` should specify the chat model, temperature, and max tokens. The `messages` should be an array of message objects.

## Interesting Structure or Nuance

The `POST` function uses a switch statement to determine the deployment ID based on the chat model. It also has a conditional check for the `max_tokens` parameter when creating chat completions. If the model is `"gpt-4-vision-preview"`, it sets `max_tokens` to 4096; otherwise, it leaves it as `null`.

The function also has error handling that catches any errors that occur during the process and returns a response with the error message and status code. If the error object doesn't have a `message` or `status`, it defaults to `"An unexpected error occurred"` and `500`, respectively.