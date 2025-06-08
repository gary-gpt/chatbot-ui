---
source: components/sidebar/items/presets/create-preset.tsx
generated: '2025-06-08T13:21:01.662Z'
tags: []
hash: b2c0928c0417b1b4a86d56c3a037595ee8fe1da88c0f1d87b99643e6577730c4
---
# CreatePreset Component

The `CreatePreset` component is a Functional Component that is used to create new presets. It uses the `ChatbotUIContext` to get the profile and selected workspace details.

## Props

- `isOpen`: A boolean value indicating whether the component is open or not.
- `onOpenChange`: A function that is called when the open state of the component changes. It accepts a boolean argument indicating the new open state.

## State Variables

- `name`: A string representing the name of the preset.
- `isTyping`: A boolean value indicating whether the user is currently typing or not.
- `description`: A string representing the description of the preset.
- `presetChatSettings`: An object containing the chat settings for the preset. It includes fields like model, prompt, temperature, context length, whether to include profile context, whether to include workspace instructions, and embeddings provider.

## Return

The component returns `null` if either the profile or the selected workspace is not available. Otherwise, it returns a `SidebarCreateItem` component with the following props:

- `contentType`: Set to "presets".
- `isOpen`: The `isOpen` prop passed to the `CreatePreset` component.
- `isTyping`: The `isTyping` state variable.
- `onOpenChange`: The `onOpenChange` prop passed to the `CreatePreset` component.
- `createState`: An object containing the details of the preset to be created.
- `renderInputs`: A function that returns JSX for rendering the input fields for the preset name and chat settings.

## Imported Components

- `SidebarCreateItem`: A component used to create a new item in the sidebar.
- `ChatSettingsForm`: A form for setting the chat settings.
- `Input`: A basic input component.
- `Label`: A basic label component.
