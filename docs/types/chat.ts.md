---
source: types/chat.ts
generated: 2025-06-08T22:43:25.024Z
tags: []
hash: ac22e39e9d8533a046a08003b33bbcf9db7e88dcf6e003115a2625275b1072e1
---

# Chatbot User Interface Types Documentation

This document explains the purpose and logic of the TypeScript file located at `/Users/garymason/chatbot-ui/types/chat.ts`. This file contains TypeScript interfaces that define the structure of various objects related to chat settings and payloads in a chatbot application.

## Table of Contents

- [ChatSettings Interface](#chatsettings-interface)
- [ChatPayload Interface](#chatpayload-interface)
- [ChatAPIPayload Interface](#chatapipayload-interface)

## ChatSettings Interface

```ts
export interface ChatSettings {
  model: LLMID
  prompt: string
  temperature: number
  contextLength: number
  includeProfileContext: boolean
  includeWorkspaceInstructions: boolean
  embeddingsProvider: "openai" | "local"
}
```

The `ChatSettings` interface defines the settings for a chat session. It includes the following properties:

- `model`: This is an identifier for the language model used in the chat session.
- `prompt`: This is the initial message or question that starts the chat session.
- `temperature`: This is a parameter that controls the randomness of the model's responses.
- `contextLength`: This is the maximum length of the conversation context that the model takes into account when generating a response.
- `includeProfileContext`: This is a boolean value that indicates whether to include the profile context in the chat session.
- `includeWorkspaceInstructions`: This is a boolean value that indicates whether to include workspace instructions in the chat session.
- `embeddingsProvider`: This specifies the provider of the embeddings used in the chat session. It can be either "openai" or "local".

## ChatPayload Interface

```ts
export interface ChatPayload {
  chatSettings: ChatSettings
  workspaceInstructions: string
  chatMessages: ChatMessage[]
  assistant: Tables<"assistants"> | null
  messageFileItems: Tables<"file_items">[]
  chatFileItems: Tables<"file_items">[]
}
```

The `ChatPayload` interface defines the payload for a chat session. It includes the following properties:

- `chatSettings`: This is an object of the `ChatSettings` interface that contains the settings for the chat session.
- `workspaceInstructions`: This is a string that contains the instructions for the workspace.
- `chatMessages`: This is an array of `ChatMessage` objects that contains the messages of the chat session.
- `assistant`: This is an object from the "assistants" table in the database, or null if there is no assistant.
- `messageFileItems`: This is an array of objects from the "file_items" table in the database that are associated with the messages.
- `chatFileItems`: This is an array of objects from the "file_items" table in the database that are associated with the chat session.

## ChatAPIPayload Interface

```ts
export interface ChatAPIPayload {
  chatSettings: ChatSettings
  messages: Tables<"messages">[]
}
```

The `ChatAPIPayload` interface defines the payload for a chat API request. It includes the following properties:

- `chatSettings`: This is an object of the `ChatSettings` interface that contains the settings for the chat session.
- `messages`: This is an array of objects from the "messages" table in the database that contains the messages of the chat session.