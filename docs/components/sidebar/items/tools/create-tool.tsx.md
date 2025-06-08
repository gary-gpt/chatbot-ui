---
source: components/sidebar/items/tools/create-tool.tsx
generated: '2025-06-08T13:21:01.663Z'
tags: []
hash: 2f65da09627d873217d90a343eb225f4b5dcdffe1b00572a014141452f5e9e08
---
# CreateTool Component Documentation

`CreateTool` is a functional component in React that provides an interface for creating a new tool.

## Props

- `isOpen` (boolean): Determines whether the component is open or not.
- `onOpenChange` (function): Callback function that is called when the open state of the component changes. It takes a boolean argument indicating the new open state.

## State Variables

- `name` (string): The name of the tool being created.
- `isTyping` (boolean): A flag indicating whether the user is currently typing.
- `description` (string): The description of the tool being created.
- `url` (string): The URL of the tool being created.
- `customHeaders` (string): The custom headers for the tool being created.
- `schema` (string): The schema of the tool being created.
- `schemaError` (string): Any error that occurs while validating the schema.

## Context

This component uses the `ChatbotUIContext` to access the user's profile and the selected workspace.

## Functionality

The component renders a `SidebarCreateItem` component with the content type set to "tools". The create state of the `SidebarCreateItem` is an object containing the user's id, the name, description, URL, custom headers, and schema of the tool being created.

The `renderInputs` function of the `SidebarCreateItem` renders several `Input` and `TextareaAutosize` components for the user to input the tool's name, description, URL, custom headers, and schema. The schema input includes validation using the `validateOpenAPI` function, and any errors are displayed to the user.

## Importing

```javascript
import { CreateTool } from "@/components/sidebar/items/all/sidebar-create-item"
```

## Usage

```javascript
<CreateTool isOpen={isOpen} onOpenChange={handleOpenChange} />
```

Where `isOpen` is a boolean indicating whether the component is open, and `handleOpenChange` is a function that handles changes to the open state.
