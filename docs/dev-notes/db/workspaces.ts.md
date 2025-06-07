**📄 Source File:** `/db/workspaces.ts`  
**🕒 Generated:** 2025-06-07 14:19:08 UTC  
**🤖 Model:** gpt-4

---

# workspace.ts

This TypeScript file provides a set of functions to interact with the `workspaces` table in a Supabase database. It uses the Supabase client to perform CRUD (Create, Read, Update, Delete) operations on the `workspaces` table.

## Exports

The file exports the following functions:

### getHomeWorkspaceByUserId(userId: string)

This function retrieves the home workspace of a user by their user ID. It returns the ID of the home workspace. If no home workspace is found, it throws an error.

### getWorkspaceById(workspaceId: string)

This function retrieves a workspace by its ID. It returns the workspace object. If no workspace is found, it throws an error.

### getWorkspacesByUserId(userId: string)

This function retrieves all workspaces of a user by their user ID. It returns an array of workspace objects. If no workspaces are found, it throws an error.

### createWorkspace(workspace: TablesInsert<"workspaces">)

This function creates a new workspace. It takes a `TablesInsert` object as an argument, which should contain the data for the new workspace. It returns the created workspace object. If there's an error during the creation, it throws an error.

### updateWorkspace(workspaceId: string, workspace: TablesUpdate<"workspaces">)

This function updates an existing workspace. It takes a workspace ID and a `TablesUpdate` object as arguments. The `TablesUpdate` object should contain the updated data for the workspace. It returns the updated workspace object. If there's an error during the update, it throws an error.

### deleteWorkspace(workspaceId: string)

This function deletes a workspace by its ID. It returns `true` if the deletion is successful. If there's an error during the deletion, it throws an error.

## Usage

These functions are used to interact with the `workspaces` table in a Supabase database. They can be imported and used in other parts of the application where such operations are needed.

## Interesting Structure or Nuance

The functions use the Supabase client to perform operations on the `workspaces` table. They make use of the `from`, `select`, `eq`, `insert`, `update`, `delete`, `order`, and `single` methods provided by the Supabase client to construct and execute the database queries.

The `TablesInsert` and `TablesUpdate` types are used to type the `workspace` argument in the `createWorkspace` and `updateWorkspace` functions respectively. These types ensure that the `workspace` argument contains the correct fields for the `workspaces` table.