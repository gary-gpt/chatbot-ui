---
source: context/context.tsx
generated: '2025-06-08T13:21:01.627Z'
tags: []
hash: 0b384685dec68caab65abf85f2e562485242d36a00134a427c7b38e2965842b4
---
# Chatbot UI Context

This file defines the `ChatbotUIContext` which is used to manage the state of the chatbot UI.

## Import Statements

The file begins by importing necessary modules and types from various files.

## Interface: ChatbotUIContext

The `ChatbotUIContext` interface is defined with several properties. Each property represents a piece of state in the chatbot UI and a function to update that state.

### Profile Store

- `profile`: The current profile.
- `setProfile`: Function to update the current profile.

### Items Store

This store manages the state for various items in the chatbot UI.

- `assistants`: Array of assistants.
- `setAssistants`: Function to update the array of assistants.
- And so on for collections, chats, files, folders, models, presets, prompts, tools, and workspaces.

### Models Store

This store manages the state for models in the chatbot UI.

- `envKeyMap`: A record of environment keys.
- `setEnvKeyMap`: Function to update the record of environment keys.
- And so on for available hosted models, local models, and open router models.

### Workspace Store

This store manages the state for the workspace in the chatbot UI.

- `selectedWorkspace`: The currently selected workspace.
- `setSelectedWorkspace`: Function to update the currently selected workspace.
- `workspaceImages`: Array of workspace images.
- `setWorkspaceImages`: Function to update the array of workspace images.

### Preset Store

- `selectedPreset`: The currently selected preset.
- `setSelectedPreset`: Function to update the currently selected preset.

### Assistant Store

- `selectedAssistant`: The currently selected assistant.
- `setSelectedAssistant`: Function to update the currently selected assistant.
- `assistantImages`: Array of assistant images.
- `setAssistantImages`: Function to update the array of assistant images.
- `openaiAssistants`: Array of OpenAI assistants.
- `setOpenaiAssistants`: Function to update the array of OpenAI assistants.

### Passive Chat Store

This store manages the state for the passive chat in the chatbot UI.

- `userInput`: The user's input.
- `setUserInput`: Function to update the user's input.
- And so on for selected chat, chat messages, chat settings, and chat file items.

### Active Chat Store

This store manages the state for the active chat in the chatbot UI.

- `isGenerating`: Whether the chat is currently generating.
- `setIsGenerating`: Function to update whether the chat is currently generating.
- And so on for first token received and abort controller.

### Chat Input Command Store

This store manages the state for the chat input commands in the chatbot UI.

- `isPromptPickerOpen`: Whether the prompt picker is open.
- `setIsPromptPickerOpen`: Function to update whether the prompt picker is open.
- And so on for slash command, file picker open, hashtag command, tool picker open, tool command, focus prompt, focus file, focus tool, focus assistant, at command, and assistant picker open.

### Attachments Store

This store manages the state for the attachments in the chatbot UI.

- `chatFiles`: Array of chat files.
- `setChatFiles`: Function to update the array of chat files.
- And so on for chat images, new message files, new message images, and show files display.

### Retrieval Store

- `useRetrieval`: Whether to use retrieval.
- `setUseRetrieval`: Function to update whether to use retrieval.
- `sourceCount`: The source count.
- `setSourceCount`: Function to update the source count.

### Tool Store

- `selectedTools`: Array of selected tools.
- `setSelectedTools`: Function to update the array of selected tools.
- `toolInUse`: The tool currently in use.
- `setToolInUse`: Function to update the tool currently in use.

## Export: ChatbotUIContext

Finally, the `ChatbotUIContext` is exported as a context with default values.
