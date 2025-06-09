---
source: components/ui/avatar.tsx
generated: 2025-06-08T21:56:14.685Z
tags: []
hash: a9c988e11bd608bb853c9b2d2b56d1db0124febf0619c591b1d9c4def112d1ea
---

# Avatar Component Documentation

This documentation covers the Avatar component of the chatbot UI. The Avatar component is located at `/Users/garymason/chatbot-ui/components/ui/avatar.tsx`.

## Overview

This component file contains three main components: `Avatar`, `AvatarImage`, and `AvatarFallback`. These components are used to display user or bot avatars in the chat interface. The components are built using the Radix UI library.

## Dependencies

The Avatar component relies on the following dependencies:

- `React`: A JavaScript library for building user interfaces.
- `@radix-ui/react-avatar`: A Radix UI component for creating avatar elements.
- `@/lib/utils`: A utility library used in this project.

## Components

### Avatar

This is the main Avatar component. It uses the `AvatarPrimitive.Root` component from the Radix UI library as its base. The component is a rounded, overflow-hidden flex container.

```ts
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex size-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName
```

### AvatarImage

This component is used to display the image of the avatar. It uses the `AvatarPrimitive.Image` component from the Radix UI library as its base. The image is displayed as a square aspect ratio and takes up the full size of its container.

```ts
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square size-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName
```

### AvatarFallback

This component is used as a fallback when the avatar image cannot be loaded. It uses the `AvatarPrimitive.Fallback` component from the Radix UI library as its base. The fallback is a rounded, full-size flex container with centered items.

```ts
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-muted flex size-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
```

## Exports

The `Avatar`, `AvatarImage`, and `AvatarFallback` components are exported for use in other parts of the application.

```ts
export { Avatar, AvatarImage, AvatarFallback }
```