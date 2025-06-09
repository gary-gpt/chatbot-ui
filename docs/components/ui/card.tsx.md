---
source: components/ui/card.tsx
generated: 2025-06-08T21:58:07.267Z
tags: []
hash: 80c4aeb21a2adc4853610018d0ebb9d9d9062c8c3a9e2e90849a5e3d59c995a1
---

# Card Component Documentation

This documentation covers the `Card` component and its sub-components located in the file `/Users/garymason/chatbot-ui/components/ui/card.tsx`.

## Overview

The `Card` component is a reusable component that is used to display content in a card-like format. It consists of several sub-components, each serving a specific purpose within the card. The sub-components include `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.

## Import Statements

```ts
import * as React from "react"
import { cn } from "@/lib/utils"
```

The component imports the `React` library for creating the component and the `cn` function from a utility library. The `cn` function is used to concatenate CSS class names.

## Card Component

```ts
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-card text-card-foreground rounded-lg border shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"
```

The `Card` component is a `div` element with a set of predefined CSS classes for styling. It uses the `forwardRef` function from React to pass a `ref` to the `div` element. This `ref` can be used to access the DOM element directly. The component also accepts additional props and CSS classes.

## CardHeader Component

```ts
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"
```

The `CardHeader` component is similar to the `Card` component but is intended to be used as the header of the card. It has a different set of default CSS classes.

## CardTitle Component

```ts
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"
```

The `CardTitle` component is a `h3` element intended to display the title of the card. It has a set of default CSS classes for styling the title.

## CardDescription Component

```ts
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
```

The `CardDescription` component is a `p` element intended to display a description or additional information in the card. It has a set of default CSS classes for styling the description.

## CardContent Component

```ts
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"
```

The `CardContent` component is a `div` element intended to hold the main content of the card. It has a set of default CSS classes for styling the content area.

## CardFooter Component

```ts
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"
```

The `CardFooter` component is a `div` element intended to be used as the footer of the card. It has a set of default CSS classes for styling.

## Export Statement

```ts
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

The `Card` component and all its sub-components are exported for use in other parts of the application.