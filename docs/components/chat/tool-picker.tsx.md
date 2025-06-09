---
source: components/chat/tool-picker.tsx
generated: 2025-06-08T21:32:55.512Z
tags: []
hash: 69454c9953c18c5a76c5d9203f72ae49f61a9c8cf20a427a9a327b9e1fa641f3
---

# Documentation for `tool-picker.tsx`

This file defines a component `ToolPicker` in a chatbot UI. The `ToolPicker` component provides an interface for users to select a tool from a list. The list of tools can be filtered by a command, and the tool picker can be opened or closed. The component also handles keyboard events for navigating the list of tools.

## Import Statements

```ts
import { ChatbotUIContext } from "@/context/context"
import { Tables } from "@/supabase/types"
import { IconBolt } from "@tabler/icons-react"
import { FC, useContext, useEffect, useRef } from "react"
import { usePromptAndCommand } from "./chat-hooks/use-prompt-and-command"
```

The import statements import necessary dependencies for the `ToolPicker` component. These include:

- `ChatbotUIContext`: The context object for the chatbot UI.
- `Tables`: A type from the Supabase library, used for typing the tools.
- `IconBolt`: An icon from the Tabler Icons library.
- `FC`, `useContext`, `useEffect`, `useRef`: React hooks and types.
- `usePromptAndCommand`: A custom hook defined in the same directory, used to handle the selection of a tool.

## Component Props

```ts
interface ToolPickerProps {}
```

The `ToolPickerProps` interface is currently empty, meaning the `ToolPicker` component does not accept any props.

## Component Definition

```ts
export const ToolPicker: FC<ToolPickerProps> = ({}) => { ... }
```

The `ToolPicker` component is defined as a functional component with `ToolPickerProps` as its props type.

## Context and Custom Hook

```ts
const {
  tools,
  focusTool,
  toolCommand,
  isToolPickerOpen,
  setIsToolPickerOpen
} = useContext(ChatbotUIContext)

const { handleSelectTool } = usePromptAndCommand()
```

The component uses the `useContext` hook to access the `ChatbotUIContext`, and the `usePromptAndCommand` custom hook to get the `handleSelectTool` function.

## Ref and Effect

```ts
const itemsRef = useRef<(HTMLDivElement | null)[]>([])

useEffect(() => {
  if (focusTool && itemsRef.current[0]) {
    itemsRef.current[0].focus()
  }
}, [focusTool])
```

The `itemsRef` ref is used to store references to the tool div elements. The `useEffect` hook is used to focus the first tool when `focusTool` changes.

## Tool Filtering

```ts
const filteredTools = tools.filter(tool =>
  tool.name.toLowerCase().includes(toolCommand.toLowerCase())
)
```

The `filteredTools` constant stores the list of tools that match the `toolCommand`.

## Event Handlers

The component defines several event handlers for opening and closing the tool picker, selecting a tool, and handling key down events.

## Render

The component renders a list of the filtered tools, or a message if no tools match the filter. Each tool is rendered as a div with a click and key down handler, and the tool's name and description are displayed. If the tool picker is not open, nothing is rendered.