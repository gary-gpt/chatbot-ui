---
source: types/chat-message.ts
generated: '2025-06-08T13:21:01.632Z'
tags: []
hash: 03badd25d900e5cdf360cceb993ff6e53892f9c1491320083ecfb5f00badb6fe
---
# ChatMessage Interface Documentation

This document provides a detailed explanation of the `ChatMessage` interface in the source code.

## Import Statement

The `ChatMessage` interface imports the `Tables` type from the `@/supabase/types` module.

```typescript
import { Tables } from "@/supabase/types"
```

## Interface Definition

The `ChatMessage` interface is defined as follows:

```typescript
export interface ChatMessage {
  message: Tables<"messages">
  fileItems: string[]
}
```

## Properties

The `ChatMessage` interface has two properties: `message` and `fileItems`.

### `message`

The `message` property is of type `Tables<"messages">`. This means that the `message` property is expected to be an object that matches the structure of the `messages` table in the Supabase database.

```typescript
message: Tables<"messages">
```

### `fileItems`

The `fileItems` property is an array of strings. Each string in the `fileItems` array represents a file item.

```typescript
fileItems: string[]
```

## Usage

The `ChatMessage` interface is typically used to type-check objects that represent chat messages. These objects should have a `message` property that matches the structure of the `messages` table in the Supabase database, and a `fileItems` property that is an array of strings.
