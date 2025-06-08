---
source: components/chat/chat-retrieval-settings.tsx
generated: '2025-06-08T13:21:01.634Z'
tags: []
hash: 29993c971d1f8c718ed6a32187f55c9a0e178b3054f3fdac1c6d0a21f65addf8
---
# Chat Retrieval Settings Component

This is a functional component in React that provides an interface for adjusting the chat retrieval settings in a chatbot UI.

## Imports

The component imports several dependencies:

- `ChatbotUIContext` from the context folder in the source directory. This context provides the source count state and its setter function.
- `IconAdjustmentsHorizontal` from the `@tabler/icons-react` package. This is the icon used for the settings button.
- `FC`, `useContext`, and `useState` from the `react` package. These are used to define the component, access context, and manage local state respectively.
- Several UI components (`Button`, `Dialog`, `DialogContent`, `DialogFooter`, `DialogTrigger`, `Label`, `Slider`, `WithTooltip`) from the UI directory in the source directory. These are used to build the component's UI.

## Props

The component does not accept any props.

## State

The component maintains a single piece of local state: `isOpen`. This state determines whether the settings dialog is open or not.

## Rendered JSX

The component renders a `Dialog` component. The dialog is controlled by the `isOpen` state and its setter function `setIsOpen`.

The dialog trigger is a `WithTooltip` component that displays a tooltip with the text "Adjust retrieval settings." when hovered over. The trigger itself is an `IconAdjustmentsHorizontal` icon.

The dialog content consists of a `Label` and a `Slider`. The `Label` displays the current source count. The `Slider` allows the user to adjust the source count. The slider's value is tied to the source count from the context, and changes to the slider's value update the source count.

The dialog footer contains a `Button` that closes the dialog when clicked.

## Usage

This component does not accept any props, so it can be used in JSX as follows:

```jsx
<ChatRetrievalSettings />
```
