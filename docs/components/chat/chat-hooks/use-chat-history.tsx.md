---
source: components/chat/chat-hooks/use-chat-history.tsx
generated: 2025-06-08T21:27:51.448Z
tags: []
hash: cb091d4d3855cc2242cbbe91f78821a3bac4299f247f01ee2707977e333e45ed
---

# Documentation for useChatHistoryHandler.tsx

This file is a custom React hook that handles chat history in the chat component of a chatbot UI. The hook provides functions to set the new message content to the previous or next user message in the chat history.

## Import Statements

```ts
import { ChatbotUIContext } from "@/context/context"
import { useContext, useEffect, useState } from "react"
```

The hook imports the `ChatbotUIContext` from the context folder, which provides the context for the chatbot UI. It also imports `useContext`, `useEffect`, and `useState` from React.

## useChatHistoryHandler Function

```ts
export const useChatHistoryHandler = () => {
```

This is the main function of the file. It's a custom hook that returns an object containing two functions: `setNewMessageContentToPreviousUserMessage` and `setNewMessageContentToNextUserMessage`.

### Context and State Variables

```ts
const { setUserInput, chatMessages, isGenerating } =
    useContext(ChatbotUIContext)
const userRoleString = "user"

const [messageHistoryIndex, setMessageHistoryIndex] = useState<number>(
    chatMessages.length
)
```

The hook uses the `ChatbotUIContext` to get the `setUserInput`, `chatMessages`, and `isGenerating` values. It also sets the `userRoleString` to "user" and initializes `messageHistoryIndex` state variable with the length of `chatMessages`.

### useEffect Hook

```ts
useEffect(() => {
    if (!isGenerating && messageHistoryIndex > chatMessages.length)
      setMessageHistoryIndex(chatMessages.length)
  }, [chatMessages, isGenerating, messageHistoryIndex])
```

This `useEffect` hook checks if the `messageHistoryIndex` is out of bounds (greater than the length of `chatMessages`) and if so, it resets the `messageHistoryIndex` to the length of `chatMessages`.

### setNewMessageContentToPreviousUserMessage Function

```ts
const setNewMessageContentToPreviousUserMessage = () => {
```

This function sets the new message content to the previous user message in the chat history.

### setNewMessageContentToNextUserMessage Function

```ts
const setNewMessageContentToNextUserMessage = () => {
```

This function sets the new message content to the next user message in the chat history. If there is no next user message, it resets the user input and sets the message history index to the end of the chat history.

## Return Statement

```ts
return {
    setNewMessageContentToPreviousUserMessage,
    setNewMessageContentToNextUserMessage
  }
```

The hook returns an object containing the `setNewMessageContentToPreviousUserMessage` and `setNewMessageContentToNextUserMessage` functions.