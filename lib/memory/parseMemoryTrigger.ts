// lib/memory/parseMemoryTrigger.ts

export const parseMemoryTrigger = (
  _input: string
): {
  isMemoryTrigger: boolean
  memoryContent: string
  tags?: string
  category?: string
  needsConfirmation?: boolean
} => {
  // TEMP STUB — Memory trigger system disabled for modular testing
  return {
    isMemoryTrigger: false,
    memoryContent: "",
    tags: "",
    category: "",
    needsConfirmation: false
  }
}
