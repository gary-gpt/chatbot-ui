---
source: app/api/username/available/route.ts
generated: '2025-06-08T13:21:01.660Z'
tags: []
hash: 43ddb8dc27a2e4ba4f0b3a66c125f30d16b7a5e65bf8a35039643b1a9623190c
---
# Source Code Documentation

This source code file is written in TypeScript and is used to handle POST requests to check if a username is available in a Supabase database.

## Imports

The file imports two modules from the Supabase JavaScript library:

- `Database` from "@/supabase/types"
- `createClient` from "@supabase/supabase-js"

## Constants

The `runtime` constant is defined and set to "edge".

## Functions

### POST

The `POST` function is an asynchronous function that handles POST requests. It expects a `Request` object as a parameter.

The function first parses the request body into a JSON object and destructures the `username` property from it.

It then creates a Supabase client using the `createClient` function, with the Supabase URL and service role key retrieved from the environment variables.

The function then queries the "profiles" table in the Supabase database, selecting the "username" column where the username equals the username passed in the request.

If no usernames are found, an error is thrown with the message from the error returned by the Supabase client.

If usernames are found, a response is returned with a JSON object containing a `isAvailable` property, which is set to `true` if no usernames were found, and `false` otherwise.

If an error occurs during the execution of the function, a response is returned with a JSON object containing a `message` property, which is set to the error message, and a `status` property, which is set to the error status code. If no error message or status code is available, they are set to "An unexpected error occurred" and `500`, respectively.
