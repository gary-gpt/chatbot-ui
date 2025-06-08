---
source: components/sidebar/items/collections/collection-item.tsx
generated: '2025-06-08T13:21:01.662Z'
tags: []
hash: b30b359c04209e33f270b29929a1d37ca45d83dfee20dba2a144f2d210b6280a
---
# CollectionItem Component

The `CollectionItem` component is a functional component that displays a collection item in a sidebar. It allows users to select files to be included in the collection, and to edit the collection's name and description.

## Props

- `collection`: An object of type `Tables<"collections">` representing the collection to be displayed.

## State

- `name`: A string representing the name of the collection. Initialized with the name of the collection passed as a prop.
- `isTyping`: A boolean indicating whether the user is currently typing. Initialized as `false`.
- `description`: A string representing the description of the collection. Initialized with the description of the collection passed as a prop.

## Functions

- `handleFileSelect`: A function that updates the list of selected files for the collection. It takes two parameters:
  - `file`: An object of type `CollectionFile` representing the file to be added or removed from the selection.
  - `setSelectedCollectionFiles`: A state setter function for updating the list of selected files.

## Render

The component renders a `SidebarItem` component with the following props:

- `item`: The collection object.
- `isTyping`: The `isTyping` state.
- `contentType`: A string `"collections"`.
- `icon`: An `IconBooks` component with a size of `30`.
- `updateState`: An object containing the `name` and `description` states.
- `renderInputs`: A function that returns a JSX element containing the inputs for selecting files and editing the collection's name and description. It takes a `renderState` object as a parameter, which contains the following properties:
  - `startingCollectionFiles`: An array of `CollectionFile` objects representing the initial selection of files.
  - `setStartingCollectionFiles`: A state setter function for updating the initial selection of files.
  - `selectedCollectionFiles`: An array of `CollectionFile` objects representing the current selection of files.
  - `setSelectedCollectionFiles`: A state setter function for updating the current selection of files.
