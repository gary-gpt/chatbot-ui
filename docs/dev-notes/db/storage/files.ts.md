**📄 Source File:** `/db/storage/files.ts`  
**🕒 Generated:** 2025-06-07 14:17:36 UTC  
**🤖 Model:** gpt-4

---

# File: fileOperations.ts

This file provides functions for managing files in a Supabase storage bucket. It exports three functions: `uploadFile`, `deleteFileFromStorage`, and `getFileFromStorage`.

## `uploadFile(file: File, payload: { name: string, user_id: string, file_id: string })`

This function is used to upload a file to the Supabase storage. It takes two arguments: a `File` object and a `payload` object. The `payload` object should contain `name`, `user_id`, and `file_id` properties.

The function first checks if the file size exceeds the limit defined in the environment variable `NEXT_PUBLIC_USER_FILE_SIZE_LIMIT`. If the file size is larger than the limit, it throws an error.

The function then uploads the file to the Supabase storage bucket named "files". The file path in the bucket is determined by the `user_id` and `file_id` from the `payload` object. If the upload is successful, it returns the file path; otherwise, it throws an error.

## `deleteFileFromStorage(filePath: string)`

This function is used to delete a file from the Supabase storage. It takes a `filePath` string as an argument, which should be the path of the file in the storage bucket.

The function attempts to remove the file from the "files" bucket. If the deletion is successful, it doesn't return anything. If there's an error during the deletion, it shows an error toast message using the `toast` function from the "sonner" package.

## `getFileFromStorage(filePath: string)`

This function is used to get a file from the Supabase storage. It takes a `filePath` string as an argument, which should be the path of the file in the storage bucket.

The function attempts to create a signed URL for the file with a validity of 24 hours. If the operation is successful, it returns the signed URL; otherwise, it logs the error and throws an error.

## Interesting Structure or Nuance

The file path for the uploaded file is created by base64 encoding the `file_id` and appending it to the `user_id`. This could be a way to ensure unique file paths for each user and file.

The `uploadFile` function uses the `upsert` option when uploading the file. This means that if a file with the same path already exists in the bucket, it will be replaced with the new file.