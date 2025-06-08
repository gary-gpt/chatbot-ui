---
source: components/sidebar/items/folders/update-folder.tsx
generated: '2025-06-08T13:21:01.662Z'
tags: []
hash: 6fb3209022f7be8191f93128c6c9b36deb76fdee7b563eb0319a7750c8364b66
---
# UpdateFolder Component

The `UpdateFolder` component is a functional component that allows users to update the name of a folder. It uses a dialog box to accept user input and updates the folder name in the database upon user confirmation.

## Props

- `folder`: A folder object from the `folders` table.

## Import Dependencies

The component imports several dependencies:

- UI components from the `ui` directory, including `Button`, `Dialog` and its associated components, `Input`, and `Label`.
- The `ChatbotUIContext` from the `context` directory.
- The `updateFolder` function from the `db/folders` directory.
- The `Tables` type from the `supabase/types` directory.
- The `IconEdit` icon from the `tabler/icons-react` package.
- Several hooks and types from the `react` package.

## State

The component maintains two pieces of state:

- `showFolderDialog`: A boolean indicating whether the dialog box is open.
- `name`: A string representing the current name of the folder.

## Event Handlers

The component defines several event handlers:

- `handleUpdateFolder`: An asynchronous function that updates the folder name in the database and updates the state of the folders in the context.
- `handleKeyDown`: A function that triggers the `handleUpdateFolder` function when the Enter key is pressed.

## Rendered JSX

The component returns a `Dialog` component that contains a `DialogTrigger` (an `IconEdit` icon), a `DialogContent` that contains a `DialogHeader`, an input field for the folder name, and a `DialogFooter` that contains Cancel and Save buttons. The Save button triggers the `handleUpdateFolder` function.
