---
source: components/sidebar/sidebar-switch-item.tsx
generated: 2025-06-08T21:53:13.334Z
tags: []
hash: 6f8efd3ad1719fd7d40902e95a8ac6db09a5a19cbabc50e7c92852601d74fdb4
---

# Sidebar Switch Item Component Documentation

This document provides a detailed explanation of the SidebarSwitchItem component in the file `/Users/garymason/chatbot-ui/components/sidebar/sidebar-switch-item.tsx`.

## Overview

The SidebarSwitchItem component is a functional component that renders a tab trigger with a tooltip. It's part of the sidebar in the chatbot UI. The component takes in three props: `contentType`, `icon`, and `onContentTypeChange`.

## Code Details

```ts
import { ContentType } from "@/types"
import { FC } from "react"
import { TabsTrigger } from "../ui/tabs"
import { WithTooltip } from "../ui/with-tooltip"
```

At the beginning of the file, we import the necessary modules and types. `ContentType` is a custom type defined elsewhere in the application. `FC` is a type from React that stands for Functional Component. `TabsTrigger` and `WithTooltip` are custom components defined in the UI directory.

```ts
interface SidebarSwitchItemProps {
  contentType: ContentType
  icon: React.ReactNode
  onContentTypeChange: (contentType: ContentType) => void
}
```

Here we define an interface for the props that the SidebarSwitchItem component will accept. `contentType` is a `ContentType` type, `icon` is a `ReactNode` (which means it can be any valid React child), and `onContentTypeChange` is a function that takes a `ContentType` as an argument and returns nothing (`void`).

```ts
export const SidebarSwitchItem: FC<SidebarSwitchItemProps> = ({
  contentType,
  icon,
  onContentTypeChange
}) => {
  return (
    <WithTooltip
      display={
        <div>{contentType[0].toUpperCase() + contentType.substring(1)}</div>
      }
      trigger={
        <TabsTrigger
          className="hover:opacity-50"
          value={contentType}
          onClick={() => onContentTypeChange(contentType as ContentType)}
        >
          {icon}
        </TabsTrigger>
      }
    />
  )
}
```

This is the main component. It's a functional component that takes `SidebarSwitchItemProps` as its props. The component returns a `WithTooltip` component, which takes two props: `display` and `trigger`.

The `display` prop is a `div` that contains the `contentType` with the first letter capitalized. 

The `trigger` prop is a `TabsTrigger` component, which takes three props: `className`, `value`, and `onClick`. The `className` is a string that sets the CSS class for the component. The `value` is the `contentType` prop passed into the `SidebarSwitchItem` component. The `onClick` prop is a function that calls the `onContentTypeChange` function passed into the `SidebarSwitchItem` component with the `contentType` as its argument.

The `TabsTrigger` component also has a child, which is the `icon` prop passed into the `SidebarSwitchItem` component.