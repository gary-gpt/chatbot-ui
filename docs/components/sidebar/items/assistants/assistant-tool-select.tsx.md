# AssistantToolSelect Component

The `AssistantToolSelect` component is a functional component that allows users to select tools for an assistant. It uses a dropdown menu to display the available tools and allows users to search for specific tools.

## Props

The `AssistantToolSelect` component accepts the following props:

- `selectedAssistantTools`: An array of tools that have already been selected. Each tool is an object of type `Tables<"tools">`.
- `onAssistantToolsSelect`: A function that is called when a tool is selected. It accepts a single argument, the selected tool which is of type `Tables<"tools">`.

## State

The `AssistantToolSelect` component maintains the following state:

- `isOpen`: A boolean value that indicates whether the dropdown menu is open.
- `search`: A string value that holds the current search query.

## Methods

The `AssistantToolSelect` component defines the following methods:

- `handleToolSelect`: A method that is called when a tool is selected. It calls the `onAssistantToolsSelect` prop with the selected tool as an argument.

# AssistantToolItem Component

The `AssistantToolItem` component is a functional component that represents a single tool in the dropdown menu. It displays the tool's name and an icon indicating whether the tool has been selected.

## Props

The `AssistantToolItem` component accepts the following props:

- `tool`: An object representing the tool. It is of type `Tables<"tools">`.
- `selected`: A boolean value indicating whether the tool has been selected.
- `onSelect`: A function that is called when the tool is selected. It accepts a single argument, the selected tool which is of type `Tables<"tools">`.

## Methods

The `AssistantToolItem` component defines the following methods:

- `handleSelect`: A method that is called when the tool is selected. It calls the `onSelect` prop with the tool as an argument.