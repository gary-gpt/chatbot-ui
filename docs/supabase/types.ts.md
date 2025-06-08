---
source: "supabase/types.ts"
generated: "2025-06-08T16:56:44.145Z"
hash: "0fb5be9fcfa557b20ed50abbb6ea102bfb490c72ee417fa3a1298ce2fbfe38b5"
tags: []
---

# Types.ts Documentation

This file, located at `/Users/garymason/chatbot-ui/supabase/types.ts`, contains TypeScript type definitions for the chatbot UI. These types are used to define the structure of the data that is used within the application.

## Code Summary

The file exports two main types: `Json` and `Database`. 

### Json Type

The `Json` type is a recursive type that can represent any valid JSON data. It can be a string, number, boolean, null, an object with string keys and `Json` values, or an array of `Json` values.

```ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]
```

### Database Type

The `Database` type represents the structure of the database used in the application. It is divided into two main sections: `graphql_public` and `public`.

```ts
export type Database = {
  graphql_public: {...}
  public: {...}
}
```

#### Graphql_public

The `graphql_public` section defines the structure of the GraphQL public schema. It includes definitions for Tables, Views, Functions, Enums, and CompositeTypes. However, in this code, all these sections are defined as never, indicating that they are not used.

```ts
graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {...}
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
```

The only exception is the `Functions` section which defines a `graphql` function that takes an `Args` object and returns a `Json` object.

#### Public

The `public` section defines the structure of the public tables in the database. Each table has a `Row`, `Insert`, `Update`, and `Relationships` section.

```ts
public: {
    Tables: {
      assistant_collections: {...}
      assistant_files: {...}
      assistant_tools: {...}
      assistant_workspaces: {...}
      assistants: {...}
    }
}
```

Each `Row` section defines the structure of a row in the table. The `Insert` and `Update` sections define the structure of data for inserting and updating rows in the table. The `Relationships` section defines the foreign key relationships that the table has with other tables.

For example, the `assistant_collections` table has a `Row` section that defines a row to have `assistant_id`, `collection_id`, `created_at`, `updated_at`, and `user_id`. The `Insert` and `Update` sections define similar structures but with optional properties. The `Relationships` section defines two foreign key relationships with the `assistants` and `collections` tables.

```ts
assistant_collections: {
        Row: {...}
        Insert: {...}
        Update: {...}
        Relationships: [...]
      }
```

The other tables (`assistant_files`, `assistant_tools`, `assistant_workspaces`, `assistants`) follow a similar structure.

# Supabase Types Documentation

This file is located at `/Users/garymason/chatbot-ui/supabase/types.ts`. It contains TypeScript type definitions for various entities in a chatbot application. These entities include assistants, chat files, chats, collection files, and collection workspaces.

## Assistants

The `assistants` entity represents the chatbot assistants in the application.

```ts
assistants: {
  Row: {
    id: string
    name: string
    description: string
    model: string
    temperature: number
    max_tokens: number
    top_p: number
    frequency_penalty: number
    presence_penalty: number
    stop_sequence: string | null
    created_at: string
    updated_at: string | null
    user_id: string
  }
  Insert: {
    id?: string
    name?: string
    description?: string
    model?: string
    temperature?: number
    max_tokens?: number
    top_p?: number
    frequency_penalty?: number
    presence_penalty?: number
    stop_sequence?: string | null
    created_at?: string
    updated_at?: string | null
    user_id?: string
  }
  Update: {
    id?: string
    name?: string
    description?: string
    model?: string
    temperature?: number
    max_tokens?: number
    top_p?: number
    frequency_penalty?: number
    presence_penalty?: number
    stop_sequence?: string | null
    created_at?: string
    updated_at?: string | null
    user_id?: string
  }
  Relationships: [
    {
      foreignKeyName: "assistants_folder_id_fkey"
      columns: ["folder_id"]
      isOneToOne: false
      referencedRelation: "folders"
      referencedColumns: ["id"]
    },
  ]
}
```

## Chat Files

The `chat_files` entity represents the files in a chat.

