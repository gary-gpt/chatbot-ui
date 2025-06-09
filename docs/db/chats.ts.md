---
source: db/chats.ts
generated: 2025-06-08T22:21:12.876Z
tags: []
hash: 760b60135a5815a612873e35a049f38fec6fd0214cf815f76a687728a84c704b
---

# Chatbot UI Database Operations

This document explains the purpose and logic of the TypeScript file `chats.ts` located at `/Users/garymason/chatbot-ui/db/`. This file contains several functions that interact with the `chats` table in a Supabase database.

## Imports

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
```

The file imports the `supabase` object from the `browser-client` module to interact with the Supabase database. It also imports `TablesInsert` and `TablesUpdate` types from the `types` module to define the structure of the data for inserting and updating records.

## Function: getChatById

```ts
export const getChatById = async (chatId: string) => {
  const { data: chat } = await supabase
    .from("chats")
    .select("*")
    .eq("id", chatId)
    .maybeSingle()

  return chat
}
```

This function retrieves a chat record from the `chats` table by its `id`. It uses the `maybeSingle()` function to return either one record or `null` if no record is found.

## Function: getChatsByWorkspaceId

```ts
export const getChatsByWorkspaceId = async (workspaceId: string) => {
  const { data: chats, error } = await supabase
    .from("chats")
    .select("*")
    .eq("workspace_id", workspaceId)
    .order("created_at", { ascending: false })

  if (!chats) {
    throw new Error(error.message)
  }

  return chats
}
```

This function retrieves all chat records from the `chats` table that belong to a specific workspace, identified by `workspace_id`. The records are ordered by `created_at` in descending order. If no records are found, it throws an error with the message from the Supabase client.

## Function: createChat

```ts
export const createChat = async (chat: TablesInsert<"chats">) => {
  const { data: createdChat, error } = await supabase
    .from("chats")
    .insert([chat])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return createdChat
}
```

This function inserts a new chat record into the `chats` table. It expects a `chat` object that conforms to the `TablesInsert<"chats">` type. If the insertion is successful, it returns the created chat record. If not, it throws an error with the message from the Supabase client.

## Function: createChats

```ts
export const createChats = async (chats: TablesInsert<"chats">[]) => {
  const { data: createdChats, error } = await supabase
    .from("chats")
    .insert(chats)
    .select("*")

  if (error) {
    throw new Error(error.message)
  }

  return createdChats
}
```

This function inserts multiple chat records into the `chats` table. It expects an array of `chat` objects that conform to the `TablesInsert<"chats">` type. If the insertion is successful, it returns the created chat records. If not, it throws an error with the message from the Supabase client.

## Function: updateChat

```ts
export const updateChat = async (
  chatId: string,
  chat: TablesUpdate<"chats">
) => {
  const { data: updatedChat, error } = await supabase
    .from("chats")
    .update(chat)
    .eq("id", chatId)
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return updatedChat
}
```

This function updates a chat record in the `chats` table. It expects a `chatId` and a `chat` object that conforms to the `TablesUpdate<"chats">` type. If the update is successful, it returns the updated chat record. If not, it throws an error with the message from the Supabase client.

## Function: deleteChat

```ts
export const deleteChat = async (chatId: string) => {
  const { error } = await supabase.from("chats").delete().eq("id", chatId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
```

This function deletes a chat record from the `chats` table by its `id`. If the deletion is successful, it returns `true`. If not, it throws an error with the message from the Supabase client.