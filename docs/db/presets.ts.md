---
source: db/presets.ts
generated: 2025-06-08T22:25:39.269Z
tags: []
hash: 69480fb8e0e3c46d9bb839e04dc80680672acb7e3267d66c7d2cf5d04277f296
---

# Chatbot UI Database Presets

This TypeScript file, `presets.ts`, is part of the Chatbot UI and interacts with the Supabase database. It contains a series of functions that perform CRUD (Create, Read, Update, Delete) operations on the `presets` and `preset_workspaces` tables in the database.

## Functions

### getPresetById

```ts
export const getPresetById = async (presetId: string) => {
  const { data: preset, error } = await supabase
    .from("presets")
    .select("*")
    .eq("id", presetId)
    .single()

  if (!preset) {
    throw new Error(error.message)
  }

  return preset
}
```
This function retrieves a preset from the `presets` table by its `id`. If the preset does not exist, it throws an error.

### getPresetWorkspacesByWorkspaceId

```ts
export const getPresetWorkspacesByWorkspaceId = async (workspaceId: string) => {
  const { data: workspace, error } = await supabase
    .from("workspaces")
    .select(
      `
      id,
      name,
      presets (*)
    `
    )
    .eq("id", workspaceId)
    .single()

  if (!workspace) {
    throw new Error(error.message)
  }

  return workspace
}
```
This function retrieves a workspace and its associated presets from the `workspaces` table by its `id`. If the workspace does not exist, it throws an error.

### getPresetWorkspacesByPresetId

```ts
export const getPresetWorkspacesByPresetId = async (presetId: string) => {
  const { data: preset, error } = await supabase
    .from("presets")
    .select(
      `
      id, 
      name, 
      workspaces (*)
    `
    )
    .eq("id", presetId)
    .single()

  if (!preset) {
    throw new Error(error.message)
  }

  return preset
}
```
This function retrieves a preset and its associated workspaces from the `presets` table by its `id`. If the preset does not exist, it throws an error.

### createPreset

```ts
export const createPreset = async (
  preset: TablesInsert<"presets">,
  workspace_id: string
) => {
  const { data: createdPreset, error } = await supabase
    .from("presets")
    .insert([preset])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  await createPresetWorkspace({
    user_id: preset.user_id,
    preset_id: createdPreset.id,
    workspace_id: workspace_id
  })

  return createdPreset
}
```
This function creates a new preset in the `presets` table and associates it with a workspace in the `preset_workspaces` table. If there's an error during the process, it throws an error.

### createPresets

```ts
export const createPresets = async (
  presets: TablesInsert<"presets">[],
  workspace_id: string
) => {
  const { data: createdPresets, error } = await supabase
    .from("presets")
    .insert(presets)
    .select("*")

  if (error) {
    throw new Error(error.message)
  }

  await createPresetWorkspaces(
    createdPresets.map(preset => ({
      user_id: preset.user_id,
      preset_id: preset.id,
      workspace_id
    }))
  )

  return createdPresets
}
```
This function creates multiple new presets in the `presets` table and associates them with a workspace in the `preset_workspaces` table. If there's an error during the process, it throws an error.

### createPresetWorkspace

```ts
export const createPresetWorkspace = async (item: {
  user_id: string
  preset_id: string
  workspace_id: string
}) => {
  const { data: createdPresetWorkspace, error } = await supabase
    .from("preset_workspaces")
    .insert([item])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return createdPresetWorkspace
}
```
This function creates a new association between a preset and a workspace in the `preset_workspaces` table. If there's an error during the process, it throws an error.

### createPresetWorkspaces

```ts
export const createPresetWorkspaces = async (
  items: { user_id: string; preset_id: string; workspace_id: string }[]
) => {
  const { data: createdPresetWorkspaces, error } = await supabase
    .from("preset_workspaces")
    .insert(items)
    .select("*")

  if (error) throw new Error(error.message)

  return createdPresetWorkspaces
}
```
This function creates multiple new associations between presets and a workspace in the `preset_workspaces` table. If there's an error during the process, it throws an error.

### updatePreset

```ts
export const updatePreset = async (
  presetId: string,
  preset: TablesUpdate<"presets">
) => {
  const { data: updatedPreset, error } = await supabase
    .from("presets")
    .update(preset)
    .eq("id", presetId)
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return updatedPreset
}
```
This function updates a preset in the `presets` table by its `id`. If there's an error during the process, it throws an error.

### deletePreset

```ts
export const deletePreset = async (presetId: string) => {
  const { error } = await supabase.from("presets").delete().eq("id", presetId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
```
This function deletes a preset from the `presets` table by its `id`. If there's an error during the process, it throws an error.

### deletePresetWorkspace

```ts
export const deletePresetWorkspace = async (
  presetId: string,
  workspaceId: string
) => {
  const { error } = await supabase
    .from("preset_workspaces")
    .delete()
    .eq("preset_id", presetId)
    .eq("workspace_id", workspaceId)

  if (error) throw new Error(error.message)

  return true
}
```
This function deletes an association between a preset and a workspace from the `preset_workspaces` table using their `id`s. If there's an error during the process, it throws an error.