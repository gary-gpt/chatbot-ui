**📄 Source File:** `/components/ui/context-menu.tsx`  
**🕒 Generated:** 2025-06-07 13:51:12 UTC  
**🤖 Model:** gpt-4

---

# ContextMenu.tsx

This TypeScript file is a part of a React project and it is responsible for creating a customizable context menu. It uses the `@radix-ui/react-context-menu` library to create a context menu and its various components. The context menu is a type of menu that appears upon user interaction, such as a right-click operation.

## Exports

The file exports the following components:

- `ContextMenu`: The root component for the context menu.
- `ContextMenuTrigger`: The component that triggers the context menu.
- `ContextMenuContent`: The component that contains the content of the context menu.
- `ContextMenuItem`: The individual items in the context menu.
- `ContextMenuCheckboxItem`: A context menu item with a checkbox.
- `ContextMenuRadioItem`: A context menu item with a radio button.
- `ContextMenuLabel`: The label for a context menu item.
- `ContextMenuSeparator`: A separator for dividing groups of context menu items.
- `ContextMenuShortcut`: A component for displaying keyboard shortcuts in the context menu.
- `ContextMenuGroup`: A group of related items in the context menu.
- `ContextMenuPortal`: A component that renders the context menu into a React portal.
- `ContextMenuSub`: A component for creating submenus within the context menu.
- `ContextMenuSubContent`: The content of a submenu.
- `ContextMenuSubTrigger`: The component that triggers a submenu.
- `ContextMenuRadioGroup`: A group of radio items in the context menu.

## Usage

These components can be imported into other files to create a context menu. Each component can be customized with props such as `className` for CSS styling and `inset` for indentation. The `ContextMenuCheckboxItem` and `ContextMenuRadioItem` components also accept a `checked` prop to control their checked state.

## Interesting Structure or Nuance

The file uses the `React.forwardRef` function to create components with refs, allowing parent components to directly interact with the DOM of the context menu components. It also uses the `cn` function from the `@/lib/utils` module to concatenate class names.

The `ContextMenuShortcut` component uses the `React.HTMLAttributes<HTMLSpanElement>` type for its props, which means it accepts any valid HTML attributes for a `<span>` element.

The `displayName` property is set on each component to help with debugging and testing. The `displayName` is usually inferred from the name of the function or class that defines the component. However, since these components are defined with `React.forwardRef`, which returns an anonymous function, the `displayName` is set manually.