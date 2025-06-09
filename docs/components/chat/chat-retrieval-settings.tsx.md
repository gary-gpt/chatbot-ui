---
source: components/chat/chat-retrieval-settings.tsx
generated: 2025-06-08T21:29:52.652Z
tags: []
hash: ccdcb3339dbba6d4cb219f3b5eb3d9f5e2a61b0aa3e16dbcaaa3d7b472f9a5b6
---

# Chatbot UI - Chat Retrieval Settings Component

This document describes the purpose and logic of the `ChatRetrievalSettings` component in the file `/Users/garymason/chatbot-ui/components/chat/chat-retrieval-settings.tsx`.

## Overview

The `ChatRetrievalSettings` component is a functional component that provides an interface for adjusting the chat retrieval settings in a chatbot UI. The settings can be adjusted through a dialog that opens when the settings icon is clicked. The dialog contains a slider for adjusting the source count, which is the number of sources from which the chatbot retrieves information.

## Imports

The component imports several dependencies:

- `ChatbotUIContext`: The context that provides the source count state and its setter function.
- `IconAdjustmentsHorizontal`: An icon from the `@tabler/icons-react` library that represents the settings.
- `FC, useContext, useState`: React hooks and types.
- Several UI components (`Button`, `Dialog`, `DialogContent`, `DialogFooter`, `DialogTrigger`, `Label`, `Slider`, `WithTooltip`) from the local UI library.

## Props

The component does not accept any props.

## State

The component maintains two pieces of state:

- `sourceCount`: The number of sources from which the chatbot retrieves information. This state is obtained from the `ChatbotUIContext`.
- `isOpen`: A boolean that indicates whether the settings dialog is open. This state is managed locally with the `useState` hook.

## Component Structure

The component returns a `Dialog` component that contains the following child components:

- `DialogTrigger`: Contains a `WithTooltip` component that displays a tooltip with the text "Adjust retrieval settings." when the settings icon is hovered over.
- `DialogContent`: Contains a `Label` component that displays the current source count and a `Slider` component that allows the user to adjust the source count.
- `DialogFooter`: Contains a `Button` component that closes the dialog when clicked.

## Event Handlers

The component defines the following event handlers:

- `onOpenChange`: Sets the `isOpen` state to open or close the dialog.
- `onValueChange`: Sets the `sourceCount` state to the value selected on the slider.
- `onClick`: Closes the dialog when the "Save & Close" button is clicked.

```ts
// Event handler for opening and closing the dialog
onOpenChange={setIsOpen}

// Event handler for adjusting the source count
onValueChange={values => {
  setSourceCount(values[0])
}}

// Event handler for closing the dialog
onClick={() => setIsOpen(false)}
```

## Styling

The component uses Tailwind CSS for styling. The styles are applied inline using the `className` prop.