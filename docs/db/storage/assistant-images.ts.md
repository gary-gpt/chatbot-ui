# Documentation

## Functions

### uploadAssistantImage

This function is used to upload an image file for an assistant.

```typescript
export const uploadAssistantImage = async (
  assistant: Tables<"assistants">,
  image: File
) => {...}
```

#### Parameters

- `assistant` (Object): An object representing the assistant. This object is of type `Tables<"assistants">`.
- `image` (File): The image file to be uploaded.

#### Return

- Returns a string representing the file path of the uploaded image.

#### Errors

- Throws an error if the image size is greater than 6MB.
- Throws an error if there is an issue deleting the old image.
- Throws an error if there is an issue uploading the new image.

### getAssistantImageFromStorage

This function is used to get a signed URL for an assistant's image from storage.

```typescript
export const getAssistantImageFromStorage = async (filePath: string) => {...}
```

#### Parameters

- `filePath` (string): The file path of the image in storage.

#### Return

- Returns a string representing the signed URL of the image.

#### Errors

- Throws an error if there is an issue downloading the assistant's image.

## Dependencies

- This module depends on the `supabase` module from "@/lib/supabase/browser-client" and `Tables` type from "@/supabase/types".