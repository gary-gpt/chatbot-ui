---
source: components/sidebar/items/collections/create-collection.tsx
generated: '2025-06-08T13:21:01.662Z'
tags: []
hash: 3b0ac40df41b91eb77504300f94c6dbe1bc8551dc7f0663b4eebb93ebb254286
---
# CreateCollection Component

The `CreateCollection` component is a functional component in React that allows users to create a new collection.

## Props

The component takes the following props:

- `isOpen`: A boolean indicating whether the component is open or not.
- `onOpenChange`: A function that changes the state of `isOpen`.

## State

The component maintains the following state:

- `name`: The name of the collection.
- `isTyping`: A boolean indicating whether the user is typing or not.
- `description`: The description of the collection.
- `selectedCollectionFiles`: An array of `CollectionFile` objects representing the files selected for the collection.

## Functionality

The component uses the `ChatbotUIContext` to access the user's profile and the selected workspace. If either of these are not available, the component returns `null`.

The `handleFileSelect` function is used to add or remove files from the `selectedCollectionFiles` state. If a file is already selected, it is removed from the state; otherwise, it is added to the state.

The component returns a `SidebarCreateItem` component with the `contentType` set to `"collections"`. This component is used to create the new collection.

The `renderInputs` function returns a set of inputs for the user to enter the collection's name, description, and select files. The inputs for the name and description have a maximum length defined by `COLLECTION_NAME_MAX` and `COLLECTION_DESCRIPTION_MAX` respectively.

## Imports

The component imports several other components and constants:

- `SidebarCreateItem` from "@/components/sidebar/items/all/sidebar-create-item"
- `Input` from "@/components/ui/input"
- `Label` from "@/components/ui/label"
- `ChatbotUIContext` from "@/context/context"
- `COLLECTION_DESCRIPTION_MAX`, `COLLECTION_NAME_MAX` from "@/db/limits"
- `TablesInsert` from "@/supabase/types"
- `CollectionFile` from "@/types"
- `FC`, `useContext`, `useState` from "react"
- `CollectionFileSelect` from "./collection-file-select"
