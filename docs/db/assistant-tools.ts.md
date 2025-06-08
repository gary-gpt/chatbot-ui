# Assistant Tools API

This module provides functions for interacting with assistant tools data in the Supabase database.

## Functions

### `getAssistantToolsByAssistantId(assistantId: string)`

Fetches assistant tools by the assistant's ID.

- `assistantId: string`: The ID of the assistant.

Returns a Promise that resolves to the assistant's tools. If the assistant does not exist or an error occurs, the Promise will be rejected with an Error.

### `createAssistantTool(assistantTool: TablesInsert<"assistant_tools">)`

Creates a new assistant tool.

- `assistantTool: TablesInsert<"assistant_tools">`: The assistant tool to create.

Returns a Promise that resolves to the created assistant tool. If an error occurs during creation, the Promise will be rejected with an Error.

### `createAssistantTools(assistantTools: TablesInsert<"assistant_tools">[])`

Creates multiple new assistant tools.

- `assistantTools: TablesInsert<"assistant_tools">[]`: An array of assistant tools to create.

Returns a Promise that resolves to the created assistant tools. If an error occurs during creation, the Promise will be rejected with an Error.

### `deleteAssistantTool(assistantId: string, toolId: string)`

Deletes an assistant tool.

- `assistantId: string`: The ID of the assistant.
- `toolId: string`: The ID of the tool.

Returns a Promise that resolves to true if the deletion was successful. If an error occurs during deletion, the Promise will be rejected with an Error.