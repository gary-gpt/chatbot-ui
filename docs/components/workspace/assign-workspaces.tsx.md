---
source: components/workspace/assign-workspaces.tsx
generated: 2025-06-08T22:17:39.308Z
tags: []
hash: 0c30fe30a7b48b3c3f18a4b497cff2bb6705f8fef6d498933d4b3717af554d9b
---

# Assign Workspaces Component Documentation

This document describes the `AssignWorkspaces` component found in the file `/Users/garymason/chatbot-ui/components/workspace/assign-workspaces.tsx`. This component is used to assign workspaces in a chatbot UI.

## Imports

The component imports several hooks and components from React, as well as some custom components and types. It also imports the `ChatbotUIContext` from the application's context.

## Interfaces

Two interfaces are defined in this file:

- `AssignWorkspaces`: This interface defines the props for the `AssignWorkspaces` component. It includes an array of selected workspaces and a function to handle workspace selection.

- `WorkspaceItemProps`: This interface defines the props for the `WorkspaceItem` component. It includes an array of selected workspaces, a workspace object, a boolean indicating whether the workspace is selected, and a function to handle workspace selection.

## Components

### AssignWorkspaces

The `AssignWorkspaces` component is a functional component that uses the `ChatbotUIContext` to get the available workspaces. It uses a `useRef` hook to get references to the input and button elements, and `useState` hooks to manage the state of the dropdown menu and the search input.

The `useEffect` hook is used to focus on the input field when the dropdown menu is opened.

The component returns a `DropdownMenu` component that includes a `DropdownMenuTrigger` and a `DropdownMenuContent`. The content includes an input field for searching workspaces and a list of `WorkspaceItem` components for each workspace.

### WorkspaceItem

The `WorkspaceItem` component is a functional component that displays a workspace. It uses a `handleSelect` function to handle the selection of a workspace. If the workspace is already selected and it's the only one selected, it shows a toast message and doesn't allow the selection to be removed.

The component returns a div that includes the workspace name and a check icon if the workspace is selected.

## Functions

### handleWorkspaceSelect

This function is passed to the `WorkspaceItem` component and is used to handle the selection of a workspace. It simply calls the `onSelectWorkspace` function passed as a prop to the `AssignWorkspaces` component with the selected workspace.

## Usage

The `AssignWorkspaces` component can be used in a parent component as follows:

```tsx
<AssignWorkspaces
  selectedWorkspaces={selectedWorkspaces}
  onSelectWorkspace={handleSelectWorkspace}
/>
```

Where `selectedWorkspaces` is an array of selected workspaces and `handleSelectWorkspace` is a function to handle the selection of a workspace.