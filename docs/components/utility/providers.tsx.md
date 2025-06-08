# Providers Component

This file exports a `Providers` component which is a functional component (FC) that accepts `ThemeProviderProps` as props.

## Import Statements

```javascript
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { FC } from "react"
```

The file imports:

- `TooltipProvider` from the `@/components/ui/tooltip` module. This is a context provider for tooltips.
- `ThemeProvider` from the `next-themes` module, aliased as `NextThemesProvider`. This is a context provider for theming in Next.js applications.
- `ThemeProviderProps` from the `next-themes/dist/types` module. This is the TypeScript type for the props that the `NextThemesProvider` accepts.
- `FC` (Functional Component) from the `react` module. This is a TypeScript type for functional components in React.

## Providers Component

```javascript
export const Providers: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  )
}
```

The `Providers` component is a functional component that accepts `ThemeProviderProps` as its props. The component returns a `NextThemesProvider` component with the passed props and a `TooltipProvider` component as its child. The children passed to the `Providers` component are rendered inside the `TooltipProvider` component.

This structure allows all children of the `Providers` component to have access to both the theme context provided by `NextThemesProvider` and the tooltip context provided by `TooltipProvider`.