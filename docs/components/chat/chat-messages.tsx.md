# ChatMessages Component

This is a React functional component that handles the display of chat messages. It uses the `ChatbotUIContext` to get the chat messages and chat file items. It also uses a custom hook `useChatHandler` to handle the editing of messages.

## Imports

- `useChatHandler` from "@/components/chat/chat-hooks/use-chat-handler"
- `ChatbotUIContext` from "@/context/context"
- `Tables` from "@/supabase/types"
- `FC, useContext, useState` from "react"
- `Message` from "../messages/message"

## Props

This component does not accept any props.

## State

The component maintains a local state `editingMessage` to keep track of the message that is currently being edited.

## Render

The component renders a list of `Message` components. Each `Message` component is passed the following props:

- `key`: The sequence number of the message.
- `message`: The message object.
- `fileItems`: The file items associated with the message.
- `isEditing`: A boolean indicating whether the message is currently being edited.
- `isLast`: A boolean indicating whether the message is the last in the list.
- `onStartEdit`: A function to set the `editingMessage` state.
- `onCancelEdit`: A function to unset the `editingMessage` state.
- `onSubmitEdit`: A function from `useChatHandler` to handle the submission of the edited message.

The chat messages are sorted by their sequence number before being mapped to `Message` components. For each message, the associated file items are filtered from `chatFileItems` before being passed to the `Message` component.