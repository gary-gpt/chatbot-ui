---
source: app/api/username/available/route.ts
generated: 2025-06-08T21:24:58.692Z
tags: []
hash: b333f6f46c867f9d1fd1501eed6a91cd9e30a6ebdded5279ea69e537e2545750
---

# Documentation for /Users/garymason/chatbot-ui/app/api/username/available/route.ts

This file contains a single exported function `POST` which is an asynchronous function that checks if a username is available in a Supabase database. 

## Dependencies

The function relies on the `Database` type from "@/supabase/types" and the `createClient` function from the "@supabase/supabase-js" package.

## Function `POST`

### Parameters

The `POST` function takes a single parameter `request` of type `Request`. 

### Process

1. It first extracts the `username` from the JSON body of the `request`.
2. It then creates a Supabase client using the Supabase URL and service role key from the environment variables.
3. Using the Supabase client, it queries the `profiles` table in the database for the provided `username`.
4. If the `username` does not exist in the database, it throws an error.
5. If the `username` exists, it returns a response with a JSON body indicating that the username is not available (`isAvailable: false`).
6. If any error occurs during the process, it catches the error and returns a response with a JSON body containing the error message and a status code of 500.

```ts
export async function POST(request: Request) {
  // Extract the username from the request body
  const json = await request.json()
  const { username } = json as {
    username: string
  }

  try {
    // Create a Supabase client
    const supabaseAdmin = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Query the database for the username
    const { data: usernames, error } = await supabaseAdmin
      .from("profiles")
      .select("username")
      .eq("username", username)

    // If the username does not exist, throw an error
    if (!usernames) {
      throw new Error(error.message)
    }

    // If the username exists, return a response indicating that the username is not available
    return new Response(JSON.stringify({ isAvailable: !usernames.length }), {
      status: 200
    })
  } catch (error: any) {
    // If an error occurs, return a response with the error message and a status code of 500
    const errorMessage = error.error?.message || "An unexpected error occurred"
    const errorCode = error.status || 500
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
}
```

## Runtime

The runtime environment for this function is specified as "edge".