# Folders API

This source code file provides an API for managing folders in a workspace. It includes functions for getting, creating, updating, and deleting folders.

## Functions

### `getFoldersByWorkspaceId(workspaceId: string)`

This function retrieves all folders associated with a given workspace ID. 

#### Parameters

- `workspaceId`: The ID of the workspace.

#### Returns

- An array of folders associated with the given workspace ID.

#### Errors

- Throws an error if no folders are found for the given workspace ID.

### `createFolder(folder: TablesInsert<"folders">)`

This function creates a new folder.

#### Parameters

- `folder`: An object representing the folder to be created. It should match the `TablesInsert<"folders">` type.

#### Returns

- The created folder object.

#### Errors

- Throws an error if the folder could not be created.

### `updateFolder(folderId: string, folder: TablesUpdate<"folders">)`

This function updates a specified folder.

#### Parameters

- `folderId`: The ID of the folder to be updated.
- `folder`: An object representing the new state of the folder. It should match the `TablesUpdate<"folders">` type.

#### Returns

- The updated folder object.

#### Errors

- Throws an error if the folder could not be updated.

### `deleteFolder(folderId: string)`

This function deletes a specified folder.

#### Parameters

- `folderId`: The ID of the folder to be deleted.

#### Returns

- `true` if the folder was successfully deleted.

#### Errors

- Throws an error if the folder could not be deleted.