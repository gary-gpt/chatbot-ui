---
source: db/message-file-items.ts
generated: '2025-06-08T13:21:01.629Z'
tags: []
hash: ab47fe6fbbaefabbbc94ffda0b1564b48e665f15bc2a1e8122313e32af031e9a
---
# Documentation

## `getMessageFileItemsByMessageId(messageId: string)`

This function is an asynchronous function that retrieves message file items by a given message ID. 

### Parameters

- `messageId` (string): The ID of the message to retrieve file items for.

### Returns

- A promise that resolves to the message file items for the given message ID.

### Errors

- Throws an error if no message file items are found for the given message ID.

### Usage

```javascript
getMessageFileItemsByMessageId('1234')
  .then(messageFileItems => console.log(messageFileItems))
  .catch(error => console.error(error));
```

## `createMessageFileItems(messageFileItems: TablesInsert<"message_file_items">[])`

This function is an asynchronous function that creates new message file items.

### Parameters

- `messageFileItems` (TablesInsert<"message_file_items">[]): An array of objects representing the message file items to be created. Each object should match the structure of the "message_file_items" table.

### Returns

- A promise that resolves to the created message file items.

### Errors

- Throws an error if there is a problem creating the message file items.

### Usage

```javascript
const newMessageFileItems = [
  {
    id: '1234',
    file_item: 'file1',
    // other fields...
  },
  // other items...
];

createMessageFileItems(newMessageFileItems)
  .then(createdMessageFileItems => console.log(createdMessageFileItems))
  .catch(error => console.error(error));
```
