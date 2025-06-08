---
source: db/assistant-collections.ts
generated: '2025-06-08T13:21:01.627Z'
tags: []
hash: 0c7b324dff9af5e47fefb52656ca34f9e5e93788ac02f2ee364e7c6fdf8aa1c1
---
# Assistant Collections Module Documentation

This module provides functions to interact with the `assistants` and `assistant_collections` tables in the Supabase database. 

## Functions

### `getAssistantCollectionsByAssistantId(assistantId: string)`

This function retrieves the collections associated with a specific assistant from the `assistants` table. 

**Parameters:**

- `assistantId` (string): The ID of the assistant.

**Returns:**

- An object containing the assistant's collections. If no collections are found, an error is thrown.

### `createAssistantCollection(assistantCollection: TablesInsert<"assistant_collections">)`

This function creates a new assistant collection in the `assistant_collections` table.

**Parameters:**

- `assistantCollection` (TablesInsert<"assistant_collections">): The assistant collection object to be inserted.

**Returns:**

- An object containing the created assistant collection. If the creation fails, an error is thrown.

### `createAssistantCollections(assistantCollections: TablesInsert<"assistant_collections">[])`

This function creates multiple new assistant collections in the `assistant_collections` table.

**Parameters:**

- `assistantCollections` (TablesInsert<"assistant_collections">[]): An array of assistant collection objects to be inserted.

**Returns:**

- An array containing the created assistant collections. If the creation fails, an error is thrown.

### `deleteAssistantCollection(assistantId: string, collectionId: string)`

This function deletes a specific assistant collection from the `assistant_collections` table.

**Parameters:**

- `assistantId` (string): The ID of the assistant.
- `collectionId` (string): The ID of the collection.

**Returns:**

- `true` if the deletion is successful. If the deletion fails, an error is thrown.
