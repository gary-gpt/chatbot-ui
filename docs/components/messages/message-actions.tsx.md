---
source: components/messages/message-actions.tsx
generated: '2025-06-08T13:21:01.635Z'
tags: []
hash: 141d556fa9228821602c6aad89ba47b7c8ade87eb9b1504145142bc3b3e93046
---
# MessageActions Component

This component is responsible for rendering the actions that can be performed on a message in the chatbot UI.

## Props

The `MessageActions` component accepts the following props:

- `isAssistant`: A boolean indicating whether the current user is an assistant.
- `isLast`: A boolean indicating whether the current message is the last one.
- `isEditing`: A boolean indicating whether the current message is being edited.
- `isHovering`: A boolean indicating whether the mouse is hovering over the current message.
- `onCopy`: A function to be called when the copy action is triggered.
- `onEdit`: A function to be called when the edit action is triggered.
- `onRegenerate`: A function to be called when the regenerate action is triggered.

## Usage

The `MessageActions` component is used in the context of a chatbot UI. It provides the user with actions that can be performed on a message, such as copying, editing, and regenerating the message. The available actions depend on the user's role (assistant or not), whether the message is the last one, and whether the message is being edited.

## Internal State

The `MessageActions` component maintains an internal state `showCheckmark`, which is a boolean indicating whether to show a checkmark icon. This state is toggled to `true` when the copy action is triggered, and automatically toggled back to `false` after a delay of 2 seconds.

## Context

The `MessageActions` component consumes the `ChatbotUIContext` to determine whether a new message is being generated. If a new message is being generated or the current message is being edited, the component returns `null` and no actions are rendered.

## Rendered JSX

The `MessageActions` component renders a div containing several `WithTooltip` components, each wrapping an icon representing an action. The tooltips display a description of the action when the user hovers over the icon. The icons and tooltips are conditionally rendered based on the props and context. The icons trigger the corresponding action functions when clicked.
