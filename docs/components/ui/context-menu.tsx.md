---
source: components/ui/context-menu.tsx
generated: '2025-06-08T13:21:01.640Z'
tags: []
hash: 20fd99a96d288edbd02f7aba5661ee7c6f4351a95e6dcdc9228a621b52f545dd
---
# ContextMenu Component Documentation

This file defines a set of components for creating context menus using the `@radix-ui/react-context-menu` library. The components are designed to be flexible and customizable, with properties for controlling appearance and behavior.

## Components

### `ContextMenu`

The root component for a context menu.

### `ContextMenuTrigger`

A component that triggers the display of the context menu.

### `ContextMenuContent`

The container for the content of the context menu.

### `ContextMenuItem`

A selectable item within the context menu.

### `ContextMenuCheckboxItem`

A selectable item within the context menu that displays a checkbox.

### `ContextMenuRadioItem`

A selectable item within the context menu that displays a radio button.

### `ContextMenuLabel`

A non-selectable label within the context menu.

### `ContextMenuSeparator`

A separator line to divide groups of items within the context menu.

### `ContextMenuShortcut`

A component to display keyboard shortcut hints within the context menu.

### `ContextMenuGroup`

A component to group related items within the context menu.

### `ContextMenuPortal`

A component that renders the context menu into a React portal.

### `ContextMenuSub`

A component that creates a sub-menu within the context menu.

### `ContextMenuSubContent`

The container for the content of a sub-menu.

### `ContextMenuSubTrigger`

A component that triggers the display of a sub-menu.

### `ContextMenuRadioGroup`

A group of `ContextMenuRadioItem` components.

## Usage

Each component is exported individually and can be imported as needed. The components are designed to be composed together to create a complete context menu. For example:

```jsx
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem
} from './ContextMenu';

function MyComponent() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <button>Open Menu</button>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onSelect={() => console.log('Item 1 selected')}>
          Item 1
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => console.log('Item 2 selected')}>
          Item 2
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
```

In this example, clicking the "Open Menu" button will display a context menu with two items. When an item is selected, it will log a message to the console.
