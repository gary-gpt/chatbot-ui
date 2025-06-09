---
source: context/context.tsx
generated: 2025-06-08T22:18:41.440Z
tags: []
hash: 457e22826a8db0421e54d4c88e5ecd0e8166ea737752afe49d4d222931f4ddff
---

# Chatbot UI Context

This TypeScript file defines the context for a chatbot user interface (UI). It includes various stores that hold the state and provide functions to update the state of different aspects of the chatbot UI. The context is created using the `createContext` function from the `react` library.

## Code Summary

The code can be broken down into several sections, each representing a different store within the context:

1. **Profile Store**: This store holds the profile of the current user.
2. **Items Store**: This store holds various items related to the chatbot, such as assistants, collections, chats, files, folders, models, presets, prompts, tools, and workspaces.
3. **Models Store**: This store holds information about the available models.
4. **Workspace Store**: This store holds the selected workspace and its images.
5. **Preset Store**: This store holds the selected preset.
6. **Assistant Store**: This store holds the selected assistant and its images.
7. **Passive Chat Store**: This store holds the user input, chat messages, chat settings, selected chat, and chat file items.
8. **Active Chat Store**: This store holds the abort controller, first token received, and is generating states.
9. **Chat Input Command Store**: This store holds the state of various commands and pickers in the chat input.
10. **Attachments Store**: This store holds the chat files, chat images, new message files, new message images, and show files display states.
11. **Retrieval Store**: This store holds the use retrieval and source count states.
12. **Tool Store**: This store holds the selected tools and the tool in use.

Each store in the context has a state variable and a corresponding dispatch function to update that state. The state variables are initialized with default values.

## Code Comments

```ts
// Importing necessary libraries and types
import { Tables } from "@/supabase/types"
import {
  ChatFile,
  ChatMessage,
  ChatSettings,
  LLM,
  MessageImage,
  OpenRouterLLM,
  WorkspaceImage
} from "@/types"
import { AssistantImage } from "@/types/images/assistant-image"
import { VALID_ENV_KEYS } from "@/types/valid-keys"
import { Dispatch, SetStateAction, createContext } from "react"

// Defining the interface for the chatbot UI context
interface ChatbotUIContext {
  // Each store is defined here with its state variable and dispatch function
}

// Creating the chatbot UI context with default values
export const ChatbotUIContext = createContext<ChatbotUIContext>({
  // Each store is initialized with its default value
})
```

This file does not contain any functions or methods, so there are no specific function or method comments. However, the purpose of each store and its state variables and dispatch functions are clearly defined in the `ChatbotUIContext` interface.