---
source: components/sidebar/items/all/sidebar-create-item.tsx
generated: 2025-06-08T21:39:25.420Z
tags: []
hash: bcea0d47c2dab08622fac0726d387b01254bff6812746a95f5e59b77b826124e
---

# Sidebar Create Item Component Documentation

This document provides an overview of the `SidebarCreateItem` component found in the file `/Users/garymason/chatbot-ui/components/sidebar/items/all/sidebar-create-item.tsx`. This component is used to create new items in the sidebar of the Chatbot UI.

## Table of Contents

- [Component Overview](#component-overview)
- [Props](#props)
- [State Variables](#state-variables)
- [Functions](#functions)
- [Rendered JSX](#rendered-jsx)

## Component Overview

`SidebarCreateItem` is a functional component that provides the functionality to create a new item in the sidebar. The type of item to be created is determined by the `contentType` prop, and the specific inputs for the creation form are provided by the `renderInputs` prop.

## Props

The `SidebarCreateItem` component accepts the following props:

- `isOpen`: A boolean indicating whether the create item form is open.
- `onOpenChange`: A function to be called when the open state of the form changes.
- `contentType`: A string representing the type of content to be created.
- `renderInputs`: A function that returns JSX elements representing the inputs for the creation form.
- `createState`: An object containing the current state of the creation form.
- `isTyping`: A boolean indicating whether the user is currently typing in the form.

## State Variables

The component uses the following state variables:

- `creating`: A boolean indicating whether a new item is currently being created. This is used to disable the form's buttons during the creation process.

## Functions

The component defines the following functions:

- `createFunctions`: An object mapping content types to functions that create new items of that type.
- `stateUpdateFunctions`: An object mapping content types to functions that update the state of the corresponding item list.
- `handleCreate`: A function that handles the creation of a new item. It calls the appropriate create function and updates the state of the corresponding item list.
- `handleKeyDown`: A function that handles key down events in the form. If the Enter key is pressed and the user is not currently typing, it triggers the creation of a new item.

## Rendered JSX

The component returns a `Sheet` component containing the creation form. The form includes a title, the inputs returned by the `renderInputs` prop, and a footer with Cancel and Create buttons. The Create button triggers the `handleCreate` function when clicked.