# SidebarSwitcher Component

This is a documentation for the `SidebarSwitcher` component.

## Imports

The component imports several icons from `@tabler/icons-react` package, `ContentType` type from "@/types", `FC` from "react", `TabsList` and `WithTooltip` components from "../ui", `ProfileSettings` component from "../utility/profile-settings", and `SidebarSwitchItem` component from the same directory.

## Constants

The component defines a constant `SIDEBAR_ICON_SIZE` with a value of `28`.

## Props

The `SidebarSwitcher` component accepts the following props:

- `onContentTypeChange`: A function that is called when the content type changes. It accepts a single argument of type `ContentType`.

## Component Structure

The `SidebarSwitcher` component is a functional component that returns a `div` element with two main sections:

1. A `TabsList` component that contains several `SidebarSwitchItem` components. Each `SidebarSwitchItem` component has an icon, a content type, and a function to handle content type changes.

2. A `div` element that contains a `WithTooltip` component for profile settings.

## Usage

Here is an example of how to use the `SidebarSwitcher` component:

```jsx
<SidebarSwitcher onContentTypeChange={handleContentTypeChange} />
```

In this example, `handleContentTypeChange` is a function that you would define in your parent component. It should accept a single argument of type `ContentType`.