---
source: db/prompts.ts
generated: 2025-06-08T22:26:28.011Z
tags: []
hash: d03f84274e8aeb07cc0bc3429d73edfc6d0c422486c7fc3889475adcc8f9e1cf
---

# Chatbot UI Database Operations

This TypeScript file, located at `/Users/garymason/chatbot-ui/db/prompts.ts`, contains functions for interacting with the database of a chatbot user interface. The file uses the Supabase client to perform CRUD (Create, Read, Update, Delete) operations on the 'prompts' and 'workspaces' tables in the database.

## Dependencies

The file imports the Supabase client and two types, `TablesInsert` and `TablesUpdate`, from the project's own type definitions.

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
```

## Functions

### getPromptById

This function retrieves a prompt from the 'prompts' table by its ID.

```ts
export const getPromptById = async (promptId: string) => {
  //...
}
```

### getPromptWorkspacesByWorkspaceId

This function retrieves a workspace and its associated prompts from the 'workspaces' table by the workspace's ID.

```ts
export const getPromptWorkspacesByWorkspaceId = async (workspaceId: string) => {
  //...
}
```

### getPromptWorkspacesByPromptId

This function retrieves a prompt and its associated workspaces from the 'prompts' table by the prompt's ID.

```ts
export const getPromptWorkspacesByPromptId = async (promptId: string) => {
  //...
}
```

### createPrompt

This function creates a new prompt in the 'prompts' table and associates it with a workspace in the 'prompt_workspaces' table.

```ts
export const createPrompt = async (
  prompt: TablesInsert<"prompts">,
  workspace_id: string
) => {
  //...
}
```

### createPrompts

This function creates multiple new prompts in the 'prompts' table and associates them with a workspace in the 'prompt_workspaces' table.

```ts
export const createPrompts = async (
  prompts: TablesInsert<"prompts">[],
  workspace_id: string
) => {
  //...
}
```

### createPromptWorkspace

This function creates a new association between a prompt and a workspace in the 'prompt_workspaces' table.

```ts
export const createPromptWorkspace = async (item: {
  user_id: string
  prompt_id: string
  workspace_id: string
}) => {
  //...
}
```

### createPromptWorkspaces

This function creates multiple new associations between prompts and a workspace in the 'prompt_workspaces' table.

```ts
export const createPromptWorkspaces = async (
  items: { user_id: string; prompt_id: string; workspace_id: string }[]
) => {
  //...
}
```

### updatePrompt

This function updates a prompt in the 'prompts' table by its ID.

```ts
export const updatePrompt = async (
  promptId: string,
  prompt: TablesUpdate<"prompts">
) => {
  //...
}
```

### deletePrompt

This function deletes a prompt from the 'prompts' table by its ID.

```ts
export const deletePrompt = async (promptId: string) => {
  //...
}
```

### deletePromptWorkspace

This function deletes an association between a prompt and a workspace from the 'prompt_workspaces' table by their IDs.

```ts
export const deletePromptWorkspace = async (
  promptId: string,
  workspaceId: string
) => {
  //...
}
```

Each function uses the Supabase client to perform a database operation, checks for any errors, and returns the result. If an error occurs, the function throws an Error with the error message from Supabase.