---
source: components/sidebar/items/chat/chat-item.tsx
generated: 2025-06-08T21:45:18.214Z
tags: []
hash: eb53d9b637ed16bfdd214e5e40f3d249e6c6f31da5e94b05f7d0d05b42ec6ff0
---

# ChatItem Component Documentation

This file is located at `/Users/garymason/chatbot-ui/components/sidebar/items/chat/chat-item.tsx`. It exports a `ChatItem` component, which is a functional component in React. This component represents a single chat item in the chatbot UI sidebar.

## Imports

The component imports several dependencies, including:

- Various components and utilities from the local project
- `useParams` and `useRouter` from `next/navigation` for routing purposes
- `FC`, `useContext`, and `useRef` from `react` for creating functional components, using context, and referencing DOM elements respectively
- `DeleteChat` and `UpdateChat` components which are used for deleting and updating the chat

## Props

The `ChatItem` component accepts a single prop:

- `chat`: An object representing the chat item. It is of type `Tables<"chats">`.

## Component Logic

The `ChatItem` component uses several pieces of data from the `ChatbotUIContext` context. It also uses the `useRouter` and `useParams` hooks from Next.js to handle routing and to determine whether the current chat item is active.

The component defines a `handleClick` function that navigates to the chat's page when the chat item is clicked, and a `handleKeyDown` function that triggers a click event when the Enter key is pressed.

The `MODEL_DATA` constant is defined by finding the model data that matches the `modelId` of the chat. The `assistantImage` constant is defined by finding the image that matches the `assistantId` of the chat.

## Rendered JSX

The component returns a `div` that represents the chat item. The `div` includes:

- An image or icon representing the assistant or model associated with the chat
- The name of the chat
- `UpdateChat` and `DeleteChat` components for updating and deleting the chat

The `div` has several event handlers attached to it, including `onClick` for handling click events and `onKeyDown` for handling keydown events.

## Code

```tsx
// Import dependencies
// ...

// Define the ChatItemProps interface
interface ChatItemProps {
  chat: Tables<"chats">
}

// Define the ChatItem component
export const ChatItem: FC<ChatItemProps> = ({ chat }) => {
  // Use context and hooks
  // ...

  // Define event handlers
  // ...

  // Find the model data and assistant image
  // ...

  // Return the rendered JSX
  // ...
}
```

## Conclusion

The `ChatItem` component is a crucial part of the chatbot UI. It allows users to navigate to different chats, and provides options to update or delete chats.