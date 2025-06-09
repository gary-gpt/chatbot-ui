---
source: app/api/chat/anthropic/route.ts
generated: 2025-06-08T21:18:40.422Z
tags: []
hash: 71abb5f5eff20294b1d45bd74475db7a7b4e2127747b89bfacc7fff177b06eaf
---

# Anthropic Chatbot API Route

This file contains the code for the POST request handler of the `/api/chat/anthropic` route in a Next.js serverless function. The handler is responsible for processing chat messages and interacting with the Anthropic AI SDK to generate responses.

## Imports

```ts
import { CHAT_SETTING_LIMITS } from "@/lib/chat-setting-limits"
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { getBase64FromDataURL, getMediaTypeFromDataURL } from "@/lib/utils"
import { ChatSettings } from "@/types"
import Anthropic from "@anthropic-ai/sdk"
import { AnthropicStream, StreamingTextResponse } from "ai"
import { NextRequest, NextResponse } from "next/server"
```

The handler imports several helper functions, types, and libraries, including the Anthropic AI SDK and Next.js server types.

## Runtime

```ts
export const runtime = "edge"
```

The `runtime` constant is set to "edge", indicating that this serverless function is intended to be run on the edge network.

## POST Function

```ts
export async function POST(request: NextRequest) {
```

The `POST` function is an asynchronous function that handles POST requests. It takes a `NextRequest` object as an argument.

### Request Parsing

```ts
const json = await request.json()
const { chatSettings, messages } = json as {
  chatSettings: ChatSettings
  messages: any[]
}
```

The function begins by parsing the incoming request's JSON body. It expects the body to contain `chatSettings` and `messages` properties.

### Server Profile and API Key Check

```ts
const profile = await getServerProfile()
checkApiKey(profile.anthropic_api_key, "Anthropic")
```

The function retrieves the server profile and checks the Anthropic API key.

### Message Formatting

```ts
let ANTHROPIC_FORMATTED_MESSAGES: any = messages.slice(1)
```

The function slices the `messages` array to exclude the first message.

```ts
ANTHROPIC_FORMATTED_MESSAGES = ANTHROPIC_FORMATTED_MESSAGES?.map(
  (message: any) => {
    // ...
  }
)
```

The function then maps over the `ANTHROPIC_FORMATTED_MESSAGES` array to format each message.

### Anthropic API Call

```ts
const anthropic = new Anthropic({
  apiKey: profile.anthropic_api_key || ""
})
```

The function initializes a new instance of the Anthropic SDK with the API key from the server profile.

```ts
const response = await anthropic.messages.create({
  // ...
})
```

The function then makes a call to the `anthropic.messages.create` method to generate a response from the Anthropic API.

### Response Streaming

```ts
const stream = AnthropicStream(response)
return new StreamingTextResponse(stream)
```

The function creates a new stream from the API response and returns a new `StreamingTextResponse`.

### Error Handling

The function includes several `catch` blocks to handle potential errors that may occur during the execution of the function. It logs the errors to the console and returns a `NextResponse` with an appropriate error message and status code.