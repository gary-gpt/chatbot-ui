---
source: db/models.ts
generated: 2025-06-08T22:24:48.066Z
tags: []
hash: c015b9d1d6d77da119fddcbd916e0d1534d6b861a7032627aa481d43fdf1a93e
---

# Models.ts

This TypeScript file, located at `/Users/garymason/chatbot-ui/db/models.ts`, provides a set of functions for interacting with the `models` and `workspaces` tables in a Supabase database. It includes functions for retrieving, creating, updating, and deleting models and workspaces.

## Imports

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
```

The file imports `supabase` from a local Supabase client library and `TablesInsert` and `TablesUpdate` types from a local Supabase types file.

## Functions

### getModelById

```ts
export const getModelById = async (modelId: string) => {
  ...
}
```

This function retrieves a model from the `models` table by its `id`.

### getModelWorkspacesByWorkspaceId

```ts
export const getModelWorkspacesByWorkspaceId = async (workspaceId: string) => {
  ...
}
```

This function retrieves a workspace from the `workspaces` table by its `id`, including all associated models.

### getModelWorkspacesByModelId

```ts
export const getModelWorkspacesByModelId = async (modelId: string) => {
  ...
}
```

This function retrieves a model from the `models` table by its `id`, including all associated workspaces.

### createModel

```ts
export const createModel = async (
  model: TablesInsert<"models">,
  workspace_id: string
) => {
  ...
}
```

This function creates a new model in the `models` table and associates it with a workspace.

### createModels

```ts
export const createModels = async (
  models: TablesInsert<"models">[],
  workspace_id: string
) => {
  ...
}
```

This function creates multiple new models in the `models` table and associates them with a workspace.

### createModelWorkspace

```ts
export const createModelWorkspace = async (item: {
  user_id: string
  model_id: string
  workspace_id: string
}) => {
  ...
}
```

This function creates a new association between a model and a workspace in the `model_workspaces` table.

### createModelWorkspaces

```ts
export const createModelWorkspaces = async (
  items: { user_id: string; model_id: string; workspace_id: string }[]
) => {
  ...
}
```

This function creates multiple new associations between models and workspaces in the `model_workspaces` table.

### updateModel

```ts
export const updateModel = async (
  modelId: string,
  model: TablesUpdate<"models">
) => {
  ...
}
```

This function updates a model in the `models` table.

### deleteModel

```ts
export const deleteModel = async (modelId: string) => {
  ...
}
```

This function deletes a model from the `models` table.

### deleteModelWorkspace

```ts
export const deleteModelWorkspace = async (
  modelId: string,
  workspaceId: string
) => {
  ...
}
```

This function deletes an association between a model and a workspace from the `model_workspaces` table.