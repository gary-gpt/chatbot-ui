---
source: app/api/command/route.ts
generated: 2025-06-08T21:23:01.448Z
tags: []
hash: efb33c64c4a334ee678df893522905b3ee02a6d650fc8d2dc1bde1abd1f8900d
---

# Chatbot UI API Command Route Documentation

This document provides an overview of the `route.ts` file located at `/Users/garymason/chatbot-ui/app/api/command/`. This file is responsible for handling POST requests to the chatbot's API, specifically for generating chatbot responses using OpenAI's GPT-4 model.

## Dependencies

The file imports the following dependencies:

- `CHAT_SETTING_LIMITS`: A constant that defines the maximum output length for the chatbot's response.
- `checkApiKey` and `getServerProfile`: Helper functions for validating the OpenAI API key and retrieving server profile information.
- `OpenAI`: The OpenAI library, which is used to generate chatbot responses.

## Runtime

The `runtime` constant is set to `"edge"`, which indicates that the function should be run at the edge of the cloud, closer to the user for lower latency.

## POST Function

The `POST` function is an asynchronous function that handles POST requests. It expects a `Request` object and returns a `Response` object.

### Request Handling

The function begins by parsing the JSON body of the request. It expects the JSON to contain an `input` field, which represents the user's input to the chatbot.

### OpenAI Setup

The function then retrieves the server profile and checks the validity of the OpenAI API key. If the key is valid, it creates a new instance of the `OpenAI` class, passing in the API key and organization ID from the server profile.

### Chatbot Response Generation

The function then uses the `OpenAI` instance to generate a chatbot response. It does this by creating a "chat completion", which is a sequence of messages that the chatbot should respond to. The completion includes a system message instructing the chatbot to respond to the user, and a user message containing the user's input.

The function also sets the `temperature` parameter to `0`, which makes the chatbot's responses deterministic (i.e., the same input will always produce the same output), and the `max_tokens` parameter to the maximum output length defined in `CHAT_SETTING_LIMITS`.

### Response Handling

The function then extracts the chatbot's response from the completion and returns it in a `Response` object with a status of `200`.

### Error Handling

If any errors occur during this process, the function catches them and returns a `Response` object with an error message and status code. If the error does not have a message or status, it defaults to "An unexpected error occurred" and `500`, respectively.

## Code Summary

```ts
// Import necessary dependencies
import { CHAT_SETTING_LIMITS } from "@/lib/chat-setting-limits"
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import OpenAI from "openai"

// Set runtime to "edge"
export const runtime = "edge"

// Define POST function
export async function POST(request: Request) {
  // Parse JSON from request
  const json = await request.json()
  const { input } = json as {
    input: string
  }

  try {
    // Get server profile and check API key
    const profile = await getServerProfile()
    checkApiKey(profile.openai_api_key, "OpenAI")

    // Initialize OpenAI instance
    const openai = new OpenAI({
      apiKey: profile.openai_api_key || "",
      organization: profile.openai_organization_id
    })

    // Generate chatbot response
    const response = await openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages: [
        {
          role: "system",
          content: "Respond to the user."
        },
        {
          role: "user",
          content: input
        }
      ],
      temperature: 0,
      max_tokens: CHAT_SETTING_LIMITS["gpt-4-turbo-preview"].MAX_TOKEN_OUTPUT_LENGTH
    })

    // Extract chatbot response and return it
    const content = response.choices[0].message.content
    return new Response(JSON.stringify({ content }), {
      status: 200
    })
  } catch (error: any) {
    // Handle errors
    const errorMessage = error.error?.message || "An unexpected error occurred"
    const errorCode = error.status || 500
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
}
```