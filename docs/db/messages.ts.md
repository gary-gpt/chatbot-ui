---
source: db/messages.ts
generated: '2025-06-08T13:21:01.629Z'
tags: []
hash: 630240c0a54a43716a0a8887899816789274dbd32a51d8b249acc36e2ece2d44
---
# Messages API

This module provides functions to interact with the `messages` table in the Supabase database.

## Functions

### `getMessageById(messageId: string)`

Fetches a single message by its ID.

- **Parameters:**
  - `messageId: string`: The ID of the message to fetch.
- **Returns:** The message object if found, otherwise throws an error.

### `getMessagesByChatId(chatId: string)`

Fetches all messages associated with a specific chat ID.

- **Parameters:**
  - `chatId: string`: The ID of the chat to fetch messages for.
- **Returns:** An array of message objects if found, otherwise throws an error.

### `createMessage(message: TablesInsert<"messages">)`

Creates a new message.

- **Parameters:**
  - `message: TablesInsert<"messages">`: The message object to create.
- **Returns:** The created message object, otherwise throws an error if creation fails.

### `createMessages(messages: TablesInsert<"messages">[])`

Creates multiple new messages.

- **Parameters:**
  - `messages: TablesInsert<"messages">[]`: An array of message objects to create.
- **Returns:** An array of created message objects, otherwise throws an error if creation fails.

### `updateMessage(messageId: string, message: TablesUpdate<"messages">)`

Updates a specific message.

- **Parameters:**
  - `messageId: string`: The ID of the message to update.
  - `message: TablesUpdate<"messages">`: The new message object to replace the existing one.
- **Returns:** The updated message object, otherwise throws an error if update fails.

### `deleteMessage(messageId: string)`

Deletes a specific message.

- **Parameters:**
  - `messageId: string`: The ID of the message to delete.
- **Returns:** `true` if the deletion was successful, otherwise throws an error.

### `deleteMessagesIncludingAndAfter(userId: string, chatId: string, sequenceNumber: number)`

Deletes all messages including and after a specific sequence number in a chat for a user.

- **Parameters:**
  - `userId: string`: The ID of the user.
  - `chatId: string`: The ID of the chat.
  - `sequenceNumber: number`: The sequence number to start deleting messages from.
- **Returns:** `true` if the deletion was successful, otherwise returns an object with an `error` property.
