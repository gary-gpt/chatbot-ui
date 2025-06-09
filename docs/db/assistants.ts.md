---
source: db/assistants.ts
generated: 2025-06-08T22:20:14.247Z
tags: []
hash: ae6281d5eca054d85c5222d8e98deab3ad36c598bba451d965c0739fe282e482
---

# Chatbot UI Database Operations

This document describes the database operations for the chatbot user interface (UI) located in the file `/Users/garymason/chatbot-ui/db/assistants.ts`. The operations are performed using Supabase, a full-stack development platform.

## Table of Contents

- [Get Assistant by ID](#get-assistant-by-id)
- [Get Assistant Workspaces by Workspace ID](#get-assistant-workspaces-by-workspace-id)
- [Get Assistant Workspaces by Assistant ID](#get-assistant-workspaces-by-assistant-id)
- [Create Assistant](#create-assistant)
- [Create Assistants](#create-assistants)
- [Create Assistant Workspace](#create-assistant-workspace)
- [Create Assistant Workspaces](#create-assistant-workspaces)
- [Update Assistant](#update-assistant)
- [Delete Assistant](#delete-assistant)
- [Delete Assistant Workspace](#delete-assistant-workspace)

## Get Assistant by ID

This function retrieves an assistant from the database using the assistant's ID.

```ts
export const getAssistantById = async (assistantId: string) => {
  //...
}
```

## Get Assistant Workspaces by Workspace ID

This function retrieves all assistant workspaces associated with a specific workspace ID.

```ts
export const getAssistantWorkspacesByWorkspaceId = async (
  workspaceId: string
) => {
  //...
}
```

## Get Assistant Workspaces by Assistant ID

This function retrieves all assistant workspaces associated with a specific assistant ID.

```ts
export const getAssistantWorkspacesByAssistantId = async (
  assistantId: string
) => {
  //...
}
```

## Create Assistant

This function creates a new assistant in the database and associates it with a workspace.

```ts
export const createAssistant = async (
  assistant: TablesInsert<"assistants">,
  workspace_id: string
) => {
  //...
}
```

## Create Assistants

This function creates multiple new assistants in the database and associates them with a workspace.

```ts
export const createAssistants = async (
  assistants: TablesInsert<"assistants">[],
  workspace_id: string
) => {
  //...
}
```

## Create Assistant Workspace

This function creates a new assistant workspace in the database.

```ts
export const createAssistantWorkspace = async (item: {
  user_id: string
  assistant_id: string
  workspace_id: string
}) => {
  //...
}
```

## Create Assistant Workspaces

This function creates multiple new assistant workspaces in the database.

```ts
export const createAssistantWorkspaces = async (
  items: { user_id: string; assistant_id: string; workspace_id: string }[]
) => {
  //...
}
```

## Update Assistant

This function updates an existing assistant in the database using the assistant's ID.

```ts
export const updateAssistant = async (
  assistantId: string,
  assistant: TablesUpdate<"assistants">
) => {
  //...
}
```

## Delete Assistant

This function deletes an assistant from the database using the assistant's ID.

```ts
export const deleteAssistant = async (assistantId: string) => {
  //...
}
```

## Delete Assistant Workspace

This function deletes an assistant workspace from the database using the assistant's ID and workspace ID.

```ts
export const deleteAssistantWorkspace = async (
  assistantId: string,
  workspaceId: string
) => {
  //...
}
```