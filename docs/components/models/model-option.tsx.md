---
source: components/models/model-option.tsx
generated: '2025-06-08T13:21:01.636Z'
tags: []
hash: 893ae615cc009ead4ba71b58f7ecac7f1a89c4a55a622e6976beb167e13c1de5
---
# ModelOption Component

The `ModelOption` component is a functional component that displays model information and provides an option to select a model.

## Props

The component accepts the following props:

- `model`: An object of type `LLM` which contains the model's information.
- `onSelect`: A callback function that is triggered when the model option is clicked.

## Usage

```jsx
<ModelOption model={modelData} onSelect={handleSelect} />
```

## Details

The component uses the `WithTooltip` component to display additional information about the model. The tooltip is displayed at the bottom of the model option.

If the model's provider is not "ollama" and the model has pricing information, the tooltip will display the input cost and, if available, the output cost.

The model option itself is a clickable area that triggers the `onSelect` function when clicked. It contains the model's icon and name.

The `ModelIcon` component is used to display the model's icon. The icon's width and height are set to 28.

The model's name is displayed with a font size of "sm" and font weight of "semibold".
