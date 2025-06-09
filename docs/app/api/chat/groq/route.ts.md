---
source: app/api/chat/groq/route.ts
generated: 2025-06-08T21:20:15.251Z
tags: []
hash: 72d4c1f4f325c27dc9487d78767def03aa46c95b603d7aa8c6a5d2bd0045021c
---

# Chatbot UI - Groq Route

This document provides an overview of the `route.ts` file located in the `/Users/garymason/chatbot-ui/app/api/chat/groq/` directory. This TypeScript file is responsible for handling POST requests to the chatbot's Groq API.

## Code Overview

```ts
import { CHAT_SETTING_LIMITS } from "@/lib/chat-setting-limits"
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"
```

The script begins by importing necessary modules and functions. These include chat setting limits, server chat helper functions, chat settings type, and OpenAI related modules.

```ts
export const runtime = "edge"
```

The `runtime` constant is set to `"edge"`, indicating that the function will run at the edge of the Cloudflare network, close to the user.

```ts
export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }
```

The `POST` function is an asynchronous function that handles POST requests. It first extracts the JSON body from the request, and then destructures `chatSettings` and `messages` from the JSON.

```ts
try {
  const profile = await getServerProfile()

  checkApiKey(profile.groq_api_key, "G")
```

The function then retrieves the server profile and checks the Groq API key.

```ts
const groq = new OpenAI({
  apiKey: profile.groq_api_key || "",
  baseURL: "https://api.groq.com/openai/v1"
})
```

An instance of the OpenAI class is created, with the Groq API key and base URL provided as parameters.

```ts
const response = await groq.chat.completions.create({
  model: chatSettings.model,
  messages,
  max_tokens:
    CHAT_SETTING_LIMITS[chatSettings.model].MAX_TOKEN_OUTPUT_LENGTH,
  stream: true
})
```

A chat completion is created using the provided chat settings, messages, and maximum token output length. The `stream` parameter is set to `true`, indicating that the response should be streamed.

```ts
const stream = OpenAIStream(response)

return new StreamingTextResponse(stream)
```

The response is then converted into a stream using the `OpenAIStream` function, and returned as a `StreamingTextResponse`.

```ts
} catch (error: any) {
  let errorMessage = error.message || "An unexpected error occurred"
  const errorCode = error.status || 500
```

If an error occurs during the execution of the function, an error message and error code are extracted from the error. If these are not provided, default values are used.

```ts
if (errorMessage.toLowerCase().includes("api key not found")) {
  errorMessage =
    "Groq API Key not found. Please set it in your profile settings."
} else if (errorCode === 401) {
  errorMessage =
    "Groq API Key is incorrect. Please fix it in your profile settings."
}
```

The error message is then checked for specific phrases to provide more detailed error messages to the user.

```ts
return new Response(JSON.stringify({ message: errorMessage }), {
  status: errorCode
})
```

Finally, a new `Response` is returned, with the error message and error code included in the response body and status, respectively.