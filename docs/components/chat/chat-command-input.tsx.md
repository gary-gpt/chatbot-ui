---
source: components/chat/chat-command-input.tsx
generated: 2025-06-08T21:26:25.124Z
tags: []
hash: 57896e09b080bdf2f333aa75067f3800ced87c357bd636f6ed20a6ec33b3c3be
---

# Chat Command Input Component Documentation

This document provides a detailed explanation of the `ChatCommandInput` component found in the file `/Users/garymason/chatbot-ui/components/chat/chat-command-input.tsx`. This component is part of a Chatbot UI and is responsible for handling user input commands.

## Code Overview

```ts
import { ChatbotUIContext } from "@/context/context"
import { FC, useContext } from "react"
import { AssistantPicker } from "./assistant-picker"
import { usePromptAndCommand } from "./chat-hooks/use-prompt-and-command"
import { FilePicker } from "./file-picker"
import { PromptPicker } from "./prompt-picker"
import { ToolPicker } from "./tool-picker"

interface ChatCommandInputProps {}

export const ChatCommandInput: FC<ChatCommandInputProps> = ({}) => {
  const {
    newMessageFiles,
    chatFiles,
    slashCommand,
    isFilePickerOpen,
    setIsFilePickerOpen,
    hashtagCommand,
    focusPrompt,
    focusFile
  } = useContext(ChatbotUIContext)

  const { handleSelectUserFile, handleSelectUserCollection } =
    usePromptAndCommand()

  return (
    <>
      <PromptPicker />

      <FilePicker
        isOpen={isFilePickerOpen}
        searchQuery={hashtagCommand}
        onOpenChange={setIsFilePickerOpen}
        selectedFileIds={[...newMessageFiles, ...chatFiles].map(
          file => file.id
        )}
        selectedCollectionIds={[]}
        onSelectFile={handleSelectUserFile}
        onSelectCollection={handleSelectUserCollection}
        isFocused={focusFile}
      />

      <ToolPicker />

      <AssistantPicker />
    </>
  )
}
```

## Import Statements

The component imports several hooks and components from various files. It also imports the `ChatbotUIContext` from the application's context to access the global state.

## ChatCommandInputProps Interface

The `ChatCommandInputProps` interface is currently empty, indicating that the `ChatCommandInput` component does not accept any props.

## ChatCommandInput Component

The `ChatCommandInput` component is a functional component that does not accept any props. It uses the `useContext` hook to access the global state from the `ChatbotUIContext`.

## Context Variables

Several variables are destructured from the `ChatbotUIContext`:

- `newMessageFiles` and `chatFiles`: These are likely arrays of file objects associated with new messages and the chat history, respectively.
- `slashCommand` and `hashtagCommand`: These are likely strings representing user input commands.
- `isFilePickerOpen` and `setIsFilePickerOpen`: These are likely a boolean and a function for controlling the visibility of the `FilePicker` component.
- `focusPrompt` and `focusFile`: These are likely booleans indicating whether the prompt or file input should be focused.

## usePromptAndCommand Hook

The `usePromptAndCommand` hook is used to get the `handleSelectUserFile` and `handleSelectUserCollection` functions. These functions are likely used to handle user interactions with the `FilePicker` component.

## Rendered Components

The `ChatCommandInput` component renders four components:

- `PromptPicker`: This component is likely responsible for handling user prompt input.
- `FilePicker`: This component is responsible for handling user file input. It receives several props, including functions for handling file and collection selection.
- `ToolPicker`: This component is likely responsible for selecting tools or options related to the chatbot.
- `AssistantPicker`: This component is likely responsible for selecting the assistant or chatbot to interact with.