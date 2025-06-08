---
source: components/chat/chat-secondary-buttons.tsx
generated: '2025-06-08T13:21:01.634Z'
tags: []
hash: 3a639338a6da2b542d95a8e279a88ae0e57c900aaf23defbcd6033143fe43160
---
# ChatSecondaryButtons Component Documentation

## Overview

The `ChatSecondaryButtons` component is a functional component in React that renders two buttons with tooltips. These buttons provide additional functionality in the chat interface. The buttons are only displayed if a chat is selected.

## Imports

- `useChatHandler` - A custom hook from "@/components/chat/chat-hooks/useChatHandler" that provides chat-related functionalities.
- `ChatbotUIContext` - The context object from "@/context/context" that provides the current state of the chatbot UI.
- `IconInfoCircle`, `IconMessagePlus` - Icons from "@tabler/icons-react" library.
- `FC`, `useContext` - React built-in hooks for functional components and context API.
- `WithTooltip` - A component that wraps other components and provides a tooltip functionality.

## Props

The `ChatSecondaryButtons` component does not accept any props.

## Functionality

The `ChatSecondaryButtons` component uses the `useContext` hook to access the `selectedChat` from the `ChatbotUIContext`. It also uses the `useChatHandler` hook to get the `handleNewChat` function.

The component returns two buttons wrapped with tooltips:

1. **Chat Info Button**: This button displays information about the selected chat when hovered over. The information includes the chat model, prompt, temperature, context length, whether the profile context is enabled, whether workspace instructions are enabled, and the embeddings provider.

2. **Start New Chat Button**: This button triggers the `handleNewChat` function when clicked. The tooltip displays "Start a new chat" when hovered over.

## Styling

The component uses Tailwind CSS for styling. The icons change their opacity on hover, and the tooltip content is styled with different font sizes, margins, and maximum widths at different breakpoints.

## Usage

```jsx
<ChatSecondaryButtons />
```

This component does not accept any props. It should be used within a `ChatbotUIContext.Provider` to have access to the `selectedChat` context.
