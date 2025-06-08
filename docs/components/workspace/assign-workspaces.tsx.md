---
source: components/workspace/assign-workspaces.tsx
generated: '2025-06-08T13:21:01.644Z'
tags: []
hash: 4d702c90f70f0352b5790a521996396b58edea4209467e0bd6c3f9e42d13d933
---
# AssignWorkspaces Component

This component allows users to assign workspaces. It uses a dropdown menu to display available workspaces and allows users to select one or more workspaces.

## Props

- `selectedWorkspaces`: An array of selected workspaces. Each workspace is an object of type `Tables<"workspaces">`.
- `onSelectWorkspace`: A function that is called when a workspace is selected. It receives the selected workspace as an argument.

## Dependencies

- `ChatbotUIContext`: This context provides the list of available workspaces.
- `Button`, `DropdownMenu`, `DropdownMenuContent`, `DropdownMenuTrigger`, `Input`: UI components used in the component.
- `IconChevronDown`, `IconCircleCheckFilled`: Icons used in the component.
- `toast`: A function used to display notifications.

## State

- `isOpen`: A boolean indicating whether the dropdown menu is open.
- `search`: A string used to filter the list of workspaces.

## Methods

- `handleWorkspaceSelect`: This method is called when a workspace is selected. It calls the `onSelectWorkspace` prop with the selected workspace as an argument.

# WorkspaceItem Component

This component represents a single workspace in the dropdown menu.

## Props

- `selectedWorkspaces`: An array of selected workspaces. Each workspace is an object of type `Tables<"workspaces">`.
- `workspace`: The workspace represented by this component. It is an object of type `Tables<"workspaces">`.
- `selected`: A boolean indicating whether the workspace is selected.
- `onSelect`: A function that is called when the workspace is selected. It receives the selected workspace as an argument.

## Methods

- `handleSelect`: This method is called when the workspace is selected. If the workspace is already selected and it is the only selected workspace, it displays a notification and does nothing. Otherwise, it calls the `onSelect` prop with the workspace as an argument.
