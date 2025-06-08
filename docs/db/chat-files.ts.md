---
source: db/chat-files.ts
generated: '2025-06-08T13:21:01.628Z'
tags: []
hash: ecff46e1b0a87f89d290138f3a977beb98b72be9535375474892dd920d5d07f0
---
# Chat Files API

This module provides API functions to interact with chat files in the database using the Supabase client.

## Functions

### `getChatFilesByChatId(chatId: string)`

This asynchronous function retrieves chat files associated with a specific chat ID.

**Arguments**

- `chatId` (string): The ID of the chat.

**Returns**

- A promise that resolves to the chat files data.

**Throws**

- Throws an error if no chat files are found for the provided chat ID.

### `createChatFile(chatFile: TablesInsert<"chat_files">)`

This asynchronous function creates a new chat file record in the database.

**Arguments**

- `chatFile` (TablesInsert<"chat_files">): The chat file data to be inserted.

**Returns**

- A promise that resolves to the created chat file data.

**Throws**

- Throws an error if the chat file could not be created.

### `createChatFiles(chatFiles: TablesInsert<"chat_files">[])`

This asynchronous function creates multiple new chat file records in the database.

**Arguments**

- `chatFiles` (TablesInsert<"chat_files">[]): An array of chat file data to be inserted.

**Returns**

- A promise that resolves to the array of created chat files data.

**Throws**

- Throws an error if the chat files could not be created.

## Usage

First, import the functions from the module:

```javascript
import { getChatFilesByChatId, createChatFile, createChatFiles } from "@/lib/chatFiles"
```

Then, you can use the functions as follows:

```javascript
// Get chat files by chat ID
const chatFiles = await getChatFilesByChatId("chatId")

// Create a new chat file
const newChatFile = await createChatFile({
  id: "fileId",
  name: "fileName",
  chatId: "chatId",
})

// Create multiple new chat files
const newChatFiles = await createChatFiles([
  {
    id: "fileId1",
    name: "fileName1",
    chatId: "chatId1",
  },
  {
    id: "fileId2",
    name: "fileName2",
    chatId: "chatId2",
  },
])
```
