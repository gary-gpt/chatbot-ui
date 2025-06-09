---
source: lib/supabase/client.ts
generated: 2025-06-08T22:39:40.089Z
tags: []
hash: 4d2c4376dde9d79efbb56c7e002a3a288fd949ad81170546875add41f176ccba
---

# Supabase Client Configuration

This file is located at `/Users/garymason/chatbot-ui/lib/supabase/client.ts`. It is responsible for creating and exporting a Supabase client, which is used to interact with the Supabase backend.

## Dependencies

The file imports a function `createBrowserClient` from the `@supabase/ssr` package. This function is used to create a Supabase client.

## Function: createClient

```ts
export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
```

The `createClient` function is an exported function that creates a new Supabase client. It does not take any parameters and returns the created client.

The `createBrowserClient` function is called with two arguments:

1. `process.env.NEXT_PUBLIC_SUPABASE_URL`: This is the URL of the Supabase backend. It is read from the environment variable `NEXT_PUBLIC_SUPABASE_URL`.

2. `process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY`: This is the anonymous key for the Supabase backend. It is read from the environment variable `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

The `!` operator is used to assert that these environment variables are not `null` or `undefined`. If they are, TypeScript will throw a compile-time error.

## Usage

To use this client in other parts of the application, you can import it like so:

```ts
import { createClient } from '/path/to/client';
const client = createClient();
```

Then, you can use the `client` to interact with the Supabase backend.