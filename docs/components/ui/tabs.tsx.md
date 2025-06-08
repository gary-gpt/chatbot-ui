---
source: components/ui/tabs.tsx
generated: '2025-06-08T13:21:01.643Z'
tags: []
hash: 5a62fddeae39150b8f4ef3c8666833b4a17b9b943321a0c98e6a370b5de37f4e
---
# Tabs Component

This file exports a set of components for creating a tabs interface. It uses the `@radix-ui/react-tabs` library for the base components and customizes them.

## Imports

- `React` from the "react" package.
- `TabsPrimitive` from the "@radix-ui/react-tabs" package.
- `cn` function from "@/lib/utils" which is used to concatenate class names.

## Components

### Tabs

The base component for a tabs interface. It uses the `Root` component from `@radix-ui/react-tabs`.

### TabsList

A component that represents the list of tabs. It uses the `List` component from `@radix-ui/react-tabs` and forwards the ref. It accepts all props that the `List` component accepts, plus a `className` prop for custom styles.

### TabsTrigger

A component that represents the trigger for a tab. It uses the `Trigger` component from `@radix-ui/react-tabs` and forwards the ref. It accepts all props that the `Trigger` component accepts, plus a `className` prop for custom styles.

### TabsContent

A component that represents the content of a tab. It uses the `Content` component from `@radix-ui/react-tabs` and forwards the ref. It accepts all props that the `Content` component accepts, plus a `className` prop for custom styles.

## Exports

The file exports the `Tabs`, `TabsList`, `TabsTrigger`, and `TabsContent` components.
