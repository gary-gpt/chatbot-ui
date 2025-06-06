// app/memory-test/page.tsx

"use client"

import { insertMemory } from "../../lib/memory/insertMemory"

export default function MemoryTestPage() {
  const handleInsert = () => {
    insertMemory({
      project: "GaryGPT",
      content: "This is a test insert from /memory-test route.",
      tags: ["test", "modular", "v1.1"],
      category: "debug"
    })
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memory Insert Test</h1>
      <button
        onClick={handleInsert}
        style={{
          padding: "1rem",
          fontSize: "1.2rem",
          cursor: "pointer",
          background: "#0073e5",
          color: "#fff",
          border: "none",
          borderRadius: "8px"
        }}
      >
        Insert Test Memory
      </button>
    </div>
  )
}
