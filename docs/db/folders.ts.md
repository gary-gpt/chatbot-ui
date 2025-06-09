---
source: db/folders.ts
generated: 2025-06-08T22:23:00.364Z
tags: []
hash: e3c83662507d41cfbe11e97d4d5d80330ebda36fef4991d7adda69eef0aafffd
---

# Folders.ts Documentation

This is a TypeScript file that provides CRUD (Create, Read, Update, Delete) operations for the 'folders' table in a Supabase database. The file is located at `/Users/garymason/chatbot-ui/db/folders.ts`.

## Import Statements

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
```

The file imports the `supabase` object from the `browser-client` file in the `supabase` directory. This object is used to interact with the Supabase database. It also imports `TablesInsert` and `TablesUpdate` types from the `types` file in the `supabase` directory. These types are used to ensure the correct data types are passed to the database operations.

## getFoldersByWorkspaceId Function

```ts
export const getFoldersByWorkspaceId = async (workspaceId: string) => {
  const { data: folders, error } = await supabase
    .from("folders")
    .select("*")
    .eq("workspace_id", workspaceId)

  if (!folders) {
    throw new Error(error.message)
  }

  return folders
}
```

This function retrieves all folders that belong to a specific workspace. It takes a `workspaceId` as a parameter and returns a promise that resolves to an array of folders. If no folders are found or an error occurs, it throws an error.

## createFolder Function

```ts
export const createFolder = async (folder: TablesInsert<"folders">) => {
  const { data: createdFolder, error } = await supabase
    .from("folders")
    .insert([folder])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return createdFolder
}
```

This function creates a new folder in the database. It takes a `folder` object as a parameter and returns a promise that resolves to the created folder. If an error occurs during the creation process, it throws an error.

## updateFolder Function

```ts
export const updateFolder = async (
  folderId: string,
  folder: TablesUpdate<"folders">
) => {
  const { data: updatedFolder, error } = await supabase
    .from("folders")
    .update(folder)
    .eq("id", folderId)
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return updatedFolder
}
```

This function updates a specific folder in the database. It takes a `folderId` and a `folder` object as parameters and returns a promise that resolves to the updated folder. If an error occurs during the update process, it throws an error.

## deleteFolder Function

```ts
export const deleteFolder = async (folderId: string) => {
  const { error } = await supabase.from("folders").delete().eq("id", folderId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
```

This function deletes a specific folder from the database. It takes a `folderId` as a parameter and returns a promise that resolves to `true` if the deletion was successful. If an error occurs during the deletion process, it throws an error.