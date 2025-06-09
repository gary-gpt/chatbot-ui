---
source: lib/build-prompt.ts
generated: 2025-06-08T22:30:03.835Z
tags: []
hash: e6abe862c85aa74d652826ae063d3e36b3aa6a6624e49cffecba0621ce56bf9f
---

# Chatbot UI Code Documentation

This TypeScript file is located at `/Users/garymason/chatbot-ui/lib/build-prompt.ts`. It contains functions for building and adapting messages for a chatbot UI. The main functions are `buildFinalMessages` and `adaptMessagesForGoogleGemini`.

## Import Statements

The file begins by importing necessary modules and types.

```ts
import { Tables } from "@/supabase/types"
import { ChatPayload, MessageImage } from "@/types"
import { encode } from "gpt-tokenizer"
import { getBase64FromDataURL, getMediaTypeFromDataURL } from "@/lib/utils"
```

## buildBasePrompt Function

The `buildBasePrompt` function takes in a prompt, profile context, workspace instructions, and assistant details. It constructs a full prompt based on these inputs.

```ts
const buildBasePrompt = (
  prompt: string,
  profileContext: string,
  workspaceInstructions: string,
  assistant: Tables<"assistants"> | null
) => {
  // Function body
}
```

## buildFinalMessages Function

The `buildFinalMessages` function takes in a payload, profile, and chat images. It processes the chat messages and builds the final messages to be sent in the chat.

```ts
export async function buildFinalMessages(
  payload: ChatPayload,
  profile: Tables<"profiles">,
  chatImages: MessageImage[]
) {
  // Function body
}
```

## buildRetrievalText Function

The `buildRetrievalText` function takes in file items and constructs a retrieval text based on these items.

```ts
function buildRetrievalText(fileItems: Tables<"file_items">[]) {
  // Function body
}
```

## adaptSingleMessageForGoogleGemini Function

The `adaptSingleMessageForGoogleGemini` function takes in a message and adapts it for Google Gemini.

```ts
function adaptSingleMessageForGoogleGemini(message: any) {
  // Function body
}
```

## adaptMessagesForGeminiVision Function

The `adaptMessagesForGeminiVision` function takes in messages and adapts them for Gemini Vision.

```ts
function adaptMessagesForGeminiVision(messages: any[]) {
  // Function body
}
```

## adaptMessagesForGoogleGemini Function

The `adaptMessagesForGoogleGemini` function takes in a payload and messages, and adapts the messages for Google Gemini.

```ts
export async function adaptMessagesForGoogleGemini(
  payload: ChatPayload,
  messages: any[]
) {
  // Function body
}
```

## Summary

In summary, this file contains functions for building and adapting messages for a chatbot UI. It is part of a larger chatbot UI application.