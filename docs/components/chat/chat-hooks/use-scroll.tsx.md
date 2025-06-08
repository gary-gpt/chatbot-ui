---
source: components/chat/chat-hooks/use-scroll.tsx
generated: '2025-06-08T13:21:01.649Z'
tags: []
hash: 4c6337aaf018a28486d694ec7e1013bfb347e8f3dcdfc94193b3e8dc48c70c4f
---
# useScroll Hook Documentation

The `useScroll` hook is a custom React hook that provides functionality for handling scrolling events within a chat interface. It maintains several pieces of state related to the scroll position of the chat window and provides methods for programmatically scrolling to the top or bottom of the chat.

## Importing

```javascript
import { useScroll } from "<path-to-useScroll>"
```

## Return Values

The `useScroll` hook returns an object with the following properties:

- `messagesStartRef`: A React ref object pointing to the first message in the chat.
- `messagesEndRef`: A React ref object pointing to the last message in the chat.
- `isAtTop`: A boolean indicating whether the scroll position is at the top of the chat.
- `isAtBottom`: A boolean indicating whether the scroll position is at the bottom of the chat.
- `userScrolled`: A boolean indicating whether the user has manually scrolled the chat.
- `isOverflowing`: A boolean indicating whether the chat content overflows the chat container.
- `handleScroll`: A function that handles scroll events on the chat container.
- `scrollToTop`: A function that scrolls the chat to the top.
- `scrollToBottom`: A function that scrolls the chat to the bottom.
- `setIsAtBottom`: A function to set the `isAtBottom` state.

## Usage

The `useScroll` hook is intended to be used within a React component that needs to manage scrolling behavior. It should be called at the top level of a functional component or custom hook. 

The `handleScroll` function should be attached to the `onScroll` event of the chat container. The `scrollToTop` and `scrollToBottom` functions can be called programmatically to control the scroll position of the chat.

## Example

```javascript
import React from 'react';
import { useScroll } from "<path-to-useScroll>"

const ChatComponent = () => {
  const { 
    messagesStartRef, 
    messagesEndRef, 
    isAtTop, 
    isAtBottom, 
    userScrolled, 
    isOverflowing, 
    handleScroll, 
    scrollToTop, 
    scrollToBottom, 
    setIsAtBottom 
  } = useScroll();

  // Render chat messages and attach handleScroll to onScroll event
  // Use scrollToTop and scrollToBottom as needed
}
```

## Dependencies

This hook depends on the `ChatbotUIContext` context and the following hooks from React: `useCallback`, `useContext`, `useEffect`, `useRef`, `useState`.
