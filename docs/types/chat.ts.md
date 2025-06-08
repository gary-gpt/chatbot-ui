# Source Code Documentation

## Interfaces

### `ChatSettings`

This interface represents the settings for a chat. 

- `model: LLMID` - Represents the model ID of the chat.
- `prompt: string` - Represents the prompt message of the chat.
- `temperature: number` - Represents the temperature parameter for the chat.
- `contextLength: number` - Represents the length of the context for the chat.
- `includeProfileContext: boolean` - A flag indicating whether to include profile context in the chat.
- `includeWorkspaceInstructions: boolean` - A flag indicating whether to include workspace instructions in the chat.
- `embeddingsProvider: "openai" | "local"` - Represents the provider for embeddings. It can either be "openai" or "local".

### `ChatPayload`

This interface represents the payload for a chat. 

- `chatSettings: ChatSettings` - Represents the settings for the chat.
- `workspaceInstructions: string` - Represents the instructions for the workspace.
- `chatMessages: ChatMessage[]` - Represents an array of chat messages.
- `assistant: Tables<"assistants"> | null` - Represents the assistant for the chat. It can either be a table of assistants or null.
- `messageFileItems: Tables<"file_items">[]` - Represents an array of file items related to the messages.
- `chatFileItems: Tables<"file_items">[]` - Represents an array of file items related to the chat.

### `ChatAPIPayload`

This interface represents the payload for a chat API.

- `chatSettings: ChatSettings` - Represents the settings for the chat.
- `messages: Tables<"messages">[]` - Represents an array of messages in the form of tables.

## Imports

- `{ Tables } from "@/supabase/types"` - Imports the `Tables` type from the `types` module in the `supabase` directory.
- `{ ChatMessage, LLMID } from "."` - Imports the `ChatMessage` and `LLMID` types from the current directory.