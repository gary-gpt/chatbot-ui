# ThemeSwitcher Component

The `ThemeSwitcher` component is a functional component that allows users to switch between dark and light themes.

## Imports

- `IconMoon` and `IconSun` from `@tabler/icons-react` are icons representing the moon (for dark theme) and sun (for light theme).
- `useTheme` from `next-themes` is a hook that provides the current theme and a function to set the theme.
- `FC` (Functional Component) from `react` is a type used for functional components.
- `SIDEBAR_ICON_SIZE` from `../sidebar/sidebar-switcher` is a constant that defines the size of the sidebar icons.
- `Button` from `../ui/button` is a UI component used to create buttons.

## Props

The `ThemeSwitcher` component doesn't take any props.

## Functionality

The `ThemeSwitcher` component uses the `useTheme` hook to get the current theme and a function to set the theme. 

It defines a `handleChange` function that takes a theme ("dark" or "light") as an argument. This function sets the theme in the local storage and uses the `setTheme` function from the `useTheme` hook to set the theme.

The component returns a `Button` component. The button's `onClick` event handler calls the `handleChange` function, passing in the opposite of the current theme. The button displays the `IconMoon` if the current theme is "dark" and the `IconSun` if the current theme is "light".

## Usage

```jsx
<ThemeSwitcher />
```

This component doesn't take any props. It automatically uses the current theme from the `useTheme` hook.