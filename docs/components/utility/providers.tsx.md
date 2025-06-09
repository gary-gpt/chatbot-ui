---
source: components/utility/providers.tsx
generated: 2025-06-08T22:16:32.751Z
tags: []
hash: a42b8ac3bdccaad86f0d88e0309458558f9386ac1c6f86a5b77e28393eb50ec1
---

# Documentation for `providers.tsx`

This file is located at `/Users/garymason/chatbot-ui/components/utility/providers.tsx`. It exports a `Providers` component that wraps the application's children components with `NextThemesProvider` and `TooltipProvider`.

## Imports

```ts
"use client"

import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { FC } from "react"
```

The `use client` directive at the top of the file indicates that this code is intended to run on the client side.

The `TooltipProvider` is imported from the local `tooltip` component.

The `ThemeProvider` from the `next-themes` package is imported and renamed to `NextThemesProvider` to avoid confusion with other possible theme providers.

The `ThemeProviderProps` type is imported from `next-themes/dist/types` to provide TypeScript type checking for the props that the `Providers` component will receive.

The `FC` (Function Component) type is imported from `react` to type the `Providers` component.

## Providers Component

```ts
export const Providers: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </NextThemesProvider>
  )
}
```

The `Providers` component is a functional component that receives props of type `ThemeProviderProps`. 

The component returns a JSX element that wraps the `children` with `NextThemesProvider` and `TooltipProvider`. 

The `NextThemesProvider` component receives all the props passed to `Providers` (excluding `children`), while the `TooltipProvider` wraps around the `children`.

This structure ensures that all child components within `Providers` will have access to the theme and tooltip context provided by `NextThemesProvider` and `TooltipProvider` respectively.

The `Providers` component is exported for use in other parts of the application.