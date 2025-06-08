---
source: components/chat/chat-scroll-buttons.tsx
generated: '2025-06-08T13:21:01.634Z'
tags: []
hash: 022cfde3a17f78c3ed1b7e8d88b4b5ee7318e580e791f85a0bfe5beaef97478d
---
# ChatScrollButtons Component

This is a React functional component that displays two icons for scrolling up and down in a chat interface. The icons are only visible if the chat content is overflowing and not at the top or bottom respectively.

## Import

```jsx
import { ChatScrollButtons } from './ChatScrollButtons';
```

## Props

The `ChatScrollButtons` component accepts the following props:

| Name | Type | Description |
| --- | --- | --- |
| `isAtTop` | `boolean` | Indicates whether the chat content is at the top. If true, the up arrow icon will not be displayed. |
| `isAtBottom` | `boolean` | Indicates whether the chat content is at the bottom. If true, the down arrow icon will not be displayed. |
| `isOverflowing` | `boolean` | Indicates whether the chat content is overflowing. The icons will only be displayed if the content is overflowing. |
| `scrollToTop` | `() => void` | Function to be called when the up arrow icon is clicked. |
| `scrollToBottom` | `() => void` | Function to be called when the down arrow icon is clicked. |

## Usage

```jsx
<ChatScrollButtons
  isAtTop={false}
  isAtBottom={false}
  isOverflowing={true}
  scrollToTop={() => console.log('Scroll to top')}
  scrollToBottom={() => console.log('Scroll to bottom')}
/>
```

In this example, the up and down arrow icons will be displayed because `isOverflowing` is true, `isAtTop` is false, and `isAtBottom` is false. When the icons are clicked, they will log 'Scroll to top' and 'Scroll to bottom' respectively.
