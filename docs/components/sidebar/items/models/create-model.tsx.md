---
source: components/sidebar/items/models/create-model.tsx
generated: 2025-06-08T21:49:17.309Z
tags: []
hash: 7ccb13cdcbfcb0d37203e434c7b01e880b3ea0928d35d1faaf7a0fb001f0f25b
---

# Documentation for create-model.tsx

This file is a React component that provides an interface for creating a new model in the sidebar of the Chatbot UI. The model is created with a set of properties including name, model ID, base URL, API key, and max context length.

## Import Statements

```ts
import { SidebarCreateItem } from "@/components/sidebar/items/all/sidebar-create-item"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChatbotUIContext } from "@/context/context"
import { MODEL_NAME_MAX } from "@/db/limits"
import { TablesInsert } from "@/supabase/types"
import { FC, useContext, useState } from "react"
```

The import statements include necessary components, context, constants, types, and hooks used in the file.

## Interface

```ts
interface CreateModelProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}
```

The `CreateModelProps` interface defines the props that the `CreateModel` component expects. It includes a boolean `isOpen` and a function `onOpenChange` that takes a boolean as an argument.

## Component

```ts
export const CreateModel: FC<CreateModelProps> = ({ isOpen, onOpenChange }) => {
  ...
}
```

The `CreateModel` component is a functional component that takes `CreateModelProps` as its props. It uses the `ChatbotUIContext` to access the user's profile and selected workspace.

## State Variables

```ts
const [isTyping, setIsTyping] = useState(false)
const [apiKey, setApiKey] = useState("")
const [baseUrl, setBaseUrl] = useState("")
const [description, setDescription] = useState("")
const [modelId, setModelId] = useState("")
const [name, setName] = useState("")
const [contextLength, setContextLength] = useState(4096)
```

The component uses several state variables to manage the current typing status and the values of the model properties.

## Return Statement

```ts
return (
  <SidebarCreateItem
    ...
  />
)
```

The component returns a `SidebarCreateItem` component with several props including the current state of the model properties and a function to render the inputs for those properties.

## Input Fields

```ts
<Input
  placeholder="Model name..."
  value={name}
  onChange={e => setName(e.target.value)}
  maxLength={MODEL_NAME_MAX}
/>
```

Each input field is associated with a state variable and has an `onChange` event handler that updates the corresponding state variable when the input value changes. The `maxLength` prop for the name input field is set to `MODEL_NAME_MAX` imported from "@/db/limits".