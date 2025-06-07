**📄 Source File:** `/components/sidebar/items/folders/folder-item.tsx`  
**🕒 Generated:** 2025-06-07 13:42:08 UTC  
**🤖 Model:** gpt-4

---

# Folder.tsx

This TypeScript file defines and exports a `Folder` component for a React application. The `Folder` component is a functional component that displays a folder and handles various interactions such as drag and drop, keyboard events, and mouse events.

## Imports

The file imports several utilities, types, and components from various modules:

- `cn` utility from "@/lib/utils"
- `Tables` type from "@/supabase/types"
- `ContentType` type from "@/types"
- `IconChevronDown` and `IconChevronRight` components from "@tabler/icons-react"
- `FC`, `useRef`, and `useState` from "react"
- `DeleteFolder` and `UpdateFolder` components from the same directory

## Interface

The `FolderProps` interface is defined to type the props for the `Folder` component. It includes:

- `folder`: An object of type `Tables<"folders">`
- `contentType`: A `ContentType` object
- `children`: Any valid React node
- `onUpdateFolder`: A function that takes an `itemId` and `folderId` (which can be null) and returns void

## Component

The `Folder` component is a functional component that uses the `FolderProps` interface for its props. It maintains its own state for `isDragOver`, `isExpanded`, and `isHovering` using the `useState` hook from React. It also uses the `useRef` hook to create a reference to the folder div.

The component defines several event handlers for drag and drop, keyboard, and mouse events. These handlers update the component's state and call the `onUpdateFolder` prop function as necessary.

The component returns a div that represents the folder. The div includes an icon that changes based on the `isExpanded` state, the folder's name, and `UpdateFolder` and `DeleteFolder` components that appear when the folder is being hovered over. If the folder is expanded, it also includes its children.

## Exports

The file exports the `Folder` component.

## Usage

The `Folder` component can be used in a React application where a folder structure is needed. The parent component should provide the necessary props, including the folder data, content type, children, and an `onUpdateFolder` function. The `onUpdateFolder` function will be called when a drag and drop event occurs, with the id of the item being dragged and the id of the folder it was dropped into.