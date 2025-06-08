---
source: db/storage/files.ts
generated: '2025-06-08T13:21:01.646Z'
tags: []
hash: 77af3f5b02771e38bafaf022c30f7655406002a82213c52168ba63794e217279
---
# File Operations Documentation

This documentation covers the file operations module which includes functions for uploading, deleting, and retrieving files from storage.

## Functions

### uploadFile(file: File, payload: { name: string, user_id: string, file_id: string })

This function uploads a file to the storage. It takes two parameters:

- `file`: The file to be uploaded.
- `payload`: An object containing the following properties:
  - `name`: The name of the file.
  - `user_id`: The ID of the user uploading the file.
  - `file_id`: The ID of the file.

The function checks if the file size exceeds the limit defined in the environment variable `NEXT_PUBLIC_USER_FILE_SIZE_LIMIT`. If the file size exceeds the limit, an error is thrown.

The function then uploads the file to the storage and returns the file path. If there's an error during the upload, an error is thrown.

### deleteFileFromStorage(filePath: string)

This function deletes a file from the storage. It takes one parameter:

- `filePath`: The path of the file to be deleted.

The function attempts to remove the file from the storage. If there's an error during the removal, a toast error message is displayed.

### getFileFromStorage(filePath: string)

This function retrieves a file from the storage. It takes one parameter:

- `filePath`: The path of the file to be retrieved.

The function attempts to create a signed URL for the file, which is valid for 24 hours. If there's an error during this process, an error is thrown. If successful, the function returns the signed URL.

## Dependencies

This module depends on the following packages:

- `supabase`: Used for interacting with the storage.
- `sonner`: Used for displaying toast notifications.
