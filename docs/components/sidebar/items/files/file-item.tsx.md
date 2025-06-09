---
source: components/sidebar/items/files/file-item.tsx
generated: 2025-06-08T21:47:57.835Z
tags: []
hash: 78e21cc6ce31aa3625bd62da1a74f46091c91a291d8c56ba1162b454ea9fcc09
---

# FileItem Component Documentation

This document describes the `FileItem` component, which is located at `/Users/garymason/chatbot-ui/components/sidebar/items/files/file-item.tsx`. This component is used to display individual file items in a sidebar.

## Imports

The component imports several UI components from the project's own UI library, constants for maximum lengths of file name and description from the database limits, a function to fetch a file from storage, and types for the database tables. It also imports the `useState` hook from React, and the `SidebarItem` component from the same directory level.

## Props

The `FileItem` component receives a single prop: `file`. This prop is an object that represents a file from the `files` table in the database.

## Component Function

The `FileItem` component is a functional component that uses the `useState` hook to manage the state of the file's name and description, and whether the user is currently typing.

The component also defines an asynchronous function `getLinkAndView` that fetches a link to the file from storage and opens it in a new browser tab.

The component returns a `SidebarItem` component with several props, including the file object, the typing state, the content type, an icon, the current state of the name and description, and a function to render inputs for the file's name and description.

## Helper Function

The `formatFileSize` function is a helper function that takes a file size in bytes and returns a string representing the file size in the appropriate unit (bytes, KB, MB, or GB).

## Code

```ts
// Import necessary components, constants, functions, and types
import { FileIcon } from "@/components/ui/file-icon"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FILE_DESCRIPTION_MAX, FILE_NAME_MAX } from "@/db/limits"
import { getFileFromStorage } from "@/db/storage/files"
import { Tables } from "@/supabase/types"
import { FC, useState } from "react"
import { SidebarItem } from "../all/sidebar-display-item"

// Define the props for the FileItem component
interface FileItemProps {
  file: Tables<"files">
}

// Define the FileItem component
export const FileItem: FC<FileItemProps> = ({ file }) => {
  // Define state variables for the file's name, description, and typing state
  const [name, setName] = useState(file.name)
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState(file.description)

  // Define a function to fetch a link to the file and open it in a new tab
  const getLinkAndView = async () => {
    const link = await getFileFromStorage(file.file_path)
    window.open(link, "_blank")
  }

  // Return a SidebarItem component with the appropriate props
  return (
    <SidebarItem
      item={file}
      isTyping={isTyping}
      contentType="files"
      icon={<FileIcon type={file.type} size={30} />}
      updateState={{ name, description }}
      renderInputs={() => (
        <>
          <div
            className="cursor-pointer underline hover:opacity-50"
            onClick={getLinkAndView}
          >
            View {file.name}
          </div>

          <div className="flex flex-col justify-between">
            <div>{file.type}</div>

            <div>{formatFileSize(file.size)}</div>

            <div>{file.tokens.toLocaleString()} tokens</div>
          </div>

          <div className="space-y-1">
            <Label>Name</Label>

            <Input
              placeholder="File name..."
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={FILE_NAME_MAX}
            />
          </div>

          <div className="space-y-1">
            <Label>Description</Label>

            <Input
              placeholder="File description..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              maxLength={FILE_DESCRIPTION_MAX}
            />
          </div>
        </>
      )}
    />
  )
}

// Define a helper function to format file sizes
export const formatFileSize = (sizeInBytes: number): string => {
  let size = sizeInBytes
  let unit = "bytes"

  if (size >= 1024) {
    size /= 1024
    unit = "KB"
  }

  if (size >= 1024) {
    size /= 1024
    unit = "MB"
  }

  if (size >= 1024) {
    size /= 1024
    unit = "GB"
  }

  return `${size.toFixed(2)} ${unit}`
}
```