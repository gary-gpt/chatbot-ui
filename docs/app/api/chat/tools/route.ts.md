# POST Function Documentation

This function is an asynchronous function named `POST` that is used to handle POST requests.

## Parameters

The function takes one parameter:

- `request`: A Request object.

## Functionality

The function performs the following steps:

1. It parses the JSON body of the request into `chatSettings`, `messages`, and `selectedTools`.
2. It retrieves the server profile and checks the OpenAI API key.
3. It initializes a new instance of OpenAI with the API key and organization ID from the server profile.
4. It iterates over each selected tool, converting its schema to functions and adding them to an array of tools. It also creates a route map for each tool and stores details about each schema.
5. It creates a chat completion using the OpenAI instance, the chat settings model, the messages, and the array of tools.
6. It adds the first response message to the messages array and extracts any tool calls from the message.
7. If there are no tool calls, it returns a new Response with the message content.
8. If there are tool calls, it iterates over each one, finding the schema detail that contains the function name and the path template for the function. It then determines if the request should be in the body or as a query and makes the appropriate fetch request. It adds a message to the messages array for each tool call.
9. It creates a second chat completion using the OpenAI instance, the chat settings model, the messages, and sets the stream to true.
10. It returns a new StreamingTextResponse with the second response stream.
11. If any errors occur during the process, it logs the error and returns a new Response with the error message and status code.

## Imports

The function imports several modules and functions:

- `openapiToFunctions` from "@/lib/openapi-conversion"
- `checkApiKey` and `getServerProfile` from "@/lib/server/server-chat-helpers"
- `Tables` from "@/supabase/types"
- `ChatSettings` from "@/types"
- `OpenAIStream` and `StreamingTextResponse` from "ai"
- `OpenAI` from "openai"
- `ChatCompletionCreateParamsBase` from "openai/resources/chat/completions.mjs"