---
source: app/[locale]/memory-test/page.tsx
generated: 2025-06-08T21:17:23.830Z
tags: []
hash: 638155aa5ba815609a879168aac038a3ff66852008e3eb08a57a78444ecf6ac4
---

# Memory Test Page Code Documentation

This document explains the purpose and logic of the `MemoryTestPage` component in the file `/Users/garymason/chatbot-ui/app/[locale]/memory-test/page.tsx`.

## Overview

The `MemoryTestPage` component is a React function component that provides a user interface for testing the insertion of a memory into a database. It uses the `useState` hook from React to manage a state variable `message` and the `insertMemory` function from the `@/lib/memory/insertMemory` module to perform the memory insertion.

## Code Breakdown

### Import Statements

```ts
"use client"

import { useState } from "react"
import { insertMemory } from "@/lib/memory/insertMemory"
```

The `useState` hook from the `react` library is imported to manage component state. The `insertMemory` function is imported from the `@/lib/memory/insertMemory` module to handle the insertion of a memory into the database.

### MemoryTestPage Function Component

```ts
export default function MemoryTestPage() {
  const [message, setMessage] = useState("")

  const handleInsert = async () => {
    // Code for handling memory insertion
  }

  return (
    // JSX for rendering the component
  )
}
```

The `MemoryTestPage` function component is defined. It initializes a state variable `message` with an empty string. The `handleInsert` function is defined to handle the insertion of a memory into the database.

### handleInsert Function

```ts
const handleInsert = async () => {
  try {
    console.log(
      "🔑 Supabase URL in page.tsx:",
      process.env.NEXT_PUBLIC_SUPABASE_URL
    )
    console.log("📤 Attempting insert...")

    const result = await insertMemory({
      project_name: "TestOnly",
      category: "debug",
      content: "Just testing a clean insert with known-safe fields.",
      tags: "none"
    })

    console.log("✅ Insert result:", result)
    setMessage("✅ Memory inserted!")
  } catch (error: any) {
    console.error("❌ Insert failed:", error)
    console.error("🧠 Raw error:", JSON.stringify(error, null, 2))
    setMessage(
      `❌ Memory insert failed: ${error?.message || "Unknown error"}`
    )
  }
}
```

The `handleInsert` function is an asynchronous function that attempts to insert a memory into the database. It logs the Supabase URL and the attempt to insert a memory. It then calls the `insertMemory` function with a test memory object. If the insertion is successful, it logs the result and updates the `message` state variable with a success message. If the insertion fails, it logs the error and updates the `message` state variable with an error message.

### Component Rendering

```ts
return (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Memory Insert Test</h1>
    <button
      onClick={handleInsert}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      Insert Test Memory
    </button>
    <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>
  </div>
)
```

The component renders a `div` element with a centered heading, a button for triggering the `handleInsert` function, and a paragraph for displaying the `message` state variable.