---
source: components/sidebar/items/tools/create-tool.tsx
generated: 2025-06-08T21:51:28.477Z
tags: []
hash: 4723f6710aaf0dadffd7c9be44f81cf9fcc889707908b9a53d04a835395b630e
---

# CreateTool Component Documentation

This document describes the CreateTool component located in the file `/Users/garymason/chatbot-ui/components/sidebar/items/tools/create-tool.tsx`.

## Overview

The CreateTool component is a functional component in React that provides an interface for creating a new tool in a chatbot UI. It uses various hooks and context to manage its state and behavior.

## Code Summary

### Imports

The component imports various other components and utilities from different modules. These include UI components like `Input`, `Label`, and `TextareaAutosize`, context like `ChatbotUIContext`, constants like `TOOL_DESCRIPTION_MAX` and `TOOL_NAME_MAX`, and utilities like `validateOpenAPI`.

### Props

The component accepts the following props:

- `isOpen`: A boolean indicating whether the component is currently open.
- `onOpenChange`: A function that is called when the open state of the component changes.

### State Variables

The component uses the `useState` hook to manage several pieces of state:

- `name`: The name of the tool being created.
- `isTyping`: A boolean indicating whether the user is currently typing.
- `description`: The description of the tool being created.
- `url`: The URL of the tool being created.
- `customHeaders`: Any custom headers for the tool being created.
- `schema`: The schema for the tool being created.
- `schemaError`: Any error that occurred while validating the schema.

### Rendered JSX

The component returns a `SidebarCreateItem` component with various props and children. The `contentType` prop is set to "tools", and the `createState` prop is a state object that includes the user ID from the profile context, as well as the current values of the name, description, url, customHeaders, and schema state variables.

The `renderInputs` prop is a function that returns a fragment of JSX. This fragment includes several `div` elements, each containing a `Label` and an `Input` or `TextareaAutosize` for one of the state variables. The `onChange` or `onValueChange` prop of each input component is set to a function that updates the corresponding state variable.

The `onOpenChange` prop is set to the `onOpenChange` prop passed to the CreateTool component.

## Code Comments

```ts
// Define the props for the CreateTool component
interface CreateToolProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

// Define the CreateTool component
export const CreateTool: FC<CreateToolProps> = ({ isOpen, onOpenChange }) => {
  // Use context to get the profile and selected workspace
  const { profile, selectedWorkspace } = useContext(ChatbotUIContext)

  // Define state variables for the tool name, typing status, description, url, custom headers, schema, and schema error
  const [name, setName] = useState("")
  // ...

  // Return null if there is no profile or selected workspace
  if (!profile || !selectedWorkspace) return null

  // Render a SidebarCreateItem component with various props and children
  return (
    <SidebarCreateItem
      // ...
    />
  )
}
```

Note: Some parts of the code are commented out and are not included in the documentation.