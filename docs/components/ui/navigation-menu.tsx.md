---
source: components/ui/navigation-menu.tsx
generated: 2025-06-08T22:04:51.319Z
tags: []
hash: 553fea0fda8fa397b73f129d479f0e8421a8d939b08a121cc80c872477cfb36a
---

# Navigation Menu Component Documentation

This is a TypeScript file that exports a set of components for a navigation menu. The components are built using the Radix UI Navigation Menu primitives and React. The file is located at `/Users/garymason/chatbot-ui/components/ui/navigation-menu.tsx`.

## Imports

The file imports several libraries and modules:

- `React` from the `react` package.
- `NavigationMenuPrimitive` from `@radix-ui/react-navigation-menu` package.
- `cva` from `class-variance-authority` package.
- `ChevronDown` from `lucide-react` package.
- `cn` from `@/lib/utils`.

## Components

The file exports several components:

### NavigationMenu

This is the root component of the navigation menu. It uses the `NavigationMenuPrimitive.Root` component from Radix UI. It is a flex container that centers its children both vertically and horizontally.

### NavigationMenuList

This component represents a list of navigation menu items. It uses the `NavigationMenuPrimitive.List` component from Radix UI. It is also a flex container that centers its children both vertically and horizontally.

### NavigationMenuItem

This component represents a single navigation menu item. It directly uses the `NavigationMenuPrimitive.Item` component from Radix UI.

### NavigationMenuTrigger

This component represents the trigger that opens and closes the navigation menu. It uses the `NavigationMenuPrimitive.Trigger` component from Radix UI. It includes a `ChevronDown` icon from the `lucide-react` package, which rotates 180 degrees when the menu is open.

### NavigationMenuContent

This component represents the content of the navigation menu. It uses the `NavigationMenuPrimitive.Content` component from Radix UI. It includes several animations for when the menu opens and closes.

### NavigationMenuLink

This component represents a link in the navigation menu. It directly uses the `NavigationMenuPrimitive.Link` component from Radix UI.

### NavigationMenuViewport

This component represents the viewport of the navigation menu. It uses the `NavigationMenuPrimitive.Viewport` component from Radix UI. It includes several animations for when the menu opens and closes.

### NavigationMenuIndicator

This component represents an indicator for the navigation menu. It uses the `NavigationMenuPrimitive.Indicator` component from Radix UI. It includes several animations for when the indicator appears and disappears.

## Styles

The file also exports a `navigationMenuTriggerStyle` variable, which is a function that returns a string of CSS classes for styling the `NavigationMenuTrigger` component.

## Export

All the components and the `navigationMenuTriggerStyle` variable are exported at the end of the file.