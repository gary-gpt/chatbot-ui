# Avatar Component Documentation

This file exports three components: `Avatar`, `AvatarImage`, and `AvatarFallback`. These components are built using the `@radix-ui/react-avatar` primitives.

## Avatar

The `Avatar` component is a forward-ref React component that uses the `AvatarPrimitive.Root` as its base. It accepts all the props that `AvatarPrimitive.Root` accepts, excluding `ref`. 

The `Avatar` component applies several CSS classes to the root element, including `relative`, `flex`, `size-10`, `shrink-0`, `overflow-hidden`, and `rounded-full`. If a `className` prop is provided, it will be appended to these default classes.

The `displayName` of the `Avatar` component is set to the `displayName` of `AvatarPrimitive.Root`.

## AvatarImage

The `AvatarImage` component is a forward-ref React component that uses the `AvatarPrimitive.Image` as its base. It accepts all the props that `AvatarPrimitive.Image` accepts, excluding `ref`.

The `AvatarImage` component applies the `aspect-square` and `size-full` CSS classes to the root element. If a `className` prop is provided, it will be appended to these default classes.

The `displayName` of the `AvatarImage` component is set to the `displayName` of `AvatarPrimitive.Image`.

## AvatarFallback

The `AvatarFallback` component is a forward-ref React component that uses the `AvatarPrimitive.Fallback` as its base. It accepts all the props that `AvatarPrimitive.Fallback` accepts, excluding `ref`.

The `AvatarFallback` component applies several CSS classes to the root element, including `bg-muted`, `flex`, `size-full`, `items-center`, `justify-center`, and `rounded-full`. If a `className` prop is provided, it will be appended to these default classes.

The `displayName` of the `AvatarFallback` component is set to the `displayName` of `AvatarPrimitive.Fallback`.

## Exports

The `Avatar`, `AvatarImage`, and `AvatarFallback` components are exported for use in other files.