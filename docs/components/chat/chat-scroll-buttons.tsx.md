---
source: components/chat/chat-scroll-buttons.tsx
generated: 2025-06-08T21:30:19.825Z
tags: []
hash: e8af6cdfcd8e809c40685cdca801bff0c068caca933fecadf233e78943751338
---

# Chat Scroll Buttons Component Documentation

This document provides an overview of the `ChatScrollButtons` component in the file `/Users/garymason/chatbot-ui/components/chat/chat-scroll-buttons.tsx`.

## Overview

The `ChatScrollButtons` component is a functional component in React that displays up and down arrow icons. These icons are used to scroll to the top or bottom of a chat interface when clicked. The visibility of these icons is dependent on the chat's current scroll position and whether the chat content is overflowing its container.

## Imports

```ts
import {
  IconCircleArrowDownFilled,
  IconCircleArrowUpFilled
} from "@tabler/icons-react"
import { FC } from "react"
```

The component imports two icons from `@tabler/icons-react`, which are used as the up and down scroll buttons. It also imports `FC` (Functional Component) from `react` to define the component type.

## Props

```ts
interface ChatScrollButtonsProps {
  isAtTop: boolean
  isAtBottom: boolean
  isOverflowing: boolean
  scrollToTop: () => void
  scrollToBottom: () => void
}
```

The `ChatScrollButtons` component accepts the following props:

- `isAtTop`: A boolean indicating whether the chat is currently scrolled to the top.
- `isAtBottom`: A boolean indicating whether the chat is currently scrolled to the bottom.
- `isOverflowing`: A boolean indicating whether the chat content is overflowing its container.
- `scrollToTop`: A function to be executed when the up arrow icon is clicked, typically to scroll the chat to the top.
- `scrollToBottom`: A function to be executed when the down arrow icon is clicked, typically to scroll the chat to the bottom.

## Component

```ts
export const ChatScrollButtons: FC<ChatScrollButtonsProps> = ({
  isAtTop,
  isAtBottom,
  isOverflowing,
  scrollToTop,
  scrollToBottom
}) => {
  return (
    <>
      {!isAtTop && isOverflowing && (
        <IconCircleArrowUpFilled
          className="cursor-pointer opacity-50 hover:opacity-100"
          size={32}
          onClick={scrollToTop}
        />
      )}

      {!isAtBottom && isOverflowing && (
        <IconCircleArrowDownFilled
          className="cursor-pointer opacity-50 hover:opacity-100"
          size={32}
          onClick={scrollToBottom}
        />
      )}
    </>
  )
}
```

The `ChatScrollButtons` component returns two icons: `IconCircleArrowUpFilled` and `IconCircleArrowDownFilled`. 

- The up arrow icon is only visible when the chat is not at the top and the content is overflowing. When clicked, it executes the `scrollToTop` function.
- The down arrow icon is only visible when the chat is not at the bottom and the content is overflowing. When clicked, it executes the `scrollToBottom` function.

Both icons have a base opacity of 50% that increases to 100% when hovered over, indicating they are clickable. They have a size of 32 pixels.