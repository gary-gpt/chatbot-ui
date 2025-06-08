# Source Code Documentation

## Imports

```javascript
import { Database } from "@/supabase/types"
import { ChatSettings } from "@/types"
import { createClient } from "@supabase/supabase-js"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { ServerRuntime } from "next"
import OpenAI from "openai"
import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions.mjs"
```

These lines import the necessary modules and types for the code. This includes types for the database and chat settings, the Supabase client, OpenAI stream and response types, the server runtime, the OpenAI main module, and the base parameters for chat completions.

## Constants

```javascript
export const runtime: ServerRuntime = "edge"
```

This line exports a constant `runtime` with a value of `"edge"`.

## Functions

### POST(request: Request)

This is an asynchronous function that takes a `request` object as an argument. The `request` object is expected to be a JSON object with `chatSettings`, `messages`, and `customModelId` properties.

The function first parses the JSON from the request. It then creates a Supabase client with the provided environment variables.

The function then queries the `models` table in the database for a model with the provided `customModelId`. If no such model is found, an error is thrown.

A new OpenAI client is then created with the API key and base URL from the custom model. A chat completion is then created with the provided messages and chat settings.

The response from the chat completion is then streamed using `OpenAIStream` and returned as a `StreamingTextResponse`.

If any errors occur during this process, an error message and status code are returned in a `Response` object. If the error message includes "api key not found" or "incorrect api key", a custom error message is returned.

## Error Handling

The function has robust error handling, catching any errors that occur during the process and returning a `Response` object with an appropriate error message and status code. The error message is customized for certain known error conditions.