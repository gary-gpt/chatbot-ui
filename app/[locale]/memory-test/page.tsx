"use client"

import { useState } from "react"
import { insertMemory } from "@/lib/memory/insertMemory"

export default function MemoryTestPage() {
  const [message, setMessage] = useState("")

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
}