```ts
chat_files: {
  Row: {
    chat_id: string
    created_at: string
    file_id: string
    updated_at: string | null
    user_id: string
  }
  Insert: {
    chat_id: string
    created_at?: string
    file_id: string
    updated_at?: string | null
    user_id: string
  }
  Update: {
    chat_id?: string
    created_at?: string
    file_id?: string
    updated_at?: string | null
    user_id?: string
  }
  Relationships: [
    {
      foreignKeyName: "chat_files_chat_id_fkey"
      columns: ["chat_id"]
      isOneToOne: false
      referencedRelation: "chats"
      referencedColumns: ["id"]
    },
    {
      foreignKeyName: "chat_files_file_id_fkey"
      columns: ["file_id"]
      isOneToOne: false
      referencedRelation: "files"
      referencedColumns: ["id"]
    },
  ]
}
```

## Chats

The `chats` entity represents the chats in the application.

```ts
chats: {
  Row: {
    assistant_id: string | null
    context_length: number
    created_at: string
    embeddings_provider: string
    folder_id: string | null
    id: string
    include_profile_context: boolean
    include_workspace_instructions: boolean
    model: string
    name: string
    prompt: string
    sharing: string
    temperature: number
    updated_at: string | null
    user_id: string
    workspace_id: string
  }
  Insert: {
    assistant_id?: string | null
    context_length: number
    created_at?: string
    embeddings_provider: string
    folder_id?: string | null
    id?: string
    include_profile_context: boolean
    include_workspace_instructions: boolean
    model: string
    name: string
    prompt: string
    sharing?: string
    temperature: number
    updated_at?: string | null
    user_id: string
    workspace_id: string
  }
  Update: {
    assistant_id?: string | null
    context_length?: number
    created_at?: string
    embeddings_provider?: string
    folder_id?: string | null
    id?: string
    include_profile_context?: boolean
    include_workspace_instructions?: boolean
    model?: string
    name?: string
    prompt?: string
    sharing?: string
    temperature?: number
    updated_at?: string | null
    user_id?: string
    workspace_id?: string
  }
  Relationships: [
    {
      foreignKeyName: "chats_assistant_id_fkey"
      columns: ["assistant_id"]
      isOneToOne: false
      referencedRelation: "assistants"
      referencedColumns: ["id"]
    },
    {
      foreignKeyName: "chats_folder_id_fkey"
      columns: ["folder_id"]
      isOneToOne: false
      referencedRelation: "folders"
      referencedColumns: ["id"]
    },
    {
      foreignKeyName: "chats_workspace_id_fkey"
      columns: ["workspace_id"]
      isOneToOne: false
      referencedRelation: "workspaces"
      referencedColumns: ["id"]
    },
  ]
}
```

## Collection Files

The `collection_files` entity represents the files in a collection.

```ts
collection_files: {
  Row: {
    collection_id: string
    created_at: string
    file_id: string
    updated_at: string | null
    user_id: string
  }
  Insert: {
    collection_id: string
    created_at?: string
    file_id: string
    updated_at?: string | null
    user_id: string
  }
  Update: {
    collection_id?: string
    created_at?: string
    file_id?: string
    updated_at?: string | null
    user_id?: string
  }
  Relationships: [
    {
      foreignKeyName: "collection_files_collection_id_fkey"
      columns: ["collection_id"]
      isOneToOne: false
      referencedRelation: "collections"
      referencedColumns: ["id"]
    },
    {
      foreignKeyName: "collection_files_file_id_fkey"
      columns: ["file_id"]
      isOneToOne: false
      referencedRelation: "files"
      referencedColumns: ["id"]
    },
  ]
}
```

## Collection Workspaces

The `collection_workspaces` entity represents the workspaces in a collection.

```ts
collection_workspaces: {
  Row: {
    collection_id: string
    created_at: string
    updated_at: string | null
    user_id: string
    workspace_id: string
  }
  Insert: {
    collection_id: string
    created_at?: string
    updated_at?: string | null
    user_id: string
    workspace_id: string
  }
  Update: {
    collection_id?: string
    created_at?: string
    updated_at?: string | null
    user_id?: string
    workspace_id?: string
  }
  Relationships: [
    {
      foreignKeyName: "collection_workspaces_collection_id_fkey"
      columns: ["collection_id"]
      isOneToOne: false
      referencedRelation: "collections"
      referencedColumns: ["id"]
    },
    {
      foreignKeyName: "collection_workspaces_workspace_id_fkey"
      columns: ["workspace_id"]
      isOneToOne: false
      referencedRelation: "workspaces"
      referencedColumns: ["id"]
    },
  ]
}
```

