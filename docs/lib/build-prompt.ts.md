# Source Code Documentation

## Overview

This file contains several functions that are used to build and adapt messages for a chat system. The messages are built based on a payload that includes chat settings, workspace instructions, chat messages, an assistant, message file items, and chat file items.

## Functions

### buildBasePrompt

This function constructs a base prompt for the chat system. It takes four parameters:

- `prompt`: A string that represents the user's instructions.
- `profileContext`: A string that represents the user's profile context.
- `workspaceInstructions`: A string that represents the system's instructions.
- `assistant`: An object that represents the assistant. It can be null.

The function returns a string that represents the full prompt.

### buildFinalMessages

This asynchronous function builds the final messages for the chat system. It takes three parameters:

- `payload`: An object that represents the chat payload.
- `profile`: An object that represents the user's profile.
- `chatImages`: An array of objects that represent the chat images.

The function returns an array of final messages.

### buildRetrievalText

This function builds a retrieval text for the chat system. It takes one parameter:

- `fileItems`: An array of objects that represent the file items.

The function returns a string that represents the retrieval text.

### adaptSingleMessageForGoogleGemini

This function adapts a single message for Google Gemini. It takes one parameter:

- `message`: An object that represents the message.

The function returns an object that represents the adapted message.

### adaptMessagesForGeminiVision

This function adapts messages for Gemini Vision. It takes one parameter:

- `messages`: An array of objects that represent the messages.

The function returns an array of objects that represent the adapted messages.

### adaptMessagesForGoogleGemini

This asynchronous function adapts messages for Google Gemini. It takes two parameters:

- `payload`: An object that represents the chat payload.
- `messages`: An array of objects that represent the messages.

The function returns an array of objects that represent the adapted messages.