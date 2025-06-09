---
source: components/ui/sonner.tsx
generated: 2025-06-08T22:08:36.367Z
tags: []
hash: c4ab4323d41e26f5796d34f923f463a7268ee942cb4c8ddf71420df68bf3a393
---

# Sonner.tsx Documentation

This document describes the `sonner.tsx` file located at `/Users/garymason/chatbot-ui/components/ui/sonner.tsx`. This file exports a `Toaster` component which is a wrapper around the `Sonner` component from the `sonner` library. The `Toaster` component is used to display toast notifications in the application.

## Imports

```ts
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
```

The `useTheme` hook from the `next-themes` library is used to get the current theme of the application. The `Toaster` component from the `sonner` library is imported and renamed to `Sonner` to avoid naming conflicts with the `Toaster` component that is being defined in this file.

## ToasterProps Type Definition

```ts
type ToasterProps = React.ComponentProps<typeof Sonner>
```

`ToasterProps` is a type that represents the props of the `Sonner` component. This type is used to type check the props of the `Toaster` component.

## Toaster Component

```ts
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      }}
      {...props}
    />
  )
}
```

The `Toaster` component is a functional component that takes `props` of type `ToasterProps`. It uses the `useTheme` hook to get the current theme of the application. If the theme is not defined, it defaults to `"system"`.

The `Toaster` component returns the `Sonner` component with the `theme`, `className`, and `toastOptions` props set. The `theme` prop is set to the current theme of the application. The `className` prop is set to `"toaster group"` to apply CSS styles to the `Sonner` component. The `toastOptions` prop is an object that defines the CSS classes for the different parts of the toast notification.

The `props` of the `Toaster` component are spread onto the `Sonner` component to pass any additional props to it.

## Export

```ts
export { Toaster }
```

The `Toaster` component is exported so that it can be imported and used in other parts of the application.