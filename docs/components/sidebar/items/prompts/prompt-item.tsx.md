---
source: components/sidebar/items/prompts/prompt-item.tsx
generated: 2025-06-08T21:51:06.616Z
tags: []
hash: 10d587cc46d81ad86342b0a40712039cb30451391cbf361ef3bb823e3c215371
---

# Chatbot UI - Prompt Item Component

This document describes the `PromptItem` component located at `/Users/garymason/chatbot-ui/components/sidebar/items/prompts/prompt-item.tsx`. This component is part of the chatbot's user interface (UI) and is used to display and edit prompts in the sidebar.

## Code Overview

The `PromptItem` component is a functional component written in TypeScript. It uses several hooks from React, including `useState`. It also imports several components and constants from other parts of the application.

### Imports

```ts
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextareaAutosize } from "@/components/ui/textarea-autosize"
import { PROMPT_NAME_MAX } from "@/db/limits"
import { Tables } from "@/supabase/types"
import { IconPencil } from "@tabler/icons-react"
import { FC, useState } from "react"
import { SidebarItem } from "../all/sidebar-display-item"
```

### Component Props

The `PromptItem` component accepts a single prop: `prompt`. This prop is an object that represents a prompt from the database.

```ts
interface PromptItemProps {
  prompt: Tables<"prompts">
}
```

### Component Functionality

The `PromptItem` component maintains its own state for the name and content of the prompt, as well as whether the user is currently typing. This state is initialized with the values of the `prompt` prop.

```ts
const [name, setName] = useState(prompt.name)
const [content, setContent] = useState(prompt.content)
const [isTyping, setIsTyping] = useState(false)
```

The component returns a `SidebarItem` component with several props. The `item` prop is the original `prompt` object. The `isTyping` prop is the current state of whether the user is typing. The `contentType` prop is set to `"prompts"`. The `icon` prop is an `IconPencil` component. The `updateState` prop is an object with the current `name` and `content` state.

The `renderInputs` prop is a function that returns a JSX fragment. This fragment contains two divs, each with a `Label` and an `Input` or `TextareaAutosize` component. The `Input` and `TextareaAutosize` components are controlled components, with their values set to the current `name` and `content` state and their `onChange` or `onValueChange` handlers set to update this state.

```ts
return (
  <SidebarItem
    item={prompt}
    isTyping={isTyping}
    contentType="prompts"
    icon={<IconPencil size={30} />}
    updateState={{ name, content }}
    renderInputs={() => (
      <>
        <div className="space-y-1">
          <Label>Name</Label>

          <Input
            placeholder="Prompt name..."
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={PROMPT_NAME_MAX}
            onCompositionStart={() => setIsTyping(true)}
            onCompositionEnd={() => setIsTyping(false)}
          />
        </div>

        <div className="space-y-1">
          <Label>Prompt</Label>

          <TextareaAutosize
            placeholder="Prompt..."
            value={content}
            onValueChange={setContent}
            minRows={6}
            maxRows={20}
            onCompositionStart={() => setIsTyping(true)}
            onCompositionEnd={() => setIsTyping(false)}
          />
        </div>
      </>
    )}
  />
)
```

## Summary

The `PromptItem` component is a sidebar item that displays and allows editing of chatbot prompts. It maintains its own state for the prompt's name and content, as well as whether the user is currently typing. It uses the `SidebarItem`, `Input`, `Label`, and `TextareaAutosize` components to render the UI.