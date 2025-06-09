---
source: components/sidebar/items/prompts/create-prompt.tsx
generated: 2025-06-08T21:50:40.220Z
tags: []
hash: 62add8b72f6c7135bd766f531592e93add25317f1ee26a095a11bbd1919e44b7
---

# Documentation for CreatePrompt Component

The `CreatePrompt` component is a part of the chatbot's user interface. It's a sidebar item that allows users to create new prompts. The component is located at `/Users/garymason/chatbot-ui/components/sidebar/items/prompts/create-prompt.tsx`.

## Code Overview

The component uses several imports from different directories, including UI components like `Input`, `Label`, and `TextareaAutosize`, and context from `ChatbotUIContext`. It also imports some constants and types.

The `CreatePrompt` component is a functional component that accepts `isOpen` and `onOpenChange` as props. It uses the React `useState` hook to manage local state for `isTyping`, `name`, and `content` variables.

The component returns null if there is no `profile` or `selectedWorkspace` available, otherwise, it returns a `SidebarCreateItem` component with several props and a render prop for inputs.

```ts
export const CreatePrompt: FC<CreatePromptProps> = ({
  isOpen,
  onOpenChange
}) => {
  const { profile, selectedWorkspace } = useContext(ChatbotUIContext)
  const [isTyping, setIsTyping] = useState(false)
  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  if (!profile) return null
  if (!selectedWorkspace) return null

  // ...
}
```

## SidebarCreateItem Component

The `SidebarCreateItem` component is used to render the create prompt form. It accepts several props including `contentType`, `isOpen`, `isTyping`, `onOpenChange`, `createState`, and `renderInputs`.

The `createState` prop is an object that contains `user_id`, `name`, and `content`. The `renderInputs` prop is a function that returns a JSX element containing the input fields for the prompt name and content.

```ts
<SidebarCreateItem
  contentType="prompts"
  isOpen={isOpen}
  isTyping={isTyping}
  onOpenChange={onOpenChange}
  createState={
    {
      user_id: profile.user_id,
      name,
      content
    } as TablesInsert<"prompts">
  }
  renderInputs={() => (
    // ...
  )}
/>
```

## Input Fields

The `renderInputs` function returns two divs each containing a `Label` and an input field. The first div is for the prompt name and the second one is for the prompt content. The `Input` and `TextareaAutosize` components are used for these fields respectively.

```ts
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
        placeholder="Prompt content..."
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
```
The `onChange` and `onValueChange` handlers are used to update the `name` and `content` state variables respectively. The `onCompositionStart` and `onCompositionEnd` handlers are used to update the `isTyping` state variable.