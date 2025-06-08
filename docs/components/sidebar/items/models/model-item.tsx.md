---
source: components/sidebar/items/models/model-item.tsx
generated: '2025-06-08T13:21:01.662Z'
tags: []
hash: 5f0f0aaabb68edf3de9bc18cd0db227a9e859de4b053f670a0763d7ade8d6b4c
---
# ModelItem Component

The `ModelItem` component is a functional component that renders a sidebar item with various input fields for managing model details.

## Props

The component takes the following props:

- `model`: An object of type `Tables<"models">` representing the model data.

## State

The component maintains the following state variables:

- `isTyping`: A boolean indicating whether the user is typing.
- `apiKey`: The API key of the model.
- `baseUrl`: The base URL of the model.
- `description`: The description of the model.
- `modelId`: The ID of the model.
- `name`: The name of the model.
- `contextLength`: The context length of the model.

## Rendered JSX

The component renders a `SidebarItem` component with the following props:

- `item`: The model data.
- `isTyping`: The `isTyping` state variable.
- `contentType`: The string "models".
- `icon`: An `IconSparkles` component.
- `updateState`: An object containing the current state variables.
- `renderInputs`: A function that returns a JSX element containing various input fields for updating the model details.

The `renderInputs` function renders the following input fields:

- Name: An input field for the model name.
- Model ID: An input field for the model ID.
- Base URL: An input field for the model's base URL.
- API Key: A password input field for the model's API key.
- Max Context Length: A number input field for the model's max context length.

Each input field is accompanied by a `Label` component displaying the name of the field. The Base URL field is also accompanied by a note indicating that the API must be compatible with the OpenAI SDK.
