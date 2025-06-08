# CollectionFileSelect Component

This component is a dropdown menu for selecting files from a collection. It's used in the context of a chatbot UI.

## Props

- `selectedCollectionFiles`: An array of `CollectionFile` objects that are currently selected.
- `onCollectionFileSelect`: A function that will be called when a file is selected from the dropdown. The selected file will be passed as an argument.

## Dependencies

- `Button` component from "@/components/ui/button"
- `DropdownMenu`, `DropdownMenuContent`, `DropdownMenuTrigger` components from "@/components/ui/dropdown-menu"
- `FileIcon` component from "@/components/ui/file-icon"
- `Input` component from "@/components/ui/input"
- `ChatbotUIContext` from "@/context/context"
- `CollectionFile` type from "@/types"
- `IconChevronDown`, `IconCircleCheckFilled` from "@tabler/icons-react"
- `FC`, `useContext`, `useEffect`, `useRef`, `useState` from "react"

## Usage

```jsx
<CollectionFileSelect
  selectedCollectionFiles={selectedFiles}
  onCollectionFileSelect={handleFileSelect}
/>
```

# CollectionFileItem Component

This component represents a single file item in the `CollectionFileSelect` dropdown.

## Props

- `file`: A `CollectionFile` object representing the file.
- `selected`: A boolean indicating whether the file is currently selected.
- `onSelect`: A function that will be called when the file item is clicked. The file will be passed as an argument.

## Dependencies

- `FileIcon` component from "@/components/ui/file-icon"
- `FC` from "react"

## Usage

```jsx
<CollectionFileItem
  file={file}
  selected={isSelected}
  onSelect={handleSelect}
/>
```
This component is typically not used directly, but is rendered by the `CollectionFileSelect` component.