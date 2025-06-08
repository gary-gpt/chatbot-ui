# Source Code Documentation

## Overview

This source code file primarily contains functions related to user profile management in a server environment. It uses Supabase, a web-based platform that provides real-time databases and authentication for developers, to handle database operations.

## Functions

### `getServerProfile()`

This is an asynchronous function that retrieves the profile of the currently authenticated user from the server.

It first creates a server client using the `createServerClient` function from the `@supabase/ssr` package. This client is configured with the Supabase URL and anonymous key from the environment variables, and a cookie store for handling cookies.

The function then retrieves the current user using the `auth.getUser()` method of the Supabase client. If no user is found, it throws an error.

Next, it retrieves the user's profile from the `profiles` table in the database. If no profile is found, it throws an error.

Finally, it adds API keys to the profile using the `addApiKeysToProfile` function and returns the updated profile.

### `addApiKeysToProfile(profile: Tables<"profiles">)`

This function adds API keys to the given user profile. It creates a mapping of environment variable keys to profile keys, then iterates over this mapping. For each pair, if the environment variable is set, it adds the corresponding value to the profile.

### `checkApiKey(apiKey: string | null, keyName: string)`

This function checks if the given API key is valid (i.e., not null or empty). If the key is invalid, it throws an error with a message indicating the name of the missing key.

## Imports

- `Database`, `Tables` from "@/supabase/types": Types for the Supabase database and tables.
- `VALID_ENV_KEYS` from "@/types/valid-keys": An enumeration of valid environment variable keys.
- `createServerClient` from "@supabase/ssr": A function to create a Supabase server client.
- `cookies` from "next/headers": A function to handle cookies in Next.js.

## Exports

- `getServerProfile`: The function to get the server profile.
- `checkApiKey`: The function to check the validity of an API key.