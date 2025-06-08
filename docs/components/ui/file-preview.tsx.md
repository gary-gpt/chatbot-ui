# FilePreview Component

This is a React functional component named `FilePreview`. It is used to preview files of different types.

## Props

The component accepts the following props:

- `type`: A string that can be either "image", "file", or "file_item". This prop is used to determine the type of the file.
- `item`: An object that can be of type `ChatFile`, `MessageImage`, or `Tables<"file_items">`. This prop represents the file to be previewed.
- `isOpen`: A boolean indicating whether the file preview dialog is open or not.
- `onOpenChange`: A function that is called when the state of the file preview dialog changes. It accepts a boolean parameter.

## Usage

The component renders a `Dialog` component with a `DialogContent` child. The content of the `DialogContent` depends on the `type` prop:

- If `type` is "image", it checks if the `item` has a `file` property. If it does, it renders a `DrawingCanvas` component with the `imageItem` prop set to `item`. If it doesn't, it renders an `Image` component with the `src` prop set to `item.base64` or `item.url`.
- If `type` is "file_item", it renders a `div` with the `content` of the `item`.
- If `type` is "file", it renders a `div` with an `IconFileFilled` component.

## Dependencies

The component depends on the following external libraries and components:

- `cn` from "@/lib/utils"
- `Tables` from "@/supabase/types"
- `ChatFile`, `MessageImage` from "@/types"
- `IconFileFilled` from "@tabler/icons-react"
- `Image` from "next/image"
- `FC` from "react"
- `DrawingCanvas` from "../utility/drawing-canvas"
- `Dialog`, `DialogContent` from "./dialog"