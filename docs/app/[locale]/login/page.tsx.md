# Login Component

This file exports a default `Login` component which is an asynchronous function that accepts an object with a `searchParams` property. This property is an object that contains a `message` string.

## Imports

This file imports several components and functions from various libraries and local files:

- UI components from the local `ui` directory: `Brand`, `Input`, `Label`, `SubmitButton`.
- The `createClient` function from the local `supabase/server` library.
- The `Database` type from the local `supabase/types` file.
- The `createServerClient` function from the `@supabase/ssr` library.
- The `get` function from the `@vercel/edge-config` library.
- The `Metadata` type from the `next` library.
- The `cookies` and `headers` functions from the `next/headers` library.
- The `redirect` function from the `next/navigation` library.

## Metadata

The `metadata` object is exported with a `title` property set to "Login".

## Login Function

The `Login` function first creates a cookie store and a Supabase server client. It then attempts to get the current session. If a session exists, it queries the `workspaces` table in the database for the current user's home workspace. If a home workspace is found, it redirects to the chat page for that workspace.

The `Login` function also defines three inner functions: `signIn`, `getEnvVarOrEdgeConfigValue`, and `signUp`.

- `signIn`: This function retrieves the email and password from the form data, creates a client, and attempts to sign in with the provided credentials. If successful, it queries the `workspaces` table for the user's home workspace and redirects to the chat page for that workspace. If an error occurs, it redirects back to the login page with the error message.

- `getEnvVarOrEdgeConfigValue`: This function retrieves the value of a specified environment variable. If the `EDGE_CONFIG` environment variable is set, it uses the `get` function from the `@vercel/edge-config` library to retrieve the value.

- `signUp`: This function retrieves the email and password from the form data, checks if the email is allowed to sign up based on whitelist patterns, creates a client, and attempts to sign up with the provided credentials. If successful, it redirects to the setup page. If an error occurs, it redirects back to the login page with the error message.

The `Login` function returns a form that contains fields for the user's email and password, and buttons for signing in, signing up, and resetting the password. If a message is provided in the `searchParams`, it is displayed above the form.