---
source: components/sidebar/items/assistants/assistant-item.tsx
generated: 2025-06-08T21:44:00.980Z
tags: []
hash: 6952ad0f808f7dc6c1155a25495ac17bee7d86436db2243c724dd59e4593cd53
---

# AssistantItem Component Documentation

This document provides an overview of the `AssistantItem` component in the `assistant-item.tsx` file. This component is used to display and manage individual assistant items in the chatbot UI.

## Import Statements

The component imports several UI components, constants, types, and contexts that are used within the component.

```ts
import { ChatSettingsForm } from "@/components/ui/chat-settings-form"
import ImagePicker from "@/components/ui/image-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChatbotUIContext } from "@/context/context"
import { ASSISTANT_DESCRIPTION_MAX, ASSISTANT_NAME_MAX } from "@/db/limits"
import { Tables } from "@/supabase/types"
import { IconRobotFace } from "@tabler/icons-react"
import Image from "next/image"
import { FC, useContext, useEffect, useState } from "react"
import profile from "react-syntax-highlighter/dist/esm/languages/hljs/profile"
import { SidebarItem } from "../all/sidebar-display-item"
import { AssistantRetrievalSelect } from "./assistant-retrieval-select"
import { AssistantToolSelect } from "./assistant-tool-select"
```

## Component Props

The `AssistantItem` component accepts a single prop, `assistant`, which is an object of type `Tables<"assistants">`.

```ts
interface AssistantItemProps {
  assistant: Tables<"assistants">
}
```

## Component Function

The `AssistantItem` component function uses the `ChatbotUIContext` to get the `selectedWorkspace` and `assistantImages`. It also initializes several state variables to manage the assistant's properties and settings.

```ts
export const AssistantItem: FC<AssistantItemProps> = ({ assistant }) => {
  const { selectedWorkspace, assistantImages } = useContext(ChatbotUIContext)
  ...
}
```

## Helper Functions

The component includes several helper functions to handle the selection of files, collections, and tools associated with the assistant.

```ts
const handleFileSelect = (
  file: Tables<"files">,
  setSelectedAssistantFiles: React.Dispatch<
    React.SetStateAction<Tables<"files">[]>
  >
) => {...}

const handleCollectionSelect = (
  collection: Tables<"collections">,
  setSelectedAssistantCollections: React.Dispatch<
    React.SetStateAction<Tables<"collections">[]>
  >
) => {...}

const handleToolSelect = (
  tool: Tables<"tools">,
  setSelectedAssistantTools: React.Dispatch<
    React.SetStateAction<Tables<"tools">[]>
  >
) => {...}
```

## Render

The component returns a `SidebarItem` component with the assistant item's properties and settings. It also includes several input fields for updating the assistant's name, description, image, chat settings, files, collections, and tools.

```ts
return (
  <SidebarItem
    item={assistant}
    contentType="assistants"
    isTyping={isTyping}
    icon={
      imageLink ? (
        <Image
          style={{ width: "30px", height: "30px" }}
          className="rounded"
          src={imageLink}
          alt={assistant.name}
          width={30}
          height={30}
        />
      ) : (
        <IconRobotFace
          className="bg-primary text-secondary border-primary rounded border-DEFAULT p-1"
          size={30}
        />
      )
    }
    updateState={{
      image: selectedImage,
      user_id: assistant.user_id,
      name,
      description,
      include_profile_context: assistantChatSettings.includeProfileContext,
      include_workspace_instructions:
        assistantChatSettings.includeWorkspaceInstructions,
      context_length: assistantChatSettings.contextLength,
      model: assistantChatSettings.model,
      image_path: assistant.image_path,
      prompt: assistantChatSettings.prompt,
      temperature: assistantChatSettings.temperature
    }}
    renderInputs={(renderState: {
      startingAssistantFiles: Tables<"files">[]
      setStartingAssistantFiles: React.Dispatch<
        React.SetStateAction<Tables<"files">[]>
      >
      selectedAssistantFiles: Tables<"files">[]
      setSelectedAssistantFiles: React.Dispatch<
        React.SetStateAction<Tables<"files">[]>
      >
      startingAssistantCollections: Tables<"collections">[]
      setStartingAssistantCollections: React.Dispatch<
        React.SetStateAction<Tables<"collections">[]>
      >
      selectedAssistantCollections: Tables<"collections">[]
      setSelectedAssistantCollections: React.Dispatch<
        React.SetStateAction<Tables<"collections">[]>
      >
      startingAssistantTools: Tables<"tools">[]
      setStartingAssistantTools: React.Dispatch<
        React.SetStateAction<Tables<"tools">[]>
      >
      selectedAssistantTools: Tables<"tools">[]
      setSelectedAssistantTools: React.Dispatch<
        React.SetStateAction<Tables<"tools">[]>
      >
    }) => (
      <>
        ...
      </>
    )}
  />
)
```

The `renderInputs` prop is a function that returns a set of input fields for updating the assistant's properties and settings.