Each entity has `Row`, `Insert`, `Update`, and `Relationships` fields. The `Row` field describes the structure of a row in the corresponding database table. The `Insert` and `Update` fields describe the structure of data for inserting a new row and updating an existing row, respectively. The `Relationships` field describes the foreign key relationships with other tables.

# Supabase Types Documentation

This document describes the TypeScript types defined in the file `/Users/garymason/chatbot-ui/supabase/types.ts`. These types are used to define the structure of various entities in a chatbot application, such as collections, workspaces, file items, and folders.

## Collections

A collection is a group of related items. Each collection has a unique `id`, a `name`, a `description`, and a `user_id` to identify the user who owns the collection. It also has `created_at` and `updated_at` timestamps, a `sharing` status, and a `folder_id` which can be `null` if the collection is not in a folder.

```ts
collections: {
  Row: {
    created_at: string
    description: string
    folder_id: string | null
    id: string
    name: string
    sharing: string
    updated_at: string | null
    user_id: string
  }
  // ...
}
```

## File Items

A file item represents a single file in the system. Each file item has a unique `id`, a `content`, a `file_id` to identify the file it belongs to, and a `user_id` to identify the user who owns the file item. It also has `created_at` and `updated_at` timestamps, a `sharing` status, a `tokens` count, and `local_embedding` and `openai_embedding` fields which can be `null`.

```ts
file_items: {
  Row: {
    content: string
    created_at: string
    file_id: string
    id: string
    local_embedding: string | null
    openai_embedding: string | null
    sharing: string
    tokens: number
    updated_at: string | null
    user_id: string
  }
  // ...
}
```

## File Workspaces

A file workspace represents a workspace in the system that contains files. Each file workspace has a unique `id`, a `file_id` to identify the file it contains, a `workspace_id` to identify the workspace it belongs to, and a `user_id` to identify the user who owns the file workspace. It also has `created_at` and `updated_at` timestamps.

```ts
file_workspaces: {
  Row: {
    created_at: string
    file_id: string
    updated_at: string | null
    user_id: string
    workspace_id: string
  }
  // ...
}
```

## Files

A file represents a single file in the system. Each file has a unique `id`, a `name`, a `description`, a `file_path`, a `type`, a `size`, a `tokens` count, and a `user_id` to identify the user who owns the file. It also has `created_at` and `updated_at` timestamps, a `sharing` status, and a `folder_id` which can be `null` if the file is not in a folder.

```ts
files: {
  Row: {
    created_at: string
    description: string
    file_path: string
    folder_id: string | null
    id: string
    name: string
    sharing: string
    size: number
    tokens: number
    type: string
    updated_at: string | null
    user_id: string
  }
  // ...
}
```

## Folders

A folder represents a container for files and collections in the system. Each folder has a unique `id`, a `name`, a `description`, a `type`, and a `user_id` to identify the user who owns the folder. It also has `created_at` and `updated_at` timestamps and a `workspace_id` to identify the workspace it belongs to.

```ts
folders: {
  Row: {
    created_at: string
    description: string
    id: string
    name: string
    type: string
    updated_at: string | null
    user_id: string
    workspace_id: string
  }
  // ...
}
```

Each of these entities also includes `Insert` and `Update` types for creating and updating instances of the entity, as well as `Relationships` that define foreign key relationships with other entities.

# Supabase Types Documentation

This TypeScript file, located at `/Users/garymason/chatbot-ui/supabase/types.ts`, defines various types used in a chatbot application. These types represent the structure of different entities in the application, such as messages, workspaces, models, and more. 

## Code Overview

The code is organized into several sections, each representing a different entity. Each entity has the following properties:

- `Row`: Defines the structure of a row in the database table for the entity.
- `Insert`: Defines the structure of the data required to insert a new row into the database table.
- `Update`: Defines the structure of the data required to update an existing row in the database table.
- `Relationships`: Defines the relationships between this entity and others in the database.

