---
source: lib/memory/insertMemory.ts
generated: '2025-06-08T13:21:01.647Z'
tags: []
hash: 759a957a96151f3e0cab446d9691b7d86b3f14aa6033a2d1126dabad6fbd00b7
---
# Memory Insertion Module

This module is responsible for inserting memory into the `memory` table in the Supabase database.

## Dependencies

This module relies on the Supabase client from the `@/lib/supabase/browser-client` module.

## Types

### `InsertMemoryParams`

This type is used to define the structure of the memory object that will be inserted into the database. It has the following properties:

- `project_name: string`: The name of the project.
- `category: string`: The category of the memory.
- `content: string`: The content of the memory.
- `tags?: string`: Optional. The tags associated with the memory.

## Functions

### `insertMemory(memory: InsertMemoryParams)`

This asynchronous function is responsible for inserting a memory into the `memory` table in the Supabase database.

#### Parameters

- `memory: InsertMemoryParams`: The memory object to be inserted.

#### Return

This function returns the inserted data if the operation is successful. If an error occurs, it throws an error with the error message.

#### Behavior

This function first logs a message indicating that it is attempting a simple select operation. It then performs a select operation on the `memory` table, selecting all columns and limiting the results to one row. The result of this operation is logged.

Next, the function logs a message indicating that it is attempting to insert the provided memory object into the `memory` table. It performs the insert operation, forcing the full response body to be returned.

The function logs the data returned by the insert operation, any error that occurred, and the status and status text of the operation.

If an error occurred during the insert operation, the function throws an error with the error message. If no error message is available, it throws an error with the message "Unknown Supabase error".

Finally, if the insert operation was successful, the function returns the inserted data.
