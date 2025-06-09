---
source: db/storage/workspace-images.ts
generated: 2025-06-08T22:27:48.602Z
tags: []
hash: 2aa40a9acfa6b9675c881e81b803712d5e656c9d9b6ccc7063bd4cee721b53aa
---

# Workspace Images Module Documentation

This module, located at `/Users/garymason/chatbot-ui/db/storage/workspace-images.ts`, contains two functions for handling workspace images in a chatbot application. These functions interact with a Supabase database to upload and retrieve workspace images.

## Imports

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { Tables } from "@/supabase/types"
```

The module imports the `supabase` client from the application's Supabase library and the `Tables` type from the application's Supabase types.

## uploadWorkspaceImage Function

```ts
export const uploadWorkspaceImage = async (
  workspace: Tables<"workspaces">,
  image: File
) => {
  // Function body
}
```

This function uploads a workspace image to the Supabase storage. It takes two parameters: `workspace`, which is an object of the `Tables<"workspaces">` type, and `image`, which is a `File` object representing the image to be uploaded.

The function first checks if the size of the image exceeds a limit of 6MB. If the image size is too large, it throws an error.

If a current image exists for the workspace (i.e., `workspace.image_path` is not empty), the function deletes the old image from the storage. If an error occurs during the deletion, it throws an error.

Finally, the function uploads the new image to the storage. If an error occurs during the upload, it throws an error. If the upload is successful, the function returns the file path of the uploaded image.

## getWorkspaceImageFromStorage Function

```ts
export const getWorkspaceImageFromStorage = async (filePath: string) => {
  // Function body
}
```

This function retrieves a workspace image from the Supabase storage. It takes one parameter: `filePath`, which is a string representing the file path of the image in the storage.

The function creates a signed URL for the image, which is valid for 24 hours. If an error occurs during this process, it throws an error. If the process is successful, the function returns the signed URL.

If any other error occurs during the execution of the function, it logs the error to the console.