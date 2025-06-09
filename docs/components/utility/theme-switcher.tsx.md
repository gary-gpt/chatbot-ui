---
source: components/utility/theme-switcher.tsx
generated: 2025-06-08T22:16:51.753Z
tags: []
hash: 1613f57170ec56a47bfa96bc35c1105478c0f15c0d73a39e77ade4db6c281ee9
---

# Theme Switcher Component

This document explains the purpose and logic of the `ThemeSwitcher` component in the file `/Users/garymason/chatbot-ui/components/utility/theme-switcher.tsx`.

## Overview

The `ThemeSwitcher` component is a functional component in React that allows users to switch between dark and light themes in the application. It uses the `next-themes` library to manage the theme state and the `@tabler/icons-react` library for the sun and moon icons.

## Code Summary

```ts
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { FC } from "react"
import { SIDEBAR_ICON_SIZE } from "../sidebar/sidebar-switcher"
import { Button } from "../ui/button"

interface ThemeSwitcherProps {}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { setTheme, theme } = useTheme()

  const handleChange = (theme: "dark" | "light") => {
    localStorage.setItem("theme", theme)

    setTheme(theme)
  }

  return (
    <Button
      className="flex cursor-pointer space-x-2"
      variant="ghost"
      size="icon"
      onClick={() => handleChange(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" ? (
        <IconMoon size={SIDEBAR_ICON_SIZE} />
      ) : (
        <IconSun size={SIDEBAR_ICON_SIZE} />
      )}
    </Button>
  )
}
```

## Detailed Explanation

### Imports

The component imports several libraries and components:

- `IconMoon` and `IconSun` from `@tabler/icons-react` for the moon and sun icons.
- `useTheme` from `next-themes` to manage the theme state.
- `FC` (Functional Component) from `react` to type the component.
- `SIDEBAR_ICON_SIZE` from `../sidebar/sidebar-switcher` to set the size of the icons.
- `Button` from `../ui/button` to render the button that switches the theme.

### ThemeSwitcherProps

The `ThemeSwitcherProps` interface is currently empty, indicating that the component does not accept any props.

### ThemeSwitcher Component

The `ThemeSwitcher` component is a functional component that uses the `useTheme` hook to get the current theme and the `setTheme` function to change it.

The `handleChange` function is used to switch the theme. It accepts a theme ("dark" or "light") and does two things:

- It stores the theme in the local storage. This allows the theme to persist even if the page is refreshed.
- It calls `setTheme` to change the theme in the application.

The component returns a `Button` with several props:

- `className` sets several CSS classes.
- `variant` sets the button style to "ghost".
- `size` sets the button size to "icon".
- `onClick` calls `handleChange` with the opposite of the current theme.

The button's children is a conditional rendering of either the `IconMoon` or `IconSun`, depending on the current theme. The size of the icon is set to `SIDEBAR_ICON_SIZE`.