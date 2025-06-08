# Source Code Documentation

This file contains several functions that interact with the `models` and `model_workspaces` tables in the Supabase database. 

## Functions

### `getModelById(modelId: string)`

This function retrieves a model by its ID from the `models` table. If the model does not exist, it throws an error.

### `getModelWorkspacesByWorkspaceId(workspaceId: string)`

This function retrieves a workspace by its ID from the `workspaces` table, including all associated models. If the workspace does not exist, it throws an error.

### `getModelWorkspacesByModelId(modelId: string)`

This function retrieves a model by its ID from the `models` table, including all associated workspaces. If the model does not exist, it throws an error.

### `createModel(model: TablesInsert<"models">, workspace_id: string)`

This function inserts a new model into the `models` table and associates it with a workspace in the `model_workspaces` table. If there is an error during insertion, it throws an error.

### `createModels(models: TablesInsert<"models">[], workspace_id: string)`

This function inserts multiple new models into the `models` table and associates them with a workspace in the `model_workspaces` table. If there is an error during insertion, it throws an error.

### `createModelWorkspace(item: { user_id: string, model_id: string, workspace_id: string })`

This function inserts a new association between a model and a workspace into the `model_workspaces` table. If there is an error during insertion, it throws an error.

### `createModelWorkspaces(items: { user_id: string; model_id: string; workspace_id: string }[])`

This function inserts multiple new associations between models and a workspace into the `model_workspaces` table. If there is an error during insertion, it throws an error.

### `updateModel(modelId: string, model: TablesUpdate<"models">)`

This function updates a model in the `models` table by its ID. If there is an error during the update, it throws an error.

### `deleteModel(modelId: string)`

This function deletes a model from the `models` table by its ID. If there is an error during deletion, it throws an error.

### `deleteModelWorkspace(modelId: string, workspaceId: string)`

This function deletes an association between a model and a workspace from the `model_workspaces` table using their IDs. If there is an error during deletion, it throws an error.