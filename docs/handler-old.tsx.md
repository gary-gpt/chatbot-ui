---
source: handler-old.tsx
generated: '2025-06-08T13:21:01.622Z'
tags: []
hash: d9f38cfd8f454a4e98bb5cc47d423d0a5cdfbecf6109e3fc78ec47c427692da5
---
# useChatHandler Hook

This hook provides a set of functions and references for managing chat interactions in the application.

## Importing

```javascript
import { useChatHandler } from "<path-to-hook>"
```

## Usage

```javascript
const {
  chatInputRef,
  handleNewChat,
  handleSendMessage,
  handleFocusChatInput,
  handleStopMessage,
  handleSendEdit
} = useChatHandler()
```

## Returned Values

- `chatInputRef`: A reference to the chat input element.
- `handleNewChat`: A function to initialize a new chat.
- `handleSendMessage`: A function to handle sending a message.
- `handleFocusChatInput`: A function to focus the chat input field.
- `handleStopMessage`: A function to stop the current message.
- `handleSendEdit`: A function to handle sending an edited message.

## Functions

### handleNewChat

This function initializes a new chat. It resets the user input, chat messages, selected chat, chat file items, chat files, chat images, new message files, new message images, and chat settings. It also sets the chat settings based on the selected assistant or preset.

### handleSendMessage

This function handles sending a message. It validates the chat settings, creates temporary user and assistant chat messages, and sends the message based on the selected tools or provider. It also creates a new chat if there is no current chat and updates the chat messages, chat file items, and chat images.

### handleFocusChatInput

This function focuses the chat input field.

### handleStopMessage

This function stops the current message by aborting the abort controller.

### handleSendEdit

This function handles sending an edited message. It deletes the messages including and after the edited message, filters the chat messages, and sends the edited message.
