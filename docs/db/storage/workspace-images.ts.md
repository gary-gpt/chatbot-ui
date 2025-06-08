---
source: db/storage/workspace-images.ts
generated: '2025-06-08T13:21:01.646Z'
tags: []
hash: 8e16443eac08a4c186864ca73bc8ac81be41cee5d0874e3a06a1e1f1777af17c
---
# Documentation

## Functions

### `uploadWorkspaceImage(workspace: Tables<"workspaces">, image: File)`

This function is used to upload an image to a workspace. The function takes two parameters:

- `workspace`: An object of the workspace where the image will be uploaded. The object is of type `Tables<"workspaces">`.
- `image`: The image file to be uploaded. The image file should be of type `File`.

The function first checks if the size of the image is less than the limit (6MB). If the image size is greater than the limit, an error is thrown.

If the workspace already has an image, the function deletes the old image before uploading the new one.

The function returns the file path of the uploaded image.

### `getWorkspaceImageFromStorage(filePath: string)`

This function is used to get a signed URL for the workspace image from the storage. The function takes one parameter:

- `filePath`: The file path of the image in the storage.

The function creates a signed URL for the image that is valid for 24 hours.

If there is an error while creating the signed URL, an error is thrown.

The function returns the signed URL for the image.

## Errors

The functions throw errors in the following scenarios:

- If the size of the image to be uploaded is greater than the limit (6MB), an error is thrown with the message "Image must be less than 6MB".
- If there is an error while deleting the old image, an error is thrown with the message "Error deleting old image".
- If there is an error while uploading the image, an error is thrown with the message "Error uploading image".
- If there is an error while creating the signed URL for the image, an error is thrown with the message "Error downloading workspace image".
