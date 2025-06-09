---
source: lib/server/server-chat-helpers.ts
generated: 2025-06-08T22:39:03.627Z
tags: []
hash: 7b6db765252cd034f0c0d6e27c099fe009db303d9ff75968f1e759b3d3e927b5
---

# Server Chat Helpers Documentation

This file contains helper functions for a chatbot server. It includes functions for fetching server profiles, adding API keys to profiles, and checking the validity of an API key.

## Imports

```ts
import { Database, Tables } from "@/supabase/types"
import { VALID_ENV_KEYS } from "@/types/valid-keys"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
```

The code starts by importing necessary modules and types. It imports `Database` and `Tables` from the `supabase/types` module, `VALID_ENV_KEYS` from the `types/valid-keys` module, `createServerClient` from the `supabase/ssr` module, and `cookies` from the `next/headers` module.

## getServerProfile Function

```ts
export async function getServerProfile() {
  //...
}
```

This function fetches a server profile from the database. It uses the `createServerClient` function to create a Supabase client, which is then used to fetch the user and their profile from the database. If the user or profile is not found, an error is thrown. The function then calls `addApiKeysToProfile` to add API keys to the profile before returning it.

## addApiKeysToProfile Function

```ts
function addApiKeysToProfile(profile: Tables<"profiles">) {
  //...
}
```

This function adds API keys to a user's profile. It first creates an object mapping environment variable keys to profile keys. It then iterates over this object, adding any keys found in the environment to the profile. The updated profile is then returned.

## checkApiKey Function

```ts
export function checkApiKey(apiKey: string | null, keyName: string) {
  //...
}
```

This function checks the validity of an API key. If the key is null or an empty string, an error is thrown. This is used to ensure that all necessary API keys are present before making any API calls.