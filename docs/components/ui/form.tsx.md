---
source: components/ui/form.tsx
generated: 2025-06-08T22:01:53.121Z
tags: []
hash: f6f8e44b38dcd43350add2bfadf565165d857698fc8ddf85e8643e4cefa29c58
---

# Form Component Documentation

This TypeScript file defines a set of React components and hooks to create a form. It uses the `react-hook-form` library for form state management and the `@radix-ui/react-label` and `@radix-ui/react-slot` libraries for creating form labels and form controls.

## Imports

The file imports necessary modules from React, `@radix-ui/react-label`, `@radix-ui/react-slot`, `react-hook-form`, and local modules.

## Form

`Form` is a provider component that wraps the form and provides form state to all child components. It uses the `FormProvider` component from `react-hook-form`.

## FormField

`FormField` is a context provider component that provides the name of the form field to all child components. It uses the `Controller` component from `react-hook-form` to control the form field.

## useFormField

`useFormField` is a custom hook that provides form field context and form item context. It throws an error if it is not used within a `FormField` component. It returns an object that contains the id, name, formItemId, formDescriptionId, formMessageId, and fieldState.

## FormItem

`FormItem` is a context provider component that provides a unique id to all child components. It returns a `div` element with a class name of `space-y-2` and the provided class name.

## FormLabel

`FormLabel` is a component that displays the label of a form field. It uses the `Label` component and adds the class `text-destructive` if there is an error.

## FormControl

`FormControl` is a component that displays the control of a form field. It uses the `Slot` component and sets the `aria-describedby` and `aria-invalid` attributes based on the error state.

## FormDescription

`FormDescription` is a component that displays the description of a form field. It returns a `p` element with a class name of `text-muted-foreground text-sm` and the provided class name.

## FormMessage

`FormMessage` is a component that displays the error message of a form field. It returns a `p` element with a class name of `text-destructive text-sm font-medium` and the provided class name. If there is no error message or children, it returns `null`.

## Exports

The file exports the `useFormField` hook and the `Form`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`, and `FormField` components.