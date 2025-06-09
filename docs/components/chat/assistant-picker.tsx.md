---
source: components/chat/assistant-picker.tsx
generated: 2025-06-08T21:26:00.701Z
tags: []
hash: c1d1b4d9b8691be6df474785257fac8fd62b052c2675423caf976411994a4895
---

# AssistantPicker Component Documentation

This document describes the `AssistantPicker` component, a part of the chatbot user interface (UI) in a TypeScript project. The component is located at `/Users/garymason/chatbot-ui/components/chat/assistant-picker.tsx`.

## Overview

The `AssistantPicker` component is a functional component that allows users to select an assistant from a list of available assistants. The component uses the context `ChatbotUIContext` to access and manipulate the state of the chatbot UI. It also uses the custom hook `usePromptAndCommand` to handle the selection of an assistant.

## Code Breakdown

### Imports

The component imports necessary dependencies, including React hooks, context, types, and icons.

### Props

The `AssistantPickerProps` interface is currently empty, indicating that the component does not accept any props.

### Component Definition

The `AssistantPicker` component is defined as a functional component. It uses the `useContext` hook to access the chatbot UI context and the `usePromptAndCommand` hook to get the `handleSelectAssistant` function.

### Refs and Effects

The `itemsRef` ref is used to store references to the assistant picker items. The `useEffect` hook is used to focus on the first assistant picker item when the `focusAssistant` value changes.

### Assistant Filtering

The `filteredAssistants` constant is a filtered list of assistants that includes only those whose names include the `atCommand` string.

### Event Handlers

Several event handlers are defined:

- `handleOpenChange`: Sets the `isAssistantPickerOpen` state.
- `callSelectAssistant`: Calls `handleSelectAssistant` and closes the assistant picker.
- `getKeyDownHandler`: Returns a function that handles keydown events on an assistant picker item.

### Rendering

The component returns a JSX element that renders the assistant picker if `isAssistantPickerOpen` is `true`. The picker includes a list of `filteredAssistants`, each with an image (or a default icon), name, and description. If no assistants match the current `atCommand`, a message is displayed.

## Usage

This component is used in the chatbot UI to allow users to select an assistant. It is expected to be used within a provider of the `ChatbotUIContext`.

```ts
<ChatbotUIContext.Provider value={...}>
  <AssistantPicker />
</ChatbotUIContext.Provider>
```

## Conclusion

The `AssistantPicker` component is a crucial part of the chatbot UI, providing an interactive list of assistants for the user to choose from. It uses context and custom hooks to manage state and handle events, demonstrating a modern approach to React component design.