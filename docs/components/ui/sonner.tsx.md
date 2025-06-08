---
source: components/ui/sonner.tsx
generated: '2025-06-08T13:21:01.643Z'
tags: []
hash: 9df4c658ca29bf887f5e50ed3e1c44e869036535ac3c473c8f4d9dea1b7e456d
---
# Toaster Component

This file defines a `Toaster` component that uses the `Sonner` component from the `sonner` library to display toast notifications. It also uses the `useTheme` hook from `next-themes` to get the current theme.

## Imports

```javascript
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"
```

## Type Definitions

```javascript
type ToasterProps = React.ComponentProps<typeof Sonner>
```

The `ToasterProps` type is defined as the props of the `Sonner` component.

## Component Definition

```javascript
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

The `Toaster` component uses the `useTheme` hook to get the current theme. If no theme is specified, it defaults to "system". It then renders the `Sonner` component with the current theme, a className of "toaster group", and toast options that define class names for different parts of the toast.

## Exports

```javascript
export { Toaster }
```

The `Toaster` component is exported for use in other files.
