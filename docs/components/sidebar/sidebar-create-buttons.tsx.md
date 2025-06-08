---
source: components/sidebar/sidebar-create-buttons.tsx
generated: '2025-06-08T13:21:01.637Z'
tags: []
hash: 350a5d9f9699f92a48bdb5b39c2ba968f9f7b68d1ad2f1627c045dbb965af9b6
---
# SidebarCreateButtons Component

This component is used to render a set of buttons in the sidebar that allow users to create new items based on the content type.

## Props

The `SidebarCreateButtons` component accepts the following props:

- `contentType`: This is a string that determines the type of content that will be created. The possible values are: "chats", "presets", "prompts", "files", "collections", "assistants", "tools", and "models".

- `hasData`: This is a boolean that determines whether the user has any existing data. If `true`, a button for creating a new folder will be displayed.

## State

The component maintains several state variables to control the visibility of various creation modals:

- `isCreatingPrompt`: Controls the visibility of the `CreatePrompt` modal.
- `isCreatingPreset`: Controls the visibility of the `CreatePreset` modal.
- `isCreatingFile`: Controls the visibility of the `CreateFile` modal.
- `isCreatingCollection`: Controls the visibility of the `CreateCollection` modal.
- `isCreatingAssistant`: Controls the visibility of the `CreateAssistant` modal.
- `isCreatingTool`: Controls the visibility of the `CreateTool` modal.
- `isCreatingModel`: Controls the visibility of the `CreateModel` modal.

## Functions

- `handleCreateFolder`: This function is used to create a new folder. It uses the `createFolder` function from the `@/db/folders` module.

- `getCreateFunction`: This function returns a function based on the `contentType` prop. This returned function is used to set the appropriate state variable to `true`, which opens the corresponding creation modal.

## Rendered JSX

The component renders a `div` containing two buttons and several modals. The first button is used to create a new item of the specified `contentType`. The second button, which is only displayed if `hasData` is `true`, is used to create a new folder.

The modals are used to create new items of various types. Each modal is only rendered if the corresponding state variable is `true`.
