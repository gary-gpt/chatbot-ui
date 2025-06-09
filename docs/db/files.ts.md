---
source: db/files.ts
generated: 2025-06-08T22:22:40.986Z
tags: []
hash: 481f7c1a1a68dc8356bfd96209d491bdbc31c9daa33773a1c5b9d25806764813
---

# File: /Users/garymason/chatbot-ui/db/files.ts

This TypeScript file contains a set of functions for interacting with files and workspaces in a chatbot application. It uses the Supabase client for handling database operations and the Mammoth library for handling .docx files.

## Imports

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
import mammoth from "mammoth"
import { toast } from "sonner"
import { uploadFile } from "./storage/files"
```

The file imports several dependencies:

- `supabase` from the `@/lib/supabase/browser-client` for database operations.
- `TablesInsert` and `TablesUpdate` from `@/supabase/types` for type checking.
- `mammoth` for handling .docx files.
- `toast` from `sonner` for showing toast notifications.
- `uploadFile` from `./storage/files` for file uploading.

## Functions

### getFileById

```ts
export const getFileById = async (fileId: string) => {
  // ...
}
```

This function retrieves a file from the database by its ID.

### getFileWorkspacesByWorkspaceId

```ts
export const getFileWorkspacesByWorkspaceId = async (workspaceId: string) => {
  // ...
}
```

This function retrieves a workspace and its associated files from the database by the workspace ID.

### getFileWorkspacesByFileId

```ts
export const getFileWorkspacesByFileId = async (fileId: string) => {
  // ...
}
```

This function retrieves a file and its associated workspaces from the database by the file ID.

### createFileBasedOnExtension

```ts
export const createFileBasedOnExtension = async (
  file: File,
  fileRecord: TablesInsert<"files">,
  workspace_id: string,
  embeddingsProvider: "openai" | "local"
) => {
  // ...
}
```

This function creates a file in the database based on its extension. It handles .docx files differently from other file types.

### createFile

```ts
export const createFile = async (
  file: File,
  fileRecord: TablesInsert<"files">,
  workspace_id: string,
  embeddingsProvider: "openai" | "local"
) => {
  // ...
}
```

This function creates a non-.docx file in the database.

### createDocXFile

```ts
export const createDocXFile = async (
  text: string,
  file: File,
  fileRecord: TablesInsert<"files">,
  workspace_id: string,
  embeddingsProvider: "openai" | "local"
) => {
  // ...
}
```

This function creates a .docx file in the database.

### createFiles

```ts
export const createFiles = async (
  files: TablesInsert<"files">[],
  workspace_id: string
) => {
  // ...
}
```

This function creates multiple files in the database.

### createFileWorkspace

```ts
export const createFileWorkspace = async (item: {
  user_id: string
  file_id: string
  workspace_id: string
}) => {
  // ...
}
```

This function creates a record in the `file_workspaces` table in the database.

### createFileWorkspaces

```ts
export const createFileWorkspaces = async (
  items: { user_id: string; file_id: string; workspace_id: string }[]
) => {
  // ...
}
```

This function creates multiple records in the `file_workspaces` table in the database.

### updateFile

```ts
export const updateFile = async (
  fileId: string,
  file: TablesUpdate<"files">
) => {
  // ...
}
```

This function updates a file in the database.

### deleteFile

```ts
export const deleteFile = async (fileId: string) => {
  // ...
}
```

This function deletes a file from the database.

### deleteFileWorkspace

```ts
export const deleteFileWorkspace = async (
  fileId: string,
  workspaceId: string
) => {
  // ...
}
```

This function deletes a record from the `file_workspaces` table in the database.