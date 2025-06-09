---
source: db/workspaces.ts
generated: 2025-06-08T22:28:39.800Z
tags: []
hash: 267e05741188deed5af9df3352f69ff14ea2077cb07d31e056dc073485af676c
---

# Workspaces.ts Documentation

This TypeScript file (`workspaces.ts`) contains several functions for interacting with the `workspaces` table in a Supabase database. These functions include getting workspaces by user or by workspace ID, creating, updating, and deleting workspaces.

## Dependencies

This file imports the `supabase` client from `@/lib/supabase/browser-client` and two types, `TablesInsert` and `TablesUpdate`, from `@/supabase/types`.

## Functions

### getHomeWorkspaceByUserId

This function retrieves the home workspace of a user, given the user's ID.

```ts
export const getHomeWorkspaceByUserId = async (userId: string) => {
  // ...
}
```

It queries the `workspaces` table for a workspace where the `user_id` matches the provided `userId` and `is_home` is `true`. If no such workspace is found, it throws an error. If a workspace is found, it returns the workspace's ID.

### getWorkspaceById

This function retrieves a workspace by its ID.

```ts
export const getWorkspaceById = async (workspaceId: string) => {
  // ...
}
```

It queries the `workspaces` table for a workspace where the `id` matches the provided `workspaceId`. If no such workspace is found, it throws an error. If a workspace is found, it returns the workspace.

### getWorkspacesByUserId

This function retrieves all workspaces associated with a user, given the user's ID.

```ts
export const getWorkspacesByUserId = async (userId: string) => {
  // ...
}
```

It queries the `workspaces` table for all workspaces where the `user_id` matches the provided `userId`, ordered by `created_at` in descending order. If no workspaces are found, it throws an error. If workspaces are found, it returns them.

### createWorkspace

This function creates a new workspace.

```ts
export const createWorkspace = async (
  workspace: TablesInsert<"workspaces">
) => {
  // ...
}
```

It inserts a new row into the `workspaces` table with the provided `workspace` data. If there's an error during insertion, it throws an error. If the insertion is successful, it returns the created workspace.

### updateWorkspace

This function updates an existing workspace.

```ts
export const updateWorkspace = async (
  workspaceId: string,
  workspace: TablesUpdate<"workspaces">
) => {
  // ...
}
```

It updates a row in the `workspaces` table where the `id` matches the provided `workspaceId` with the provided `workspace` data. If there's an error during the update, it throws an error. If the update is successful, it returns the updated workspace.

### deleteWorkspace

This function deletes a workspace.

```ts
export const deleteWorkspace = async (workspaceId: string) => {
  // ...
}
```

It deletes a row from the `workspaces` table where the `id` matches the provided `workspaceId`. If there's an error during the deletion, it throws an error. If the deletion is successful, it returns `true`.