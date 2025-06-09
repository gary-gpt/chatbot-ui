---
source: components/ui/screen-loader.tsx
generated: 2025-06-08T22:06:21.835Z
tags: []
hash: 3f4d046e0891cc5b616790bc3468d85fe12fba67c39c8d83e3b3cf5957fc6cdd
---

# Screen Loader Component Documentation

This document provides a detailed explanation of the `ScreenLoader` component, which is a part of the chatbot UI. This component is located at `/Users/garymason/chatbot-ui/components/ui/screen-loader.tsx`.

## Overview

The `ScreenLoader` component is a functional component that displays a spinning loader icon on the screen. This is typically used to indicate that the application is busy and the user needs to wait for an operation to complete.

## Code Details

The code for the `ScreenLoader` component is written in TypeScript and uses the React library for creating the user interface. It also uses the `@tabler/icons-react` library for the loader icon.

### Import Statements

```ts
import { IconLoader2 } from "@tabler/icons-react"
import { FC } from "react"
```

The above code imports the `IconLoader2` icon from the `@tabler/icons-react` library and the `FC` (Functional Component) type from the `react` library.

### Interface Definition

```ts
interface ScreenLoaderProps {}
```

This code defines an empty interface `ScreenLoaderProps`. This interface is meant to specify the props that the `ScreenLoader` component accepts. In this case, the component does not accept any props, hence the interface is empty.

### ScreenLoader Component

```ts
export const ScreenLoader: FC<ScreenLoaderProps> = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center">
      <IconLoader2 className="mt-4 size-12 animate-spin" />
    </div>
  )
}
```

This code defines the `ScreenLoader` component. The component does not accept any props and returns a `div` element with a loader icon inside it. 

The `div` element has several CSS classes applied to it to style and position the loader icon. The `flex`, `flex-col`, `items-center`, and `justify-center` classes are used to center the loader icon both horizontally and vertically. The `size-full` class is used to make the `div` take up the full available space.

The `IconLoader2` component is used to display the loader icon. It has the `mt-4`, `size-12`, and `animate-spin` classes applied to it. The `mt-4` class adds a top margin to the icon, the `size-12` class sets the size of the icon, and the `animate-spin` class makes the icon spin, indicating a loading state.