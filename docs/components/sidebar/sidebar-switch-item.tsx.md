# SidebarSwitchItem Component

This document provides an overview of the `SidebarSwitchItem` component in the source code.

## Import Statements

The file begins with import statements for required modules and components:

- `ContentType` from "@/types"
- `FC` from "react"
- `TabsTrigger` from "../ui/tabs"
- `WithTooltip` from "../ui/with-tooltip"

## Interface: SidebarSwitchItemProps

This interface defines the props that the `SidebarSwitchItem` component expects:

- `contentType`: This prop is of type `ContentType` and represents the type of content.
- `icon`: This prop is a `ReactNode` and represents the icon to be displayed.
- `onContentTypeChange`: This is a function that takes a `ContentType` as an argument and does not return anything. It's used to handle changes in content type.

## Component: SidebarSwitchItem

This is a functional component that uses the `SidebarSwitchItemProps` interface for its props. The component returns a `WithTooltip` component.

### Props

The component accepts the following props:

- `contentType`: The type of the content.
- `icon`: The icon to be displayed.
- `onContentTypeChange`: The function to handle changes in content type.

### Rendered JSX

The component returns a `WithTooltip` component with the following props:

- `display`: A `div` that displays the `contentType` with the first letter capitalized.
- `trigger`: A `TabsTrigger` component that has the following props:
  - `className`: A string that sets the CSS class of the component. It changes the opacity to 50% when hovered over.
  - `value`: The `contentType` prop.
  - `onClick`: A function that calls `onContentTypeChange` with `contentType` as an argument when clicked. The `contentType` is cast as a `ContentType` type.

The `TabsTrigger` component displays the `icon` prop as its children.