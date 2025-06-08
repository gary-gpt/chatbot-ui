---
source: app/api/chat/perplexity/route.ts
generated: '2025-06-08T13:21:01.660Z'
tags: []
hash: b80faf98f0197d7198b699e7b9fdbfa8f6ca5898c72353058c457331749aa366
---
# POST Function Documentation

The `POST` function is an asynchronous function that handles HTTP POST requests. It is responsible for creating a new chat completion using the OpenAI SDK and the Perplexity API.

## Import Statements

The function imports several helper functions, types, and classes from various modules:

- `checkApiKey` and `getServerProfile` from the `server-chat-helpers` module.
- `ChatSettings` type from the `types` module.
- `OpenAIStream` and `StreamingTextResponse` from the `ai` module.
- `OpenAI` from the `openai` module.

## Constants

The `runtime` constant is set to `"edge"`.

## Parameters

The function takes one parameter:

- `request`: An instance of the `Request` class.

## Functionality

The function starts by parsing the JSON body of the request. It expects the JSON to have two properties: `chatSettings` (of type `ChatSettings`) and `messages` (an array of any type).

Next, it retrieves the server profile and checks the Perplexity API key from the profile. If the API key is not found or incorrect, it throws an error.

Then, it creates a new instance of the `OpenAI` class with the Perplexity API key and the base URL of the Perplexity API.

After that, it creates a new chat completion using the `chat.completions.create` method of the `OpenAI` instance. It passes the model from the chat settings, the messages, and sets the `stream` property to `true`.

It then creates a new instance of the `OpenAIStream` class with the response from the chat completion creation.

Finally, it returns a new instance of the `StreamingTextResponse` class with the `OpenAIStream` instance.

## Error Handling

If an error occurs during the execution of the function, it catches the error and returns a new instance of the `Response` class with a JSON stringified object containing the error message and the status code of the error.

If the error message includes "api key not found", it sets the error message to "Perplexity API Key not found. Please set it in your profile settings." If the status code of the error is 401, it sets the error message to "Perplexity API Key is incorrect. Please fix it in your profile settings."

If the error does not have a message or a status code, it defaults the error message to "An unexpected error occurred" and the status code to 500.
