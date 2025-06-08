---
source: db/workspaces.ts
generated: '2025-06-08T13:21:01.630Z'
tags: []
hash: 7a83141a75b8d526d979148407442b5b1de185a9e46fe1cb8ddbda9bef98d413
---
# Workspaces Module

This module provides a set of functions to interact with the `workspaces` table in the database using the Supabase client.

## Functions

### `getHomeWorkspaceByUserId(userId: string)`

This function retrieves the home workspace of a user by their user ID.

#### Parameters

- `userId` (string): The ID of the user.

#### Returns

- The ID of the home workspace of the user.

#### Errors

- Throws an error if the home workspace does not exist.

### `getWorkspaceById(workspaceId: string)`

This function retrieves a workspace by its ID.

#### Parameters

- `workspaceId` (string): The ID of the workspace.

#### Returns

- The workspace object.

#### Errors

- Throws an error if the workspace does not exist.

### `getWorkspacesByUserId(userId: string)`

This function retrieves all workspaces of a user by their user ID, ordered by creation date in descending order.

#### Parameters

- `userId` (string): The ID of the user.

#### Returns

- An array of workspace objects.

#### Errors

- Throws an error if no workspaces exist for the user.

### `createWorkspace(workspace: TablesInsert<"workspaces">)`

This function creates a new workspace.

#### Parameters

- `workspace` (TablesInsert<"workspaces">): The workspace object to be created.

#### Returns

- The created workspace object.

#### Errors

- Throws an error if the workspace could not be created.

### `updateWorkspace(workspaceId: string, workspace: TablesUpdate<"workspaces">)`

This function updates a workspace.

#### Parameters

- `workspaceId` (string): The ID of the workspace to be updated.
- `workspace` (TablesUpdate<"workspaces">): The workspace object with updated values.

#### Returns

- The updated workspace object.

#### Errors

- Throws an error if the workspace could not be updated.

### `deleteWorkspace(workspaceId: string)`

This function deletes a workspace.

#### Parameters

- `workspaceId` (string): The ID of the workspace to be deleted.

#### Returns

- `true` if the workspace was successfully deleted.

#### Errors

- Throws an error if the workspace could not be deleted.
