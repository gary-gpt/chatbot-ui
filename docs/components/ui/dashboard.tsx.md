# Dashboard Component

This file exports a `Dashboard` component which is a functional component in React. It provides a layout for the application with a sidebar and main content area. The sidebar can be toggled on and off.

## Imports

This file imports several components, hooks, utilities and types from various locations. The components include `Sidebar`, `SidebarSwitcher`, `Button`, `Tabs` and `CommandK`. The hooks include `useHotkey`, `usePathname`, `useRouter`, `useSearchParams` and `useSelectFileHandler`. The utilities include `cn`. The types include `ContentType`.

## Constants

The `SIDEBAR_WIDTH` constant is set to `350`.

## Props

The `Dashboard` component accepts the following props:

- `children`: A `ReactNode` which represents the child components to be rendered in the main content area.

## State

The `Dashboard` component maintains the following state:

- `contentType`: The type of content to be displayed in the sidebar. It is initially set to the value of the `tab` query parameter or `chats` if the `tab` query parameter is not present.
- `showSidebar`: A boolean indicating whether the sidebar should be displayed. It is initially set to the value of the `showSidebar` item in local storage or `false` if the `showSidebar` item is not present in local storage.
- `isDragging`: A boolean indicating whether a file is currently being dragged over the main content area. It is initially set to `false`.

## Handlers

The `Dashboard` component defines the following handlers:

- `onFileDrop`: Handles the dropping of a file onto the main content area.
- `handleDragEnter`: Handles the dragging of a file over the main content area.
- `handleDragLeave`: Handles the dragging of a file away from the main content area.
- `onDragOver`: Prevents the default action when a file is dragged over the main content area.
- `handleToggleSidebar`: Toggles the visibility of the sidebar and updates the `showSidebar` item in local storage.

## Render

The `Dashboard` component renders a `div` with a `CommandK` component, a `div` for the sidebar and a `div` for the main content area. The sidebar `div` contains a `Tabs` component which includes a `SidebarSwitcher` component and a `Sidebar` component. The main content area `div` contains the `children` prop and a `Button` component for toggling the sidebar.