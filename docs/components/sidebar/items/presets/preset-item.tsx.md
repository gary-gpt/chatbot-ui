---
source: components/sidebar/items/presets/preset-item.tsx
generated: 2025-06-08T21:50:16.756Z
tags: []
hash: eec4f5dd1a6ac8e66396065ad8fe41031f6f425bb86e658ec2119aacd3d0cdc8
---

# Documentation for `preset-item.tsx`

This file is a React component that represents an individual preset item in a sidebar. It is located at `/Users/garymason/chatbot-ui/components/sidebar/items/presets/preset-item.tsx`.

## Imports

The file imports several components and constants from other parts of the application, including:

- UI components such as `ModelIcon`, `ChatSettingsForm`, `Input`, and `Label`.
- The `PRESET_NAME_MAX` constant from the `limits` file in the `db` directory.
- The `LLM_LIST` constant from the `llm-list` file in the `models/llm` directory.
- The `Tables` type from the `types` file in the `supabase` directory.
- The `useState` hook and `FC` (Function Component) type from the `react` library.
- The `SidebarItem` component from the `all` directory.

## Interface

The `PresetItemProps` interface is defined to type the `preset` prop that the `PresetItem` component expects. This `preset` prop is an object that matches the structure of a preset in the `presets` table in the database.

## Component

The `PresetItem` component is a functional component that takes a `PresetItemProps` object as its props. It uses the `useState` hook to maintain local state for several properties of the preset, including its name, description, and chat settings.

The component finds the details of the model associated with the preset by searching the `LLM_LIST` for a model with a matching `modelId`.

The component returns a `SidebarItem` component with several props:

- `item`: The preset object.
- `isTyping`: A boolean indicating whether the user is currently typing.
- `contentType`: A string indicating the type of content (in this case, "presets").
- `icon`: A `ModelIcon` component representing the model associated with the preset.
- `updateState`: An object containing the current state of the preset.
- `renderInputs`: A function that returns the JSX to render the inputs for editing the preset.

## Usage

This component is likely used in a list or grid view to represent each preset in the sidebar of the application. It allows the user to view and edit the details of each preset.