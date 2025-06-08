---
source: db/assistant-files.ts
generated: '2025-06-08T13:21:01.628Z'
tags: []
hash: 16196a53de890b7ec7b8dce99072943656f5afb1dcdbfc8cf365c16220be610f
---
# Assistant Files Module

This module provides functions to interact with the `assistant_files` and `assistants` tables in the Supabase database.

## Functions

### getAssistantFilesByAssistantId

This function fetches the assistant files by the assistant's ID.

**Parameters:**

- `assistantId` (string): The ID of the assistant.

**Returns:**

- A promise that resolves to the assistant's files.

**Throws:**

- An error if the assistant's files could not be fetched.

### createAssistantFile

This function creates a new assistant file.

**Parameters:**

- `assistantFile` (TablesInsert<"assistant_files">): The assistant file to be created.

**Returns:**

- A promise that resolves to the created assistant file.

**Throws:**

- An error if the assistant file could not be created.

### createAssistantFiles

This function creates multiple new assistant files.

**Parameters:**

- `assistantFiles` (TablesInsert<"assistant_files">[]): An array of assistant files to be created.

**Returns:**

- A promise that resolves to the created assistant files.

**Throws:**

- An error if the assistant files could not be created.

### deleteAssistantFile

This function deletes an assistant file.

**Parameters:**

- `assistantId` (string): The ID of the assistant.
- `fileId` (string): The ID of the file to be deleted.

**Returns:**

- A promise that resolves to `true` if the file was successfully deleted.

**Throws:**

- An error if the file could not be deleted.
