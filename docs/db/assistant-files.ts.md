---
source: db/assistant-files.ts
generated: 2025-06-08T22:19:29.464Z
tags: []
hash: ba4b051a4c044388e3b736d3ddab8136026133f0518c46ce93824c04d731833a
---

# Assistant Files Database Operations

This document explains the purpose and logic of the TypeScript file located at `/Users/garymason/chatbot-ui/db/assistant-files.ts`. This file contains functions for performing CRUD (Create, Read, Update, Delete) operations on the `assistant_files` table in the database using the Supabase client.

## Code Summary

The file exports four functions:

1. `getAssistantFilesByAssistantId`: Fetches assistant files based on the assistant's ID.
2. `createAssistantFile`: Creates a new assistant file record.
3. `createAssistantFiles`: Creates multiple assistant file records.
4. `deleteAssistantFile`: Deletes an assistant file record.

## Code Details

### Import Statements

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert } from "@/supabase/types"
```

These lines import the Supabase client and the `TablesInsert` type from the respective modules.

### Get Assistant Files by Assistant ID

```ts
export const getAssistantFilesByAssistantId = async (assistantId: string) => {
  const { data: assistantFiles, error } = await supabase
    .from("assistants")
    .select(
      `
        id, 
        name, 
        files (*)
      `
    )
    .eq("id", assistantId)
    .single()

  if (!assistantFiles) {
    throw new Error(error.message)
  }

  return assistantFiles
}
```

This function fetches assistant files based on the assistant's ID. It queries the `assistants` table, selects the `id`, `name`, and `files` fields, and filters the results where the `id` equals the provided `assistantId`. If no data is returned or an error occurs, it throws an error.

### Create Assistant File

```ts
export const createAssistantFile = async (
  assistantFile: TablesInsert<"assistant_files">
) => {
  const { data: createdAssistantFile, error } = await supabase
    .from("assistant_files")
    .insert(assistantFile)
    .select("*")

  if (!createdAssistantFile) {
    throw new Error(error.message)
  }

  return createdAssistantFile
}
```

This function creates a new assistant file record in the `assistant_files` table. It inserts the provided `assistantFile` object and selects all fields of the newly created record. If no data is returned or an error occurs, it throws an error.

### Create Assistant Files

```ts
export const createAssistantFiles = async (
  assistantFiles: TablesInsert<"assistant_files">[]
) => {
  const { data: createdAssistantFiles, error } = await supabase
    .from("assistant_files")
    .insert(assistantFiles)
    .select("*")

  if (!createdAssistantFiles) {
    throw new Error(error.message)
  }

  return createdAssistantFiles
}
```

This function creates multiple assistant file records in the `assistant_files` table. It inserts the provided `assistantFiles` array and selects all fields of the newly created records. If no data is returned or an error occurs, it throws an error.

### Delete Assistant File

```ts
export const deleteAssistantFile = async (
  assistantId: string,
  fileId: string
) => {
  const { error } = await supabase
    .from("assistant_files")
    .delete()
    .eq("assistant_id", assistantId)
    .eq("file_id", fileId)

  if (error) throw new Error(error.message)

  return true
}
```

This function deletes an assistant file record from the `assistant_files` table. It deletes the record where the `assistant_id` equals the provided `assistantId` and the `file_id` equals the provided `fileId`. If an error occurs, it throws an error.