---
source: components/workspace/workspace-settings.tsx
generated: '2025-06-08T13:21:01.645Z'
tags: []
hash: 8266c2e830a21b9cc18afd5996d01c2ba83cf3c5bfffd69026d540e9d90c34d0
---
# WorkspaceSettings Component

The `WorkspaceSettings` component is a functional component that provides a user interface for managing workspace settings. It allows users to update the name, image, instructions, and default chat settings of a workspace.

## Props

The `WorkspaceSettings` component does not accept any props.

## State

The component maintains several pieces of state:

- `isOpen`: A boolean indicating whether the settings sheet is open.
- `name`: The name of the workspace.
- `imageLink`: The link to the workspace's image.
- `selectedImage`: The selected image file for the workspace.
- `description`: The description of the workspace.
- `instructions`: The instructions for the AI in the workspace.
- `defaultChatSettings`: The default chat settings for the workspace.

## Context

The component uses the `ChatbotUIContext` to access and update the workspace and chat settings.

## Functions

- `handleSave`: This function is called when the user clicks the save button. It uploads the selected image, updates the workspace in the database, and updates the workspace and chat settings in the context.
- `handleKeyDown`: This function is called when a key is pressed in the settings sheet. If the enter key is pressed, it triggers a click on the save button.

## Rendered Components

The component renders a `Sheet` which contains form fields for updating the workspace settings. The sheet is divided into two tabs: "Main" and "Defaults". The "Main" tab contains fields for updating the workspace name, image, and instructions. The "Defaults" tab contains a `ChatSettingsForm` for updating the default chat settings.

The bottom of the sheet contains a "Cancel" button, a "Save" button, and a `DeleteWorkspace` button (if the workspace is not the home workspace).
