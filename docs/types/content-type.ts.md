# Source Code Documentation

This source code file defines an `export type` named `ContentType`. This is a TypeScript type that is used to specify the type of content that can be handled by the application. 

## ContentType

`ContentType` is a union type, meaning it can be any one of the specified types. The possible values for `ContentType` are:

- `"chats"`
- `"presets"`
- `"prompts"`
- `"files"`
- `"collections"`
- `"assistants"`
- `"tools"`
- `"models"`

Each of these string literals represents a different type of content that the application can handle.

### `"chats"`

This represents a chat content type.

### `"presets"`

This represents a preset content type.

### `"prompts"`

This represents a prompt content type.

### `"files"`

This represents a file content type.

### `"collections"`

This represents a collection content type.

### `"assistants"`

This represents an assistant content type.

### `"tools"`

This represents a tool content type.

### `"models"`

This represents a model content type.

The `ContentType` type is exported, meaning it can be imported and used in other TypeScript files within the application.