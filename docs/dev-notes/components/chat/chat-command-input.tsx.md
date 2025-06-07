**📄 Source File:** `/components/chat/chat-command-input.tsx`  
**🕒 Generated:** 2025-06-07 13:26:28 UTC  
**🤖 Model:** gpt-4

---

# ChatCommandInput.tsx

This TypeScript file is part of a chatbot UI (User Interface) and is responsible for rendering the chat command input component. This component includes several pickers (PromptPicker, FilePicker, ToolPicker, AssistantPicker) that allow the user to interact with the chatbot in various ways.

## Exports

The file exports a single component, `ChatCommandInput`. This is a functional component (FC) with no props.

## Functions and Types

The `ChatCommandInput` component uses the `ChatbotUIContext` to access various state variables and functions. These include:

- `newMessageFiles` and `chatFiles`: These are likely arrays of file objects associated with new messages and the chat history respectively.
- `slashCommand`: This could be a string representing a command entered by the user.
- `isFilePickerOpen` and `setIsFilePickerOpen`: A boolean state and its setter function to control the visibility of the FilePicker.
- `hashtagCommand`: This could be a string representing a command entered by the user with a hashtag.
- `focusPrompt` and `focusFile`: These could be boolean values used to control focus on different elements in the UI.

The `usePromptAndCommand` hook is used to get the `handleSelectUserFile` and `handleSelectUserCollection` functions. These functions are likely used to handle the user's selection of a file or a collection of files.

## Component Structure

The `ChatCommandInput` component returns a fragment (`<>...</>`) containing four components:

- `PromptPicker`: This component is likely used to pick a prompt for the user to respond to.
- `FilePicker`: This component is used to pick a file. It takes several props including `isOpen`, `searchQuery`, `onOpenChange`, `selectedFileIds`, `selectedCollectionIds`, `onSelectFile`, `onSelectCollection`, and `isFocused`.
- `ToolPicker`: This component is likely used to pick a tool or command for the user to use.
- `AssistantPicker`: This component is likely used to pick an assistant or chatbot for the user to interact with.

## Usage

This file is used in the context of a chatbot UI. The `ChatCommandInput` component would be rendered wherever the user is expected to enter commands for the chatbot. The user can interact with the various pickers to select prompts, files, tools, or assistants. The selected options are then handled by the functions provided by the `usePromptAndCommand` hook and the `ChatbotUIContext`.