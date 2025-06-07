**📄 Source File:** `/components/ui/sonner.tsx`  
**🕒 Generated:** 2025-06-07 13:58:52 UTC  
**🤖 Model:** gpt-4

---

# Toaster.tsx

This TypeScript file defines and exports a `Toaster` component, which is a wrapper around the `Sonner` component from the "sonner" library. The `Toaster` component is designed to display toast notifications with a theme and custom styles.

## Imports

- `useTheme` from "next-themes": This hook is used to get the current theme.
- `Sonner` from "sonner": This is the base component for creating toast notifications.

## Types

- `ToasterProps`: This type is defined as the component properties of the `Sonner` component. It is used to type check the properties passed to the `Toaster` component.

## Component

- `Toaster`: This is a functional component that accepts any properties that a `Sonner` component would accept (`ToasterProps`). It uses the `useTheme` hook to get the current theme, which defaults to "system" if no theme is set. The `Sonner` component is then returned with the theme and a set of custom class names for different parts of the toast notification.

## Usage

The `Toaster` component can be used in the same way as the `Sonner` component, but with additional theme and style support. Here's an example:

```jsx
import { Toaster } from './Toaster'

<Toaster theme="dark" toastOptions={{ duration: 5000 }}>
  This is a toast notification.
</Toaster>
```

## Interesting Structure or Nuance

The `Toaster` component uses the spread operator (`...props`) to pass all received properties to the `Sonner` component. This makes the `Toaster` component a flexible wrapper around `Sonner`, as it can accept any properties that `Sonner` can.

The `theme` prop is cast to `ToasterProps["theme"]` to ensure it matches the type expected by the `Sonner` component.

The `toastOptions` prop is used to customize the appearance of the toast notification. It includes custom class names for the toast itself, the description, the action button, and the cancel button. These class names use group selectors to apply styles based on the parent `.toaster` class.