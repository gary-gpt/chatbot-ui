---
source: db/chats.ts
generated: '2025-06-08T13:21:01.628Z'
tags: []
hash: 9c3ad1438f3603257e61bf18d13ba2565f98834937abf25fc8f49ad42b90ed95
---
# Chat Service Documentation

This module provides a set of functions to interact with the `chats` table in the Supabase database.

## Functions

### `getChatById(chatId: string)`

This function retrieves a chat by its ID.

- `chatId`: The ID of the chat to retrieve.

Returns a Promise that resolves to the chat object.

### `getChatsByWorkspaceId(workspaceId: string)`

This function retrieves all chats associated with a specific workspace ID.

- `workspaceId`: The ID of the workspace.

Returns a Promise that resolves to an array of chat objects. If no chats are found, it throws an Error.

### `createChat(chat: TablesInsert<"chats">)`

This function creates a new chat in the database.

- `chat`: The chat object to create.

Returns a Promise that resolves to the created chat object. If the creation fails, it throws an Error.

### `createChats(chats: TablesInsert<"chats">[])`

This function creates multiple new chats in the database.

- `chats`: An array of chat objects to create.

Returns a Promise that resolves to an array of created chat objects. If the creation fails, it throws an Error.

### `updateChat(chatId: string, chat: TablesUpdate<"chats">)`

This function updates a chat in the database.

- `chatId`: The ID of the chat to update.
- `chat`: The chat object with updated values.

Returns a Promise that resolves to the updated chat object. If the update fails, it throws an Error.

### `deleteChat(chatId: string)`

This function deletes a chat from the database.

- `chatId`: The ID of the chat to delete.

Returns a Promise that resolves to `true` if the deletion was successful. If the deletion fails, it throws an Error.
