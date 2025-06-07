**📄 Source File:** `/lib/build-prompt.ts`  
**🕒 Generated:** 2025-06-07 14:20:46 UTC  
**🤖 Model:** gpt-4

---

# Source File Documentation: Unnamed JavaScript/TypeScript File

## Overview

This file appears to be part of a chatbot or AI assistant application. It includes functions for building chat prompts and messages, and adapting these messages for Google's Gemini system. The file also imports several utility functions and types from other parts of the project.

## Functions and Exports

### `buildBasePrompt()`

This function generates a base prompt for the chatbot. It takes in a prompt string, a profile context string, workspace instructions, and an assistant object. It returns a formatted string that includes the assistant's name, the current date, user information, system instructions, and user instructions.

### `buildFinalMessages()`

This is an asynchronous function that constructs the final set of messages for a chat session. It takes in a chat payload, a profile object, and an array of chat images. The function processes the chat messages, calculates token counts, and builds a final array of messages. It also handles image paths and file items in the messages.

### `buildRetrievalText()`

This function generates a retrieval text string from an array of file items. The retrieval text is a formatted string that includes the content of each file item.

### `adaptSingleMessageForGoogleGemini()`

This function adapts a single message for Google's Gemini system. It takes in a message object and returns an adapted message object with a specific role and parts structure.

### `adaptMessagesForGeminiVision()`

This function adapts an array of messages for Gemini Pro Vision, which cannot process multiple messages. It reformats the messages, using all texts and only the last visual.

### `adaptMessagesForGoogleGemini()`

This is an asynchronous function that adapts an array of messages for Google's Gemini system. It uses the `adaptSingleMessageForGoogleGemini()` function to adapt each message, and the `adaptMessagesForGeminiVision()` function to adapt the entire array if the model is "gemini-pro-vision".

## Usage

This file is likely used in the context of a chatbot or AI assistant application. The `buildFinalMessages()` function could be used to generate the final set of messages for a chat session, and the `adaptMessagesForGoogleGemini()` function could be used to adapt these messages for Google's Gemini system.

## Interesting Structure or Nuance

The file makes extensive use of JavaScript's template literals and string interpolation to format text. It also uses the `encode()` function from the "gpt-tokenizer" package to calculate token counts, which could be related to the tokenization process in natural language processing. The file also handles image paths and file items in a special way, which could be related to how the application handles file attachments in chat messages.