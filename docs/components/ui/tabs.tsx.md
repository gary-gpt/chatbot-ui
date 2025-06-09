---
source: components/ui/tabs.tsx
generated: 2025-06-08T22:10:19.375Z
tags: []
hash: 92ed0b596c58ca3476f5612208ad5f3b11dcb154a8ec6807e4f0aaff0a6be3dc
---

# Code Documentation for tabs.tsx

This TypeScript file defines a set of UI components for creating a tabbed interface in a React application. It uses the `@radix-ui/react-tabs` package to provide the base functionality of the tabs, and then customizes the appearance and behavior of the tabs to fit the needs of the application.

## Import Statements

```ts
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
```

The file begins by importing necessary dependencies:

- The `React` library, which is used to define the components.
- The `@radix-ui/react-tabs` package, which provides the base functionality for the tabs. This is imported as `TabsPrimitive`.
- A utility function `cn` from "@/lib/utils", which is used to concatenate class names.

## Tabs Component

```ts
const Tabs = TabsPrimitive.Root
```

The `Tabs` component is a simple alias for the root component provided by `@radix-ui/react-tabs`.

## TabsList Component

```ts
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName
```

The `TabsList` component is a wrapper around the `TabsPrimitive.List` component. It uses the `React.forwardRef` function to forward a `ref` to the underlying component. The component also accepts a `className` prop, which is combined with a default set of class names to style the component.

## TabsTrigger Component

```ts
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
```

The `TabsTrigger` component is a wrapper around the `TabsPrimitive.Trigger` component. Similar to `TabsList`, it forwards a `ref` to the underlying component and combines a default set of class names with the `className` prop to style the component.

## TabsContent Component

```ts
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName
```

The `TabsContent` component is a wrapper around the `TabsPrimitive.Content` component. It also forwards a `ref` to the underlying component and combines a default set of class names with the `className` prop to style the component.

## Exports

```ts
export { Tabs, TabsList, TabsTrigger, TabsContent }
```

At the end of the file, the four components `Tabs`, `TabsList`, `TabsTrigger`, and `TabsContent` are exported for use in other parts of the application.