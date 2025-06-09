---
source: app/api/chat/perplexity/route.ts
generated: 2025-06-08T21:22:07.789Z
tags: []
hash: 2b9dff16c75b88a51e640a8d5f0685067190606a973fb1abfc2a952de8d16ab8
---

# Chatbot UI - Perplexity Route

This document provides an overview of the `route.ts` file located at `/Users/garymason/chatbot-ui/app/api/chat/perplexity/`. This file contains a single function `POST` that handles POST requests for the Perplexity API.

## Import Statements

The file begins by importing necessary modules and types:

```ts
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"
```

## Runtime

The `runtime` is set to "edge".

```ts
export const runtime = "edge"
```

## POST Function

The `POST` function is an asynchronous function that takes a `request` as input.

```ts
export async function POST(request: Request) {
```

### Request Parsing

The function begins by parsing the request into JSON and destructuring `chatSettings` and `messages` from the JSON object.

```ts
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }
```

### Try-Catch Block

The main logic of the function is wrapped in a try-catch block to handle any errors that may occur.

```ts
  try {
    // ...
  } catch (error: any) {
    // ...
  }
```

#### Try Block

In the try block, the function:

1. Retrieves the server profile
2. Checks the API key
3. Creates a new instance of `OpenAI` with the API key and base URL
4. Creates a new chat completion with the model, messages, and stream
5. Returns a new `StreamingTextResponse` with the stream

```ts
    const profile = await getServerProfile()

    checkApiKey(profile.perplexity_api_key, "Perplexity")

    const perplexity = new OpenAI({
      apiKey: profile.perplexity_api_key || "",
      baseURL: "https://api.perplexity.ai/"
    })

    const response = await perplexity.chat.completions.create({
      model: chatSettings.model,
      messages,
      stream: true
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
```

#### Catch Block

In the catch block, the function:

1. Sets a default error message and error code
2. Checks if the error message includes "api key not found" and updates the error message if true
3. Checks if the error code is 401 and updates the error message if true
4. Returns a new `Response` with the error message and error code

```ts
    let errorMessage = error.message || "An unexpected error occurred"
    const errorCode = error.status || 500

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "Perplexity API Key not found. Please set it in your profile settings."
    } else if (errorCode === 401) {
      errorMessage =
        "Perplexity API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
```