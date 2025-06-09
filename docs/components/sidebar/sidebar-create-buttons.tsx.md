---
source: components/sidebar/sidebar-create-buttons.tsx
generated: 2025-06-08T21:52:17.321Z
tags: []
hash: 9f6b7d033d699778035f2cd7484ddc0786bb0eac529b95fedc3e8ece8521b5d2
---

# Sidebar Create Buttons Component Documentation

This file is located at `/Users/garymason/chatbot-ui/components/sidebar/sidebar-create-buttons.tsx`. It's a TypeScript (`.tsx`) file that exports a functional component `SidebarCreateButtons` used in a chatbot UI. This component provides buttons for creating different types of content in the sidebar of the application.

## Imports

The file imports several hooks, contexts, types, and components from different modules. These are used to manage state, handle events, and render UI elements.

## Interface

The `SidebarCreateButtonsProps` interface is declared to type-check the props that the `SidebarCreateButtons` component receives. It expects two properties: `contentType` and `hasData`.

## Component

The `SidebarCreateButtons` component is a functional component that takes `contentType` and `hasData` as props. It uses several hooks and context to manage state and handle events.

## State

The component maintains several pieces of state using the `useState` hook. These states track whether the user is currently creating a prompt, preset, file, collection, assistant, tool, or model.

## Event Handlers

The `handleCreateFolder` function is an event handler that creates a new folder when invoked. It checks if a profile and a selected workspace exist before creating the folder.

The `getCreateFunction` function returns a function based on the `contentType` prop. This returned function sets the corresponding state to `true`, indicating that the user is creating that type of content.

## Render

The component returns a JSX element that renders two buttons and several conditional components. The first button triggers the creation of a new content item, and the second button triggers the creation of a new folder. The conditional components are rendered based on whether the user is creating a prompt, preset, file, collection, assistant, tool, or model.

## Code Summary

```ts
// Import necessary modules, hooks, contexts, types, and components

// Define the props interface

// Define the SidebarCreateButtons component
  // Destructure props and context
  // Define state variables
  // Define event handlers
  // Return JSX elements

// Export the SidebarCreateButtons component
```

## Comments

The code is self-explanatory and does not require additional comments. The variable and function names are descriptive, and the code structure is clear and straightforward.