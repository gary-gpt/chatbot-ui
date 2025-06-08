---
source: lib/supabase/server.ts
generated: '2025-06-08T13:21:01.647Z'
tags: []
hash: ffa82e822a86fa49e7812a88af092df2020aa0aa0d63b34682c86ad30e1b50aa
---
# createClient Function Documentation

## Overview

The `createClient` function is an exported function that creates a server client for Supabase. It uses environment variables for the Supabase URL and the anonymous key, and a cookie store for managing cookies.

## Import

```javascript
import { createClient } from "./path/to/your/file";
```

## Parameters

The `createClient` function takes one parameter:

- `cookieStore`: This is the return type of the `cookies` function from the `next/headers` package. It's used to get, set, and remove cookies.

## Returns

The function returns a server client created by the `createServerClient` function from the `@supabase/ssr` package.

## Usage

```javascript
const cookieStore = cookies();
const client = createClient(cookieStore);
```

## Cookie Management

The `createClient` function uses the `cookieStore` parameter to manage cookies. It provides three methods for this:

- `get(name: string)`: This method returns the value of the cookie with the given name.
- `set(name: string, value: string, options: CookieOptions)`: This method sets a cookie with the given name, value, and options. If an error occurs (for example, if the method is called from a Server Component), it can be ignored if you have middleware refreshing user sessions.
- `remove(name: string, options: CookieOptions)`: This method removes a cookie with the given name and options. It does this by setting the value of the cookie to an empty string. If an error occurs (for example, if the method is called from a Server Component), it can be ignored if you have middleware refreshing user sessions.

## Environment Variables

The `createClient` function uses two environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`: The URL of your Supabase instance.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: The anonymous key for your Supabase instance.

Make sure to set these environment variables in your `.env` file or in your hosting platform's environment variables.
