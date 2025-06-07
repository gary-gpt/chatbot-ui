import { supabase } from "@/lib/supabase/browser-client"

export type InsertMemoryParams = {
  project_name: string
  category: string
  content: string
  tags?: string
}

export async function insertMemory(memory: InsertMemoryParams) {
  console.log("🔗 Supabase client test — trying simple select")
  const testSelect = await supabase.from("memory").select("*").limit(1)
  console.log("🧪 Select result:", testSelect)

  console.log("📤 Attempting insert with:", memory)

  const { data, error, status, statusText } = await supabase
    .from("memory")
    .insert([memory])
    .select() // <–– force full response body

  console.log("📤 Insert data:", data)
  console.log("⚠️ Insert error:", error)
  console.log("📡 Insert status:", status, statusText)

  if (error) {
    throw new Error(error.message || "Unknown Supabase error")
  }

  return data
}
