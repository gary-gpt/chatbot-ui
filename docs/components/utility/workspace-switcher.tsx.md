---
source: components/utility/workspace-switcher.tsx
generated: 2025-06-08T22:17:21.361Z
tags: []
hash: 8fa610726dd0961e2fc5cf8c3379be880066b727c341d91a6da1461dc1b8a442
---

# Workspace Switcher Component Documentation

This markdown file documents the `WorkspaceSwitcher` component found in the file `/Users/garymason/chatbot-ui/components/utility/workspace-switcher.tsx`.

## Overview

The `WorkspaceSwitcher` component is a user interface component used to switch between different workspaces in a chatbot application. It provides a dropdown menu that allows users to select a workspace, create a new workspace, and search for existing workspaces.

## Imports

The component imports several hooks, components, and contexts necessary for its functionality:

- The `useChatHandler` hook is used to handle new chat events.
- The `Popover`, `PopoverContent`, and `PopoverTrigger` components from the UI library are used to create the dropdown menu.
- The `ChatbotUIContext` provides the current state and functions to update the state of the chatbot UI.
- The `createWorkspace` function is used to create a new workspace in the database.
- The `useHotkey` hook is used to handle keyboard shortcuts.
- The `IconBuilding`, `IconHome`, and `IconPlus` components are used as icons in the UI.
- The `ChevronsUpDown` component is used as an icon to indicate the dropdown menu.
- The `Image` component is used to display workspace images.
- The `useRouter` hook is used to handle navigation within the application.
- The `Button` and `Input` components are used in the UI.

## Props

The `WorkspaceSwitcher` component does not take any props.

## State

The component maintains several pieces of state:

- `open`: A boolean indicating whether the dropdown menu is open.
- `value`: The ID of the currently selected workspace.
- `search`: The current search query for filtering workspaces.

## Functions

The component defines several functions:

- `handleCreateWorkspace`: This function creates a new workspace with default settings and adds it to the list of workspaces.
- `getWorkspaceName`: This function returns the name of a workspace given its ID.
- `handleSelect`: This function sets the selected workspace and navigates to its chat page.

## Rendered JSX

The component returns a `Popover` component that contains the dropdown menu. The dropdown menu includes a button to create a new workspace, an input field to search for workspaces, and a list of buttons representing each workspace. Each workspace button displays an image or icon and the name of the workspace. Clicking on a workspace button selects that workspace and navigates to its chat page.

## Usage

The `WorkspaceSwitcher` component can be used anywhere in the application where a user needs to switch between workspaces. It should be wrapped in a `ChatbotUIContext.Provider` to provide the necessary state and functions.