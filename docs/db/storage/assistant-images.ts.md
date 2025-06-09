---
source: db/storage/assistant-images.ts
generated: 2025-06-08T22:26:42.993Z
tags: []
hash: 7d2348f3e80bf608b9d686ded5f766b1a2db6a8d15d4e551eb7d74070901d8c7
---

# Assistant Images Module Documentation

This module is located at `/Users/garymason/chatbot-ui/db/storage/assistant-images.ts`. It provides functionality for uploading and retrieving assistant images from a Supabase storage bucket.

## Imports

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { Tables } from "@/supabase/types"
```

The module imports the `supabase` client from the `browser-client` module, which is used to interact with the Supabase API. It also imports the `Tables` type from the `types` module, which is used to type-check the `assistant` parameter.

## Functions

### uploadAssistantImage

```ts
export const uploadAssistantImage = async (
  assistant: Tables<"assistants">,
  image: File
) => {
  // ...
}
```

This function uploads an image file to the `assistant_images` bucket in Supabase storage. The image file is associated with a specific assistant, and the path to the file in the bucket is based on the assistant's user ID and assistant ID.

The function first checks if the image file size is less than 6MB. If it's larger, an error is thrown.

If the assistant already has an image, the function deletes the old image before uploading the new one.

The function returns the path to the uploaded image file.

### getAssistantImageFromStorage

```ts
export const getAssistantImageFromStorage = async (filePath: string) => {
  // ...
}
```

This function retrieves an image file from the `assistant_images` bucket in Supabase storage. The path to the file in the bucket is passed as a parameter.

The function creates a signed URL for the image file, which is valid for 24 hours. If there's an error creating the signed URL, an error is thrown.

The function returns the signed URL.

## Errors

The module defines several custom error messages to handle different error conditions:

- "Image must be less than 6MB": Thrown when the image file size is larger than the limit.
- "Error deleting old image": Thrown when there's an error deleting the assistant's old image.
- "Error uploading image": Thrown when there's an error uploading the new image.
- "Error downloading assistant image": Thrown when there's an error creating the signed URL for the image.