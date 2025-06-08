---
source: components/sidebar/items/prompts/create-prompt.tsx
generated: '2025-06-08T13:21:01.662Z'
tags: []
hash: 4376211ad640d02d2ad086d50a5e8ca21d98b64139e994b0e3c8aa4a82d9a208
---
# CreatePrompt Component

The `CreatePrompt` component is a functional component in React that takes in `isOpen` and `onOpenChange` as props. 

## Props

The following are the props that the `CreatePrompt` component accepts:

- `isOpen` (boolean): A flag indicating whether the component is open or not.
- `onOpenChange` (function): A callback function that is invoked when the open state of the component changes. It accepts a boolean parameter indicating the new open state.

## State

The component maintains the following state variables:

- `isTyping` (boolean): A flag indicating whether the user is currently typing.
- `name` (string): The name of the prompt.
- `content` (string): The content of the prompt.

## Dependencies

The component uses the `ChatbotUIContext` to access the `profile` and `selectedWorkspace`. If either of these is not available, the component returns `null`.

## Rendered Components

The component renders a `SidebarCreateItem` with the following props:

- `contentType`: Set to "prompts".
- `isOpen`: The `isOpen` prop passed to the `CreatePrompt` component.
- `isTyping`: The `isTyping` state variable.
- `onOpenChange`: The `onOpenChange` prop passed to the `CreatePrompt` component.
- `createState`: An object containing the `user_id`, `name`, and `content` of the prompt.
- `renderInputs`: A function that returns a JSX element containing two input fields (one for the name and one for the content of the prompt) wrapped in div elements with a `space-y-1` class.

The `name` input field has a `maxLength` of `PROMPT_NAME_MAX` and the `content` textarea has a `minRows` of 6 and a `maxRows` of 20. Both fields update their corresponding state variables on change and update the `isTyping` state variable on composition start and end.
