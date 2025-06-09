---
source: db/storage/message-images.ts
generated: 2025-06-08T22:27:13.582Z
tags: []
hash: d86ecc0b2b4821673ca04e216c61b0d7520b06ac839d71479f563510a7c1731d
---

# Message Images Storage Module

This module is located at `/Users/garymason/chatbot-ui/db/storage/message-images.ts` and it is responsible for handling the upload and retrieval of message images in a chatbot application. It uses Supabase, a Firebase alternative, for handling storage operations.

## Code Overview

This module exports two main functions:

1. `uploadMessageImage`: This function is used to upload an image to the Supabase storage.
2. `getMessageImageFromStorage`: This function is used to retrieve an image from the Supabase storage.

### Importing Dependencies

```ts
import { supabase } from "@/lib/supabase/browser-client"
```

The module imports the `supabase` client from the local library. This client is used to interact with the Supabase service.

### Upload Message Image Function

```ts
export const uploadMessageImage = async (path: string, image: File) => {
  const bucket = "message_images"

  const imageSizeLimit = 6000000 // 6MB

  if (image.size > imageSizeLimit) {
    throw new Error(`Image must be less than ${imageSizeLimit / 1000000}MB`)
  }

  const { error } = await supabase.storage.from(bucket).upload(path, image, {
    upsert: true
  })

  if (error) {
    throw new Error("Error uploading image")
  }

  return path
}
```

The `uploadMessageImage` function is an asynchronous function that takes two parameters: `path` and `image`. The `path` is the location where the image will be stored in the Supabase storage, and `image` is the file to be uploaded.

The function first defines the name of the bucket where the images will be stored. It then checks if the size of the image is less than the limit (6MB). If the image size is larger than the limit, it throws an error.

The function then attempts to upload the image to the Supabase storage. If an error occurs during this process, it throws an error. If the upload is successful, it returns the path where the image was stored.

### Get Message Image From Storage Function

```ts
export const getMessageImageFromStorage = async (filePath: string) => {
  const { data, error } = await supabase.storage
    .from("message_images")
    .createSignedUrl(filePath, 60 * 60 * 24) // 24hrs

  if (error) {
    throw new Error("Error downloading message image")
  }

  return data.signedUrl
}
```

The `getMessageImageFromStorage` function is an asynchronous function that takes a `filePath` as a parameter. This `filePath` is the location of the image in the Supabase storage.

The function attempts to create a signed URL for the image, which is valid for 24 hours. If an error occurs during this process, it throws an error. If the operation is successful, it returns the signed URL. This URL can be used to download the image.