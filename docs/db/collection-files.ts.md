---
source: db/collection-files.ts
generated: 2025-06-08T22:21:35.794Z
tags: []
hash: 55fdccff384ff9d18b1654231dcbe7ac51006182b988de3d8e50dd9239bb3674
---

# Collection Files Module

This module, located at `/Users/garymason/chatbot-ui/db/collection-files.ts`, provides functions for interacting with the `collection_files` table in a Supabase database. The functions allow for fetching, creating, and deleting collection files.

## Imports

The module imports the Supabase client and a type used for inserting into tables.

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert } from "@/supabase/types"
```

## Functions

### getCollectionFilesByCollectionId

This function retrieves a collection file by its collection ID. It returns an object containing the collection file's ID, name, and associated files.

```ts
export const getCollectionFilesByCollectionId = async (
  collectionId: string
) => {
  const { data: collectionFiles, error } = await supabase
    .from("collections")
    .select(
      `
        id, 
        name, 
        files ( id, name, type )
      `
    )
    .eq("id", collectionId)
    .single()

  if (!collectionFiles) {
    throw new Error(error.message)
  }

  return collectionFiles
}
```

### createCollectionFile

This function creates a new collection file. It takes an object of type `TablesInsert<"collection_files">` as an argument and returns the created collection file.

```ts
export const createCollectionFile = async (
  collectionFile: TablesInsert<"collection_files">
) => {
  const { data: createdCollectionFile, error } = await supabase
    .from("collection_files")
    .insert(collectionFile)
    .select("*")

  if (!createdCollectionFile) {
    throw new Error(error.message)
  }

  return createdCollectionFile
}
```

### createCollectionFiles

This function creates multiple new collection files. It takes an array of objects of type `TablesInsert<"collection_files">` as an argument and returns the created collection files.

```ts
export const createCollectionFiles = async (
  collectionFiles: TablesInsert<"collection_files">[]
) => {
  const { data: createdCollectionFiles, error } = await supabase
    .from("collection_files")
    .insert(collectionFiles)
    .select("*")

  if (!createdCollectionFiles) {
    throw new Error(error.message)
  }

  return createdCollectionFiles
}
```

### deleteCollectionFile

This function deletes a collection file. It takes a collection ID and a file ID as arguments. If the deletion is successful, it returns `true`.

```ts
export const deleteCollectionFile = async (
  collectionId: string,
  fileId: string
) => {
  const { error } = await supabase
    .from("collection_files")
    .delete()
    .eq("collection_id", collectionId)
    .eq("file_id", fileId)

  if (error) throw new Error(error.message)

  return true
}
```

## Error Handling

Each function in this module includes error handling. If an operation fails, the function throws an error with a message from the Supabase client.