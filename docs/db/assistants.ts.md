---
source: db/assistants.ts
generated: '2025-06-08T13:21:01.628Z'
tags: []
hash: f0197d8b302bda9d3a8605273228fe22b5026311c7bf8278dad5f71ee0704627
---
# Assistant Module

This module provides functions to interact with `assistants` and `assistant_workspaces` tables in the database using Supabase client.

## Functions

### `getAssistantById(assistantId: string)`

Fetches a single assistant by ID from the `assistants` table.

### `getAssistantWorkspacesByWorkspaceId(workspaceId: string)`

Fetches a single workspace along with its associated assistants by workspace ID from the `workspaces` table.

### `getAssistantWorkspacesByAssistantId(assistantId: string)`

Fetches a single assistant along with its associated workspaces by assistant ID from the `assistants` table.

### `createAssistant(assistant: TablesInsert<"assistants">, workspace_id: string)`

Creates a new assistant in the `assistants` table and associates it with a workspace in the `assistant_workspaces` table.

### `createAssistants(assistants: TablesInsert<"assistants">[], workspace_id: string)`

Creates multiple new assistants in the `assistants` table and associates them with a workspace in the `assistant_workspaces` table.

### `createAssistantWorkspace(item: { user_id: string, assistant_id: string, workspace_id: string })`

Creates a new association between an assistant and a workspace in the `assistant_workspaces` table.

### `createAssistantWorkspaces(items: { user_id: string; assistant_id: string; workspace_id: string }[])`

Creates multiple new associations between assistants and a workspace in the `assistant_workspaces` table.

### `updateAssistant(assistantId: string, assistant: TablesUpdate<"assistants">)`

Updates an existing assistant in the `assistants` table.

### `deleteAssistant(assistantId: string)`

Deletes an assistant from the `assistants` table.

### `deleteAssistantWorkspace(assistantId: string, workspaceId: string)`

Deletes an association between an assistant and a workspace from the `assistant_workspaces` table.

## Errors

All functions in this module throw an `Error` if the Supabase client returns an error. The error message will be the one returned by the Supabase client.
