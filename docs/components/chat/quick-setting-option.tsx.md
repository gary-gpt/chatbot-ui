---
source: components/chat/quick-setting-option.tsx
generated: 2025-06-08T21:32:18.937Z
tags: []
hash: fef3f1108dad04eb3974dd2344ebb17223a029066535cacd0909661cc3534e36
---

# QuickSettingOption Component Documentation

## Overview

The `QuickSettingOption` component is a part of the chatbot user interface. It provides a dropdown menu item for quick settings, which can either be presets or assistants. The component is designed to be flexible and reusable, allowing for different types of content to be displayed.

## File Location

`/Users/garymason/chatbot-ui/components/chat/quick-setting-option.tsx`

## Imports

The component imports several libraries and components:

- `LLM_LIST` from "@/lib/models/llm/llm-list"
- `Tables` from "@/supabase/types"
- `IconCircleCheckFilled`, `IconRobotFace` from "@tabler/icons-react"
- `Image` from "next/image"
- `FC` from "react"
- `ModelIcon` from "../models/model-icon"
- `DropdownMenuItem` from "../ui/dropdown-menu"

## Props

The `QuickSettingOption` component accepts the following props:

- `contentType`: A string that can either be "presets" or "assistants".
- `isSelected`: A boolean indicating whether the item is selected.
- `item`: An object that can either be of type `Tables<"presets">` or `Tables<"assistants">`.
- `onSelect`: A function to be called when the item is selected.
- `image`: A string representing the URL of the image to be displayed.

## Component Logic

The component first finds the model details from the `LLM_LIST` based on the `modelId` of the `item` prop.

It then returns a `DropdownMenuItem` component with the following children:

- An image or icon representing the content type. If the content type is "presets", a `ModelIcon` is displayed. If the content type is "assistants" and an image URL is provided, an `Image` component is displayed. If no image URL is provided, an `IconRobotFace` is displayed.
- A div containing the name of the item (in bold) and, if provided, the description of the item.
- If the item is selected, an `IconCircleCheckFilled` is displayed.

## Code

```ts
export const QuickSettingOption: FC<QuickSettingOptionProps> = ({
  contentType,
  isSelected,
  item,
  onSelect,
  image
}) => {
  // Find the model details from the LLM_LIST
  const modelDetails = LLM_LIST.find(model => model.modelId === item.model)

  return (
    // DropdownMenuItem component
    <DropdownMenuItem
      tabIndex={0}
      className="cursor-pointer items-center"
      onSelect={onSelect}
    >
      // Image or icon representing the content type
      <div className="w-[32px]">
        {contentType === "presets" ? (
          <ModelIcon
            provider={modelDetails?.provider || "custom"}
            width={32}
            height={32}
          />
        ) : image ? (
          <Image
            style={{ width: "32px", height: "32px" }}
            className="rounded"
            src={image}
            alt="Assistant"
            width={32}
            height={32}
          />
        ) : (
          <IconRobotFace
            className="bg-primary text-secondary border-primary rounded border-DEFAULT p-1"
            size={32}
          />
        )}
      </div>

      // Name and description of the item
      <div className="ml-4 flex grow flex-col space-y-1">
        <div className="text-md font-bold">{item.name}</div>

        {item.description && (
          <div className="text-sm font-light">{item.description}</div>
        )}
      </div>

      // Check icon if the item is selected
      <div className="min-w-[40px]">
        {isSelected ? (
          <IconCircleCheckFilled className="ml-4" size={20} />
        ) : null}
      </div>
    </DropdownMenuItem>
  )
}
```