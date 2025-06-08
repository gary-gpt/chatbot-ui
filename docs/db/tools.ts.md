# Tool Management Module

This module provides functions for managing tools and their associated workspaces in a Supabase database.

## Functions

### `getToolById(toolId: string)`

Fetches a tool from the `tools` table by its ID.

- `toolId`: The ID of the tool to fetch.

Returns the tool data if found, throws an error otherwise.

---

### `getToolWorkspacesByWorkspaceId(workspaceId: string)`

Fetches a workspace and its associated tools from the `workspaces` table by workspace ID.

- `workspaceId`: The ID of the workspace to fetch.

Returns the workspace data if found, throws an error otherwise.

---

### `getToolWorkspacesByToolId(toolId: string)`

Fetches a tool and its associated workspaces from the `tools` table by tool ID.

- `toolId`: The ID of the tool to fetch.

Returns the tool data if found, throws an error otherwise.

---

### `createTool(tool: TablesInsert<"tools">, workspace_id: string)`

Creates a new tool in the `tools` table and associates it with a workspace.

- `tool`: The data for the new tool.
- `workspace_id`: The ID of the workspace to associate with the new tool.

Returns the created tool data, throws an error if creation fails.

---

### `createTools(tools: TablesInsert<"tools">[], workspace_id: string)`

Creates multiple new tools in the `tools` table and associates them with a workspace.

- `tools`: An array of data for the new tools.
- `workspace_id`: The ID of the workspace to associate with the new tools.

Returns the created tools data, throws an error if creation fails.

---

### `createToolWorkspace(item: { user_id: string, tool_id: string, workspace_id: string })`

Creates a new association between a tool and a workspace in the `tool_workspaces` table.

- `item`: The data for the new association, including the user ID, tool ID, and workspace ID.

Returns the created association data, throws an error if creation fails.

---

### `createToolWorkspaces(items: { user_id: string; tool_id: string; workspace_id: string }[])`

Creates multiple new associations between tools and a workspace in the `tool_workspaces` table.

- `items`: An array of data for the new associations, each including the user ID, tool ID, and workspace ID.

Returns the created associations data, throws an error if creation fails.

---

### `updateTool(toolId: string, tool: TablesUpdate<"tools">)`

Updates a tool in the `tools` table.

- `toolId`: The ID of the tool to update.
- `tool`: The new data for the tool.

Returns the updated tool data, throws an error if update fails.

---

### `deleteTool(toolId: string)`

Deletes a tool from the `tools` table.

- `toolId`: The ID of the tool to delete.

Returns `true` if deletion is successful, throws an error otherwise.

---

### `deleteToolWorkspace(toolId: string, workspaceId: string)`

Deletes an association between a tool and a workspace from the `tool_workspaces` table.

- `toolId`: The ID of the tool in the association to delete.
- `workspaceId`: The ID of the workspace in the association to delete.

Returns `true` if deletion is successful, throws an error otherwise.