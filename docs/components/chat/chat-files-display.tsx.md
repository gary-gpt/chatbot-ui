---
source: components/chat/chat-files-display.tsx
generated: 2025-06-08T21:26:37.318Z
tags: []
hash: 5a0fd5af018b0a2f06ebdafeb2a135e9ede130e92318686128e4fba38e411e51
---

# Chat Files Display Component

This document provides an overview of the `ChatFilesDisplay` component in the `chatbot-ui` project. This component is responsible for displaying files and images associated with chat messages in the chatbot user interface.

## File Location

`/Users/garymason/chatbot-ui/components/chat/chat-files-display.tsx`

## Imports

The component imports several dependencies, including:

- Context and utility functions from the project's own modules
- Icons from `@tabler/icons-react`
- `Image` from `next/image`
- React hooks and components
- Other UI components from the project

## Component Props

The `ChatFilesDisplay` component does not accept any props.

## Component Logic

The `ChatFilesDisplay` component uses the `ChatbotUIContext` to access the chatbot's state and actions. It also maintains its own state for the selected file and image, and whether to show a file preview.

The component uses two hotkeys: 'f' to toggle the file display, and 'e' to toggle the use of file retrieval.

The component combines new message images and files with existing chat images and files, excluding any duplicates.

The `getLinkAndView` function retrieves a file link from storage and opens it in a new browser tab.

## Component Rendering

The component renders differently based on the `showFilesDisplay` state and whether there are any files or images to display.

If `showFilesDisplay` is true and there are files or images, the component renders file previews for the selected file or image, a button to hide the files, and a list of all images and files.

If `showFilesDisplay` is false but there are files or images, the component renders a button to view the files.

## Child Components

The `ChatFilesDisplay` component uses several child components, including:

- `FilePreview`: Displays a preview of a selected file or image.
- `Button`: A reusable button component.
- `ChatRetrievalSettings`: A component for adjusting file retrieval settings.
- `RetrievalToggle`: A component for toggling file retrieval on and off.

## Example Code

```ts
<ChatFilesDisplay />
```

This will render the `ChatFilesDisplay` component with its default state and behavior.