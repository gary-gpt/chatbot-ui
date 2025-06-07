**📄 Source File:** `/db/tools.ts`  
**🕒 Generated:** 2025-06-07 14:18:51 UTC  
**🤖 Model:** gpt-4

---

# Source File Documentation

## Filename: `tools.ts`

This TypeScript file is a module that provides functions to interact with a database using the Supabase client. The database contains tables for `tools` and `tool_workspaces`. The `tools` table stores information about different tools, and the `tool_workspaces` table links tools to workspaces.

### Exports

This file exports several functions for retrieving, creating, updating, and deleting records in the `tools` and `tool_workspaces` tables.

#### `getToolById(toolId: string)`

This function retrieves a tool from the `tools` table by its `id`. If the tool is not found, it throws an error.

#### `getToolWorkspacesByWorkspaceId(workspaceId: string)`

This function retrieves a workspace from the `workspaces` table by its `id`, including all the tools associated with that workspace. If the workspace is not found, it throws an error.

#### `getToolWorkspacesByToolId(toolId: string)`

This function retrieves a tool from the `tools` table by its `id`, including all the workspaces associated with that tool. If the tool is not found, it throws an error.

#### `createTool(tool: TablesInsert<"tools">, workspace_id: string)`

This function creates a new tool in the `tools` table and associates it with a workspace in the `tool_workspaces` table. It returns the created tool.

#### `createTools(tools: TablesInsert<"tools">[], workspace_id: string)`

This function creates multiple new tools in the `tools` table and associates them with a workspace in the `tool_workspaces` table. It returns the created tools.

#### `createToolWorkspace(item: { user_id: string, tool_id: string, workspace_id: string })`

This function creates a new record in the `tool_workspaces` table, linking a tool to a workspace. It returns the created record.

#### `createToolWorkspaces(items: { user_id: string; tool_id: string; workspace_id: string }[])`

This function creates multiple new records in the `tool_workspaces` table, linking tools to a workspace. It returns the created records.

#### `updateTool(toolId: string, tool: TablesUpdate<"tools">)`

This function updates a tool in the `tools` table by its `id`. It returns the updated tool.

#### `deleteTool(toolId: string)`

This function deletes a tool from the `tools` table by its `id`. It returns `true` if the deletion is successful.

#### `deleteToolWorkspace(toolId: string, workspaceId: string)`

This function deletes a record from the `tool_workspaces` table by the `tool_id` and `workspace_id`. It returns `true` if the deletion is successful.

### Interesting Structure or Nuance

The functions in this file use the Supabase client to interact with the database. They make use of the `from`, `select`, `eq`, `insert`, `update`, and `delete` methods provided by the Supabase client to construct and execute SQL queries.

Error handling is done consistently across all functions: if an error occurs during the execution of a query, an Error is thrown with the error message from the Supabase client.

The `createTool` and `createTools` functions also call the `createToolWorkspace` and `createToolWorkspaces` functions respectively to create records in the `tool_workspaces` table after creating tools in the `tools` table. This shows that the creation of a tool and its association with a workspace are treated as a single operation.