---
source: components/sidebar/sidebar-content.tsx
generated: '2025-06-08T13:21:01.637Z'
tags: []
hash: 63daa2e966e511f56c9380e1271515bb48c554410375a36a90e846532d750f2c
---
# SidebarContent Component

The `SidebarContent` component is a functional component that renders the content of the sidebar. This includes create buttons, a search bar, and a data list.

## Props

The component receives the following props:

- `contentType`: A `ContentType` object that represents the type of the content.
- `data`: A `DataListType` object that represents the list of data items.
- `folders`: An array of `folders` objects from the `Tables` type.

## State

The component maintains a single piece of state:

- `searchTerm`: A string that represents the current search term. It is initially set to an empty string.

## Rendered Components

The `SidebarContent` component renders the following child components:

- `SidebarCreateButtons`: This component is responsible for rendering the create buttons. It receives the `contentType` and a boolean `hasData` that indicates whether there is any data.

- `SidebarSearch`: This component is responsible for rendering the search bar. It receives the `contentType`, the `searchTerm`, and a setter function `setSearchTerm` to update the `searchTerm`.

- `SidebarDataList`: This component is responsible for rendering the data list. It receives the `contentType`, the `filteredData`, and the `folders`.

## Filtered Data

The `filteredData` is derived from the `data` prop by filtering out items that do not include the `searchTerm` in their name (case-insensitive).

## Styling

The component uses Tailwind CSS for styling. The outermost `div` has a maximum height of 100% minus 50px, and uses flexbox for layout with a column direction. The create buttons and search bar are each wrapped in a `div` with a top margin of 2 units.
