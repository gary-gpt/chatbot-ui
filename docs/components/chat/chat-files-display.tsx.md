---
source: components/chat/chat-files-display.tsx
generated: '2025-06-08T13:21:01.634Z'
tags: []
hash: ab75506128df612b391512546a99eb3e298d859495d52da5c3ac0e88d0ac16d7
---
# ChatFilesDisplay Component

This is a React functional component that displays chat files and images. It allows users to view and manage files associated with chat messages.

## Props

This component does not accept any props.

## State

This component maintains the following state:

- `selectedFile`: The currently selected file.
- `selectedImage`: The currently selected image.
- `showPreview`: A boolean indicating whether the file or image preview is shown.

## Context

This component uses the `ChatbotUIContext` to access and manage the following context values:

- `files`: All the files in the current context.
- `newMessageImages`: New images associated with the current message.
- `setNewMessageImages`: A function to set new images associated with the current message.
- `newMessageFiles`: New files associated with the current message.
- `setNewMessageFiles`: A function to set new files associated with the current message.
- `setShowFilesDisplay`: A function to toggle the display of files.
- `showFilesDisplay`: A boolean indicating whether the files display is shown.
- `chatFiles`: All the files associated with the chat.
- `chatImages`: All the images associated with the chat.
- `setChatImages`: A function to set the images associated with the chat.
- `setChatFiles`: A function to set the files associated with the chat.
- `setUseRetrieval`: A function to toggle the use of retrieval.

## Functions

### getLinkAndView

This asynchronous function takes a `ChatFile` as an argument. It finds the file in the `files` context value and opens it in a new browser tab.

## Rendered Components

This component renders the following child components:

- `FilePreview`: A component to preview a file or image.
- `Button`: A UI component for a button.
- `ChatRetrievalSettings`: A component to manage chat retrieval settings.
- `RetrievalToggle`: A component to toggle the use of retrieval.

## Icons

This component uses the following icons from the `@tabler/icons-react` package:

- `IconCircleFilled`
- `IconFileFilled`
- `IconFileTypeCsv`
- `IconFileTypeDocx`
- `IconFileTypePdf`
- `IconFileTypeTxt`
- `IconJson`
- `IconLoader2`
- `IconMarkdown`
- `IconX`

## Styling

This component uses Tailwind CSS for styling. It uses utility classes for spacing, flex layout, text styling, cursor styling, border styling, opacity, and hover effects.
