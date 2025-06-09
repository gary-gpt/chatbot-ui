---
source: components/workspace/delete-workspace.tsx
generated: 2025-06-08T22:18:00.407Z
tags: []
hash: 97e3456cea6b076ee30fa6255027157f92776116b4faa823302886c6b3dcca95
---

# DeleteWorkspace Component Documentation

This document provides a detailed explanation of the `DeleteWorkspace` component found in the file `/Users/garymason/chatbot-ui/components/workspace/delete-workspace.tsx`. This component is written in TypeScript and utilizes the React library.

## Overview

The `DeleteWorkspace` component is a functional component that provides the functionality to delete a workspace. It uses a dialog box to confirm the deletion of the workspace. The user must type the name of the workspace to confirm the deletion.

## Import Statements

The component imports several hooks, components, and context providers:

- `useChatHandler` hook from the chat-hooks directory.
- `Button` component from the ui directory.
- `Dialog`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogTitle`, and `DialogTrigger` components from the ui directory.
- `ChatbotUIContext` from the context directory.
- `deleteWorkspace` function from the workspaces directory in the db directory.
- `Tables` type from the types directory in the supabase directory.
- `FC`, `useContext`, `useRef`, and `useState` from the react library.
- `Input` component from the ui directory.
- `useRouter` hook from the next/navigation library.

## Component Props

The `DeleteWorkspace` component accepts the following props:

- `workspace`: An object representing the workspace to be deleted.
- `onDelete`: A function to be executed after the workspace is deleted.

## State Variables

The component uses the following state variables:

- `showWorkspaceDialog`: A boolean state variable to control the visibility of the dialog box.
- `name`: A string state variable to store the name of the workspace entered by the user in the dialog box.

## Functions

The component defines the following functions:

- `handleDeleteWorkspace`: This function is called when the user clicks the delete button in the dialog box. It deletes the workspace, updates the workspaces state in the context, navigates to the default workspace, closes the dialog box, calls the `onDelete` prop function, and initiates a new chat.
- `handleKeyDown`: This function is called when a key is pressed in the dialog box. If the key is "Enter", it simulates a click on the delete button.

## Rendered JSX

The component returns a `Dialog` component. Inside the dialog, it renders a `Button` to trigger the dialog, a `DialogHeader` with a title and description, an `Input` for the user to type the workspace name, and a `DialogFooter` with cancel and delete buttons. The delete button is disabled if the name typed by the user does not match the workspace name.

## Code Summary

```ts
export const DeleteWorkspace: FC<DeleteWorkspaceProps> = ({ workspace, onDelete }) => {
  // Context and hooks usage
  // State variables
  // Functions definition
  // JSX return
}
```

This component is a part of the chatbot UI that allows users to delete workspaces. It ensures that the user is sure about the deletion by asking them to type the workspace name and confirming the action.