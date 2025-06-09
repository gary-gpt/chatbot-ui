---
source: components/sidebar/items/all/sidebar-display-item.tsx
generated: 2025-06-08T21:43:07.121Z
tags: []
hash: e3e679f1eb424e191becfc903d262115fab52a6306d080a9166d1704ef7f9c7c
---

# SidebarDisplayItem.tsx Documentation

This file is a React component that renders a single item in the sidebar of a chatbot user interface. The item can represent various types of content, such as chats, presets, prompts, files, collections, assistants, tools, and models.

## Import Statements

```ts
import { ChatbotUIContext } from "@/context/context"
import { createChat } from "@/db/chats"
import { cn } from "@/lib/utils"
import { Tables } from "@/supabase/types"
import { ContentType, DataItemType } from "@/types"
import { useRouter } from "next/navigation"
import { FC, useContext, useRef, useState } from "react"
import { SidebarUpdateItem } from "./sidebar-update-item"
```

The import statements include necessary React hooks, context, types, and utility functions from different modules. The `SidebarUpdateItem` component is also imported, which is a child component used in the rendering of `SidebarItem`.

## Interface: SidebarItemProps

```ts
interface SidebarItemProps {
  item: DataItemType
  isTyping: boolean
  contentType: ContentType
  icon: React.ReactNode
  updateState: any
  renderInputs: (renderState: any) => JSX.Element
}
```

This interface defines the props that the `SidebarItem` component expects. It includes:

- `item`: The data item to be displayed.
- `isTyping`: A boolean indicating whether the user is currently typing.
- `contentType`: The type of content represented by the item.
- `icon`: The icon to be displayed alongside the item.
- `updateState`: A function to update the state.
- `renderInputs`: A function to render the inputs.

## Component: SidebarItem

```ts
export const SidebarItem: FC<SidebarItemProps> = ({
  item,
  contentType,
  updateState,
  renderInputs,
  icon,
  isTyping
}) => {
  ...
}
```

This is the main component of the file. It takes `SidebarItemProps` as props and returns a `SidebarUpdateItem` component. The component uses various hooks to manage state and context, and defines several functions to handle user interactions.

### State and Context

```ts
const { selectedWorkspace, setChats, setSelectedAssistant } =
    useContext(ChatbotUIContext)

const router = useRouter()

const itemRef = useRef<HTMLDivElement>(null)

const [isHovering, setIsHovering] = useState(false)
```

The component uses the `useContext` hook to access the `ChatbotUIContext`, the `useRouter` hook to access the Next.js router, the `useRef` hook to create a reference to the item's DOM element, and the `useState` hook to manage whether the item is being hovered over.

### Action Map

```ts
const actionMap = {
  ...
}
```

This object maps content types to functions that handle user interactions with items of those types. The only fully implemented function is for the 'assistants' content type, which creates a new chat and navigates to it.

### Event Handlers

```ts
const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  if (e.key === "Enter") {
    e.stopPropagation()
    itemRef.current?.click()
  }
}
```

This function handles key down events. If the 'Enter' key is pressed, it simulates a click on the item.

## Rendered Component

```ts
return (
  <SidebarUpdateItem
    item={item}
    isTyping={isTyping}
    contentType={contentType}
    updateState={updateState}
    renderInputs={renderInputs}
  >
    ...
  </SidebarUpdateItem>
)
```

The component returns a `SidebarUpdateItem` component, passing along the props it received. The children of the `SidebarUpdateItem` include a `div` that displays the item's icon and name, and handles mouse enter, mouse leave, and key down events.