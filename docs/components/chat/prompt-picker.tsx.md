---
source: components/chat/prompt-picker.tsx
generated: 2025-06-08T21:31:52.644Z
tags: []
hash: ffa7dad2a452e62240e64377d42f80fb662d58641cd17ea9395e64cb1cb0a095
---

# Documentation for `prompt-picker.tsx`

This file is a React component named `PromptPicker` that is used to display a list of prompts to the user and allow them to select one. It also handles the logic for filtering prompts based on a search term, and for handling user interactions such as selecting a prompt or closing the prompt picker.

## Import Statements

The file begins by importing necessary dependencies and components from React, the project's own files, and third-party libraries.

## `PromptPickerProps` Interface

This interface is currently empty, indicating that the `PromptPicker` component does not expect any props.

## `PromptPicker` Component

This is the main component of the file. It uses the `ChatbotUIContext` to access various pieces of state and functions related to the chatbot UI. It also uses the `usePromptAndCommand` hook to get the `handleSelectPrompt` function.

### State Variables

The component declares several state variables:

- `promptVariables`: An array of objects, each representing a variable in a prompt.
- `showPromptVariables`: A boolean indicating whether to show the prompt variables dialog.
- `isTyping`: A boolean indicating whether the user is currently typing.

### `useEffect` Hook

This hook is used to focus the first item in the prompt picker when the `focusPrompt` value changes.

### `filteredPrompts` Variable

This variable holds the list of prompts that match the current slash command.

### `handleOpenChange` Function

This function is used to open or close the prompt picker.

### `callSelectPrompt` Function

This function is called when a prompt is selected. It checks if the prompt contains any variables and, if so, it opens the prompt variables dialog. Otherwise, it selects the prompt and closes the prompt picker.

### `getKeyDownHandler` Function

This function returns a function that handles keydown events for a given index. It handles navigation between prompts using the arrow keys, selection of a prompt using the Enter key, and closing the prompt picker using the Backspace key.

### `handleSubmitPromptVariables` Function

This function is called when the prompt variables dialog is submitted. It replaces the variables in the selected prompt with their entered values, selects the prompt, and closes the prompt picker and the prompt variables dialog.

### `handleCancelPromptVariables` Function

This function is called when the prompt variables dialog is cancelled. It closes the dialog without making any changes.

### `handleKeydownPromptVariables` Function

This function handles keydown events in the prompt variables dialog. If the Enter key is pressed and the user is not currently typing, it submits the dialog.

### Return Statement

The component returns a div that contains either the prompt variables dialog or a list of prompts that match the current slash command. If no prompts match the command, a message is displayed to the user.