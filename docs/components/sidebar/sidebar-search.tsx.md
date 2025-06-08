---
source: components/sidebar/sidebar-search.tsx
generated: '2025-06-08T13:21:01.637Z'
tags: []
hash: 9c9f273c31cd24d5dd7fb216de72989ad4b474ca6077d1b20820bd4577986c60
---
# SidebarSearch Component

The `SidebarSearch` component is a functional component that renders an input field used for searching content.

## Props

The `SidebarSearch` component accepts the following props:

### `contentType: ContentType`

This prop is used to specify the type of content that the search input field is intended for. The `ContentType` is an enumeration that defines the possible types of content that can be searched.

### `searchTerm: string`

This prop is used to control the value of the search input field. It should be a string that represents the current search term.

### `setSearchTerm: Function`

This function is used to update the value of the `searchTerm` prop. It should be a function that accepts a single argument: a string that represents the new search term.

## Usage

The `SidebarSearch` component is used to render a search input field. The `placeholder` attribute of the input field is dynamically generated based on the `contentType` prop. The `value` attribute is controlled by the `searchTerm` prop, and the `onChange` event handler updates the `searchTerm` prop by calling the `setSearchTerm` function with the new value of the input field.

Here is an example of how to use the `SidebarSearch` component:

```jsx
<SidebarSearch
  contentType={ContentType.BLOG}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>
```

In this example, the `SidebarSearch` component is used to search blog content. The `searchTerm` and `setSearchTerm` props are assumed to be controlled by the parent component.
