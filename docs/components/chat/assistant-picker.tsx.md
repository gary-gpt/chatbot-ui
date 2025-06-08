---
source: components/chat/assistant-picker.tsx
generated: '2025-06-08T13:21:01.634Z'
tags: []
hash: f8beabc858e0d5d5236f7a072356aca1de2f0bd03505ddfb5773d27df6fa615f
---
# AssistantPicker Component

This file exports the `AssistantPicker` component which is a functional component (FC) with no props.

## Imports

- `ChatbotUIContext` from "@/context/context"
- `Tables` from "@/supabase/types"
- `IconRobotFace` from "@tabler/icons-react"
- `Image` from "next/image"
- `FC, useContext, useEffect, useRef` from "react"
- `usePromptAndCommand` from "./chat-hooks/use-prompt-and-command"

## Component

The `AssistantPicker` component is responsible for displaying a list of chatbot assistants and handling user interactions with the list. 

### State and Context

The component uses the `ChatbotUIContext` to access and manipulate the state of the chatbot UI. The following values are used from the context:

- `assistants`: An array of assistant objects.
- `assistantImages`: An array of assistant image objects.
- `focusAssistant`: A boolean indicating whether an assistant is in focus.
- `atCommand`: A string that represents the current command.
- `isAssistantPickerOpen`: A boolean indicating whether the assistant picker is open.
- `setIsAssistantPickerOpen`: A function to set the value of `isAssistantPickerOpen`.

### Hooks

The `usePromptAndCommand` hook is used to get the `handleSelectAssistant` function which is used to handle the selection of an assistant.

### Functions

- `handleOpenChange`: A function that sets the state of `isAssistantPickerOpen`.
- `callSelectAssistant`: A function that calls `handleSelectAssistant` and `handleOpenChange`.
- `getKeyDownHandler`: A function that returns a function to handle key down events.

### Return

The component returns a list of assistants if `isAssistantPickerOpen` is true. If there are no assistants, it displays a message "No matching assistants." Each assistant in the list is a div element that can be focused and clicked. When an assistant is clicked, the `callSelectAssistant` function is called. When a key is pressed while an assistant is focused, the `getKeyDownHandler` function is called.
