**📄 Source File:** `/components/chat/file-picker.tsx`  
**🕒 Generated:** 2025-06-07 13:31:15 UTC  
**🤖 Model:** gpt-4

---

# FilePicker.tsx

This file defines and exports a React component `FilePicker` which is used to display a list of files and collections to the user. The user can select a file or a collection from this list. The list of files and collections can be filtered based on a search query.

## Interface: FilePickerProps

This interface defines the properties that the `FilePicker` component expects:

- `isOpen`: A boolean indicating whether the file picker is open or not.
- `searchQuery`: A string representing the current search query.
- `onOpenChange`: A function that is called when the open state of the file picker changes.
- `selectedFileIds`: An array of strings representing the IDs of the currently selected files.
- `selectedCollectionIds`: An array of strings representing the IDs of the currently selected collections.
- `onSelectFile`: A function that is called when a file is selected.
- `onSelectCollection`: A function that is called when a collection is selected.
- `isFocused`: A boolean indicating whether the file picker is currently focused or not.

## Component: FilePicker

This is a functional component that uses the `ChatbotUIContext` to get the list of files and collections. It uses the `useRef` hook to keep a reference to the list of items (files and collections) and the `useEffect` hook to focus the first item when the component is focused.

The component filters the list of files and collections based on the search query and whether they are already selected. It defines handlers for opening and closing the file picker, selecting a file or a collection, and handling key down events.

The component returns a JSX element that displays the list of filtered files and collections. Each item in the list is a `div` element that can be focused and clicked. When an item is clicked or the Enter key is pressed, the appropriate select handler is called. The Escape key closes the file picker, the Backspace key does nothing, and the Tab and Arrow keys are used to navigate through the list.

## Interesting Structure or Nuance

The `getKeyDownHandler` function returns a function that handles key down events. This function uses a closure to capture the index, type, and item parameters. This is a common pattern in JavaScript and TypeScript for creating functions with private data.

The component uses the `type` property to determine whether an item is a file or a collection. This is a form of type discrimination, which is a common pattern in TypeScript for dealing with union types.

The component uses the `ref` attribute to keep a reference to each item in the list. This is a common pattern in React for accessing DOM elements directly.