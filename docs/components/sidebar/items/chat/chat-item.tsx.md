---
source: components/sidebar/items/chat/chat-item.tsx
generated: '2025-06-08T13:21:01.661Z'
tags: []
hash: fed5e69edbc87296f54679f5b65d24b38ac791a3f5e8fcbec3406becd96f0f1b
---
# ChatItem Component

This is a functional component in React, named `ChatItem`. It is used to display a single chat item in the chat interface.

## Props

The `ChatItem` component receives the following props:

- `chat`: An object representing a chat from the "chats" table.

## Dependencies

This component uses several other components and functions from different libraries:

- `ModelIcon` from "@/components/models/model-icon"
- `WithTooltip` from "@/components/ui/with-tooltip"
- `ChatbotUIContext` from "@/context/context"
- `LLM_LIST` from "@/lib/models/llm/llm-list"
- `cn` from "@/lib/utils"
- `Tables` from "@/supabase/types"
- `LLM` from "@/types"
- `IconRobotFace` from "@tabler/icons-react"
- `Image` from "next/image"
- `useParams`, `useRouter` from "next/navigation"
- `FC`, `useContext`, `useRef` from "react"
- `DeleteChat` from "./delete-chat"
- `UpdateChat` from "./update-chat"

## Functionality

This component displays a chat item with its associated model icon or assistant image, the chat name, and options to update or delete the chat. The chat item is clickable and will navigate to the chat's page when clicked. It also responds to keyboard events, specifically the "Enter" key, to provide the same navigation functionality.

The component uses the `ChatbotUIContext` to access various data such as the selected workspace, selected chat, available models, assistant images, and more. It also uses `useParams` and `useRouter` from Next.js to handle routing based on the selected workspace and chat.

The `handleClick` function is used to navigate to the chat's page when the chat item is clicked. The `handleKeyDown` function is used to provide the same functionality when the "Enter" key is pressed.

The `MODEL_DATA` constant is used to find the model associated with the chat. The `assistantImage` constant is used to find the image associated with the assistant in the chat.

The component returns a `div` that contains the model icon or assistant image, the chat name, and the update and delete options. The update and delete options are only visible when the chat item is active (i.e., it is the currently selected chat).
