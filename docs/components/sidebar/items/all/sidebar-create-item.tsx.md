---
source: components/sidebar/items/all/sidebar-create-item.tsx
generated: '2025-06-08T13:21:01.661Z'
tags: []
hash: 637ce8d4036ccb31e77cdac27489dd033ec4ca0974867fbf1b5e6cb3656481de
---
# SidebarCreateItem Component

This component is used to create new items in the sidebar of the application. It supports the creation of various content types such as chats, presets, prompts, files, collections, assistants, tools, and models.

## Props

The component accepts the following props:

- `isOpen`: A boolean indicating whether the component is open or not.
- `isTyping`: A boolean indicating whether the user is currently typing.
- `onOpenChange`: A function that is called when the open state of the component changes. It accepts a boolean argument which represents the new open state.
- `contentType`: A string representing the type of content to be created. It can be one of the following: 'chats', 'presets', 'prompts', 'files', 'collections', 'assistants', 'tools', 'models'.
- `renderInputs`: A function that returns a JSX.Element. This function is responsible for rendering the input fields required for creating the new content.
- `createState`: An object containing the state for creating the new content.

## Usage

```jsx
<SidebarCreateItem
  isOpen={isOpen}
  onOpenChange={handleOpenChange}
  contentType="chats"
  renderInputs={renderChatInputs}
  createState={chatState}
  isTyping={isTyping}
/>
```

In the above example, `isOpen` is a boolean indicating whether the component is open or not, `handleOpenChange` is a function that updates the open state of the component, `renderChatInputs` is a function that returns the input fields for creating a new chat, and `chatState` is an object containing the state for creating the new chat.

## Internal Functionality

The component uses the `ChatbotUIContext` to get and set various states. It also defines a `createFunctions` object which maps content types to their corresponding creation functions, and a `stateUpdateFunctions` object which maps content types to their corresponding state update functions.

When the "Create" button is clicked, the component calls the appropriate creation function based on the `contentType` prop, and then updates the corresponding state using the appropriate state update function. If an error occurs during this process, an error toast is displayed.
