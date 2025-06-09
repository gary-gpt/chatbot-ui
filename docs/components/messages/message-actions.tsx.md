---
source: components/messages/message-actions.tsx
generated: 2025-06-08T21:34:31.937Z
tags: []
hash: 3f3fb194348d00366097d30ad735007a45627c35cf0a89f5fa59332d0f44d2a0
---

# Documentation for Message Actions Component

This documentation covers the `MessageActions` component found in the file `/Users/garymason/chatbot-ui/components/messages/message-actions.tsx`.

## Overview

The `MessageActions` component is a functional component that provides action buttons for each message in a chatbot conversation. These actions include copying a message, editing a message, and regenerating a message.

## Imports

The component imports several dependencies:

- `ChatbotUIContext` from "@/context/context"
- Several icons from "@tabler/icons-react"
- `FC`, `useContext`, `useEffect`, and `useState` from "react"
- `WithTooltip` from "../ui/with-tooltip"

## Constants

The `MESSAGE_ICON_SIZE` constant is used to set the size of the icons used in the component.

## Props

The component accepts the following props:

- `isAssistant`: A boolean indicating whether the current user is an assistant.
- `isLast`: A boolean indicating whether the current message is the last one in the conversation.
- `isEditing`: A boolean indicating whether the current message is being edited.
- `isHovering`: A boolean indicating whether the mouse is hovering over the current message.
- `onCopy`: A function to be executed when the copy action is triggered.
- `onEdit`: A function to be executed when the edit action is triggered.
- `onRegenerate`: A function to be executed when the regenerate action is triggered.

## State

The component maintains a single piece of state, `showCheckmark`, which is a boolean indicating whether to show a checkmark icon after a copy action is performed.

## Functions

The component defines two functions:

- `handleCopy`: This function executes the `onCopy` function passed as a prop and sets `showCheckmark` to true.
- `handleForkChat`: This function is currently empty.

## Effects

The component has one effect that runs when `showCheckmark` changes. If `showCheckmark` is true, it sets a timeout to set `showCheckmark` back to false after 2000 milliseconds.

## Render

The component renders a set of icons wrapped in `WithTooltip` components. The icons and their associated actions are conditionally rendered based on the props. The icons include:

- An edit icon, which triggers the `onEdit` function when clicked.
- A copy icon, which triggers the `handleCopy` function when clicked.
- A regenerate icon, which triggers the `onRegenerate` function when clicked.

If the `showCheckmark` state is true, the copy icon is replaced with a checkmark icon.

If `isLast` and `isGenerating` are true, or if `isEditing` is true, the component returns null and does not render anything.