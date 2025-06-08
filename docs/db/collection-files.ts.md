---
source: db/collection-files.ts
generated: '2025-06-08T13:21:01.628Z'
tags: []
hash: 80c23dd76bd62e219abb3228b5bb2e8ac7d4dcad712d76e57067dbc25b1f8518
---
# Documentation

## Overview

This module provides functions to interact with collections and collection files in the Supabase database. It exports four functions: `getCollectionFilesByCollectionId`, `createCollectionFile`, `createCollectionFiles`, and `deleteCollectionFile`.

## Functions

### getCollectionFilesByCollectionId

This function retrieves collection files by a given collection ID.

**Syntax**

```javascript
getCollectionFilesByCollectionId(collectionId)
```

**Parameters**

- `collectionId` (string): The ID of the collection.

**Returns**

A promise that resolves to the collection files data.

**Errors**

Throws an error if the collection files data is not found.

### createCollectionFile

This function creates a new collection file.

**Syntax**

```javascript
createCollectionFile(collectionFile)
```

**Parameters**

- `collectionFile` (TablesInsert<"collection_files">): The collection file data to be inserted.

**Returns**

A promise that resolves to the created collection file data.

**Errors**

Throws an error if the collection file data could not be created.

### createCollectionFiles

This function creates multiple collection files.

**Syntax**

```javascript
createCollectionFiles(collectionFiles)
```

**Parameters**

- `collectionFiles` (TablesInsert<"collection_files">[]): An array of collection file data to be inserted.

**Returns**

A promise that resolves to the created collection files data.

**Errors**

Throws an error if the collection files data could not be created.

### deleteCollectionFile

This function deletes a collection file by a given collection ID and file ID.

**Syntax**

```javascript
deleteCollectionFile(collectionId, fileId)
```

**Parameters**

- `collectionId` (string): The ID of the collection.
- `fileId` (string): The ID of the file.

**Returns**

A promise that resolves to `true` if the deletion was successful.

**Errors**

Throws an error if the deletion was not successful.
