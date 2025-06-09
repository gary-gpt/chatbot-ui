---
source: components/chat/chat-helpers/index.ts
generated: 2025-06-08T21:27:16.922Z
tags: []
hash: 138d4bd4f2dfffa0a89da345356689aabe875d084ba4be6862cdfe2b148b8cfc
---

# Chat Helpers Documentation

This file is a collection of helper functions for handling chat operations in a chatbot application. It includes functions for validating chat settings, handling message retrieval, creating temporary messages, handling local and hosted chats, fetching and processing chat responses, creating chats, and creating messages.

## Code Overview

```ts
import { createChatFiles } from "@/db/chat-files"
import { createChat } from "@/db/chats"
import { createMessageFileItems } from "@/db/message-file-items"
import { createMessages, updateMessage } from "@/db/messages"
import { uploadMessageImage } from "@/db/storage/message-images"
import {
  buildFinalMessages,
  adaptMessagesForGoogleGemini
} from "@/lib/build-prompt"
import { consumeReadableStream } from "@/lib/consume-stream"
import { Tables, TablesInsert } from "@/supabase/types"
import {
  ChatFile,
  ChatMessage,
  ChatPayload,
  ChatSettings,
  LLM,
  MessageImage
} from "@/types"
import React from "react"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"
```

This section imports various dependencies required for the helper functions. These include database operations, utility functions, types, and external libraries.

## Helper Functions

### `validateChatSettings()`

This function validates the chat settings and other related parameters. It throws an error if any of the required parameters are not provided.

### `handleRetrieval()`

This function handles the retrieval of chat messages. It sends a POST request to the `/api/retrieval/retrieve` endpoint with the user input and other parameters. It returns the results from the response.

### `createTempMessages()`

This function creates temporary user and assistant chat messages. It updates the chat messages state with these temporary messages and returns them.

### `handleLocalChat()`

This function handles local chat operations. It builds final messages, fetches the chat response, and processes the response.

### `handleHostedChat()`

This function handles hosted chat operations. It builds final messages, adapts the messages for Google Gemini if necessary, fetches the chat response, and processes the response.

### `fetchChatResponse()`

This function fetches the chat response from a specified URL. It sends a POST request to the URL with the provided body. It handles any errors and returns the response.

### `processResponse()`

This function processes the chat response. It consumes the response body as a readable stream and updates the chat messages state with the content from the response.

### `handleCreateChat()`

This function handles the creation of a new chat. It creates a new chat in the database, updates the chats state with the new chat, creates chat files for the new chat, and updates the chat files state with these new files.

### `handleCreateMessages()`

This function handles the creation of new chat messages. It creates new user and assistant messages in the database, uploads any images for the user message, updates the chat images state with these new images, and updates the chat messages state with the new messages.