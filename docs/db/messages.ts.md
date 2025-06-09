---
source: db/messages.ts
generated: 2025-06-08T22:24:28.592Z
tags: []
hash: 65da722bcdd5fb8badd0590459996d198577c3d35bc5515ddca8e532e27c8640
---

# Messages Database Operations

This file (`/Users/garymason/chatbot-ui/db/messages.ts`) contains a collection of functions that interact with the 'messages' table in the database. These functions are used to perform CRUD (Create, Retrieve, Update, Delete) operations on the 'messages' table.

## Import Statements

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
```

The file imports the `supabase` client from the `browser-client` file in the `supabase` library. It also imports `TablesInsert` and `TablesUpdate` types from the `types` file in the `supabase` directory.

## Functions

### getMessageById

```ts
export const getMessageById = async (messageId: string) => {
  const { data: message } = await supabase
    .from("messages")
    .select("*")
    .eq("id", messageId)
    .single()

  if (!message) {
    throw new Error("Message not found")
  }

  return message
}
```

This function retrieves a single message from the 'messages' table using its ID. If the message is not found, it throws an error.

### getMessagesByChatId

```ts
export const getMessagesByChatId = async (chatId: string) => {
  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .eq("chat_id", chatId)

  if (!messages) {
    throw new Error("Messages not found")
  }

  return messages
}
```

This function retrieves all messages associated with a specific chat ID. If no messages are found, it throws an error.

### createMessage

```ts
export const createMessage = async (message: TablesInsert<"messages">) => {
  const { data: createdMessage, error } = await supabase
    .from("messages")
    .insert([message])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return createdMessage
}
```

This function creates a new message in the 'messages' table. If there's an error during the creation, it throws an error.

### createMessages

```ts
export const createMessages = async (messages: TablesInsert<"messages">[]) => {
  const { data: createdMessages, error } = await supabase
    .from("messages")
    .insert(messages)
    .select("*")

  if (error) {
    throw new Error(error.message)
  }

  return createdMessages
}
```

This function creates multiple new messages in the 'messages' table. If there's an error during the creation, it throws an error.

### updateMessage

```ts
export const updateMessage = async (
  messageId: string,
  message: TablesUpdate<"messages">
) => {
  const { data: updatedMessage, error } = await supabase
    .from("messages")
    .update(message)
    .eq("id", messageId)
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return updatedMessage
}
```

This function updates a specific message in the 'messages' table using its ID. If there's an error during the update, it throws an error.

### deleteMessage

```ts
export const deleteMessage = async (messageId: string) => {
  const { error } = await supabase.from("messages").delete().eq("id", messageId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
```

This function deletes a specific message from the 'messages' table using its ID. If there's an error during the deletion, it throws an error.

### deleteMessagesIncludingAndAfter

```ts
export async function deleteMessagesIncludingAndAfter(
  userId: string,
  chatId: string,
  sequenceNumber: number
) {
  const { error } = await supabase.rpc("delete_messages_including_and_after", {
    p_user_id: userId,
    p_chat_id: chatId,
    p_sequence_number: sequenceNumber
  })

  if (error) {
    return {
      error: "Failed to delete messages."
    }
  }

  return true
}
```

This function deletes all messages from a specific chat that have a sequence number equal to or greater than the provided sequence number. If there's an error during the deletion, it returns an error message.