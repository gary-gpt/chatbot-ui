---
source: db/collections.ts
generated: 2025-06-08T22:21:59.694Z
tags: []
hash: 02d2a98d5c6524141997b4989eae2d851a5ad8bab40bd121f9984d54c37e667f
---

# Collections.ts Documentation

This TypeScript file, `collections.ts`, provides a set of functions for interacting with the `collections` and `workspaces` tables in a Supabase database. The functions include operations for fetching, creating, updating, and deleting collections and workspaces.

## Import Statements

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
```

The file begins by importing the `supabase` client from a local file, which is used to interact with the Supabase database. It also imports two types, `TablesInsert` and `TablesUpdate`, which are used in the function signatures to denote the shape of the data being inserted or updated in the database.

## Fetching Functions

### getCollectionById

```ts
export const getCollectionById = async (collectionId: string) => {
  //...
}
```

This function fetches a single collection from the `collections` table by its `id`.

### getCollectionWorkspacesByWorkspaceId

```ts
export const getCollectionWorkspacesByWorkspaceId = async (
  workspaceId: string
) => {
  //...
}
```

This function fetches a single workspace from the `workspaces` table by its `id`, including all associated collections.

### getCollectionWorkspacesByCollectionId

```ts
export const getCollectionWorkspacesByCollectionId = async (
  collectionId: string
) => {
  //...
}
```

This function fetches a single collection from the `collections` table by its `id`, including all associated workspaces.

## Creation Functions

### createCollection

```ts
export const createCollection = async (
  collection: TablesInsert<"collections">,
  workspace_id: string
) => {
  //...
}
```

This function creates a new collection in the `collections` table and associates it with a workspace.

### createCollections

```ts
export const createCollections = async (
  collections: TablesInsert<"collections">[],
  workspace_id: string
) => {
  //...
}
```

This function creates multiple new collections in the `collections` table and associates them with a workspace.

### createCollectionWorkspace

```ts
export const createCollectionWorkspace = async (item: {
  user_id: string
  collection_id: string
  workspace_id: string
}) => {
  //...
}
```

This function creates a new association between a collection and a workspace in the `collection_workspaces` table.

### createCollectionWorkspaces

```ts
export const createCollectionWorkspaces = async (
  items: { user_id: string; collection_id: string; workspace_id: string }[]
) => {
  //...
}
```

This function creates multiple new associations between collections and workspaces in the `collection_workspaces` table.

## Update Function

### updateCollection

```ts
export const updateCollection = async (
  collectionId: string,
  collection: TablesUpdate<"collections">
) => {
  //...
}
```

This function updates a collection in the `collections` table by its `id`.

## Deletion Functions

### deleteCollection

```ts
export const deleteCollection = async (collectionId: string) => {
  //...
}
```

This function deletes a collection from the `collections` table by its `id`.

### deleteCollectionWorkspace

```ts
export const deleteCollectionWorkspace = async (
  collectionId: string,
  workspaceId: string
) => {
  //...
}
```

This function deletes an association between a collection and a workspace from the `collection_workspaces` table by their `id`s.