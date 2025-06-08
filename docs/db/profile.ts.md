---
source: db/profile.ts
generated: '2025-06-08T13:21:01.630Z'
tags: []
hash: 23b1a5d761e7695a9c3b58c844158726e2c1e1e4833e8b1822c60bbb956b6ffa
---
# Profile Service

This service provides methods to interact with the `profiles` table in Supabase.

## Methods

### `getProfileByUserId(userId: string)`

This method retrieves a single profile associated with the given `userId`. 

- `userId` (string): The ID of the user whose profile is to be retrieved.

Returns a Promise that resolves with the profile data. If no profile is found, it throws an error.

### `getProfilesByUserId(userId: string)`

This method retrieves all profiles associated with the given `userId`.

- `userId` (string): The ID of the user whose profiles are to be retrieved.

Returns a Promise that resolves with an array of profile data. If no profiles are found, it throws an error.

### `createProfile(profile: TablesInsert<"profiles">)`

This method creates a new profile with the provided data.

- `profile` (TablesInsert<"profiles">): The profile data to be inserted.

Returns a Promise that resolves with the created profile data. If there is an error during insertion, it throws an error.

### `updateProfile(profileId: string, profile: TablesUpdate<"profiles">)`

This method updates an existing profile with the provided data.

- `profileId` (string): The ID of the profile to be updated.
- `profile` (TablesUpdate<"profiles">): The new profile data.

Returns a Promise that resolves with the updated profile data. If there is an error during update, it throws an error.

### `deleteProfile(profileId: string)`

This method deletes a profile with the given `profileId`.

- `profileId` (string): The ID of the profile to be deleted.

Returns a Promise that resolves with `true` if the deletion is successful. If there is an error during deletion, it throws an error.
