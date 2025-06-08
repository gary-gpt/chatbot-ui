# Source Code Documentation

This file contains functions for interacting with the `presets` and `preset_workspaces` tables in the Supabase database.

## Functions

### getPresetById(presetId: string)

This function retrieves a preset by its ID. It throws an error if the preset does not exist.

### getPresetWorkspacesByWorkspaceId(workspaceId: string)

This function retrieves a workspace and its associated presets by the workspace's ID. It throws an error if the workspace does not exist.

### getPresetWorkspacesByPresetId(presetId: string)

This function retrieves a preset and its associated workspaces by the preset's ID. It throws an error if the preset does not exist.

### createPreset(preset: TablesInsert<"presets">, workspace_id: string)

This function creates a new preset and associates it with a workspace. It throws an error if the preset cannot be created.

### createPresets(presets: TablesInsert<"presets">[], workspace_id: string)

This function creates multiple presets and associates them with a workspace. It throws an error if the presets cannot be created.

### createPresetWorkspace(item: { user_id: string, preset_id: string, workspace_id: string })

This function creates a new association between a preset and a workspace. It throws an error if the association cannot be created.

### createPresetWorkspaces(items: { user_id: string; preset_id: string; workspace_id: string }[])

This function creates multiple associations between presets and a workspace. It throws an error if the associations cannot be created.

### updatePreset(presetId: string, preset: TablesUpdate<"presets">)

This function updates a preset by its ID. It throws an error if the preset does not exist or cannot be updated.

### deletePreset(presetId: string)

This function deletes a preset by its ID. It throws an error if the preset does not exist or cannot be deleted.

### deletePresetWorkspace(presetId: string, workspaceId: string)

This function deletes an association between a preset and a workspace. It throws an error if the association does not exist or cannot be deleted.