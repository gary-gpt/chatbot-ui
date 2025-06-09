---
source: lib/blob-to-b64.ts
generated: 2025-06-08T22:29:43.189Z
tags: []
hash: 50ac610f2ae7bb7c9e5026544af05cfb732fcb75a4301307def23decd140c4f0
---

# Documentation for `blob-to-b64.ts`

This file contains a single function `convertBlobToBase64` that is used to convert a Blob object to a Base64 string. This is often used when you need to encode binary data, for example when sending data over HTTP, or to display images in HTML.

## Function: convertBlobToBase64

This function takes a Blob object as input and returns a Promise that resolves to a string. The string is the Base64 representation of the input Blob.

```ts
export const convertBlobToBase64 = async (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}
```

### Parameters

- `blob` (Blob): The Blob object to be converted to a Base64 string.

### Returns

- Promise<string>: A Promise that resolves to a Base64 string representation of the input Blob.

### Logic

1. A new FileReader object is created.
2. The `onloadend` event handler is set to resolve the Promise with the result of the FileReader, which is the Base64 string representation of the Blob.
3. The `onerror` event handler is set to reject the Promise with the encountered error.
4. The `readAsDataURL` method is called on the FileReader object with the Blob as the argument. This method reads the Blob and when the load is finished, the result attribute contains a data: URL representing the Blob's data as a Base64 encoded string.

### Usage

This function is used when you need to convert a Blob to a Base64 string. For example, you might need to do this when you are sending an image over HTTP, or when you want to display an image in HTML.