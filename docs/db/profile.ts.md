---
source: db/profile.ts
generated: 2025-06-08T22:26:07.485Z
tags: []
hash: f25838cf2ec10bcc20a9863c60e9697390c0df5a819f537616a9b24365b6e08b
---

# Chatbot UI - Profile Database Operations

This document provides an overview of the `profile.ts` file located at `/Users/garymason/chatbot-ui/db/`. This file contains functions for interacting with the `profiles` table in the database using the Supabase client.

## Imports

```ts
import { supabase } from "@/lib/supabase/browser-client"
import { TablesInsert, TablesUpdate } from "@/supabase/types"
```

The file imports the Supabase client from a local file, and two types, `TablesInsert` and `TablesUpdate`, from another local file.

## Function: getProfileByUserId

```ts
export const getProfileByUserId = async (userId: string) => {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .single()

  if (!profile) {
    throw new Error(error.message)
  }

  return profile
}
```

This function retrieves a single profile from the `profiles` table where the `user_id` matches the provided `userId`. If no profile is found, it throws an error with the message from the Supabase client.

## Function: getProfilesByUserId

```ts
export const getProfilesByUserId = async (userId: string) => {
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)

  if (!profiles) {
    throw new Error(error.message)
  }

  return profiles
}
```

This function retrieves all profiles from the `profiles` table where the `user_id` matches the provided `userId`. If no profiles are found, it throws an error with the message from the Supabase client.

## Function: createProfile

```ts
export const createProfile = async (profile: TablesInsert<"profiles">) => {
  const { data: createdProfile, error } = await supabase
    .from("profiles")
    .insert([profile])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return createdProfile
}
```

This function inserts a new profile into the `profiles` table. The `profile` parameter should be an object that matches the `TablesInsert` type for the `profiles` table. If an error occurs during the operation, it throws an error with the message from the Supabase client.

## Function: updateProfile

```ts
export const updateProfile = async (
  profileId: string,
  profile: TablesUpdate<"profiles">
) => {
  const { data: updatedProfile, error } = await supabase
    .from("profiles")
    .update(profile)
    .eq("id", profileId)
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return updatedProfile
}
```

This function updates an existing profile in the `profiles` table. The `profileId` parameter should be the ID of the profile to update, and the `profile` parameter should be an object that matches the `TablesUpdate` type for the `profiles` table. If an error occurs during the operation, it throws an error with the message from the Supabase client.

## Function: deleteProfile

```ts
export const deleteProfile = async (profileId: string) => {
  const { error } = await supabase.from("profiles").delete().eq("id", profileId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
```

This function deletes a profile from the `profiles` table. The `profileId` parameter should be the ID of the profile to delete. If an error occurs during the operation, it throws an error with the message from the Supabase client. If the operation is successful, it returns `true`.