---
source: 'app/[locale]/login/password/page.tsx'
generated: '2025-06-08T13:21:01.659Z'
tags: []
hash: 733864387924a0b4c7322a0dd9135b4aa9e4b67367ffe94375c11725d9d484b6
---
# ChangePasswordPage Component

This document provides an overview of the `ChangePasswordPage` component in the source code.

## Import Statements

```javascript
"use client"

import { ChangePassword } from "@/components/utility/change-password"
import { supabase } from "@/lib/supabase/browser-client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
```

The `ChangePasswordPage` component imports the following modules:

- `ChangePassword` component from the `@/components/utility/change-password` path.
- `supabase` from the `@/lib/supabase/browser-client` path.
- `useRouter` from the `next/navigation` package.
- `useEffect` and `useState` from the `react` package.

## Component Function

```javascript
export default function ChangePasswordPage() {
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const session = (await supabase.auth.getSession()).data.session

      if (!session) {
        router.push("/login")
      } else {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) {
    return null
  }

  return <ChangePassword />
}
```

The `ChangePasswordPage` is a functional component that uses the `useState` and `useEffect` hooks from React. 

- `useState` is used to define a `loading` state variable with an initial value of `true`. 
- `useRouter` is used to get the `router` object for navigating between pages.

In the `useEffect` hook, an asynchronous function is invoked immediately to fetch the current session using `supabase.auth.getSession()`. 

- If there is no session (i.e., the user is not logged in), the user is redirected to the login page. 
- If a session exists, the `loading` state is set to `false`.

If `loading` is `true`, the component returns `null`, meaning nothing is rendered. 

Once `loading` is `false`, the `ChangePassword` component is returned, which allows the user to change their password.
