---
source: components/ui/checkbox.tsx
generated: '2025-06-08T13:21:01.640Z'
tags: []
hash: 9e23b72eecd3f83d572dc2ae3437f7e8f3243bc4df6fbdea58782398de830883
---
# Checkbox Component Documentation

This document provides an overview of the `Checkbox` component in the source code.

## Importing Dependencies

The component imports several dependencies:

- `React` from the "react" library.
- `CheckboxPrimitive` from the "@radix-ui/react-checkbox" library.
- `Check` from the "lucide-react" library.
- `cn` from "@/lib/utils".

## Component Definition

The `Checkbox` component is a forward reference (ref) React component. It uses the `CheckboxPrimitive.Root` as a reference and accepts all the properties of `CheckboxPrimitive.Root` except for its ref.

## Props

The component accepts the following props:

- `className`: This is used to apply custom styles to the component.
- `...props`: This is a rest parameter that represents the collection of all other properties passed to the component.

## Rendering

The component renders a `CheckboxPrimitive.Root` with a ref and a set of predefined and custom classes. The classes are generated using the `cn` function imported from "@/lib/utils".

Inside the `CheckboxPrimitive.Root`, a `CheckboxPrimitive.Indicator` is rendered with a `Check` component from the "lucide-react" library.

## Display Name

The display name of the `Checkbox` component is set to the display name of `CheckboxPrimitive.Root`.

## Export

The `Checkbox` component is exported for use in other files.

## Usage

To use the `Checkbox` component, import it from its module and use it in your JSX like any other component. You can pass all the props that you would to a `CheckboxPrimitive.Root` component.
