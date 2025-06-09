---
source: app/api/chat/openrouter/route.ts
generated: 2025-06-08T21:21:47.907Z
tags: []
hash: cb40d19cd00f07894de101a0b80e75aa76b2c852243c604b9188790148ea6f3d
---

# Chatbot UI API - OpenRouter Route

This file is located at `/Users/garymason/chatbot-ui/app/api/chat/openrouter/route.ts`. It is a TypeScript file that handles the chat functionality of a chatbot UI using the OpenAI API. It exports a `POST` function that accepts a request, processes it, and returns a response.

## Imports

```ts
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { ServerRuntime } from "next"
import OpenAI from "openai"
import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions.mjs"
```

The file imports several modules and types:

- `checkApiKey` and `getServerProfile` functions from the `server-chat-helpers` module.
- `ChatSettings` type from the `types` module.
- `OpenAIStream` and `StreamingTextResponse` from the `ai` module.
- `ServerRuntime` type from the `next` module.
- `OpenAI` from the `openai` module.
- `ChatCompletionCreateParamsBase` type from the `openai/resources/chat/completions.mjs` module.

## Runtime

```ts
export const runtime: ServerRuntime = "edge"
```

The `runtime` constant is exported and set to "edge", which indicates the server runtime environment.

## POST Function

```ts
export async function POST(request: Request) {
  ...
}
```

The `POST` function is exported for handling HTTP POST requests. It is an asynchronous function that takes a `Request` object as its argument.

### Request Processing

```ts
const json = await request.json()
const { chatSettings, messages } = json as {
  chatSettings: ChatSettings
  messages: any[]
}
```

The function begins by parsing the JSON body of the request. It then destructures `chatSettings` and `messages` from the parsed JSON.

### API Key Check and OpenAI Initialization

```ts
const profile = await getServerProfile()
checkApiKey(profile.openrouter_api_key, "OpenRouter")
const openai = new OpenAI({
  apiKey: profile.openrouter_api_key || "",
  baseURL: "https://openrouter.ai/api/v1"
})
```

The server profile is retrieved, and the OpenRouter API key from the profile is checked. If the API key is valid, an instance of `OpenAI` is initialized with the API key and the base URL of the OpenRouter API.

### Chat Completion Creation

```ts
const response = await openai.chat.completions.create({
  model: chatSettings.model as ChatCompletionCreateParamsBase["model"],
  messages: messages as ChatCompletionCreateParamsBase["messages"],
  temperature: chatSettings.temperature,
  max_tokens: undefined,
  stream: true
})
```

A chat completion is created with the `model`, `messages`, `temperature`, `max_tokens`, and `stream` parameters. The `model` and `messages` are cast to their respective types from `ChatCompletionCreateParamsBase`.

### Streaming Text Response

```ts
const stream = OpenAIStream(response)
return new StreamingTextResponse(stream)
```

The response from the chat completion creation is streamed using `OpenAIStream`, and a new `StreamingTextResponse` is returned with the stream.

### Error Handling

```ts
catch (error: any) {
  let errorMessage = error.message || "An unexpected error occurred"
  const errorCode = error.status || 500

  if (errorMessage.toLowerCase().includes("api key not found")) {
    errorMessage =
      "OpenRouter API Key not found. Please set it in your profile settings."
  }

  return new Response(JSON.stringify({ message: errorMessage }), {
    status: errorCode
  })
}
```

If an error occurs during the execution of the function, it is caught and handled. The error message and status code are retrieved from the error object. If the error message includes "api key not found", the error message is updated. A new `Response` is returned with the error message and status code.