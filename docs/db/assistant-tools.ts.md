---
source: db/assistant-tools.ts
generated: 2025-06-08T22:19:45.780Z
tags: []
hash: 9ed7350db56b642fb7cc925f95688ff2f8e7965d1b4d960d12ec5b481cfd300a
---

# Assistant Tools Database Operations

This file `assistant-tools.ts` contains functions for performing operations on the `assistant_tools` table in the database. The operations include fetching, creating, and deleting assistant tools.

## Dependencies

The file imports the `supabase` client from the `browser-client` file in the `lib/supabase` directory. It also imports the `TablesInsert` type from the `types` file in the `supabase` directory.

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert } from "@/supabase/types"
```

## Functions

### getAssistantToolsByAssistantId

This function retrieves the tools of an assistant by the assistant's ID. It throws an error if the assistant's tools are not found.

```ts
export const getAssistantToolsByAssistantId = async (assistantId: string) => {
  const { data: assistantTools, error } = await supabase
    .from("assistants")
    .select(
      `
        id, 
        name, 
        tools (*)
      `
    )
    .eq("id", assistantId)
    .single()

  if (!assistantTools) {
    throw new Error(error.message)
  }

  return assistantTools
}
```

### createAssistantTool

This function creates a new assistant tool in the `assistant_tools` table. It throws an error if the tool cannot be created.

```ts
export const createAssistantTool = async (
  assistantTool: TablesInsert<"assistant_tools">
) => {
  const { data: createdAssistantTool, error } = await supabase
    .from("assistant_tools")
    .insert(assistantTool)
    .select("*")

  if (!createdAssistantTool) {
    throw new Error(error.message)
  }

  return createdAssistantTool
}
```

### createAssistantTools

This function creates multiple assistant tools in the `assistant_tools` table. It throws an error if the tools cannot be created.

```ts
export const createAssistantTools = async (
  assistantTools: TablesInsert<"assistant_tools">[]
) => {
  const { data: createdAssistantTools, error } = await supabase
    .from("assistant_tools")
    .insert(assistantTools)
    .select("*")

  if (!createdAssistantTools) {
    throw new Error(error.message)
  }

  return createdAssistantTools
}
```

### deleteAssistantTool

This function deletes an assistant tool from the `assistant_tools` table using the assistant's ID and the tool's ID. It throws an error if the tool cannot be deleted.

```ts
export const deleteAssistantTool = async (
  assistantId: string,
  toolId: string
) => {
  const { error } = await supabase
    .from("assistant_tools")
    .delete()
    .eq("assistant_id", assistantId)
    .eq("tool_id", toolId)

  if (error) throw new Error(error.message)

  return true
}
```

## Error Handling

Each function in this file uses error handling to ensure that appropriate error messages are thrown when an operation fails. This is done using the `throw new Error(error.message)` statement.