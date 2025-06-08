---
source: components/sidebar/sidebar-data-list.tsx
generated: '2025-06-08T13:21:01.637Z'
tags: []
hash: dfed29ad23a59886295af76eac525bcb13ac954ab32c54d39edda31604d74da1
---
# SidebarDataList Component

This is a React functional component that renders a list of data items in the sidebar. The data items can be of different types, and they are rendered accordingly.

## Props

The component receives the following props:

- `contentType`: This is a string that specifies the type of content that the data items represent. It can be one of the following: "chats", "presets", "prompts", "files", "collections", "assistants", "tools", or "models".
- `data`: This is an array of data items to be displayed in the list. The structure of each item depends on the `contentType`.
- `folders`: This is an array of folder objects. Each folder object has an `id` property.

## State

The component maintains the following state variables:

- `isOverflowing`: This is a boolean that indicates whether the content of the list is overflowing its container.
- `isDragOver`: This is a boolean that indicates whether a drag operation is currently happening over the list.

## Functions

The component defines several functions for handling different events and operations:

- `getDataListComponent`: This function takes a content type and a data item, and returns a JSX element that represents the item. The type of the element depends on the content type.
- `getSortedData`: This function takes an array of data items and a date category, and returns a new array that contains the items sorted by their update or creation date, and filtered according to the date category.
- `updateFolder`: This function takes an item id and a folder id, and updates the folder id of the item in the database. It also updates the state of the component to reflect the change.
- `handleDragEnter`, `handleDragLeave`, `handleDragStart`, `handleDragOver`, and `handleDrop`: These are event handlers for drag and drop operations.

## Rendering

The component renders a list of data items. Each item is represented by a component that depends on the content type. The items are grouped by their folder id, and each group is rendered inside a `Folder` component. If the content type is "chats", the items are also grouped by their update or creation date.

If there are no data items, the component renders a message indicating that there are no items of the specified content type.
