---
source: components/sidebar/items/collections/collection-file-select.tsx
generated: 2025-06-08T21:46:25.446Z
tags: []
hash: edde3784223a34ffe922921d8d0d01dd40df2cbfa29f72ac44884b758198fb93
---

# Collection File Select Component Documentation

This document provides an overview of the Collection File Select component in the Chatbot UI. The component is located at `/Users/garymason/chatbot-ui/components/sidebar/items/collections/collection-file-select.tsx`.

## Overview

The Collection File Select component is a dropdown menu that allows users to select files from a collection. It also provides a search functionality to filter the files.

## Imports

The component imports several UI components, icons, and context from different modules. It also imports the `CollectionFile` type from the types module and several hooks from React.

```ts
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { FileIcon } from "@/components/ui/file-icon"
import { Input } from "@/components/ui/input"
import { ChatbotUIContext } from "@/context/context"
import { CollectionFile } from "@/types"
import { IconChevronDown, IconCircleCheckFilled } from "@tabler/icons-react"
import { FC, useContext, useEffect, useRef, useState } from "react"
```

## Component Props

The `CollectionFileSelect` component receives two props:

- `selectedCollectionFiles`: An array of `CollectionFile` objects that are currently selected.
- `onCollectionFileSelect`: A function that is called when a file is selected. It receives the selected `CollectionFile` as an argument.

```ts
interface CollectionFileSelectProps {
  selectedCollectionFiles: CollectionFile[]
  onCollectionFileSelect: (file: CollectionFile) => void
}
```

## Component Logic

The component uses the `ChatbotUIContext` to get the available files. It also uses two `useRef` hooks to reference the input and trigger elements, and two `useState` hooks to manage the open state of the dropdown menu and the search string.

When the dropdown menu is opened, the input is focused after a delay of 100ms. This is a workaround to ensure that the input is focused correctly.

The `handleFileSelect` function is used to call the `onCollectionFileSelect` prop when a file is selected.

The component returns `null` if there are no files. Otherwise, it returns a `DropdownMenu` component with a trigger and content. The content includes an input for search and a list of selected and available files that match the search string. Each file is represented by a `CollectionFileItem` component.

## Collection File Item Component

The `CollectionFileItem` component is a subcomponent that represents a single file. It receives three props:

- `file`: The `CollectionFile` object to display.
- `selected`: A boolean indicating whether the file is selected.
- `onSelect`: A function to call when the file is selected.

The component displays the file name and an icon based on the file type. If the file is selected, it also displays a check icon. The `onSelect` prop is called when the component is clicked.

```ts
const CollectionFileItem: FC<CollectionFileItemProps> = ({
  file,
  selected,
  onSelect
}) => {
  const handleSelect = () => {
    onSelect(file)
  }

  return (
    <div
      className="flex cursor-pointer items-center justify-between py-0.5 hover:opacity-50"
      onClick={handleSelect}
    >
      <div className="flex grow items-center truncate">
        <div className="mr-2 min-w-[24px]">
          <FileIcon type={file.type} size={24} />
        </div>

        <div className="truncate">{file.name}</div>
      </div>

      {selected && (
        <IconCircleCheckFilled size={20} className="min-w-[30px] flex-none" />
      )}
    </div>
  )
}
```