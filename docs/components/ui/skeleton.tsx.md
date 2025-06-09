---
source: components/ui/skeleton.tsx
generated: 2025-06-08T22:07:49.584Z
tags: []
hash: d0d3ac95bb76ce3b90bf1e5f142e704ed086dd47d3c3597cdd5ce998488d1991
---

# Skeleton Component Documentation

This document provides an overview of the `Skeleton` component located at `/Users/garymason/chatbot-ui/components/ui/skeleton.tsx`.

## Overview

The `Skeleton` component is a simple, reusable component that displays a placeholder UI while the actual content is loading. It uses a pulsating animation to indicate that the content is currently being loaded.

## Code Breakdown

```ts
import { cn } from "@/lib/utils"
```

This line imports the `cn` function from the utility library. The `cn` function is used to concatenate and manage CSS class names in a cleaner and more readable way.

```ts
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
```

Here, we define the `Skeleton` component. This component accepts all the properties (`props`) that a standard `div` HTML element would accept (`React.HTMLAttributes<HTMLDivElement>`). The `className` prop is destructured separately for convenience, as it is used specifically in the component.

```ts
  return (
    <div
      className={cn("bg-muted animate-pulse rounded-md", className)}
      {...props}
    />
  )
}
```

The component returns a `div` element. The `className` attribute of the `div` is set using the `cn` function, which concatenates the string "bg-muted animate-pulse rounded-md" with the `className` prop passed to the `Skeleton` component. This sets the background color of the `div` to a muted color, applies a pulsating animation, and gives the `div` rounded corners. The `...props` spread operator is used to apply any additional props passed to the `Skeleton` component to the `div`.

```ts
export { Skeleton }
```

Finally, the `Skeleton` component is exported for use in other parts of the application.

## Usage

The `Skeleton` component can be used anywhere in the application where a placeholder UI is needed while content is loading. Simply import the component and use it in the JSX of the parent component. The `className` prop can be used to apply additional CSS classes, and any other `div` attributes can be passed as props.