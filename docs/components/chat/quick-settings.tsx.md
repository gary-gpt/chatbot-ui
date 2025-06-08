# QuickSettings Component

This is a React functional component named `QuickSettings`. It is used to manage and display quick settings for a chatbot UI. 

## Props

This component does not accept any props.

## State

The component maintains the following state:

- `isOpen`: A boolean value indicating whether the dropdown menu is open.
- `search`: A string value used for searching through presets and assistants.
- `loading`: A boolean value indicating whether the component is currently loading data.

## Context

The component uses the `ChatbotUIContext` to access and manipulate several values related to the chatbot UI.

## Functions

- `handleSelectQuickSetting`: This function is used to handle the selection of a quick setting. It takes an item and a content type as arguments. The function sets the selected assistant or preset, fetches related files and tools, and updates the chat settings accordingly.
- `checkIfModified`: This function checks if the current chat settings have been modified compared to the selected preset or assistant.

## Rendered JSX

The component renders a dropdown menu with a trigger button. The button displays the name of the selected preset or assistant, or "Quick Settings" if none is selected. When the dropdown menu is open, it displays an input field for searching and a list of available presets and assistants. Each item in the list is a `QuickSettingOption` component.

# QuickSettingOption Component

This is a child component used within the `QuickSettings` component. It represents a single option in the quick settings dropdown menu.

## Props

The component accepts the following props:

- `contentType`: A string indicating the type of the item ("presets" or "assistants").
- `isSelected`: A boolean indicating whether the item is currently selected.
- `item`: The item data.
- `onSelect`: A function to be called when the item is selected.
- `image`: A string representing the image associated with the item (only applicable for assistants).