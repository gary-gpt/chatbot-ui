---
source: components/sidebar/items/presets/create-preset.tsx
generated: 2025-06-08T21:49:56.120Z
tags: []
hash: f8b1aeda70e84ff282524ec02dd46a4606e5073e37316d844b38501a35468089
---

# Create Preset Component Documentation

This document describes the `CreatePreset` component in the file `/Users/garymason/chatbot-ui/components/sidebar/items/presets/create-preset.tsx`. This component is used to create a new preset in the sidebar of the chatbot UI.

## Import Statements

The component imports several other components and constants from different files:

- `SidebarCreateItem` from `@/components/sidebar/items/all/sidebar-create-item`
- `ChatSettingsForm` from `@/components/ui/chat-settings-form`
- `Input` and `Label` from `@/components/ui/input` and `@/components/ui/label` respectively
- `ChatbotUIContext` from `@/context/context`
- `PRESET_NAME_MAX` from `@/db/limits`
- `TablesInsert` from `@/supabase/types`
- `FC`, `useContext`, `useState` from `react`

## Component Props

The `CreatePreset` component accepts the following props:

- `isOpen`: A boolean indicating whether the component is open or not.
- `onOpenChange`: A function that changes the open state of the component.

## Component State

The component maintains several state variables:

- `name`: The name of the preset.
- `isTyping`: A boolean indicating whether the user is currently typing.
- `description`: The description of the preset.
- `presetChatSettings`: An object containing various chat settings.

## Component Logic

The component first checks if `profile` and `selectedWorkspace` are not null. If either is null, the component returns null and does not render anything.

The component then returns a `SidebarCreateItem` component with several props:

- `contentType`: Set to "presets".
- `isOpen`, `isTyping`, `onOpenChange`: Passed directly from the `CreatePreset` props.
- `createState`: An object containing the user ID, preset name, description, and various chat settings.
- `renderInputs`: A function that returns the JSX for the input fields.

## Component Structure

The component structure is as follows:

- `SidebarCreateItem`
  - `Label`
  - `Input`
  - `ChatSettingsForm`

## Code Summary

```ts
// Define the props for the CreatePreset component
interface CreatePresetProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

// Define the CreatePreset component
export const CreatePreset: FC<CreatePresetProps> = ({
  isOpen,
  onOpenChange
}) => {
  // Use context and state hooks
  const { profile, selectedWorkspace } = useContext(ChatbotUIContext)
  const [name, setName] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [description, setDescription] = useState("")
  const [presetChatSettings, setPresetChatSettings] = useState({
    // Initialize with default workspace settings
  })

  // Return null if profile or selectedWorkspace is null
  if (!profile || !selectedWorkspace) return null

  // Return the SidebarCreateItem component
  return (
    <SidebarCreateItem
      // Pass in props and state
    />
  )
}
```