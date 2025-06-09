---
source: components/utility/announcements.tsx
generated: 2025-06-08T22:13:58.844Z
tags: []
hash: b2b3b1c902e846427e8940644a4517b3577b242fa65c4f6c0b49bcc721ce4e81
---

# Announcements Component Documentation

This TypeScript file defines a React functional component `Announcements` that manages and displays a list of announcements. The component uses local storage to persist the state of announcements across sessions.

## Import Statements

```ts
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Announcement } from "@/types/announcement"
import { IconExternalLink, IconSpeakerphone } from "@tabler/icons-react"
import { FC, useEffect, useState } from "react"
import { SIDEBAR_ICON_SIZE } from "../sidebar/sidebar-switcher"
```

The import statements bring in necessary components, types, and hooks for the `Announcements` component. The `Button`, `Popover`, `PopoverContent`, and `PopoverTrigger` components are UI components used in the rendering of the `Announcements` component. The `Announcement` type is a TypeScript type that describes the structure of an announcement. The `IconExternalLink` and `IconSpeakerphone` are icons used in the UI. The `FC`, `useEffect`, and `useState` are React hooks. The `SIDEBAR_ICON_SIZE` is a constant that defines the size of the sidebar icon.

## Announcements Component

```ts
interface AnnouncementsProps {}

export const Announcements: FC<AnnouncementsProps> = () => {
  //...
}
```

The `Announcements` component is a functional component with no props. It manages the state of announcements and renders a popover with the list of announcements.

## State and Effect Hook

```ts
const [announcements, setAnnouncements] = useState<Announcement[]>([])

useEffect(() => {
  //...
}, [])
```

The `useState` hook is used to manage the state of announcements. The `useEffect` hook is used to load the announcements from local storage when the component mounts.

## Announcement Loading and State Update

```ts
const storedAnnouncements = localStorage.getItem("announcements")
let parsedAnnouncements: Announcement[] = []

if (storedAnnouncements) {
  parsedAnnouncements = JSON.parse(storedAnnouncements)
}

// Filter out announcements that are no longer in state
const validAnnouncements = announcements.filter((a: Announcement) =>
  parsedAnnouncements.find(storedA => storedA.id === a.id)
)

// Add new announcements to the list
const newAnnouncements = announcements.filter(
  (a: Announcement) =>
    !parsedAnnouncements.find(storedA => storedA.id === a.id)
)

// Combine valid and new announcements
const combinedAnnouncements = [...validAnnouncements, ...newAnnouncements]

// Mark announcements as read if they are marked as read in local storage
const updatedAnnouncements = combinedAnnouncements.map(
  (a: Announcement) => {
    const storedAnnouncement = parsedAnnouncements.find(
      (storedA: Announcement) => storedA.id === a.id
    )
    return storedAnnouncement?.read ? { ...a, read: true } : a
  }
)

// Update state and local storage
setAnnouncements(updatedAnnouncements)
localStorage.setItem("announcements", JSON.stringify(updatedAnnouncements))
```

This block of code retrieves the stored announcements from local storage, parses them, filters out invalid announcements, adds new announcements, combines valid and new announcements, marks announcements as read if they are marked as read in local storage, and finally updates the state and local storage with the updated announcements.

## Marking Announcements as Read/Unread

```ts
const markAsRead = (id: string) => {
  //...
}

const markAllAsRead = () => {
  //...
}

const markAllAsUnread = () => {
  //...
}
```

These functions are used to mark individual or all announcements as read or unread. They update both the state and local storage.

## Component Rendering

```ts
return (
  <Popover>
    //...
  </Popover>
)
```

The component returns a `Popover` component that displays the list of announcements. The popover includes a trigger (an icon), and the content of the popover includes the list of announcements and buttons to mark announcements as read or unread.