---
source: types/assistant-retrieval-item.ts
generated: '2025-06-08T13:21:01.632Z'
tags: []
hash: f3cd3bffba534b4e39a1c7f24c03fbe2b9c34a434ea2b88c89a8a6884f447384
---
# AssistantRetrievalItem Interface

The `AssistantRetrievalItem` interface is a TypeScript interface that defines the structure of an object that is used to retrieve assistant-related data.

## Properties

### `id`

The `id` is a string that represents the unique identifier of the assistant retrieval item.

```typescript
id: string
```

### `name`

The `name` is a string that represents the name of the assistant retrieval item.

```typescript
name: string
```

### `type`

The `type` is a string that represents the type of the assistant retrieval item.

```typescript
type: string
```

## Usage

The `AssistantRetrievalItem` interface is typically used where you need to ensure that an object has a specific structure. For example, when retrieving assistant-related data from a database or an API, you can use this interface to ensure that the data you retrieve has the correct structure.

```typescript
let assistantItem: AssistantRetrievalItem = {
  id: '1',
  name: 'Assistant Name',
  type: 'Assistant Type'
};
```

In the above example, `assistantItem` is an object that adheres to the `AssistantRetrievalItem` interface. It has an `id`, a `name`, and a `type` property, all of which are strings.
