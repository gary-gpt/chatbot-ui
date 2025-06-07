**📄 Source File:** `/db/prompts.ts`  
**🕒 Generated:** 2025-06-07 14:17:04 UTC  
**🤖 Model:** gpt-4

---

# Source File Documentation: Unnamed Source File

This source file is a part of a JavaScript/TypeScript project that interacts with a database using the Supabase client. It provides a set of functions to perform CRUD (Create, Read, Update, Delete) operations on two tables in the database: `prompts` and `prompt_workspaces`.

## Exports

The file exports several asynchronous functions, each performing a specific database operation:

1. `getPromptById(promptId: string)`: Fetches a single prompt record from the `prompts` table using the provided `promptId`.

2. `getPromptWorkspacesByWorkspaceId(workspaceId: string)`: Fetches a single workspace record from the `workspaces` table, including all associated prompts, using the provided `workspaceId`.

3. `getPromptWorkspacesByPromptId(promptId: string)`: Fetches a single prompt record from the `prompts` table, including all associated workspaces, using the provided `promptId`.

4. `createPrompt(prompt: TablesInsert<"prompts">, workspace_id: string)`: Creates a new prompt record in the `prompts` table and associates it with a workspace in the `prompt_workspaces` table.

5. `createPrompts(prompts: TablesInsert<"prompts">[], workspace_id: string)`: Creates multiple new prompt records in the `prompts` table and associates them with a workspace in the `prompt_workspaces` table.

6. `createPromptWorkspace(item: { user_id: string; prompt_id: string; workspace_id: string })`: Creates a new record in the `prompt_workspaces` table, associating a user, a prompt, and a workspace.

7. `createPromptWorkspaces(items: { user_id: string; prompt_id: string; workspace_id: string }[])`: Creates multiple new records in the `prompt_workspaces` table, associating users, prompts, and workspaces.

8. `updatePrompt(promptId: string, prompt: TablesUpdate<"prompts">)`: Updates a specific prompt record in the `prompts` table using the provided `promptId`.

9. `deletePrompt(promptId: string)`: Deletes a specific prompt record from the `prompts` table using the provided `promptId`.

10. `deletePromptWorkspace(promptId: string, workspaceId: string)`: Deletes a specific record from the `prompt_workspaces` table using the provided `promptId` and `workspaceId`.

## Usage

These functions can be imported into other files and used to interact with the `prompts` and `prompt_workspaces` tables in the database. Each function returns a Promise that resolves with the data from the database operation or throws an error if the operation fails.

## Interesting Structure or Nuance

The file makes extensive use of the Supabase client for JavaScript to perform database operations. Each function constructs a query using the Supabase client's fluent API, executes the query, and handles any errors that occur during execution. The use of TypeScript's type annotations ensures that the functions are used correctly, with the correct types of arguments.