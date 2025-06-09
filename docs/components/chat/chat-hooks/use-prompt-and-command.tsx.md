---
source: components/chat/chat-hooks/use-prompt-and-command.tsx
generated: 2025-06-08T21:28:19.400Z
tags: []
hash: 5143d83c8831d14b6455c9469c28c97a0c4c9fb92e9d58a3df76945a2a4cac28
---

# use-prompt-and-command.tsx Documentation

This TypeScript file exports a custom React hook named `usePromptAndCommand` which is used to handle user input and selections in a chatbot user interface. The hook provides a set of functions to handle different types of user inputs and selections, such as prompts, files, collections, tools, and assistants.

## Code Summary

The `usePromptAndCommand` hook uses the `ChatbotUIContext` to access and manipulate the state of the chatbot user interface. It defines several handlers for different types of user input and selections:

- `handleInputChange`: Handles changes in the user's text input. It uses regular expressions to detect special commands starting with `@`, `/`, `#`, and `!`. Depending on the detected command, it opens the appropriate picker and sets the command value.
- `handleSelectPrompt`: Handles the user's selection of a prompt. It closes the prompt picker and appends the selected prompt to the user's input.
- `handleSelectUserFile`: Handles the user's selection of a file. It displays the selected files, closes the file picker, and adds the selected file to the new message files if it hasn't been selected before.
- `handleSelectUserCollection`: Handles the user's selection of a collection. It displays the selected files, closes the file picker, and adds the files in the selected collection to the new message files if they haven't been selected before.
- `handleSelectTool`: Handles the user's selection of a tool. It closes the tool picker and adds the selected tool to the selected tools.
- `handleSelectAssistant`: Handles the user's selection of an assistant. It closes the assistant picker, sets the selected assistant, updates the chat settings based on the assistant's properties, and adds the assistant's files and tools to the chat files and selected tools.

The hook returns these handlers so they can be used by the components that use this hook.

## Code Comments

```ts
// Import necessary dependencies and types
import { ChatbotUIContext } from "@/context/context"
import { getAssistantCollectionsByAssistantId } from "@/db/assistant-collections"
import { getAssistantFilesByAssistantId } from "@/db/assistant-files"
import { getAssistantToolsByAssistantId } from "@/db/assistant-tools"
import { getCollectionFilesByCollectionId } from "@/db/collection-files"
import { Tables } from "@/supabase/types"
import { LLMID } from "@/types"
import { useContext } from "react"

// Define the custom hook
export const usePromptAndCommand = () => {
  // Destructure the necessary state variables and setters from the context
  const {
    chatFiles,
    setNewMessageFiles,
    userInput,
    setUserInput,
    setShowFilesDisplay,
    setIsPromptPickerOpen,
    setIsFilePickerOpen,
    setSlashCommand,
    setHashtagCommand,
    setUseRetrieval,
    setToolCommand,
    setIsToolPickerOpen,
    setSelectedTools,
    setAtCommand,
    setIsAssistantPickerOpen,
    setSelectedAssistant,
    setChatSettings,
    setChatFiles
  } = useContext(ChatbotUIContext)

  // Define the handlers for different types of user input and selections
  // ...

  // Return the handlers
  return {
    handleInputChange,
    handleSelectPrompt,
    handleSelectUserFile,
    handleSelectUserCollection,
    handleSelectTool,
    handleSelectAssistant
  }
}
```

## Usage

To use this hook, import it in a React component and call it:

```ts
import { usePromptAndCommand } from "./use-prompt-and-command"

const MyComponent = () => {
  const {
    handleInputChange,
    handleSelectPrompt,
    handleSelectUserFile,
    handleSelectUserCollection,
    handleSelectTool,
    handleSelectAssistant
  } = usePromptAndCommand()

  // Use the handlers...
}
```