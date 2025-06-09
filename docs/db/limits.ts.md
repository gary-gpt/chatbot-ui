---
source: db/limits.ts
generated: 2025-06-08T22:23:35.217Z
tags: []
hash: 2facf98717f4cf91b0c953eccdcd09a2babdbd9cdbc94eb81a35a5cf98d6a9bd
---

# Code Documentation for `limits.ts`

This file, `limits.ts`, is located in the `db` directory of the `chatbot-ui` project. It defines a series of constants that represent the maximum and minimum limits for various fields in different entities of the chatbot application. These entities include profiles, workspaces, presets, prompts, files, collections, assistants, tools, and models.

## Code Summary

```ts
// Profiles
export const PROFILE_BIO_MAX = 500
export const PROFILE_DISPLAY_NAME_MAX = 100
export const PROFILE_CONTEXT_MAX = 1500
export const PROFILE_USERNAME_MIN = 3
export const PROFILE_USERNAME_MAX = 25

// Workspaces
export const WORKSPACE_NAME_MAX = 100
export const WORKSPACE_DESCRIPTION_MAX = 500
export const WORKSPACE_INSTRUCTIONS_MAX = 1500

// Chats

// Presets
export const PRESET_NAME_MAX = 100
export const PRESET_DESCRIPTION_MAX = 500
export const PRESET_PROMPT_MAX = 100000

// Prompts
export const PROMPT_NAME_MAX = 100
export const PROMPT_CONTENT_MAX = 100000

// Files
export const FILE_NAME_MAX = 100
export const FILE_DESCRIPTION_MAX = 500

// Collections
export const COLLECTION_NAME_MAX = 100
export const COLLECTION_DESCRIPTION_MAX = 500

// Assistant
export const ASSISTANT_NAME_MAX = 100
export const ASSISTANT_DESCRIPTION_MAX = 500
export const ASSISTANT_PROMPT_MAX = 100000

// Tools
export const TOOL_NAME_MAX = 100
export const TOOL_DESCRIPTION_MAX = 500

// Models
export const MODEL_NAME_MAX = 100
export const MODEL_DESCRIPTION_MAX = 500

```

## Code Explanation

### Profiles

These constants define the limits for the profile entity.

- `PROFILE_BIO_MAX`: Maximum characters allowed for the profile bio.
- `PROFILE_DISPLAY_NAME_MAX`: Maximum characters allowed for the profile display name.
- `PROFILE_CONTEXT_MAX`: Maximum characters allowed for the profile context.
- `PROFILE_USERNAME_MIN`: Minimum characters required for the profile username.
- `PROFILE_USERNAME_MAX`: Maximum characters allowed for the profile username.

### Workspaces

These constants define the limits for the workspace entity.

- `WORKSPACE_NAME_MAX`: Maximum characters allowed for the workspace name.
- `WORKSPACE_DESCRIPTION_MAX`: Maximum characters allowed for the workspace description.
- `WORKSPACE_INSTRUCTIONS_MAX`: Maximum characters allowed for the workspace instructions.

### Presets

These constants define the limits for the preset entity.

- `PRESET_NAME_MAX`: Maximum characters allowed for the preset name.
- `PRESET_DESCRIPTION_MAX`: Maximum characters allowed for the preset description.
- `PRESET_PROMPT_MAX`: Maximum characters allowed for the preset prompt.

### Prompts

These constants define the limits for the prompt entity.

- `PROMPT_NAME_MAX`: Maximum characters allowed for the prompt name.
- `PROMPT_CONTENT_MAX`: Maximum characters allowed for the prompt content.

### Files

These constants define the limits for the file entity.

- `FILE_NAME_MAX`: Maximum characters allowed for the file name.
- `FILE_DESCRIPTION_MAX`: Maximum characters allowed for the file description.

### Collections

These constants define the limits for the collection entity.

- `COLLECTION_NAME_MAX`: Maximum characters allowed for the collection name.
- `COLLECTION_DESCRIPTION_MAX`: Maximum characters allowed for the collection description.

### Assistant

These constants define the limits for the assistant entity.

- `ASSISTANT_NAME_MAX`: Maximum characters allowed for the assistant name.
- `ASSISTANT_DESCRIPTION_MAX`: Maximum characters allowed for the assistant description.
- `ASSISTANT_PROMPT_MAX`: Maximum characters allowed for the assistant prompt.

### Tools

These constants define the limits for the tool entity.

- `TOOL_NAME_MAX`: Maximum characters allowed for the tool name.
- `TOOL_DESCRIPTION_MAX`: Maximum characters allowed for the tool description.

### Models

These constants define the limits for the model entity.

- `MODEL_NAME_MAX`: Maximum characters allowed for the model name.
- `MODEL_DESCRIPTION_MAX`: Maximum characters allowed for the model description.