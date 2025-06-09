---
source: db/assistant-collections.ts
generated: 2025-06-08T22:19:01.027Z
tags: []
hash: ab6942d401c3995f2ee5ef212b549e2b6e3fde7f15a263f0ad36f35dc18a581b
---

# Assistant Collections Module Documentation

This document describes the functionality and logic of the `assistant-collections.ts` module located at `/Users/garymason/chatbot-ui/db/`.

This module provides functions for interacting with the `assistants` and `assistant_collections` tables in a Supabase database. The functions allow for fetching, creating, and deleting assistant collections.

## Imports

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert } from "@/supabase/types"
```

The module imports the `supabase` client from the `browser-client` file in the `lib/supabase` directory. This client is used to interact with the Supabase database.

The `TablesInsert` type from the `types` file in the `supabase` directory is also imported. This type is used for type checking the assistant collections that are inserted into the database.

## Functions

### `getAssistantCollectionsByAssistantId`

```ts
export const getAssistantCollectionsByAssistantId = async (
  assistantId: string
) => {
  const { data: assistantCollections, error } = await supabase
    .from("assistants")
    .select(
      `
        id, 
        name, 
        collections (*)
      `
    )
    .eq("id", assistantId)
    .single()

  if (!assistantCollections) {
    throw new Error(error.message)
  }

  return assistantCollections
}
```

This function fetches the assistant collections for a specific assistant from the `assistants` table. It takes an `assistantId` as a parameter and returns the assistant collections that match this `assistantId`. If no collections are found, it throws an error.

### `createAssistantCollection`

```ts
export const createAssistantCollection = async (
  assistantCollection: TablesInsert<"assistant_collections">
) => {
  const { data: createdAssistantCollection, error } = await supabase
    .from("assistant_collections")
    .insert(assistantCollection)
    .select("*")

  if (!createdAssistantCollection) {
    throw new Error(error.message)
  }

  return createdAssistantCollection
}
```

This function inserts a new assistant collection into the `assistant_collections` table. It takes an `assistantCollection` object as a parameter and returns the created assistant collection. If the insertion fails, it throws an error.

### `createAssistantCollections`

```ts
export const createAssistantCollections = async (
  assistantCollections: TablesInsert<"assistant_collections">[]
) => {
  const { data: createdAssistantCollections, error } = await supabase
    .from("assistant_collections")
    .insert(assistantCollections)
    .select("*")

  if (!createdAssistantCollections) {
    throw new Error(error.message)
  }

  return createdAssistantCollections
}
```

This function inserts multiple assistant collections into the `assistant_collections` table. It takes an array of `assistantCollections` objects as a parameter and returns the created assistant collections. If the insertion fails, it throws an error.

### `deleteAssistantCollection`

```ts
export const deleteAssistantCollection = async (
  assistantId: string,
  collectionId: string
) => {
  const { error } = await supabase
    .from("assistant_collections")
    .delete()
    .eq("assistant_id", assistantId)
    .eq("collection_id", collectionId)

  if (error) throw new Error(error.message)

  return true
}
```

This function deletes an assistant collection from the `assistant_collections` table. It takes an `assistantId` and a `collectionId` as parameters. If the deletion is successful, it returns `true`. If the deletion fails, it throws an error.