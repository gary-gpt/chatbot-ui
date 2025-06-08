# AssistantRetrievalSelect Component

This component is used to select an item from a list of files or collections. The selected items are passed to the parent component through a callback function.

## Props

- `selectedAssistantRetrievalItems`: An array of selected items. The items can be either of type `files` or `collections`.
- `onAssistantRetrievalItemsSelect`: A callback function that is called when an item is selected. The selected item is passed as an argument to this function.

## Usage

```jsx
<AssistantRetrievalSelect
  selectedAssistantRetrievalItems={selectedItems}
  onAssistantRetrievalItemsSelect={handleItemSelect}
/>
```

# AssistantRetrievalItemOption Component

This component is used to render an individual item in the dropdown menu of the `AssistantRetrievalSelect` component. It displays the item's name and an icon indicating its type (file or collection). If the item is selected, a checkmark icon is displayed.

## Props

- `contentType`: The type of the item. It can be either "files" or "collections".
- `item`: The item to be rendered. It should be of type `files` or `collections`.
- `selected`: A boolean indicating whether the item is selected.
- `onSelect`: A callback function that is called when the item is clicked. The item is passed as an argument to this function.

## Usage

```jsx
<AssistantRetrievalItemOption
  contentType="files"
  item={fileItem}
  selected={isSelected}
  onSelect={handleSelect}
/>
```