## Detailed Breakdown

### Memory

The `Memory` entity has the following properties:

- `category`: The category of the memory, can be null.
- `content`: The content of the memory, can be null.
- `created_at`: The timestamp when the memory was created.
- `id`: The unique identifier of the memory.
- `project_name`: The name of the project associated with the memory, can be null.
- `tags`: The tags associated with the memory, can be null.

### Memory_old

The `Memory_old` entity is similar to `Memory`, but it also includes an `updated_at` field to track when the memory was last updated.

### message_file_items

The `message_file_items` entity represents the relationship between messages and file items. It includes two foreign keys: `message_file_items_file_item_id_fkey` and `message_file_items_message_id_fkey`.

### messages

The `messages` entity represents the messages in the chat. It includes properties such as `assistant_id`, `chat_id`, `content`, `created_at`, `id`, `image_paths`, `model`, `role`, `sequence_number`, `updated_at`, and `user_id`.

### model_workspaces

The `model_workspaces` entity represents the relationship between models and workspaces. It includes two foreign keys: `model_workspaces_model_id_fkey` and `model_workspaces_workspace_id_fkey`.

### models

The `models` entity represents the models used in the chatbot. It includes properties such as `api_key`, `base_url`, `context_length`, `created_at`, `description`, `folder_id`, `id`, `model_id`, `name`, `sharing`, `updated_at`, and `user_id`.

## Conclusion

This TypeScript file is crucial for defining the structure and relationships of various entities in the chatbot application. It helps ensure that the application handles data consistently and correctly.

# Supabase Types Documentation

This file is located at `/Users/garymason/chatbot-ui/supabase/types.ts`. It contains TypeScript types used in the chatbot UI project. The types are used to define the structure of data in different parts of the application, including models, preset workspaces, presets, and profiles.

## Models

The `models` type is defined with the following properties:

- `Row`: This is the type for a single row in the models table. It contains properties such as `description`, `folder_id`, `id`, `model_id`, `name`, `sharing`, `updated_at`, and `user_id`.
- `Insert`: This is the type for inserting a new row in the models table. It is similar to `Row`, but all properties are optional.
- `Update`: This is the type for updating a row in the models table. It is similar to `Insert`.
- `Relationships`: This is an array of relationship objects. Each relationship object describes a foreign key relationship with another table.

```ts
models: {
  Row: {
    description: string
    folder_id?: string | null
    id?: string
    model_id: string
    name: string
    sharing?: string
    updated_at?: string | null
    user_id: string
  }
  // ... other properties
}
```

## Preset Workspaces

The `preset_workspaces` type is defined similarly to `models`. It has `Row`, `Insert`, `Update`, and `Relationships` properties.

```ts
preset_workspaces: {
  Row: {
    created_at: string
    preset_id: string
    updated_at: string | null
    user_id: string
    workspace_id: string
  }
  // ... other properties
}
```

## Presets

The `presets` type is defined similarly to `models` and `preset_workspaces`. It also has `Row`, `Insert`, `Update`, and `Relationships` properties.

```ts
presets: {
  Row: {
    context_length: number
    created_at: string
    description: string
    embeddings_provider: string
    folder_id: string | null
    id: string
    include_profile_context: boolean
    include_workspace_instructions: boolean
    model: string
    name: string
    prompt: string
    sharing: string
    temperature: number
    updated_at: string | null
    user_id: string
  }
  // ... other properties
}
```

## Profiles

The `profiles` type is defined similarly to the other types. It also has `Row`, `Insert`, and `Update` properties.

```ts
profiles: {
  Row: {
    anthropic_api_key: string | null
    azure_openai_35_turbo_id: string | null
    azure_openai_45_turbo_id: string | null
    azure_openai_45_vision_id: string | null
    azure_openai_api_key: string | null
    azure_openai_embeddings_id: string | null
    azure_openai_endpoint: string | null
    bio: string
    created_at: string
    display_name: string
    google_gemini_api_key: string | null
    groq_api_key: string | null
    has_onboarded: boolean
    id: string
    image_path: string
    image_url: string
    mistral_api_key: string | null
    openai_api_key: string | null
    openai_organization_id: string | null
    openrouter_api_key: string | null
    perplexity_api_key: string | null
    profile_context: string
    updated_at: string | null
    use_azure_openai: boolean
    user_id: string
    username: string
  }
  // ... other properties
}
```

