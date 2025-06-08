# Collection Module

This module provides functions to interact with the `collections` and `collection_workspaces` tables in the database using the Supabase client.

## Functions

### `getCollectionById(collectionId: string)`

Fetches a single collection by its `id` from the `collections` table. If the collection is not found, it throws an error.

### `getCollectionWorkspacesByWorkspaceId(workspaceId: string)`

Fetches a single workspace by its `id` from the `workspaces` table along with its associated collections. If the workspace is not found, it throws an error.

### `getCollectionWorkspacesByCollectionId(collectionId: string)`

Fetches a single collection by its `id` from the `collections` table along with its associated workspaces. If the collection is not found, it throws an error.

### `createCollection(collection: TablesInsert<"collections">, workspace_id: string)`

Creates a new collection in the `collections` table and associates it with a workspace in the `collection_workspaces` table. If there's an error during the creation, it throws an error.

### `createCollections(collections: TablesInsert<"collections">[], workspace_id: string)`

Creates multiple new collections in the `collections` table and associates them with a workspace in the `collection_workspaces` table. If there's an error during the creation, it throws an error.

### `createCollectionWorkspace(item: { user_id: string, collection_id: string, workspace_id: string })`

Creates a new association between a collection and a workspace in the `collection_workspaces` table. If there's an error during the creation, it throws an error.

### `createCollectionWorkspaces(items: { user_id: string; collection_id: string; workspace_id: string }[])`

Creates multiple new associations between collections and a workspace in the `collection_workspaces` table. If there's an error during the creation, it throws an error.

### `updateCollection(collectionId: string, collection: TablesUpdate<"collections">)`

Updates a collection in the `collections` table by its `id`. If there's an error during the update, it throws an error.

### `deleteCollection(collectionId: string)`

Deletes a collection from the `collections` table by its `id`. If there's an error during the deletion, it throws an error.

### `deleteCollectionWorkspace(collectionId: string, workspaceId: string)`

Deletes an association between a collection and a workspace from the `collection_workspaces` table by their `id`s. If there's an error during the deletion, it throws an error.