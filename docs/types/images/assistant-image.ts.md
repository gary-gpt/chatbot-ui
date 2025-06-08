---
source: types/images/assistant-image.ts
generated: '2025-06-08T13:21:01.648Z'
tags: []
hash: 621e3c23016adb6760d24c83841ca99b6615f9e739651f7890f0dc34f92c462c
---
# AssistantImage Interface Documentation

The `AssistantImage` interface is a TypeScript interface used to define the structure of an image associated with a specific assistant.

## Properties

### `assistantId: string`

This property represents the unique identifier of the assistant. It is a string.

### `path: string`

This property represents the path where the image is stored. It is a string.

### `base64: any`

This property holds the base64 encoded representation of the image. It can be of any type, but it's typically a string.

### `url: string`

This property represents the URL of the image. It is a string.

## Example

```typescript
let assistantImage: AssistantImage = {
  assistantId: "123",
  path: "/images/assistant_123.png",
  base64: "iVBORw0KGg...",
  url: "http://example.com/images/assistant_123.png"
}
```

In the above example, an `AssistantImage` object is created with an `assistantId` of "123", a `path` of "/images/assistant_123.png", a `base64` representation of the image, and a `url` of "http://example.com/images/assistant_123.png".
