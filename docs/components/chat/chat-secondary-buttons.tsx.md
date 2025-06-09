---
source: components/chat/chat-secondary-buttons.tsx
generated: 2025-06-08T21:30:41.331Z
tags: []
hash: 5f4628a07b3771f72ac1d2f149a14fb7795867f97d2145d7ad75284216d5480f
---

# ChatSecondaryButtons Component Documentation

This document provides an overview of the `ChatSecondaryButtons` component in the `chatbot-ui` project. This component is located in the file: `/Users/garymason/chatbot-ui/components/chat/chat-secondary-buttons.tsx`.

## Overview

The `ChatSecondaryButtons` component is a functional component that displays secondary buttons in the chat interface. These buttons provide additional information about the selected chat and allow the user to start a new chat.

## Dependencies

This component imports several dependencies:

- `useChatHandler` custom hook from `@/components/chat/chat-hooks/use-chat-handler`
- `ChatbotUIContext` from `@/context/context`
- `IconInfoCircle` and `IconMessagePlus` from `@tabler/icons-react`
- `FC` (Functional Component) and `useContext` from `react`
- `WithTooltip` component from `../ui/with-tooltip`

## Props

The `ChatSecondaryButtons` component does not accept any props.

## Component Logic

The component uses the `useContext` hook to access the `selectedChat` object from the `ChatbotUIContext`. This object contains information about the currently selected chat.

The `useChatHandler` custom hook is used to get the `handleNewChat` function, which is used to start a new chat when the corresponding button is clicked.

## Rendered JSX

The component returns a fragment (`<>...</>`) that conditionally renders two `WithTooltip` components if a chat is selected (`selectedChat` is not `null` or `undefined`).

The first `WithTooltip` component displays information about the selected chat, such as the model, prompt, temperature, context length, profile context, workspace instructions, and embeddings provider. The trigger for this tooltip is the `IconInfoCircle` icon.

The second `WithTooltip` component displays a tooltip with the text "Start a new chat" when the `IconMessagePlus` icon is hovered over. Clicking on this icon calls the `handleNewChat` function, starting a new chat.

## Code Summary

```ts
// Import dependencies
import { useChatHandler } from "@/components/chat/chat-hooks/use-chat-handler"
import { ChatbotUIContext } from "@/context/context"
import { IconInfoCircle, IconMessagePlus } from "@tabler/icons-react"
import { FC, useContext } from "react"
import { WithTooltip } from "../ui/with-tooltip"

// Define component props
interface ChatSecondaryButtonsProps {}

// Define component
export const ChatSecondaryButtons: FC<ChatSecondaryButtonsProps> = ({}) => {
  // Get selected chat from context
  const { selectedChat } = useContext(ChatbotUIContext)

  // Get handleNewChat function from custom hook
  const { handleNewChat } = useChatHandler()

  // Return JSX
  return (
    // ... (omitted for brevity)
  )
}
```