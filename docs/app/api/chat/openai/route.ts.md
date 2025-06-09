---
source: app/api/chat/openai/route.ts
generated: 2025-06-08T21:21:19.824Z
tags: []
hash: 14a8409191a35e31291ab47c6372d5a93e502082406cf8d2c354c927fa32be58
---

# OpenAI Chatbot Route Documentation

This file is located at `/Users/garymason/chatbot-ui/app/api/chat/openai/route.ts`. It is responsible for handling POST requests to the OpenAI chatbot API.

## Import Statements

The file begins by importing the necessary modules and types:

```ts
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { ServerRuntime } from "next"
import OpenAI from "openai"
import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions.mjs"
```

## ServerRuntime Configuration

The `runtime` constant is set to `"edge"`, indicating that the server runtime environment is Edge.

```ts
export const runtime: ServerRuntime = "edge"
```

## POST Function

The `POST` function is an asynchronous function that handles POST requests.

```ts
export async function POST(request: Request) {
```

### Request Parsing

The function begins by parsing the JSON from the request body. It expects the JSON to contain `chatSettings` and `messages`.

```ts
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }
```

### API Key Verification and OpenAI Initialization

The function then retrieves the server profile and checks the OpenAI API key. If the API key is valid, it initializes an instance of OpenAI with the API key and the organization ID from the server profile.

```ts
    const profile = await getServerProfile()

    checkApiKey(profile.openai_api_key, "OpenAI")

    const openai = new OpenAI({
      apiKey: profile.openai_api_key || "",
      organization: profile.openai_organization_id
    })
```

### Chat Completion Creation

The function then creates a chat completion with the provided model, messages, temperature, and maximum tokens. If the model is `"gpt-4-vision-preview"` or `"gpt-4o"`, the maximum tokens is set to 4096.

```ts
    const response = await openai.chat.completions.create({
      model: chatSettings.model as ChatCompletionCreateParamsBase["model"],
      messages: messages as ChatCompletionCreateParamsBase["messages"],
      temperature: chatSettings.temperature,
      max_tokens:
        chatSettings.model === "gpt-4-vision-preview" ||
        chatSettings.model === "gpt-4o"
          ? 4096
          : null, // TODO: Fix
      stream: true
    })
```

### Streaming Response

The function then creates a streaming response from the chat completion and returns it.

```ts
    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
```

### Error Handling

If an error occurs during the process, the function catches it and returns a response with the error message and status code. If the error message contains "api key not found" or "incorrect api key", the error message is replaced with a more user-friendly message.

```ts
  } catch (error: any) {
    let errorMessage = error.message || "An unexpected error occurred"
    const errorCode = error.status || 500

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "OpenAI API Key not found. Please set it in your profile settings."
    } else if (errorMessage.toLowerCase().includes("incorrect api key")) {
      errorMessage =
        "OpenAI API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
}
```