---
source: types/images/message-image.ts
generated: '2025-06-08T13:21:01.648Z'
tags: []
hash: f7ded8164dbb641020ab2175dfc170ae536071d8f6977dbf14398f9a4a7610c2
---
# MessageImage Interface Documentation

The `MessageImage` interface is a TypeScript interface that defines the structure of an image related to a message. 

## Properties

Below are the properties of the `MessageImage` interface:

### `messageId: string`

This is a unique identifier for the message that the image is associated with. It is a string.

### `path: string`

This is the path where the image is located. It is a string.

### `base64: any`

This is the image data in base64 format. It can be of any type since base64 encoded data can be represented in several forms.

### `url: string`

This is the URL where the image is located or can be accessed from. It is a string.

### `file: File | null`

This is the File object representing the image file. It can also be `null` if there is no file associated.

## Usage

The `MessageImage` interface is used when you need to work with images associated with messages. You can use it to define a type for your variables, function parameters, and return values.

Here is an example:

```typescript
let messageImage: MessageImage = {
  messageId: '123',
  path: '/path/to/image',
  base64: 'base64encodedstring',
  url: 'http://example.com/path/to/image',
  file: null
};
```

In this example, `messageImage` is a variable of type `MessageImage`.
