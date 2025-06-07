**📄 Source File:** `/components/sidebar/items/prompts/create-prompt.tsx`  
**🕒 Generated:** 2025-06-07 13:43:40 UTC  
**🤖 Model:** gpt-4

---

# CreatePrompt.tsx

This TypeScript file defines and exports a functional component `CreatePrompt` in a React application. The component is designed to create a new prompt in a chatbot UI.

## Exports

The file exports a single component, `CreatePrompt`.

### CreatePrompt

`CreatePrompt` is a functional component that takes in `CreatePromptProps` as props. This component is used to create a new prompt in the chatbot UI. It uses the `ChatbotUIContext` to access the current user's profile and selected workspace. If either of these is not available, the component returns `null`.

The component maintains its own state for `isTyping`, `name`, and `content` using React's `useState` hook. These states are used to track whether the user is currently typing, the name of the new prompt, and the content of the new prompt, respectively.

The component returns a `SidebarCreateItem` component with the `contentType` set to "prompts". The `isOpen`, `isTyping`, and `onOpenChange` props are passed directly from the `CreatePrompt` props and state. The `createState` prop is an object containing the user's ID, and the name and content of the new prompt.

The `renderInputs` prop is a function that returns a JSX element containing two input fields for the name and content of the new prompt. The name input field uses the `Input` component and the content input field uses the `TextareaAutosize` component.

## Types

### CreatePromptProps

`CreatePromptProps` is an interface that defines the props for the `CreatePrompt` component. It has two properties:

- `isOpen`: a boolean indicating whether the component is currently open.
- `onOpenChange`: a function that takes a boolean and returns void. This function is used to change the `isOpen` state.

## Usage

The `CreatePrompt` component is likely used in a sidebar or similar UI element where users can create new prompts for a chatbot. The `isOpen` and `onOpenChange` props control whether the component is currently open, allowing the parent component to control its visibility. The `isTyping`, `name`, and `content` states are controlled within the component itself, with changes to the input fields updating these states.