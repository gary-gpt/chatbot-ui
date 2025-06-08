# ChatSettingsForm Component

This is a React functional component that renders a form for chat settings. The form includes fields for selecting a model, entering a prompt, and configuring advanced settings.

## Props

The component accepts the following props:

- `chatSettings` (required): An object of type `ChatSettings` that contains the current chat settings.
- `onChangeChatSettings` (required): A function that is called when any chat setting is changed. The new `ChatSettings` object is passed as an argument.
- `useAdvancedDropdown` (optional, default = `true`): A boolean that determines whether the advanced settings should be displayed in a dropdown.
- `showTooltip` (optional, default = `true`): A boolean that determines whether tooltips should be displayed.

## Dependencies

This component uses the `ChatbotUIContext` to access the current profile and models. It also uses several other components for rendering different parts of the form:

- `ModelSelect`: A dropdown for selecting a model.
- `TextareaAutosize`: A textarea that automatically adjusts its size based on the input.
- `AdvancedSettings`: A component that wraps the advanced settings.
- `AdvancedContent`: A component that renders the advanced settings.

# AdvancedContent Component

This is a React functional component that renders the advanced settings for the chat. These settings include temperature, context length, and whether to include profile context and workspace instructions.

## Props

The component accepts the following props:

- `chatSettings` (required): An object of type `ChatSettings` that contains the current chat settings.
- `onChangeChatSettings` (required): A function that is called when any chat setting is changed. The new `ChatSettings` object is passed as an argument.
- `showTooltip` (required): A boolean that determines whether tooltips should be displayed.

## Dependencies

This component uses the `ChatbotUIContext` to access the current profile, selected workspace, available open router models, and models. It also uses several other components for rendering different parts of the form:

- `Slider`: A slider for adjusting numerical settings.
- `Checkbox`: A checkbox for toggling boolean settings.
- `WithTooltip`: A component that wraps another component and adds a tooltip to it.
- `Select`: A dropdown for selecting a value from a list.