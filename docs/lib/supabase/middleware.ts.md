---
source: lib/supabase/middleware.ts
generated: 2025-06-08T22:39:59.131Z
tags: []
hash: ef3c8e6dab282b9eaa0ac8cfd90d3e91a2a9161da757e19a164f8163df6541b5
---

# Middleware.ts Documentation

This file, `middleware.ts`, is a middleware for a chatbot UI that creates a Supabase client for server-side rendering (SSR). Supabase is an open-source Firebase alternative that provides a backend for your applications. This middleware integrates with the Next.js serverless functions.

## Import Statements

```ts
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"
```

The middleware imports two functions from the `@supabase/ssr` package: `createServerClient` and `CookieOptions` type. It also imports `NextResponse` and `NextRequest` type from `next/server`.

## `createClient` Function

```ts
export const createClient = (request: NextRequest) => {
```

The `createClient` function is exported from this file. It takes a `request` of type `NextRequest` as an argument.

### Creating an Unmodified Response

```ts
let response = NextResponse.next({
    request: {
      headers: request.headers
    }
  })
```

An unmodified response is created using the `NextResponse.next` method. The `request` headers are passed to this response.

### Creating a Supabase Client

```ts
const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          // If the cookie is updated, update the cookies for the request and response
          request.cookies.set({
            name,
            value,
            ...options
          })
          response = NextResponse.next({
            request: {
              headers: request.headers
            }
          })
          response.cookies.set({
            name,
            value,
            ...options
          })
        },
        remove(name: string, options: CookieOptions) {
          // If the cookie is removed, update the cookies for the request and response
          request.cookies.set({
            name,
            value: "",
            ...options
          })
          response = NextResponse.next({
            request: {
              headers: request.headers
            }
          })
          response.cookies.set({
            name,
            value: "",
            ...options
          })
        }
      }
    }
  )
```

A Supabase client is created using the `createServerClient` function. The Supabase URL and anonymous key are retrieved from the environment variables. The `cookies` object has three methods: `get`, `set`, and `remove`. 

- The `get` method returns the value of the cookie with the specified name.
- The `set` method sets a new cookie or updates an existing one. If a cookie is updated, the cookies for the request and response are also updated.
- The `remove` method removes a cookie by setting its value to an empty string. If a cookie is removed, the cookies for the request and response are also updated.

### Return Statement

```ts
return { supabase, response }
```

The function returns an object containing the `supabase` client and the `response`.