---
source: components/sidebar/sidebar-switcher.tsx
generated: 2025-06-08T21:53:31.052Z
tags: []
hash: 0e7b03bacea00fc0f8b1eddab73d62d59df94ae636baae6d59c4abd7f031f7a6
---

# Sidebar Switcher Component Documentation

This document explains the purpose and logic of the `SidebarSwitcher` component in the file `/Users/garymason/chatbot-ui/components/sidebar/sidebar-switcher.tsx`.

## Overview

The `SidebarSwitcher` component is a part of the chatbot user interface. It is a sidebar that allows users to switch between different content types like chats, presets, prompts, models, files, collections, assistants, and tools. Each content type is represented by a specific icon.

## Imports

The component imports several dependencies:

- `ContentType` type from "@/types"
- Several icons from "@tabler/icons-react"
- `FC` (Functional Component) from "react"
- `TabsList` and `WithTooltip` components from "../ui"
- `ProfileSettings` component from "../utility"
- `SidebarSwitchItem` component from the current directory

## Constants

A constant `SIDEBAR_ICON_SIZE` is declared and set to 28. This is used to set the size of the icons in the sidebar.

## Props

The `SidebarSwitcher` component accepts one prop:

- `onContentTypeChange`: A function that is called when the content type is changed. It accepts a `ContentType` as an argument.

## Component Structure

The `SidebarSwitcher` component is a functional component that returns a `div` element with two main sections:

1. A `TabsList` that contains a list of `SidebarSwitchItem` components. Each `SidebarSwitchItem` represents a different content type and has an associated icon. When a `SidebarSwitchItem` is clicked, it triggers the `onContentTypeChange` function with the corresponding content type.

2. A `div` that contains a `WithTooltip` component for the `ProfileSettings`. The tooltip displays the text "Profile Settings" when the `ProfileSettings` icon is hovered over.

## Future Improvements

There are two commented out sections in the code that suggest future improvements:

- An import feature, which is currently commented out with a "TODO" comment.
- An alerts feature, which is also commented out with a "TODO" comment.

## Code Summary

```ts
// Define the size of the sidebar icons
export const SIDEBAR_ICON_SIZE = 28

// Define the props for the SidebarSwitcher component
interface SidebarSwitcherProps {
  onContentTypeChange: (contentType: ContentType) => void
}

// Define the SidebarSwitcher component
export const SidebarSwitcher: FC<SidebarSwitcherProps> = ({
  onContentTypeChange
}) => {
  return (
    // The component consists of a list of SidebarSwitchItem components and a ProfileSettings component
    <div className="flex flex-col justify-between border-r-2 pb-5">
      <TabsList className="bg-background grid h-[440px] grid-rows-7">
        // Each SidebarSwitchItem represents a different content type and has an associated icon
        ...
      </TabsList>

      <div className="flex flex-col items-center space-y-4">
        // The ProfileSettings component is displayed with a tooltip
        <WithTooltip
          display={<div>Profile Settings</div>}
          trigger={<ProfileSettings />}
        />
      </div>
    </div>
  )
}
```