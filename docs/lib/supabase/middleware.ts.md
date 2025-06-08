# Documentation

## createClient function

The `createClient` function is an exported function that creates a Supabase client for server-side rendering (SSR) and a Next.js response object. It uses the `createServerClient` function from the `@supabase/ssr` package and the `NextResponse` object from the `next/server` package.

### Parameters

The function takes a single parameter:

- `request` (type: `NextRequest`): A Next.js request object.

### Return Value

The function returns an object containing:

- `supabase`: A Supabase client for server-side rendering.
- `response`: A Next.js response object.

### Behavior

The function first creates an unmodified Next.js response object with the headers from the incoming request.

It then creates a Supabase client for server-side rendering using the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables.

The Supabase client is configured with cookie handling functions:

- `get(name: string)`: Returns the value of the cookie with the given name.
- `set(name: string, value: string, options: CookieOptions)`: Sets a cookie with the given name, value, and options. If the cookie is updated, it also updates the cookies for the request and response.
- `remove(name: string, options: CookieOptions)`: Removes a cookie with the given name and options. If the cookie is removed, it also updates the cookies for the request and response.

The function finally returns the Supabase client and the Next.js response object.

### Usage

```javascript
import { createClient } from './path-to-file'

const { supabase, response } = createClient(request)
```