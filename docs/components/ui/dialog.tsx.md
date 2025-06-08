# Dialog Component

This module exports various components and primitives related to a dialog box. It uses the `@radix-ui/react-dialog` package for the base dialog primitives.

## Imports

- `DialogPrimitive` from `@radix-ui/react-dialog`: This is used to create the base dialog components.
- `React` from `react`: This is used for creating the components.
- `cn` from `@/lib/utils`: This is a utility function for class name generation.

## Components

### Dialog

This is the root dialog component.

### DialogTrigger

This is the trigger component for the dialog.

### DialogPortal

This is the portal component for the dialog.

### DialogClose

This is the close component for the dialog.

### DialogOverlay

This is the overlay component for the dialog. It uses the `React.forwardRef` function to forward the ref to the underlying `DialogPrimitive.Overlay` component. It also accepts a `className` prop and other props which are spread onto the `DialogPrimitive.Overlay` component.

### DialogContent

This is the content component for the dialog. It uses the `React.forwardRef` function to forward the ref to the underlying `DialogPrimitive.Content` component. It also accepts a `className` prop, `children` prop and other props which are spread onto the `DialogPrimitive.Content` component.

### DialogHeader

This is the header component for the dialog. It accepts a `className` prop and other props which are spread onto a `div` element.

### DialogFooter

This is the footer component for the dialog. It accepts a `className` prop and other props which are spread onto a `div` element.

### DialogTitle

This is the title component for the dialog. It uses the `React.forwardRef` function to forward the ref to the underlying `DialogPrimitive.Title` component. It also accepts a `className` prop and other props which are spread onto the `DialogPrimitive.Title` component.

### DialogDescription

This is the description component for the dialog. It uses the `React.forwardRef` function to forward the ref to the underlying `DialogPrimitive.Description` component. It also accepts a `className` prop and other props which are spread onto the `DialogPrimitive.Description` component.

## Exports

The module exports the following:

- `Dialog`
- `DialogClose`
- `DialogContent`
- `DialogDescription`
- `DialogFooter`
- `DialogHeader`
- `DialogOverlay`
- `DialogPortal`
- `DialogTitle`
- `DialogTrigger`