Each of these types is used to ensure the data consistency and integrity in the application.

# Supabase Types Documentation

This document explains the purpose and logic of the TypeScript file located at `/Users/garymason/chatbot-ui/supabase/types.ts`. The file defines various types that represent the structure of different entities in the application.

## Table of Contents

- [User](#user)
- [Prompt Workspaces](#prompt-workspaces)
- [Prompts](#prompts)
- [Tool Workspaces](#tool-workspaces)
- [Tools](#tools)
- [Workspaces](#workspaces)

## User

The `User` type represents a user in the application. It includes various properties related to the user's profile, API keys for different services, and other user-specific settings.

```ts
azure_openai_45_vision_id?: string | null
azure_openai_api_key?: string | null
azure_openai_embeddings_id?: string | null
azure_openai_endpoint?: string | null
bio?: string
created_at?: string
display_name?: string
google_gemini_api_key?: string | null
groq_api_key?: string | null
has_onboarded?: boolean
id?: string
image_path?: string
image_url?: string
mistral_api_key?: string | null
openai_api_key?: string | null
openai_organization_id?: string | null
openrouter_api_key?: string | null
perplexity_api_key?: string | null
profile_context?: string
updated_at?: string | null
use_azure_openai?: boolean
user_id?: string
username?: string
```

## Prompt Workspaces

The `prompt_workspaces` type represents the relationship between prompts and workspaces. It includes properties for the prompt ID, workspace ID, user ID, and timestamps for creation and updates.

```ts
prompt_workspaces: {
  Row: {
    created_at: string
    prompt_id: string
    updated_at: string | null
    user_id: string
    workspace_id: string
  }
  // ...
}
```

## Prompts

The `prompts` type represents a prompt in the application. It includes properties for the prompt content, name, sharing status, and associated folder ID, among others.

```ts
prompts: {
  Row: {
    content: string
    created_at: string
    folder_id: string | null
    id: string
    name: string
    sharing: string
    updated_at: string | null
    user_id: string
  }
  // ...
}
```

## Tool Workspaces

The `tool_workspaces` type represents the relationship between tools and workspaces. It includes properties for the tool ID, workspace ID, user ID, and timestamps for creation and updates.

```ts
tool_workspaces: {
  Row: {
    created_at: string
    tool_id: string
    updated_at: string | null
    user_id: string
    workspace_id: string
  }
  // ...
}
```

## Tools

The `tools` type represents a tool in the application. It includes properties for the tool's name, description, URL, custom headers, and associated folder ID, among others.

```ts
tools: {
  Row: {
    created_at: string
    custom_headers: Json
    description: string
    folder_id: string | null
    id: string
    name: string
    schema: Json
    sharing: string
    updated_at: string | null
    url: string
    user_id: string
  }
  // ...
}
```

## Workspaces

The `workspaces` type represents a workspace in the application. It includes properties for the workspace's name, description, default settings, and associated user ID, among others.

```ts
workspaces: {
  Row: {
    created_at: string
    default_context_length: number
    default_model: string
    default_prompt: string
    default_temperature: number
    description: string
    embeddings_provider: string
    id: string
    image_path: string
    include_profile_context: boolean
    include_workspace_instructions: boolean
    instructions: string
    is_home: boolean
    name: string
    sharing: string
    updated_at: string | null
    user_id: string
  }
  // ...
}
```

Each type also includes `Insert` and `Update` interfaces that define the structure of data when creating or updating entities. Additionally, the `Relationships` array defines foreign key relationships between different entities.

# Code Documentation for `types.ts` in `chatbot-ui` Project

This TypeScript file defines various types used in the `chatbot-ui` project. These types are used to define the structure of data for different operations like Insert, Update, and the structure of function arguments and return types.

## Table of Contents

- [Chatbot](#chatbot)
  - [Insert](#insert)
  - [Update](#update)
- [Functions](#functions)
- [Storage](#storage)
  - [Buckets](#buckets)
  - [Migrations](#migrations)
  - [Objects](#objects)

## Chatbot

### Insert

The `Insert` type is used to define the structure of data when a new chatbot is being created. It includes properties like `default_context_length`, `default_model`, `default_prompt`, etc.

```ts
Insert: {
  created_at?: string
  default_context_length: number
  default_model: string
  default_prompt: string
  default_temperature: number
  description: string
  embeddings_provider: string
  id?: string
  image_path?: string
  include_profile_context: boolean
  include_workspace_instructions: boolean
  instructions: string
  is_home?: boolean
  name: string
  sharing?: string
  updated_at?: string | null
  user_id: string
}
```

### Update

The `Update` type is used to define the structure of data when an existing chatbot is being updated. It includes properties similar to the `Insert` type.

```ts
Update: {
  created_at?: string
  default_context_length?: number
  default_model?: string
  default_prompt?: string
  default_temperature?: number
  description?: string
  embeddings_provider?: string
  id?: string
  image_path?: string
  include_profile_context?: boolean
  include_workspace_instructions?: boolean
  instructions?: string
  is_home?: boolean
  name?: string
  sharing?: string
  updated_at?: string | null
  user_id?: string
}
```

## Functions

This section defines the structure of arguments and return types for various functions like `create_duplicate_messages_for_new_chat`, `delete_message_including_and_after`, etc.

```ts
Functions: {
  create_duplicate_messages_for_new_chat: {
    Args: { old_chat_id: string; new_chat_id: string; new_user_id: string }
    Returns: undefined
  }
  // Other functions...
}
```

## Storage

This section defines the structure of data for different operations in the storage.

### Buckets

The `buckets` type defines the structure of data for a bucket in the storage.

```ts
buckets: {
  Row: {
    allowed_mime_types: string[] | null
    avif_autodetection: boolean | null
    created_at: string | null
    file_size_limit: number | null
    id: string
    name: string
    owner: string | null
    owner_id: string | null
    public: boolean | null
    updated_at: string | null
  }
  // Insert and Update types...
}
```

### Migrations

The `migrations` type defines the structure of data for a migration in the storage.

```ts
migrations: {
  Row: {
    executed_at: string | null
    hash: string
    id: number
    name: string
  }
  // Insert and Update types...
}
```

### Objects

The `objects` type defines the structure of data for an object in the storage.

```ts
objects: {
  Row: {
    bucket_id: string | null
    created_at: string | null
    id: string
    last_accessed_at: string | null
    level: number | null
    metadata: Json | null
    name: string | null
    owner: string | null
    owner_id: string | null
    path_tokens: string[] | null
    updated_at: string | null
    user_metadata: Json | null
    version: string | null
  }
  // Insert and Update types...
}
```

This is a brief overview of the `types.ts` file. Each section and type should be understood in the context of its usage in the project.

# Supabase Types Documentation

This file is located at `/Users/garymason/chatbot-ui/supabase/types.ts`. It contains TypeScript types and interfaces for a chatbot application that uses Supabase, a popular open-source Firebase alternative. The types are used to define the structure of data in various parts of the application, including objects, prefixes, multipart uploads, and multipart upload parts.

## Code Summary

The code defines several types and interfaces for different parts of the chatbot application. These include:

- `Objects`: Defines the structure of objects in the application.
- `Prefixes`: Defines the structure of prefixes in the application.
- `S3_multipart_uploads`: Defines the structure of multipart uploads in the application.
- `S3_multipart_uploads_parts`: Defines the structure of multipart upload parts in the application.
- `Functions`: Defines the structure of various functions in the application.

Each of these types has a `Row`, `Insert`, and `Update` interface, which define the structure of data for different operations. They also have a `Relationships` array, which defines the relationships between different types.

## Detailed Code Explanation

### Objects

```ts
Objects: {
  Row: {
    bucket_id: string
    created_at: string | null
    id: string
    metadata?: Json | null
    name?: string | null
    owner?: string | null
    owner_id?: string | null
    path_tokens?: string[] | null
    updated_at?: string | null
    user_metadata?: Json | null
    version?: string | null
  }
  ...
}
```

The `Objects` type defines the structure of objects in the application. Each object has properties like `bucket_id`, `created_at`, `id`, `metadata`, `name`, `owner`, `owner_id`, `path_tokens`, `updated_at`, `user_metadata`, and `version`.

### Prefixes

```ts
prefixes: {
  Row: {
    bucket_id: string
    created_at: string | null
    level: number
    name: string
    updated_at: string | null
  }
  ...
}
```

The `prefixes` type defines the structure of prefixes in the application. Each prefix has properties like `bucket_id`, `created_at`, `level`, `name`, and `updated_at`.

### S3_multipart_uploads

```ts
s3_multipart_uploads: {
  Row: {
    bucket_id: string
    created_at: string
    id: string
    in_progress_size: number
    key: string
    owner_id: string | null
    upload_signature: string
    user_metadata: Json | null
    version: string
  }
  ...
}
```

The `s3_multipart_uploads` type defines the structure of multipart uploads in the application. Each multipart upload has properties like `bucket_id`, `created_at`, `id`, `in_progress_size`, `key`, `owner_id`, `upload_signature`, `user_metadata`, and `version`.

### S3_multipart_uploads_parts

```ts
s3_multipart_uploads_parts: {
  Row: {
    bucket_id: string
    created_at: string
    etag: string
    id: string
    key: string
    owner_id: string | null
    part_number: number
    size: number
    upload_id: string
    version: string
  }
  ...
}
```

The `s3_multipart_uploads_parts` type defines the structure of multipart upload parts in the application. Each multipart upload part has properties like `bucket_id`, `created_at`, `etag`, `id`, `key`, `owner_id`, `part_number`, `size`, `upload_id`, and `version`.

### Functions

```ts
Functions: {
  add_prefixes: {
    Args: { _bucket_id: string; _name: string }
    Returns: undefined
  }
  ...
}
```

The `Functions` type defines the structure of various functions in the application. Each function has an `Args` object, which defines the arguments that the function takes, and a `Returns` property, which defines what the function returns.

# Supabase Types Documentation

This TypeScript file defines the types used in the Supabase database schema. It includes types for tables, enums, and composite types, and exports several type definitions and constants.

## Code Overview

### Database Schema

The database schema is defined with the `Database` type. It contains a `public` schema, a `storage` schema, and a `graphql_public` schema. Each schema includes tables, views, functions, enums, and composite types.

### Tables

The `Tables` type is a generic type that takes two parameters: `DefaultSchemaTableNameOrOptions` and `TableName`. It returns the row type of the specified table in the specified schema.

### Table Inserts

The `TablesInsert` type is a generic type that takes two parameters: `DefaultSchemaTableNameOrOptions` and `TableName`. It returns the insert type of the specified table in the specified schema.

### Table Updates

The `TablesUpdate` type is a generic type that takes two parameters: `DefaultSchemaTableNameOrOptions` and `TableName`. It returns the update type of the specified table in the specified schema.

### Enums

The `Enums` type is a generic type that takes two parameters: `DefaultSchemaEnumNameOrOptions` and `EnumName`. It returns the enum type of the specified enum in the specified schema.

### Composite Types

The `CompositeTypes` type is a generic type that takes two parameters: `PublicCompositeTypeNameOrOptions` and `CompositeTypeName`. It returns the composite type of the specified composite type in the specified schema.

### Constants

The `Constants` object contains empty enums for the `public`, `storage`, and `graphql_public` schemas.

## Code Details

```ts
type DefaultSchema = Database[Extract<keyof Database, "public">]
```

The `DefaultSchema` type extracts the `public` schema from the `Database` type.

```ts
export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = ...
```

The `Tables` type is a generic type that takes two parameters: `DefaultSchemaTableNameOrOptions` and `TableName`. `DefaultSchemaTableNameOrOptions` can either be a key of the `Tables` and `Views` in the `DefaultSchema` or an object with a `schema` property that is a key of `Database`. `TableName` extends the keys of the `Tables` and `Views` in the specified schema.

```ts
export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
  storage: {
    Enums: {},
  },
} as const
```

The `Constants` object contains empty enums for the `public`, `storage`, and `graphql_public` schemas. It is declared as a constant.