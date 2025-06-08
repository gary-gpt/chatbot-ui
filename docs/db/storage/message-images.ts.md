---
source: db/storage/message-images.ts
generated: '2025-06-08T13:21:01.646Z'
tags: []
hash: cc635aa372b9fca94e1cbe8d48a7b91621f359fc4fa6def20201985ad8c1fc92
---
# Documentation

## Functions

### uploadMessageImage

This function is used to upload an image to a Supabase storage bucket.

```typescript
uploadMessageImage(path: string, image: File): Promise<string>
```

#### Parameters

- `path` (string): The path where the image will be stored in the bucket.
- `image` (File): The image file to be uploaded.

#### Returns

- A promise that resolves to the path where the image was stored.

#### Errors

- Throws an error if the image size is greater than 6MB.
- Throws an error if there was an issue uploading the image to Supabase.

### getMessageImageFromStorage

This function is used to get a signed URL for an image from a Supabase storage bucket. The URL is valid for 24 hours.

```typescript
getMessageImageFromStorage(filePath: string): Promise<string>
```

#### Parameters

- `filePath` (string): The path where the image is stored in the bucket.

#### Returns

- A promise that resolves to the signed URL for the image.

#### Errors

- Throws an error if there was an issue generating the signed URL for the image.

## Usage

First, import the functions:

```typescript
import { uploadMessageImage, getMessageImageFromStorage } from "@/lib/supabase/browser-client"
```

Then, you can use them to upload an image and get its URL:

```typescript
const path = 'path/to/image.png'
const image = new File([''], 'filename')

uploadMessageImage(path, image)
  .then(path => console.log(`Image uploaded at ${path}`))
  .catch(error => console.error(`Error uploading image: ${error}`))

getMessageImageFromStorage(path)
  .then(url => console.log(`Image URL: ${url}`))
  .catch(error => console.error(`Error getting image URL: ${error}`))
```
