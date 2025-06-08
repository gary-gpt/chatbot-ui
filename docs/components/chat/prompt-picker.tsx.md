# PromptPicker Component

This is a documentation for the `PromptPicker` component.

## Import Statements

```jsx
import { ChatbotUIContext } from "@/context/context"
import { Tables } from "@/supabase/types"
import { FC, useContext, useEffect, useRef, useState } from "react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Label } from "../ui/label"
import { TextareaAutosize } from "../ui/textarea-autosize"
import { usePromptAndCommand } from "./chat-hooks/use-prompt-and-command"
```

## Props

The `PromptPicker` component does not take any props.

## Component

The `PromptPicker` component is a functional component that provides an interface for selecting prompts. It uses the `ChatbotUIContext` to access and manipulate the state of the chatbot UI.

## State Variables

- `promptVariables`: An array of objects, each containing a `promptId`, `name`, and `value`. This is used to store the variables of the selected prompt.
- `showPromptVariables`: A boolean indicating whether the prompt variables dialog should be shown.
- `isTyping`: A boolean indicating whether the user is currently typing.

## Functions

- `handleOpenChange(isOpen: boolean)`: Sets the `isPromptPickerOpen` state to the passed `isOpen` value.
- `callSelectPrompt(prompt: Tables<"prompts">)`: Handles the selection of a prompt. If the prompt content contains variables, it sets the `promptVariables` state and shows the prompt variables dialog. Otherwise, it calls the `handleSelectPrompt` function and closes the prompt picker.
- `getKeyDownHandler(index: number)`: Returns a function that handles keydown events for the prompt picker items. It handles navigation between items using the arrow keys, selection of an item using the enter key, and closing of the prompt picker using the backspace key.
- `handleSubmitPromptVariables()`: Submits the entered prompt variables. It replaces the variables in the prompt content with their entered values, calls the `handleSelectPrompt` function with the new prompt, and closes the prompt variables dialog.
- `handleCancelPromptVariables()`: Cancels the entry of prompt variables. It closes the prompt variables dialog without making any changes.
- `handleKeydownPromptVariables(e: React.KeyboardEvent<HTMLDivElement>)`: Handles keydown events for the prompt variables dialog. If the enter key is pressed and the user is not currently typing, it calls the `handleSubmitPromptVariables` function.

## Return

The component returns a div that contains a list of prompts that match the current slash command. If the `showPromptVariables` state is true, it also returns a dialog for entering prompt variables.