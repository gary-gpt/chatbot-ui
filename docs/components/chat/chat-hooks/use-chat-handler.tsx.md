---
source: components/chat/chat-hooks/use-chat-handler.tsx
generated: '2025-06-08T13:21:01.649Z'
tags: []
hash: 115cc4a397b608f097b3a7f5bdeea98c8ad842d3cb507574bea83ab015c07a45
---
# useChatHandler Hook

This hook is responsible for managing the chat interactions in the application.

## Import Statements

```jsx
import { ChatbotUIContext } from "@/context/context"
import { supabase } from "@/lib/supabase/browser-client"
import { parseMemoryTrigger } from "@/lib/memory/parseMemoryTrigger"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useRef } from "react"
import { ChatMessage, ChatPayload, LLMID, ModelProvider } from "@/types"
import { LLM_LIST } from "../../../lib/models/llm/llm-list"
import {
  createTempMessages,
  handleCreateChat,
  handleCreateMessages,
  handleHostedChat,
  handleLocalChat,
  handleRetrieval,
  processResponse,
  validateChatSettings
} from "../chat-helpers"
import { updateChat } from "@/db/chats"
import { getAssistantFilesByAssistantId } from "@/db/assistant-files"
import { getAssistantCollectionsByAssistantId } from "@/db/assistant-collections"
import { getCollectionFilesByCollectionId } from "@/db/collection-files"
import { getAssistantToolsByAssistantId } from "@/db/assistant-tools"
import { deleteMessagesIncludingAndAfter } from "@/db/messages"
import { buildFinalMessages } from "@/lib/build-prompt"
import { Tables } from "@/supabase/types"
```

## Hook Definition

```jsx
export const useChatHandler = () => {
  // Hook body...
}
```

## Hook Body

The hook body contains several variables and functions that are used to manage the chat interactions.

### Variables

The hook uses several variables from the `ChatbotUIContext` to manage the state of the chat.

### Functions

The hook defines several functions to handle different chat interactions:

- `handleNewChat`: This function is used to handle the creation of a new chat.
- `handleFocusChatInput`: This function is used to focus the chat input.
- `handleStopMessage`: This function is used to stop the current message.
- `handleSendMessage`: This function is used to send a message.
- `handleSendEdit`: This function is used to edit a sent message.

## Return Statement

The hook returns an object containing the `chatInputRef` and the functions defined in the hook body.

```jsx
return {
    chatInputRef,
    handleNewChat,
    handleSendMessage,
    handleFocusChatInput,
    handleStopMessage,
    handleSendEdit
  }
```
