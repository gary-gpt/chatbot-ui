**📄 Source File:** `/components/sidebar/items/presets/preset-item.tsx`  
**🕒 Generated:** 2025-06-07 13:43:24 UTC  
**🤖 Model:** gpt-4

---

# PresetItem.tsx

This TypeScript file is part of a larger project, likely a web application, that uses React and Supabase. It defines a functional component `PresetItem` which is used to display and manage a single preset item in a sidebar.

## Exports

The file exports a single functional component `PresetItem`.

### PresetItem

`PresetItem` is a functional component that takes in a single prop `preset` of type `Tables<"presets">`. This prop is an object that represents a preset, which includes properties like `name`, `description`, `model`, `prompt`, `temperature`, `context_length`, `include_profile_context`, and `include_workspace_instructions`.

The component maintains its own state for `name`, `description`, and `presetChatSettings` using React's `useState` hook. The `presetChatSettings` state is an object that mirrors the structure of the `preset` prop.

The component uses the `SidebarItem` component to render the preset item. It passes several props to `SidebarItem`, including the `preset` object, a flag `isTyping`, the `contentType` string, an `icon` component, an `updateState` object, and a `renderInputs` function.

The `renderInputs` function returns a JSX fragment that includes a `Label` and an `Input` for the preset name, and a `ChatSettingsForm` for the chat settings.

## Usage

This component is likely used in a sidebar or a similar UI element to display a list of presets. The user can interact with each `PresetItem` to view and modify its details.

## Interesting Structure or Nuance

The `PresetItem` component uses the `LLM_LIST` to find the details of the model associated with the preset. This list is likely a constant array that contains the details of all available models.

The component also uses the `ModelIcon` component to render the icon of the model. The `provider` prop of `ModelIcon` is set to the `provider` property of the model details, or "custom" if the model details are not found.

The `ChatSettingsForm` component is used to manage the chat settings of the preset. It takes in the `presetChatSettings` state as a prop, and updates it using the `setPresetChatSettings` function. The `useAdvancedDropdown` prop is set to `true`, which likely enables some advanced features in the form.