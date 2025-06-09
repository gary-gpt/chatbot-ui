---
source: components/ui/command.tsx
generated: 2025-06-08T21:59:16.757Z
tags: []
hash: 295967b12b9afc9b8188f45523f628e940c3a1218a3ddc797e35c13fed994bb6
---

# Command.tsx Documentation

The `Command.tsx` file is a TypeScript React component file that defines several components related to a chatbot command interface. These components include `Command`, `CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandShortcut`, and `CommandSeparator`.

## Import Statements

The file begins with import statements for necessary libraries and components. It uses the `React` library, `DialogProps` from `@radix-ui/react-dialog`, `CommandPrimitive` from `cmdk`, `Search` from `lucide-react`, and `Dialog`, `DialogContent` from the local `ui/dialog` component. It also imports a utility function `cn` from the local `lib/utils`.

## Command Component

The `Command` component is a wrapper around the `CommandPrimitive` component from the `cmdk` library. It uses the `React.forwardRef` function to create a ref and passes it to the `CommandPrimitive` component. The `className` prop is used to apply CSS classes to the component.

## CommandDialog Component

The `CommandDialog` component wraps the `Command` component inside a `Dialog` and `DialogContent` component. It takes a `children` prop and passes it to the `Command` component.

## CommandInput Component

The `CommandInput` component is a wrapper around the `CommandPrimitive.Input` component. It includes a `Search` icon and an input field. The `className` prop is used to apply CSS classes to the component.

## CommandList Component

The `CommandList` component is a wrapper around the `CommandPrimitive.List` component. It uses the `React.forwardRef` function to create a ref and passes it to the `CommandPrimitive.List` component. The `className` prop is used to apply CSS classes to the component.

## CommandEmpty Component

The `CommandEmpty` component is a wrapper around the `CommandPrimitive.Empty` component. It uses the `React.forwardRef` function to create a ref and passes it to the `CommandPrimitive.Empty` component. The `className` prop is used to apply CSS classes to the component.

## CommandGroup Component

The `CommandGroup` component is a wrapper around the `CommandPrimitive.Group` component. It uses the `React.forwardRef` function to create a ref and passes it to the `CommandPrimitive.Group` component. The `className` prop is used to apply CSS classes to the component.

## CommandItem Component

The `CommandItem` component is a wrapper around the `CommandPrimitive.Item` component. It uses the `React.forwardRef` function to create a ref and passes it to the `CommandPrimitive.Item` component. The `className` prop is used to apply CSS classes to the component.

## CommandShortcut Component

The `CommandShortcut` component is a simple `span` element that accepts a `className` prop to apply CSS classes.

## CommandSeparator Component

The `CommandSeparator` component is a wrapper around the `CommandPrimitive.Separator` component. It uses the `React.forwardRef` function to create a ref and passes it to the `CommandPrimitive.Separator` component. The `className` prop is used to apply CSS classes to the component.

## Export Statements

Finally, all the components are exported for use in other parts of the application.