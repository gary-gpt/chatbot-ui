---
source: components/utility/announcements.tsx
generated: '2025-06-08T13:21:01.637Z'
tags: []
hash: 428fa284ccfc659aa759661c53dc77c26c4814b5ff76c4bc670962722c38593c
---
# Announcements Component

This is a React Functional Component that handles the display and management of announcements. It uses local storage to persist the state of the announcements.

## Import Statements

```jsx
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

## Props

The component does not accept any props.

## State

The component maintains a state `announcements` which is an array of `Announcement` objects.

## Component Logic

The component uses the `useEffect` hook to load announcements from local storage on initial render. It then filters out any announcements that are no longer in state, adds new announcements to the list, and combines the valid and new announcements. The announcements are then updated in state and local storage.

The component also provides functions to mark an announcement as read, mark all announcements as read, and mark all announcements as unread. These functions update both the state and local storage.

## Rendered JSX

The component renders a `Popover` containing a list of unread announcements. Each announcement displays a title, date, content, a button to mark the announcement as read, and a button to view a demo (if a link is provided). 

If there are unread announcements, a button is displayed to mark all announcements as read. If there are no unread announcements, a message is displayed stating "You are all caught up!" and a link is provided to show recent updates. 

The number of unread announcements is also displayed on the `IconSpeakerphone` using a notification indicator.

## Styles

The component uses Tailwind CSS for styling.
