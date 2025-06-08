---
source: components/sidebar/items/folders/delete-folder.tsx
generated: '2025-06-08T13:21:01.662Z'
tags: []
hash: e07ac761f818deb83da183d42093a4c606e5a48bccc14109afabb057e3c5cc6b
---
# DeleteFolder Component

The `DeleteFolder` component is a React Functional Component that provides functionality for deleting a folder and its associated items.

## Props

The component accepts the following props:

- `folder`: An object representing the folder to be deleted. It should be of the type `Tables<"folders">`.
- `contentType`: A string representing the type of content in the folder. It should be of the type `ContentType`.

## Context

The component uses the `ChatbotUIContext` to get several state update functions.

## State

The component maintains the following state:

- `showFolderDialog`: A boolean indicating whether the delete folder dialog is open or not.

## Methods

The component provides the following methods:

- `handleDeleteFolderOnly`: This method deletes the folder only, leaving the items within the folder intact.
- `handleDeleteFolderAndItems`: This method deletes both the folder and the items within the folder.

## Rendered JSX

The component renders a `Dialog` component that contains a `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogDescription`, and `DialogFooter`. The `DialogTrigger` is an `IconTrash` component that, when clicked, opens the delete folder dialog. The `DialogContent` contains a `DialogHeader` with a `DialogTitle` and `DialogDescription`, and a `DialogFooter` with three `Button` components. One button cancels the operation, one deletes the folder and its items, and one deletes only the folder.
