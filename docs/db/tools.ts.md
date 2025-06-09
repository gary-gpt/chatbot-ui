---
source: db/tools.ts
generated: 2025-06-08T22:28:15.533Z
tags: []
hash: 3309d96c4c8fb6609e86e1b253282995a2ae5e516358283dde6c13d6ec076507
---

# Tools Module Documentation

This module, located at `/Users/garymason/chatbot-ui/db/tools.ts`, contains several functions for interacting with the `tools` and `tool_workspaces` tables in a Supabase database. These functions include methods for creating, reading, updating, and deleting tools and tool workspaces.

## Import Statements

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
```

The module imports the Supabase client from a local file and two types, `TablesInsert` and `TablesUpdate`, from another local file.

## Function: getToolById

```ts
export const getToolById = async (toolId: string) => {
  //...
}
```

This function retrieves a tool by its ID from the `tools` table. If the tool is not found, it throws an error.

## Function: getToolWorkspacesByWorkspaceId

```ts
export const getToolWorkspacesByWorkspaceId = async (workspaceId: string) => {
  //...
}
```

This function retrieves a workspace and its associated tools by the workspace's ID from the `workspaces` and `tools` tables. If the workspace is not found, it throws an error.

## Function: getToolWorkspacesByToolId

```ts
export const getToolWorkspacesByToolId = async (toolId: string) => {
  //...
}
```

This function retrieves a tool and its associated workspaces by the tool's ID from the `tools` and `workspaces` tables. If the tool is not found, it throws an error.

## Function: createTool

```ts
export const createTool = async (
  tool: TablesInsert<"tools">,
  workspace_id: string
) => {
  //...
}
```

This function creates a new tool in the `tools` table and associates it with a workspace in the `tool_workspaces` table. If there is an error during creation, it throws an error.

## Function: createTools

```ts
export const createTools = async (
  tools: TablesInsert<"tools">[],
  workspace_id: string
) => {
  //...
}
```

This function creates multiple new tools in the `tools` table and associates them with a workspace in the `tool_workspaces` table. If there is an error during creation, it throws an error.

## Function: createToolWorkspace

```ts
export const createToolWorkspace = async (item: {
  user_id: string
  tool_id: string
  workspace_id: string
}) => {
  //...
}
```

This function creates a new association between a tool and a workspace in the `tool_workspaces` table. If there is an error during creation, it throws an error.

## Function: createToolWorkspaces

```ts
export const createToolWorkspaces = async (
  items: { user_id: string; tool_id: string; workspace_id: string }[]
) => {
  //...
}
```

This function creates multiple new associations between tools and workspaces in the `tool_workspaces` table. If there is an error during creation, it throws an error.

## Function: updateTool

```ts
export const updateTool = async (
  toolId: string,
  tool: TablesUpdate<"tools">
) => {
  //...
}
```

This function updates a tool in the `tools` table. If there is an error during the update, it throws an error.

## Function: deleteTool

```ts
export const deleteTool = async (toolId: string) => {
  //...
}
```

This function deletes a tool from the `tools` table. If there is an error during deletion, it throws an error.

## Function: deleteToolWorkspace

```ts
export const deleteToolWorkspace = async (
  toolId: string,
  workspaceId: string
) => {
  //...
}
```

This function deletes an association between a tool and a workspace from the `tool_workspaces` table. If there is an error during deletion, it throws an error.