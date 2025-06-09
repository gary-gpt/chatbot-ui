---
source: components/chat/file-picker.tsx
generated: 2025-06-08T21:31:35.032Z
tags: []
hash: b356685c3c03beff7cffc452cb53550f5e3ab1fa59024fc382d2c8cfc3c11789
---

# FilePicker Component Documentation

This document provides a detailed explanation of the `FilePicker` component in the `chatbot-ui` project. The component is located at `/Users/garymason/chatbot-ui/components/chat/file-picker.tsx`.

## Overview

The `FilePicker` component is a functional component that provides an interface for users to select files and collections. It filters files and collections based on a search query and displays the filtered results to the user. The component also handles keyboard events for navigation and selection.

## Code Explanation

### Imports

The component imports necessary dependencies, React hooks, context, and types from various modules.

### Props

The `FilePicker` component accepts the following props:

- `isOpen`: A boolean indicating whether the file picker is open.
- `searchQuery`: A string for the search query to filter files and collections.
- `onOpenChange`: A function to handle changes to the `isOpen` state.
- `selectedFileIds`: An array of selected file IDs.
- `selectedCollectionIds`: An array of selected collection IDs.
- `onSelectFile`: A function to handle file selection.
- `onSelectCollection`: A function to handle collection selection.
- `isFocused`: A boolean indicating whether the file picker is focused.

### Component Logic

The `FilePicker` component uses the `ChatbotUIContext` to get the files and collections data, and a function to set the open state of the file picker.

The component uses the `useRef` hook to create a reference to the list of items (files and collections) displayed.

The `useEffect` hook is used to focus on the first item in the list when the file picker is focused.

The component filters the files and collections based on the search query and whether they have been selected.

The `handleOpenChange`, `handleSelectFile`, and `handleSelectCollection` functions are used to handle the opening and closing of the file picker and the selection of files and collections.

The `getKeyDownHandler` function handles keyboard events for navigation (Tab, ArrowUp, ArrowDown) and selection (Enter) within the file picker.

### Rendering

The component renders a list of filtered files and collections. If no items match the search query, a message is displayed. Each item in the list is focusable and clickable, and displays an icon and details about the item. The `onClick` and `onKeyDown` events are handled for each item.