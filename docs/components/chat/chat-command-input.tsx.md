---
source: components/chat/chat-command-input.tsx
generated: '2025-06-08T13:21:01.634Z'
tags: []
hash: 2fe74ccba8ae828db6449785eb6fa223904e6cd033964cc52e0f4d3d204889fb
---
# ChatCommandInput Component Documentation

This documentation provides an overview of the `ChatCommandInput` component in the source code.

## Import Statements

The `ChatCommandInput` component imports several dependencies:

- `ChatbotUIContext` from '@/context/context' - This is the context object for the Chatbot UI.
- `FC, useContext` from 'react' - These are React hooks for functional components and context usage.
- `AssistantPicker`, `usePromptAndCommand`, `FilePicker`, `PromptPicker`, `ToolPicker` - These are custom components and hooks used within this component.

## Props

The `ChatCommandInput` component does not take any props.

## Component Function

The `ChatCommandInput` is a functional component that uses the `ChatbotUIContext` to access various state variables and setters. It also uses the `usePromptAndCommand` hook to get handlers for user file and collection selection.

The component returns a JSX fragment that includes the following components:

- `PromptPicker` - A component for picking prompts.
- `FilePicker` - A component for picking files. It receives several props including `isOpen`, `searchQuery`, `onOpenChange`, `selectedFileIds`, `selectedCollectionIds`, `onSelectFile`, `onSelectCollection`, and `isFocused`.
- `ToolPicker` - A component for picking tools.
- `AssistantPicker` - A component for picking assistants.

## Usage

This component is used to provide a user interface for chat command input. It allows users to select prompts, files, tools, and assistants.
