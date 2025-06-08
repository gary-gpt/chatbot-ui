---
source: components/sidebar/items/prompts/prompt-item.tsx
generated: '2025-06-08T13:21:01.663Z'
tags: []
hash: f8b4a1852a4d9f1fdd39b206a0f47950d0473c4d816bce7e9b6136a881695ac6
---
# PromptItem Component

The `PromptItem` component is a functional component that displays a single prompt item in a sidebar. This component is part of the sidebar display items.

## Imports

This component imports several utilities and components:

- `Input`, `Label`, and `TextareaAutosize` components from the UI components.
- `PROMPT_NAME_MAX` constant from the database limits.
- `Tables` type from the Supabase types.
- `IconPencil` from the Tabler Icons React library.
- `FC` (Functional Component) and `useState` from React.
- `SidebarItem` from the sidebar display items.

## Props

The `PromptItem` component accepts the following props:

- `prompt`: An object of type `Tables<"prompts">`. This object represents the prompt item to be displayed.

## State

The component maintains the following state variables:

- `name`: The name of the prompt. Initialized with `prompt.name`.
- `content`: The content of the prompt. Initialized with `prompt.content`.
- `isTyping`: A boolean to track if the user is currently typing. Initialized as `false`.

## Render

The component renders a `SidebarItem` with the following props:

- `item`: The prompt object.
- `isTyping`: The state variable `isTyping`.
- `contentType`: A string "prompts".
- `icon`: An `IconPencil` component with a size of 30.
- `updateState`: An object with `name` and `content` state variables.
- `renderInputs`: A function that renders two input fields (for name and content of the prompt) with associated labels.

The `name` input field has a placeholder "Prompt name...", and its value is controlled by the `name` state variable. It also has a maximum length defined by `PROMPT_NAME_MAX`. The `onCompositionStart` and `onCompositionEnd` events are used to update the `isTyping` state.

The `content` input field is a `TextareaAutosize` component with a placeholder "Prompt...". Its value is controlled by the `content` state variable. It has a minimum of 6 rows and a maximum of 20 rows. The `onCompositionStart` and `onCompositionEnd` events are used to update the `isTyping` state.
