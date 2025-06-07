**📄 Source File:** `/components/chat/chat-hooks/use-prompt-and-command.tsx`  
**🕒 Generated:** 2025-06-07 13:28:17 UTC  
**🤖 Model:** gpt-4

---

# usePromptAndCommand.ts

This TypeScript file is part of a chatbot UI and provides a custom React hook, `usePromptAndCommand`, which handles user input and selection of prompts, files, collections, tools, and assistants in the chatbot interface. It uses the `ChatbotUIContext` to manage the state of the chatbot UI.

## Exports

The file exports a single function:

- `usePromptAndCommand`: A custom React hook that provides functions for handling user input and selections in the chatbot UI.

## Functions

The `usePromptAndCommand` hook returns an object with the following functions:

- `handleInputChange(value: string)`: Handles changes in the user input. It uses regular expressions to detect special commands starting with `@`, `/`, `#`, and `!`. Depending on the command, it opens the appropriate picker (assistant, prompt, file, or tool) and sets the command value.

- `handleSelectPrompt(prompt: Tables<"prompts">)`: Handles the selection of a prompt. It closes the prompt picker and appends the selected prompt to the user input.

- `handleSelectUserFile(file: Tables<"files">)`: Handles the selection of a file. It shows the files display, closes the file picker, and adds the selected file to the new message files if it hasn't been selected before. It also removes the file command from the user input.

- `handleSelectUserCollection(collection: Tables<"collections">)`: Handles the selection of a collection. It shows the files display, closes the file picker, and adds the files from the selected collection to the new message files if they haven't been selected before. It also removes the collection command from the user input.

- `handleSelectTool(tool: Tables<"tools">)`: Handles the selection of a tool. It closes the tool picker, removes the tool command from the user input, and adds the selected tool to the selected tools.

- `handleSelectAssistant(assistant: Tables<"assistants">)`: Handles the selection of an assistant. It closes the assistant picker, removes the assistant command from the user input, and sets the selected assistant and its settings. It also retrieves and sets the files and tools associated with the selected assistant.

## Usage

This hook is likely used in a component that renders the chatbot UI. The functions it provides can be used as event handlers for user input and selection events.

## Interesting Structure or Nuance

The `handleInputChange` function uses regular expressions to detect special commands in the user input. Depending on the command, it opens the appropriate picker and sets the command value. If no command is detected, it closes all pickers and clears all command values.

The `handleSelectAssistant` function not only sets the selected assistant and its settings, but also retrieves and sets the files and tools associated with the selected assistant. It also shows the files display if there are any files associated with the assistant.