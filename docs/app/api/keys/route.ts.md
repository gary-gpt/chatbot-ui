---
source: app/api/keys/route.ts
generated: 2025-06-08T21:23:16.087Z
tags: []
hash: 2f79c8f701242e83f5c4bc5c49f31b3ee5dfec558fdc88c5f97b75ac2c4e6783
---

# Chatbot UI API Keys Route

This document describes the purpose and logic of the file located at `/Users/garymason/chatbot-ui/app/api/keys/route.ts`.

## Overview

This TypeScript file defines a GET function for the API keys route in a chatbot UI application. The GET function checks which environment keys are being used and returns a response with this information.

## Code Breakdown

### Imports

The file imports several utilities and types:

```ts
import { isUsingEnvironmentKey } from "@/lib/envs"
import { createResponse } from "@/lib/server/server-utils"
import { EnvKey } from "@/types/key-type"
import { VALID_ENV_KEYS } from "@/types/valid-keys"
```

- `isUsingEnvironmentKey`: A function from the `envs` library that checks if a specific environment key is being used.
- `createResponse`: A function from the `server-utils` library that creates a server response.
- `EnvKey`: A type representing an environment key.
- `VALID_ENV_KEYS`: An enumeration of valid environment keys.

### GET Function

The `GET` function is an asynchronous function that checks which environment keys are being used and returns a response with this information.

```ts
export async function GET() {
```

#### Environment Key Map

The function first defines a map of environment keys:

```ts
  const envKeyMap: Record<string, VALID_ENV_KEYS> = {
    // ...
  }
```

This map associates string identifiers with their corresponding environment keys.

#### Checking Environment Keys

The function then checks which environment keys are being used:

```ts
  const isUsingEnvKeyMap = Object.keys(envKeyMap).reduce<
    Record<string, boolean>
  >((acc, provider) => {
    const key = envKeyMap[provider]

    if (key) {
      acc[provider] = isUsingEnvironmentKey(key as EnvKey)
    }
    return acc
  }, {})
```

This code uses the `reduce` function to transform the `envKeyMap` into a new object `isUsingEnvKeyMap`. For each key in `envKeyMap`, it checks if the key is being used and adds this information to `isUsingEnvKeyMap`.

#### Returning the Response

Finally, the function returns a response with the `isUsingEnvKeyMap`:

```ts
  return createResponse({ isUsingEnvKeyMap }, 200)
```

The `createResponse` function is used to create the response, which includes the `isUsingEnvKeyMap` and a status code of 200, indicating a successful request.