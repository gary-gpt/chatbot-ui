---
source: app/api/chat/google/route.ts
generated: 2025-06-08T21:19:46.067Z
tags: []
hash: 6752e3ed4a57f53ea2dd467cadaba3983d49b65f087077f512ebd407e426e502
---

# Chatbot API - Google Route

This file is located at `/Users/garymason/chatbot-ui/app/api/chat/google/route.ts`. It defines the logic for handling POST requests to the Google Chatbot API route.

## Code Summary

The code imports necessary modules and types, then exports a `runtime` constant and an asynchronous `POST` function. The `POST` function handles incoming requests, processes them with the Google Generative AI, and returns the AI's response. If an error occurs, it will return a response with an appropriate error message.

## Code Breakdown

```ts
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { GoogleGenerativeAI } from "@google/generative-ai"
```
The above lines import necessary helper functions, types, and modules.

```ts
export const runtime = "edge"
```
This line exports a constant `runtime` with the value `"edge"`.

```ts
export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }
```
This block of code defines an asynchronous function `POST` that takes a `request` as an argument. It then parses the request into JSON and destructures the `chatSettings` and `messages` properties from the JSON object.

```ts
try {
    const profile = await getServerProfile()

    checkApiKey(profile.google_gemini_api_key, "Google")

    const genAI = new GoogleGenerativeAI(profile.google_gemini_api_key || "")
    const googleModel = genAI.getGenerativeModel({ model: chatSettings.model })

    const lastMessage = messages.pop()

    const chat = googleModel.startChat({
      history: messages,
      generationConfig: {
        temperature: chatSettings.temperature
      }
    })

    const response = await chat.sendMessageStream(lastMessage.parts)
```
This `try` block retrieves the server profile, checks the Google API key, initializes the Google Generative AI with the API key, and gets the generative model based on the chat settings. It then starts a chat with the Google model using the message history and chat settings, and sends the last message from the messages array.

```ts
const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response.stream) {
          const chunkText = chunk.text()
          controller.enqueue(encoder.encode(chunkText))
        }
        controller.close()
      }
    })

    return new Response(readableStream, {
      headers: { "Content-Type": "text/plain" }
    })
```
This block of code creates a new `TextEncoder`, then creates a `ReadableStream` from the response stream. It encodes each chunk of the stream into text and enqueues it into the stream controller. Finally, it returns a new `Response` with the readable stream and a "Content-Type" header set to "text/plain".

```ts
catch (error: any) {
    let errorMessage = error.message || "An unexpected error occurred"
    const errorCode = error.status || 500

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "Google Gemini API Key not found. Please set it in your profile settings."
    } else if (errorMessage.toLowerCase().includes("api key not valid")) {
      errorMessage =
        "Google Gemini API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
```
This `catch` block handles any errors that occur during the execution of the `try` block. It sets a default error message and status code, then checks if the error message includes specific phrases to provide more detailed error messages. It then returns a new `Response` with the error message and status code.