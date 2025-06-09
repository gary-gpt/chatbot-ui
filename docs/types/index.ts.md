---
source: types/index.ts
generated: 2025-06-08T22:44:57.704Z
tags: []
hash: ef4b725a813295938839b413fc43a3e3cd88fd48100a6966848a7a24bfbd429f
---

# Chatbot UI Types Documentation

This document provides an overview of the `index.ts` file located in the `types` directory of the `chatbot-ui` project. The `index.ts` file serves as a central export point for all types used in the project.

## Code Overview

```ts
export * from "./announcement"
export * from "./assistant-retrieval-item"
export * from "./chat"
export * from "./chat-file"
export * from "./chat-message"
export * from "./collection-file"
export * from "./content-type"
export * from "./file-item-chunk"
export * from "./images/assistant-image"
export * from "./images/message-image"
export * from "./images/workspace-image"
export * from "./llms"
export * from "./models"
export * from "./sharing"
export * from "./sidebar-data"
```

## Code Breakdown

The `index.ts` file exports all types from various files in the `types` directory. Each line represents a different file from which types are exported.

### Export Statements

- `export * from "./announcement"`: Exports all types from the `announcement` file.
- `export * from "./assistant-retrieval-item"`: Exports all types from the `assistant-retrieval-item` file.
- `export * from "./chat"`: Exports all types from the `chat` file.
- `export * from "./chat-file"`: Exports all types from the `chat-file` file.
- `export * from "./chat-message"`: Exports all types from the `chat-message` file.
- `export * from "./collection-file"`: Exports all types from the `collection-file` file.
- `export * from "./content-type"`: Exports all types from the `content-type` file.
- `export * from "./file-item-chunk"`: Exports all types from the `file-item-chunk` file.
- `export * from "./images/assistant-image"`: Exports all types from the `assistant-image` file in the `images` directory.
- `export * from "./images/message-image"`: Exports all types from the `message-image` file in the `images` directory.
- `export * from "./images/workspace-image"`: Exports all types from the `workspace-image` file in the `images` directory.
- `export * from "./llms"`: Exports all types from the `llms` file.
- `export * from "./models"`: Exports all types from the `models` file.
- `export * from "./sharing"`: Exports all types from the `sharing` file.
- `export * from "./sidebar-data"`: Exports all types from the `sidebar-data` file.

By exporting all types from these files in the `index.ts` file, these types can be easily imported into other parts of the project from a single source.