---
source: lib/supabase/server.ts
generated: 2025-06-08T22:40:15.196Z
tags: []
hash: 464604608a87f80326b45224f462541e203b0f9ebe03e22d3f4a73d598ba3e40
---

# Server.ts Documentation

This file is located at `/Users/garymason/chatbot-ui/lib/supabase/server.ts`. It is used to create a server client for Supabase, a scalable and open-source Firebase alternative. This client is used to interact with the Supabase backend.

## Dependencies

The file imports the following dependencies:

- `createServerClient` and `CookieOptions` type from the `@supabase/ssr` package.
- `cookies` from the `next/headers` package.

## Exported Function

The file exports a single function `createClient`.

### `createClient(cookieStore: ReturnType<typeof cookies>)`

This function creates and returns a server client for Supabase. It takes a `cookieStore` object as an argument, which is expected to be the return type of the `cookies` function from `next/headers`.

The `createServerClient` function is called with the Supabase URL and anonymous key from the environment variables, and a configuration object.

The configuration object has a `cookies` property, which is an object with three methods: `get`, `set`, and `remove`. These methods are used to interact with the cookies in the `cookieStore`.

#### `get(name: string)`

This method returns the value of the cookie with the given name.

#### `set(name: string, value: string, options: CookieOptions)`

This method sets a cookie with the given name, value, and options. If an error occurs (usually when called from a Server Component), it is caught and ignored. This is acceptable if there is middleware that refreshes user sessions.

#### `remove(name: string, options: CookieOptions)`

This method removes a cookie with the given name and options. It does this by setting the value of the cookie to an empty string. If an error occurs (usually when called from a Server Component), it is caught and ignored. This is acceptable if there is middleware that refreshes user sessions.

## Environment Variables

The file uses the following environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`: The URL of the Supabase server.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: The anonymous key for the Supabase server.