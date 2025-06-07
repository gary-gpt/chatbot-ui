**📄 Source File:** `/app/api/chat/custom/route.ts`  
**🕒 Generated:** 2025-06-07 13:21:55 UTC  
**🤖 Model:** gpt-4

---

# `chat.ts`

This TypeScript file is responsible for handling chat-related operations using the OpenAI API. It exports a `runtime` constant and an asynchronous function `POST`.

## Exports

### `runtime: ServerRuntime`

This is a constant that defines the server runtime environment. In this case, it is set to `"edge"`.

### `POST(request: Request)`

This is an asynchronous function that handles POST requests. It expects a `Request` object as an argument.

The function first parses the request body into JSON and destructures it into `chatSettings`, `messages`, and `customModelId`.

It then creates a Supabase client using the environment variables `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

The function queries the `models` table in the Supabase database for a record with an `id` matching `customModelId`.

If no such model is found, it throws an error. Otherwise, it creates a new OpenAI client using the `api_key` and `base_url` from the retrieved model.

The function then sends a chat completion request to the OpenAI API using the chat settings and messages from the request body, and the model from the database.

If the request is successful, it returns a streaming text response. If an error occurs, it returns a JSON response with an error message and status code.

## Usage

This file is likely used in a serverless function or API route in a Next.js application. The `POST` function would be called when a POST request is made to the corresponding endpoint.

## Interesting Structure or Nuance

The function handles specific error cases related to the API key. If the error message includes "api key not found" or "incorrect api key", it returns a custom error message suggesting the user to update their profile settings. This is a good example of error handling and providing helpful feedback to the user.