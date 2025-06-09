---
source: components/sidebar/items/folders/delete-folder.tsx
generated: 2025-06-08T21:48:13.810Z
tags: []
hash: 1bf01cb1a5b8aefab76dbcca23f51adf5bcfa776678f0af47f9f410325e36e93
---

# Delete Folder Component Documentation

This document provides an overview of the `DeleteFolder` component found in the file `/Users/garymason/chatbot-ui/components/sidebar/items/folders/delete-folder.tsx`. This component is used to delete a folder and optionally its contents from the chatbot UI.

## Code Overview

```ts
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { ChatbotUIContext } from "@/context/context"
import { deleteFolder } from "@/db/folders"
import { supabase } from "@/lib/supabase/browser-client"
import { Tables } from "@/supabase/types"
import { ContentType } from "@/types"
import { IconTrash } from "@tabler/icons-react"
import { FC, useContext, useRef, useState } from "react"
import { toast } from "sonner"

interface DeleteFolderProps {
  folder: Tables<"folders">
  contentType: ContentType
}

export const DeleteFolder: FC<DeleteFolderProps> = ({
  folder,
  contentType
}) => {
  // ...
}
```

## Component Props

The `DeleteFolder` component accepts the following props:

- `folder`: An object representing the folder to be deleted. This object should match the `folders` table structure in the Supabase database.
- `contentType`: A string representing the type of content contained within the folder.

## Component State

The component maintains the following state variables:

- `showFolderDialog`: A boolean value controlling the visibility of the delete confirmation dialog.
- `stateUpdateFunctions`: An object mapping content types to their respective state update functions.

## Component Methods

The component defines the following methods:

- `handleDeleteFolderOnly`: This method deletes the folder from the database and updates the UI state accordingly. It also sets any items within the deleted folder to have a `null` folder_id.
- `handleDeleteFolderAndItems`: This method deletes both the folder and its items from the database. It updates the UI state to reflect these changes.

## Component Rendering

The `DeleteFolder` component renders a `Dialog` component. The dialog contains a `DialogTrigger` that displays a trash icon. When clicked, a confirmation dialog appears with the options to either delete the folder only or delete the folder and its contents. The dialog also provides a cancel button to dismiss the dialog without making any changes.

## Code Summary

In summary, the `DeleteFolder` component provides the functionality to delete a folder and optionally its contents from the chatbot UI. It does this by interacting with the Supabase database and updating the UI state to reflect these changes.