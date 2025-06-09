---
source: components/ui/context-menu.tsx
generated: 2025-06-08T21:59:34.266Z
tags: []
hash: e70068b637dff6698f031f3538b0a4baeec57f9ba97e86a86e1e4eaf17da197f
---

# Context Menu Component

This file, located at `/Users/garymason/chatbot-ui/components/ui/context-menu.tsx`, contains a TypeScript (TSX) component for a context menu. The context menu is a type of user interface that provides a list of options or actions available to the user, typically appearing when the user right-clicks on a specific element or area.

## Imports

The code begins by importing necessary modules and components:

- `React` from the `react` library, which is used to define the components.
- Various components from the `@radix-ui/react-context-menu` library, which provides pre-built components for creating a context menu.
- `Check`, `ChevronRight`, and `Circle` from `lucide-react`, which are icons used in the menu.
- `cn` from `@/lib/utils`, which is a utility function for class name manipulation.

## Components

The file exports several components that are used to build a context menu:

- `ContextMenu`: The root component of the context menu.
- `ContextMenuTrigger`: The component that triggers the context menu.
- `ContextMenuContent`: The component that contains the content of the context menu.
- `ContextMenuItem`: A single item within the context menu.
- `ContextMenuCheckboxItem`: A context menu item with a checkbox.
- `ContextMenuRadioItem`: A context menu item with a radio button.
- `ContextMenuLabel`: A label for a group of context menu items.
- `ContextMenuSeparator`: A separator line between groups of context menu items.
- `ContextMenuShortcut`: A component for displaying keyboard shortcuts.
- `ContextMenuGroup`: A group of related context menu items.
- `ContextMenuPortal`: A portal for rendering the context menu in a different part of the DOM.
- `ContextMenuSub`: A sub-menu within the context menu.
- `ContextMenuSubContent`: The content of a sub-menu.
- `ContextMenuSubTrigger`: The trigger for a sub-menu.
- `ContextMenuRadioGroup`: A group of radio items within the context menu.

Each component is defined using the `React.forwardRef` function, which allows the parent component to access the properties and methods of the child component via a `ref`. The components also use the `cn` function to dynamically generate class names based on the component's props.

## Styling

The components are styled using Tailwind CSS, a utility-first CSS framework. The class names are generated dynamically based on the component's props. For example, the `ContextMenuSubTrigger` component has a `pl-8` class added if the `inset` prop is `true`, which adds padding to the left of the component.

## Export

Finally, all the components are exported for use in other parts of the application.