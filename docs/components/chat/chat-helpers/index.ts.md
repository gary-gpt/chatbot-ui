---
source: components/chat/chat-helpers/index.ts
generated: '2025-06-08T13:21:01.649Z'
tags: []
hash: 54c16430bfd33e6f89e5855f00ed2972c8a682ed74451067c1b845f9b4376b84
---
# Documentation

This file contains a collection of functions related to handling chat interactions in the application. The functions are used for validating chat settings, retrieving chat data, creating temporary messages, handling local and hosted chats, fetching chat responses, processing responses, creating chats, and creating messages.

## Functions

### `validateChatSettings`

This function validates the chat settings, model data, profile, selected workspace, and message content. It throws an error if any of these are not found.

### `handleRetrieval`

This function handles the retrieval of chat data. It sends a POST request to the `/api/retrieval/retrieve` endpoint with the user input, file IDs, embeddings provider, and source count. It returns the results of the retrieval.

### `createTempMessages`

This function creates temporary user and assistant chat messages. It also updates the chat messages state with the new temporary messages.

### `handleLocalChat`

This function handles local chat interactions. It builds the final messages, fetches the chat response, and processes the response.

### `handleHostedChat`

This function handles hosted chat interactions. It builds the final messages, fetches the chat response, and processes the response.

### `fetchChatResponse`

This function fetches the chat response from a given URL. It sends a POST request to the URL with the provided body. It handles any errors that occur during the request.

### `processResponse`

This function processes the response from the chat API. It consumes the readable stream from the response body and updates the chat messages state with the new content.

### `handleCreateChat`

This function handles the creation of a new chat. It creates the chat, updates the selected chat and chats state, creates the chat files, and updates the chat files state.

### `handleCreateMessages`

This function handles the creation of new chat messages. It creates the messages, updates the chat messages state, uploads any new message images, updates the chat images state, creates the message file items, and updates the chat file items state.

## Imports

This file imports several functions and types from various modules, including:

- Database functions from `@/db`
- Helper functions from `@/lib`
- Types from `@/supabase/types` and `@/types`
- The `toast` function from `sonner`
- The `uuidv4` function from `uuid`
- The `React` module

## Exports

This file exports all of the functions defined in it.
