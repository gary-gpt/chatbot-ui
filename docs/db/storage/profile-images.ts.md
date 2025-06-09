---
source: db/storage/profile-images.ts
generated: 2025-06-08T22:27:32.130Z
tags: []
hash: cef3b8e7acf440ecb111583e617f9946240868543cd9de1169db462b12bbfdeb
---

# Profile Image Upload Functionality

This TypeScript file, located at `/Users/garymason/chatbot-ui/db/storage/profile-images.ts`, provides a function to handle the upload of profile images in a chatbot application. 

## Code Summary

The function `uploadProfileImage` accepts two arguments: a `profile` object and an `image` file. It checks the size of the image, deletes any existing profile image, uploads the new image to a specified storage bucket, and returns the path and URL of the uploaded image.

## Detailed Breakdown

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { Tables } from "@/supabase/types"
```
The above lines import the necessary modules. `supabase` is a hosted backend service that provides user authentication, database management, and storage functionality. `Tables` is a type from the Supabase module.

```ts
export const uploadProfileImage = async (
  profile: Tables<"profiles">,
  image: File
) => {
```
This line declares an asynchronous function `uploadProfileImage` that takes two parameters: `profile` and `image`.

```ts
  const bucket = "profile_images"
```
This line sets the name of the storage bucket where the profile images will be stored.

```ts
  const imageSizeLimit = 2000000 // 2MB
```
This line sets the maximum size limit for the image file to 2MB.

```ts
  if (image.size > imageSizeLimit) {
    throw new Error(`Image must be less than ${imageSizeLimit / 1000000}MB`)
  }
```
This block checks if the size of the image is greater than the limit. If it is, an error is thrown.

```ts
  const currentPath = profile.image_path
  let filePath = `${profile.user_id}/${Date.now()}`
```
These lines get the current image path from the profile and generate a new file path for the new image.

```ts
  if (currentPath.length > 0) {
    const { error: deleteError } = await supabase.storage
      .from(bucket)
      .remove([currentPath])

    if (deleteError) {
      throw new Error("Error deleting old image")
    }
  }
```
This block checks if there is an existing image. If there is, it deletes the image from the storage bucket. If there's an error during deletion, it throws an error.

```ts
  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, image, {
      upsert: true
    })

  if (error) {
    throw new Error("Error uploading image")
  }
```
This block uploads the new image to the storage bucket. If there's an error during upload, it throws an error.

```ts
  const { data: getPublicUrlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath)

  return {
    path: filePath,
    url: getPublicUrlData.publicUrl
  }
}
```
This block gets the public URL of the uploaded image and returns an object containing the file path and the URL of the image.