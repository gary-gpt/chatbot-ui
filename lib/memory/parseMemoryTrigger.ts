export const parseMemoryTrigger = (
  input: string
): {
  isMemoryTrigger: boolean
  memoryContent: string
  tags?: string
  category?: string
  needsConfirmation?: boolean
} => {
  const lowerInput = input.toLowerCase().trim()

  // List of definite memory trigger phrases
  const MEMORY_TRIGGERS = [
    "remember this:",
    "remember:",
    "add this to memory:",
    "save this:",
    "put this in memory:",
    "save this to memory:",
    "this is a new memory:",
    "can't forget this:",
    "don't forget:"
  ]

  // List of maybe memory trigger phrases (will ask for confirmation)
  const MAYBE_MEMORY_TRIGGERS = [
    "i need to remember",
    "note to self",
    "make sure to save this",
    "keep this in mind",
    "i can't forget this",
    "flag this"
  ]

  // Check definite triggers
  for (const trigger of MEMORY_TRIGGERS) {
    if (lowerInput.startsWith(trigger)) {
      const content = input.slice(trigger.length).trim()
      return {
        isMemoryTrigger: true,
        memoryContent: content,
        tags: "manual",
        category: "general"
      }
    }
  }

  // Check maybe triggers (flag for confirmation)
  for (const maybe of MAYBE_MEMORY_TRIGGERS) {
    if (lowerInput.startsWith(maybe)) {
      return {
        isMemoryTrigger: false,
        memoryContent: input,
        needsConfirmation: true
      }
    }
  }

  // Default fallback
  return {
    isMemoryTrigger: false,
    memoryContent: ""
  }
}
