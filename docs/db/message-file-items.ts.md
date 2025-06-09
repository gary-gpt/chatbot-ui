---
source: db/message-file-items.ts
generated: 2025-06-08T22:23:52.713Z
tags: []
hash: d8044318060910e566b73ea042de88e3f0b36489428037c141d4ddc26acaed43
---

# Message File Items Module Documentation

This module is located at `/Users/garymason/chatbot-ui/db/message-file-items.ts`. It provides functionalities for retrieving and creating message file items in a chatbot application. The module interacts with the Supabase database using the Supabase JavaScript client.

## Dependencies

This module imports the Supabase client from the `@/lib/supabase/browser-client` module. It also imports the `TablesInsert` type from the `@/supabase/types` module.

## Functions

### getMessageFileItemsByMessageId

This function retrieves message file items associated with a specific message ID from the `messages` table in the database.

```ts
export const getMessageFileItemsByMessageId = async (messageId: string) => {
  const { data: messageFileItems, error } = await supabase
    .from("messages")
    .select(
      `
      id,
      file_items (*)
    `
    )
    .eq("id", messageId)
    .single()

  if (!messageFileItems) {
    throw new Error(error.message)
  }

  return messageFileItems
}
```

#### Parameters

- `messageId` (string): The ID of the message for which to retrieve the file items.

#### Returns

- A promise that resolves with the message file items associated with the given message ID.

#### Errors

- Throws an error if no message file items are found for the given message ID.

### createMessageFileItems

This function creates new message file items in the `message_file_items` table in the database.

```ts
export const createMessageFileItems = async (
  messageFileItems: TablesInsert<"message_file_items">[]
) => {
  const { data: createdMessageFileItems, error } = await supabase
    .from("message_file_items")
    .insert(messageFileItems)
    .select("*")

  if (!createdMessageFileItems) {
    throw new Error(error.message)
  }

  return createdMessageFileItems
}
```

#### Parameters

- `messageFileItems` (Array of `TablesInsert<"message_file_items">`): An array of message file items to create in the database.

#### Returns

- A promise that resolves with the created message file items.

#### Errors

- Throws an error if the message file items could not be created.