**📄 Source File:** `/context/context.tsx`  
**🕒 Generated:** 2025-06-07 14:11:14 UTC  
**🤖 Model:** gpt-4

---

# ChatbotUIContext.ts

This TypeScript file defines and exports a React context, `ChatbotUIContext`, which is used to manage the state of a chatbot user interface. The context is structured around several "stores", each of which represents a different aspect of the chatbot's state.

## Exports

The file exports a single object, `ChatbotUIContext`, which is a React context object. This context is initialized with default values for each state variable.

## Context Structure

The `ChatbotUIContext` is structured into several "stores", each of which represents a different aspect of the chatbot's state. Each store contains one or more state variables, along with a corresponding setter function. The setter functions are used to update the state variables.

### Profile Store

This store contains the user's profile information.

### Items Store

This store contains arrays of different types of items that the chatbot can interact with, such as assistants, collections, chats, files, folders, models, presets, prompts, tools, and workspaces.

### Models Store

This store contains information about the available models, including hosted models, local models, and OpenRouter models.

### Workspace Store

This store contains information about the selected workspace and its images.

### Preset Store

This store contains information about the selected preset.

### Assistant Store

This store contains information about the selected assistant and its images, as well as a list of OpenAI assistants.

### Passive Chat Store

This store contains information about the user's input, the selected chat, chat messages, chat settings, and chat file items.

### Active Chat Store

This store contains information about the chat's active state, including whether it is generating, whether the first token has been received, and an abort controller for stopping the generation process.

### Chat Input Command Store

This store contains information about the chat input commands, including whether various pickers are open, the current commands, and whether various elements should be focused.

### Attachments Store

This store contains information about chat files and images, new message files and images, and whether the files display should be shown.

### Retrieval Store

This store contains information about whether retrieval should be used and the source count.

### Tool Store

This store contains information about the selected tools and the tool in use.

## Usage

This context is likely used by a chatbot UI component to manage its state. The component would use the `useContext` hook to access the state variables and setter functions provided by this context. The setter functions can be used to update the state variables, triggering a re-render of the component.

## Interesting Structure or Nuance

The use of a context to manage the state of a complex component like a chatbot UI is a common pattern in React. This allows the state to be easily accessed and updated from any part of the component tree. The structure of the context, with separate "stores" for different aspects of the state, helps to organize the state and make it easier to understand and manage.