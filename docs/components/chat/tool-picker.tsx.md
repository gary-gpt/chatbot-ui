---
source: components/chat/tool-picker.tsx
generated: '2025-06-08T13:21:01.635Z'
tags: []
hash: 09fe3b65453dd91a7f8022c98b4db2c1757c194ab730429b0c0a2b632763177d
---
# ToolPicker Component Documentation

## Overview

`ToolPicker` is a functional component in React that provides an interface for selecting a tool from a list of available tools. The list of tools is filtered based on a command and the selected tool is handled by a function from a custom hook. The component also provides keyboard navigation for the tool list.

## Imports

- `ChatbotUIContext` from "@/context/context": A context that provides state and functions related to the chatbot UI.
- `Tables` from "@/supabase/types": A type definition for the structure of tables in the Supabase database.
- `IconBolt` from "@tabler/icons-react": An icon component from the tabler icons library.
- `FC, useContext, useEffect, useRef` from "react": Various hooks and types from the React library.
- `usePromptAndCommand` from "./chat-hooks/use-prompt-and-command": A custom hook that provides functions for handling prompts and commands in the chatbot UI.

## Props

The `ToolPicker` component does not take any props.

## State and Effects

- `tools, focusTool, toolCommand, isToolPickerOpen, setIsToolPickerOpen`: State variables and functions from the `ChatbotUIContext`.
- `handleSelectTool`: A function from the `usePromptAndCommand` hook that handles the selection of a tool.
- `itemsRef`: A ref that holds an array of div elements, each representing a tool in the list.
- `useEffect`: An effect that focuses the first tool in the list when the `focusTool` state variable changes.

## Functions

- `handleOpenChange(isOpen: boolean)`: A function that sets the `isToolPickerOpen` state variable.
- `callSelectTool(tool: Tables<"tools">)`: A function that calls `handleSelectTool` and closes the tool picker.
- `getKeyDownHandler(index: number)`: A function that returns a function for handling key down events on a tool. The returned function handles the "Backspace", "Enter", "Tab", "ArrowDown", and "ArrowUp" keys.

## Return

The `ToolPicker` component returns a div element that contains a list of tools. Each tool is represented by a div element that contains an `IconBolt` and the tool's name and description. The list of tools is only rendered if the `isToolPickerOpen` state variable is true. If there are no tools in the filtered list, a message is displayed instead.
