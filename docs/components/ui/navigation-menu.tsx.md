# Navigation Menu Component

This module exports a set of components that together form a navigation menu. The components are built using the `@radix-ui/react-navigation-menu` primitives.

## Imports

- `React` from the "react" package.
- `NavigationMenuPrimitive` from the "@radix-ui/react-navigation-menu" package.
- `cva` from the "class-variance-authority" package.
- `ChevronDown` from the "lucide-react" package.
- `cn` from the "@/lib/utils" module.

## Components

### NavigationMenu

This is the root component of the navigation menu. It uses the `NavigationMenuPrimitive.Root` component from the Radix UI library.

### NavigationMenuList

This component represents a list of items in the navigation menu. It uses the `NavigationMenuPrimitive.List` component from the Radix UI library.

### NavigationMenuItem

This component represents an individual item in the navigation menu. It uses the `NavigationMenuPrimitive.Item` component from the Radix UI library.

### NavigationMenuTrigger

This component represents a trigger that opens or closes the navigation menu. It uses the `NavigationMenuPrimitive.Trigger` component from the Radix UI library. The trigger includes a `ChevronDown` icon from the Lucide React library.

### NavigationMenuContent

This component represents the content of the navigation menu. It uses the `NavigationMenuPrimitive.Content` component from the Radix UI library.

### NavigationMenuLink

This component represents a link in the navigation menu. It uses the `NavigationMenuPrimitive.Link` component from the Radix UI library.

### NavigationMenuViewport

This component represents the viewport of the navigation menu. It uses the `NavigationMenuPrimitive.Viewport` component from the Radix UI library.

### NavigationMenuIndicator

This component represents an indicator in the navigation menu. It uses the `NavigationMenuPrimitive.Indicator` component from the Radix UI library.

## Exports

The module exports the following:

- `navigationMenuTriggerStyle`: A function that returns a string of CSS classes for the navigation menu trigger.
- `NavigationMenu`: The root component of the navigation menu.
- `NavigationMenuList`: A component that represents a list of items in the navigation menu.
- `NavigationMenuItem`: A component that represents an individual item in the navigation menu.
- `NavigationMenuContent`: A component that represents the content of the navigation menu.
- `NavigationMenuTrigger`: A component that represents a trigger that opens or closes the navigation menu.
- `NavigationMenuLink`: A component that represents a link in the navigation menu.
- `NavigationMenuIndicator`: A component that represents an indicator in the navigation menu.
- `NavigationMenuViewport`: A component that represents the viewport of the navigation menu.