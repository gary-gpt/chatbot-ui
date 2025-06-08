# ToolItem Component

The `ToolItem` component is a functional component in React that represents a single tool item. It uses the `SidebarItem` component to display the tool's details and allows the user to edit these details.

## Props

The `ToolItem` component accepts the following props:

- `tool`: An object representing a tool. It should match the `Tables<"tools">` type from the `@/supabase/types` module.

## State

The `ToolItem` component maintains the following state variables:

- `name`: The name of the tool. Initialized with the `name` property of the `tool` prop.
- `isTyping`: A boolean indicating whether the user is currently typing. Initialized as `false`.
- `description`: The description of the tool. Initialized with the `description` property of the `tool` prop.
- `url`: The URL of the tool. Initialized with the `url` property of the `tool` prop.
- `customHeaders`: The custom headers of the tool. Initialized with the `custom_headers` property of the `tool` prop.
- `schema`: The schema of the tool. Initialized with the `schema` property of the `tool` prop.
- `schemaError`: A string representing any error that occurs when parsing or validating the `schema`. Initialized as an empty string.

## Rendered JSX

The `ToolItem` component renders a `SidebarItem` component with the following props:

- `item`: The `tool` prop.
- `isTyping`: The `isTyping` state variable.
- `contentType`: The string `"tools"`.
- `icon`: An `IconBolt` component with a `size` of `30`.
- `updateState`: An object containing the current state variables.
- `renderInputs`: A function that returns a JSX element containing the input fields for editing the tool's details.

The `renderInputs` function renders a series of `Label` and `Input` or `TextareaAutosize` components for each editable field. The `onChange` or `onValueChange` prop of each input field is set to a function that updates the corresponding state variable.

The `schema` field also includes a validation step that parses the input as JSON and validates it as an OpenAPI schema. If the validation fails, the `schemaError` state variable is updated with the error message.

## Import Dependencies

The `ToolItem` component imports the following dependencies:

- `Input`, `Label`, and `TextareaAutosize` components from the `@/components/ui` module.
- `TOOL_DESCRIPTION_MAX` and `TOOL_NAME_MAX` constants from the `@/db/limits` module.
- `validateOpenAPI` function from the `@/lib/openapi-conversion` module.
- `Tables` type from the `@/supabase/types` module.
- `IconBolt` component from the `@tabler/icons-react` module.
- `FC` and `useState` from the `react` module.
- `SidebarItem` component from the `../all/sidebar-display-item` module.