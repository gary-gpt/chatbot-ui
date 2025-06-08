# Documentation

This file provides a set of functions for interacting with `prompts` and `workspaces` tables in a Supabase database.

## Functions

### getPromptById(promptId: string)

This function retrieves a prompt by its ID. It throws an error if the prompt does not exist.

### getPromptWorkspacesByWorkspaceId(workspaceId: string)

This function retrieves a workspace by its ID, including all associated prompts. It throws an error if the workspace does not exist.

### getPromptWorkspacesByPromptId(promptId: string)

This function retrieves a prompt by its ID, including all associated workspaces. It throws an error if the prompt does not exist.

### createPrompt(prompt: TablesInsert<"prompts">, workspace_id: string)

This function creates a new prompt and associates it with a workspace. It throws an error if the operation fails.

### createPrompts(prompts: TablesInsert<"prompts">[], workspace_id: string)

This function creates multiple new prompts and associates them with a workspace. It throws an error if the operation fails.

### createPromptWorkspace(item: { user_id: string, prompt_id: string, workspace_id: string })

This function creates a new association between a prompt and a workspace. It throws an error if the operation fails.

### createPromptWorkspaces(items: { user_id: string; prompt_id: string; workspace_id: string }[])

This function creates multiple new associations between prompts and workspaces. It throws an error if the operation fails.

### updatePrompt(promptId: string, prompt: TablesUpdate<"prompts">)

This function updates a prompt by its ID. It throws an error if the operation fails.

### deletePrompt(promptId: string)

This function deletes a prompt by its ID. It throws an error if the operation fails.

### deletePromptWorkspace(promptId: string, workspaceId: string)

This function deletes an association between a prompt and a workspace. It throws an error if the operation fails.

## Error Handling

All functions in this file use error-first callback style. If an operation fails, an `Error` object will be thrown with a message describing the error.