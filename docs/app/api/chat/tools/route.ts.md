---
source: app/api/chat/tools/route.ts
generated: 2025-06-08T21:22:35.777Z
tags: []
hash: 8a40a837790210746b87524d7cece62251d4b8ac779737ddf360f48bb6b812ce
---

# Chatbot API Route Documentation

This TypeScript file, located at `/Users/garymason/chatbot-ui/app/api/chat/tools/route.ts`, defines the POST method for the chatbot API route. It is responsible for handling the chatbot's interaction with the OpenAI API, including sending messages, handling responses, and managing tool calls.

## Import Statements

The file begins by importing several required modules and functions:

```ts
import { openapiToFunctions } from "@/lib/openapi-conversion"
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { Tables } from "@/supabase/types"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"
import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions.mjs"
```

## POST Function

The `POST` function is the main function in this file. It is an asynchronous function that handles the POST request to the chatbot API route.

```ts
export async function POST(request: Request) {
  // Function body
}
```

### Request Parsing

The function begins by parsing the incoming request into a JSON object. It then destructures the JSON object into `chatSettings`, `messages`, and `selectedTools`.

```ts
const json = await request.json()
const { chatSettings, messages, selectedTools } = json as {
  chatSettings: ChatSettings
  messages: any[]
  selectedTools: Tables<"tools">[]
}
```

### API Key Verification and OpenAI Initialization

The function then retrieves the server profile and checks the validity of the OpenAI API key. If the API key is valid, an instance of the OpenAI API is created.

```ts
const profile = await getServerProfile()

checkApiKey(profile.openai_api_key, "OpenAI")

const openai = new OpenAI({
  apiKey: profile.openai_api_key || "",
  organization: profile.openai_organization_id
})
```

### Tool Selection and Schema Conversion

The function then loops through each selected tool, converts the tool's schema to functions using the `openapiToFunctions` function, and stores the functions and route maps in arrays.

```ts
for (const selectedTool of selectedTools) {
  // Tool selection and schema conversion code
}
```

### OpenAI Chat Completion Creation

The function then sends a chat completion request to the OpenAI API, adds the response to the `messages` array, and retrieves the tool calls from the response.

```ts
const firstResponse = await openai.chat.completions.create({
  model: chatSettings.model as ChatCompletionCreateParamsBase["model"],
  messages,
  tools: allTools.length > 0 ? allTools : undefined
})

const message = firstResponse.choices[0].message
messages.push(message)
const toolCalls = message.tool_calls || []
```

### Tool Call Handling

If there are any tool calls in the response, the function then handles each tool call by finding the corresponding schema detail, determining the request path, and sending the request to the appropriate endpoint.

```ts
if (toolCalls.length > 0) {
  for (const toolCall of toolCalls) {
    // Tool call handling code
  }
}
```

### Second OpenAI Chat Completion Creation

After all tool calls have been handled, the function sends a second chat completion request to the OpenAI API and returns a streaming text response.

```ts
const secondResponse = await openai.chat.completions.create({
  model: chatSettings.model as ChatCompletionCreateParamsBase["model"],
  messages,
  stream: true
})

const stream = OpenAIStream(secondResponse)

return new StreamingTextResponse(stream)
```

### Error Handling

If any errors occur during the execution of the function, they are caught and logged, and an error response is returned.

```ts
catch (error: any) {
  console.error(error)
  const errorMessage = error.error?.message || "An unexpected error occurred"
  const errorCode = error.status || 500
  return new Response(JSON.stringify({ message: errorMessage }), {
    status: errorCode
  })
}
```