---
source: components/ui/tooltip.tsx
generated: '2025-06-08T13:21:01.644Z'
tags: []
hash: 0524959957ca1af8c68a94dda9de81bcfe2314560db92a93b06438e2be696296
---
# Tooltip Component

This file exports a Tooltip component, along with its associated Trigger, Content, and Provider components. The Tooltip component is built using the `@radix-ui/react-tooltip` library.

## Imports

- `React` from the "react" library.
- All exports from the "@radix-ui/react-tooltip" library.
- The `cn` function from "@/lib/utils".

## Components

### `TooltipProvider`

This is a provider component for the Tooltip. It is directly exported from the `@radix-ui/react-tooltip` library.

### `Tooltip`

This is the root Tooltip component. It is directly exported from the `@radix-ui/react-tooltip` library.

### `TooltipTrigger`

This is the trigger component for the Tooltip. It is directly exported from the `@radix-ui/react-tooltip` library.

### `TooltipContent`

This is the content component for the Tooltip. It is a forward ref component that accepts a `className` and `sideOffset` prop, along with all other props that the `TooltipPrimitive.Content` component from the `@radix-ui/react-tooltip` library accepts.

The `sideOffset` prop defaults to `4` if not provided. The `className` prop is combined with a string of predefined classes to style the Tooltip content.

The `displayName` of the `TooltipContent` component is set to the `displayName` of the `TooltipPrimitive.Content` component from the `@radix-ui/react-tooltip` library.

## Exports

The file exports the `Tooltip`, `TooltipTrigger`, `TooltipContent`, and `TooltipProvider` components.
