---
source: components/ui/sheet.tsx
generated: '2025-06-08T13:21:01.643Z'
tags: []
hash: 74f222c4a05b2ed6ed22ff4a387a3c0bfea429e207968151782e48817e15f09c
---
# Sheet Component Documentation

This source code file defines several components using the `@radix-ui/react-dialog` library. These components are designed to create a customizable, animated sheet interface.

## Imports

- `SheetPrimitive` from `@radix-ui/react-dialog`: This is the base library for the sheet components.
- `cva` and `VariantProps` from `class-variance-authority`: These are used for handling variant props and class variance.
- `React` from `react`: This is the base library for building the components.
- `cn` from `@/lib/utils`: This is a utility function for handling class names.

## Components

### Sheet

This is the root component for the sheet interface. It is derived directly from `SheetPrimitive.Root`.

### SheetTrigger

This component is used to trigger the opening of the sheet. It is derived from `SheetPrimitive.Trigger`.

### SheetClose

This component is used to close the sheet. It is derived from `SheetPrimitive.Close`.

### SheetPortal

This component is used to create a portal for the sheet. It is derived from `SheetPrimitive.Portal`.

### SheetOverlay

This component is used to create an overlay for the sheet. It is a forward ref component that takes `className` and other props, and applies them to `SheetPrimitive.Overlay`.

### SheetContent

This component is used to create the content of the sheet. It is a forward ref component that takes `side`, `className`, `children`, and other props, and applies them to `SheetPrimitive.Content`.

### SheetHeader

This component is used to create the header of the sheet. It is a functional component that takes `className` and other props, and applies them to a `div` element.

### SheetFooter

This component is used to create the footer of the sheet. It is a functional component that takes `className` and other props, and applies them to a `div` element.

### SheetTitle

This component is used to create the title of the sheet. It is a forward ref component that takes `className` and other props, and applies them to `SheetPrimitive.Title`.

### SheetDescription

This component is used to create the description of the sheet. It is a forward ref component that takes `className` and other props, and applies them to `SheetPrimitive.Description`.

## Exports

The file exports all the above components for use in other parts of the application.
