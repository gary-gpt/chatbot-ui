---
source: components/sidebar/items/tools/tool-item.tsx
generated: 2025-06-08T21:51:44.119Z
tags: []
hash: b974c3a3bbb840ce377acc19c9ce6aedbd1162cbec2cb31878f4f81ee5eb37f1
---

# Documentation for `tool-item.tsx`

This file is a React component that represents a single tool item in the sidebar of a chatbot UI. The tool item can be edited directly in the sidebar, with changes being reflected in the state of the component.

## Import Statements

The component imports several other components and libraries to function correctly. These include UI components like `Input`, `Label`, and `TextareaAutosize` for user input, as well as constants and validation functions for handling OpenAPI schemas.

## Component Props

The `ToolItem` component accepts a single prop: `tool`. This prop is an object that represents the data of the tool being displayed and edited. It includes properties like `name`, `description`, `url`, `custom_headers`, and `schema`.

## Component State

The state of the component is managed with the `useState` hook from React. The state variables include `name`, `isTyping`, `description`, `url`, `customHeaders`, `schema`, and `schemaError`.

## Rendered JSX

The component returns a `SidebarItem` component with several props and children. The `item` prop is the `tool` object passed as a prop to `ToolItem`. The `isTyping` prop is a state variable that tracks whether the user is currently typing. The `contentType` prop is a string that represents the type of content being displayed and edited. The `icon` prop is an `IconBolt` component from the `@tabler/icons-react` library.

The `updateState` prop is an object that represents the current state of the tool item. It includes properties like `name`, `description`, `url`, `customHeaders`, and `schema`.

The `renderInputs` prop is a function that returns a JSX element. This element includes several `Input` and `TextareaAutosize` components for editing the properties of the tool item. The `TextareaAutosize` component for editing the `schema` property also includes logic for validating the entered schema and displaying any validation errors.

## Commented Out Code

There are several blocks of code that are currently commented out. These include an `Input` component for editing the `url` property of the tool item, as well as several `Checkbox` components for selecting categories for the tool item. If these features are needed in the future, the code can be uncommented and used.