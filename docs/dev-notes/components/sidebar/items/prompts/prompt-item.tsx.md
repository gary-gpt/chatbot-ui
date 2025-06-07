**📄 Source File:** `/components/sidebar/items/prompts/prompt-item.tsx`  
**🕒 Generated:** 2025-06-07 13:43:55 UTC  
**🤖 Model:** gpt-4

---

# PromptItem.tsx

This file defines and exports a React functional component called `PromptItem`. The component is designed to display and edit a prompt item in a sidebar.

## Interface

The `PromptItem` component accepts a single prop of type `PromptItemProps`. This interface is defined in the file and requires a `prompt` object. The `prompt` object is expected to be of type `Tables<"prompts">`, which is imported from "@/supabase/types".

## State

The `PromptItem` component uses React's `useState` hook to manage the state of the prompt's `name` and `content`, as well as a boolean flag `isTyping` to track whether the user is currently typing.

## Render

The component renders a `SidebarItem` component, passing several props to it:

- `item`: the original `prompt` object
- `isTyping`: the current state of the `isTyping` flag
- `contentType`: a string literal "prompts"
- `icon`: an `IconPencil` component from "@tabler/icons-react"
- `updateState`: an object containing the current `name` and `content` state
- `renderInputs`: a function that returns a JSX fragment containing two labeled input fields

The first input field is for the prompt's name. It uses the `Input` component imported from "@/components/ui/input". The `onChange` event updates the `name` state, and the `onCompositionStart` and `onCompositionEnd` events update the `isTyping` state.

The second input field is for the prompt's content. It uses the `TextareaAutosize` component imported from "@/components/ui/textarea-autosize". The `onValueChange` event updates the `content` state, and the `onCompositionStart` and `onCompositionEnd` events update the `isTyping` state.

## Usage

The `PromptItem` component is likely used in a sidebar or similar UI element where the user can select a prompt to view or edit. The `PromptItem` component allows the user to edit the name and content of the prompt directly within the sidebar.

## Interesting Structure or Nuance

The `PromptItem` component uses the `onCompositionStart` and `onCompositionEnd` events to track when the user is typing in a text input field. This could be used to prevent updates to the prompt while the user is still typing, or to show some visual feedback to the user.