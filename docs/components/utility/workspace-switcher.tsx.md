---
source: components/utility/workspace-switcher.tsx
generated: '2025-06-08T13:21:01.638Z'
tags: []
hash: 75ded6889fe1d8f7c4f67a6f0c3447363badb77e006fc69755fb58f8641bb2c0
---
# WorkspaceSwitcher Component

The `WorkspaceSwitcher` component is a functional component that provides the functionality to switch between different workspaces. It also provides the ability to create a new workspace.

## Imports

This component imports several hooks, components, and contexts:

- `useChatHandler` hook from "@/components/chat/chat-hooks/use-chat-handler"
- `Popover`, `PopoverContent`, `PopoverTrigger` components from "@/components/ui/popover"
- `ChatbotUIContext` from "@/context/context"
- `createWorkspace` function from "@/db/workspaces"
- `useHotkey` hook from "@/lib/hooks/use-hotkey"
- `IconBuilding`, `IconHome`, `IconPlus` icons from "@tabler/icons-react"
- `ChevronsUpDown` icon from "lucide-react"
- `Image` component from "next/image"
- `useRouter` hook from "next/navigation"
- `FC`, `useContext`, `useEffect`, `useState` from "react"
- `Button` and `Input` components from "../ui/button"

## Props

The `WorkspaceSwitcher` component does not accept any props.

## State

The component maintains several state variables:

- `open`: a boolean indicating whether the workspace switcher is open or not.
- `value`: a string representing the currently selected workspace ID.
- `search`: a string representing the current search term for filtering workspaces.

## Context

The component uses the `ChatbotUIContext` to access and manipulate the current workspaces, workspace images, selected workspace, and chat handler.

## Functions

The component defines several functions:

- `handleCreateWorkspace`: This function creates a new workspace with default settings and adds it to the current list of workspaces. It then sets the newly created workspace as the selected workspace and navigates to its chat page.
- `getWorkspaceName`: This function takes a workspace ID as a parameter and returns the name of the workspace with that ID.
- `handleSelect`: This function takes a workspace ID as a parameter, sets the workspace with that ID as the selected workspace, and navigates to its chat page.

## Render

The component renders a `Popover` component that contains a `PopoverTrigger` and a `PopoverContent`. The `PopoverTrigger` displays the name and image of the currently selected workspace. The `PopoverContent` contains a button for creating a new workspace, an input field for searching workspaces, and a list of buttons for each workspace. Each workspace button displays the workspace's name and image and sets the workspace as the selected workspace when clicked.
