---
source: types/images/workspace-image.ts
generated: '2025-06-08T13:21:01.648Z'
tags: []
hash: d549fb87810ada7864d482f2fe6e20bd378293cb1cda936e8252a45bce467b04
---
# WorkspaceImage Interface Documentation

The `WorkspaceImage` interface is a TypeScript interface that represents the structure of an image associated with a specific workspace.

## Interface Definition

```typescript
export interface WorkspaceImage {
  workspaceId: string
  path: string
  base64: any // base64 image
  url: string
}
```

## Properties

### `workspaceId: string`

This is a unique identifier for the workspace to which the image is associated. It is a string value.

### `path: string`

This property represents the path of the image file in the system. It is a string value.

### `base64: any`

This property holds the base64 representation of the image. This is useful for directly embedding the image in web pages or other contexts where a direct file path may not be usable. The type of this property is `any`, but it is typically expected to be a string of base64-encoded data.

### `url: string`

This property represents the URL where the image is hosted or can be accessed from. It is a string value.

## Usage

This interface is typically used when dealing with operations related to workspace images, such as uploading, retrieving, or displaying images associated with a workspace. The `workspaceId` can be used to link the image to the correct workspace, while the `path`, `base64`, and `url` properties provide different ways to access the image data itself.
