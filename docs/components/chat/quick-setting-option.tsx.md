# QuickSettingOption Component

This is a React functional component that renders a dropdown menu item for quick setting options. The options can be either presets or assistants.

## Props

The component takes the following props:

- `contentType`: A string that can either be "presets" or "assistants". This determines the type of content to be displayed in the dropdown menu item.
- `isSelected`: A boolean that indicates whether the current item is selected.
- `item`: An object of type `Tables<"presets">` or `Tables<"assistants">`. This represents the item to be displayed in the dropdown menu.
- `onSelect`: A function that is called when the dropdown menu item is selected.
- `image`: A string that represents the URL of the image to be displayed if the content type is "assistants".

## Dependencies

This component depends on the following external libraries and components:

- `LLM_LIST` from "@/lib/models/llm/llm-list"
- `Tables` from "@/supabase/types"
- `IconCircleCheckFilled`, `IconRobotFace` from "@tabler/icons-react"
- `Image` from "next/image"
- `ModelIcon` from "../models/model-icon"
- `DropdownMenuItem` from "../ui/dropdown-menu"

## Usage

This component is used to render a dropdown menu item with an icon, name, and description. If the content type is "presets", a `ModelIcon` is displayed. If the content type is "assistants" and an image URL is provided, an `Image` is displayed. Otherwise, an `IconRobotFace` is displayed. If the item is selected, an `IconCircleCheckFilled` is displayed on the right side of the dropdown menu item.