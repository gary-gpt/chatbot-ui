---
source: app/[locale]/[workspaceid]/layout.tsx
generated: 2025-06-08T21:14:51.202Z
tags: []
hash: 6f909b763839f0481a164c9f0bc5bfee93e959f169e4e698c4397f41aa18b731
---

# Chatbot UI Workspace Layout

This TypeScript file is responsible for the layout of the workspace in a chatbot UI. It fetches and sets the data for the workspace, including assistants, chats, collections, folders, files, presets, prompts, tools, and models. It also handles user authentication and redirects to the login page if the user is not authenticated.

## Code Overview

```ts
"use client"
```
This line indicates that the code runs on the client-side.

## Imports

The code imports various components, contexts, database functions, types, hooks, and libraries necessary for the functionality of the workspace layout.

## WorkspaceLayoutProps Interface

This interface defines the type for the `children` prop, which is a `ReactNode`. This prop will be used to render child components within the `WorkspaceLayout` component.

## WorkspaceLayout Component

This is the main component of the file. It receives `children` as a prop and renders them within the `Dashboard` component.

### State Variables

The component uses the `useState` hook to manage the loading state of the workspace data. It also uses the `useContext` hook to access and set various values from the `ChatbotUIContext`.

### useEffect Hooks

There are two `useEffect` hooks in this component:

1. The first one runs once when the component mounts. It checks if the user is authenticated. If not, it redirects the user to the login page. If the user is authenticated, it fetches the workspace data.

2. The second one runs whenever the `workspaceId` changes. It clears the chat messages, user input, and other related states, and fetches the new workspace data.

### Helper Functions

The `isValidUUID` function checks if a given value is a valid UUID. The `fetchWorkspaceData` function fetches and sets all the necessary data for the workspace.

## Return Statement

If the workspace data is still loading, the component renders a `Loading` component. Once the data is loaded, it renders the `Dashboard` component with the `children` prop.

## Export

The `WorkspaceLayout` component is exported as the default export of this file.