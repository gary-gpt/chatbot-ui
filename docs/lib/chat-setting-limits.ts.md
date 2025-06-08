---
source: lib/chat-setting-limits.ts
generated: '2025-06-08T13:21:01.630Z'
tags: []
hash: de6365efa99e4a8e92406d57e35b7d3b360ad9077b8e6bd95ce5beb3bae6cced
---
# Source Code Documentation

This source code defines a TypeScript object `CHAT_SETTING_LIMITS` that maps `LLMID` keys to `ChatSettingLimits` objects. 

## Import

```typescript
import { LLMID } from "@/types"
```

This line imports the `LLMID` type from the "@/types" module.

## Type Definition

```typescript
type ChatSettingLimits = {
  MIN_TEMPERATURE: number
  MAX_TEMPERATURE: number
  MAX_TOKEN_OUTPUT_LENGTH: number
  MAX_CONTEXT_LENGTH: number
}
```

`ChatSettingLimits` is a type that defines an object with four properties:

- `MIN_TEMPERATURE`: The minimum temperature value. It is a number.
- `MAX_TEMPERATURE`: The maximum temperature value. It is a number.
- `MAX_TOKEN_OUTPUT_LENGTH`: The maximum token output length. It is a number.
- `MAX_CONTEXT_LENGTH`: The maximum context length. It is a number.

## Exported Constant

```typescript
export const CHAT_SETTING_LIMITS: Record<LLMID, ChatSettingLimits>
```

`CHAT_SETTING_LIMITS` is a constant object that maps `LLMID` keys to `ChatSettingLimits` objects. Each key in the object represents a specific model and the corresponding value is an object that contains the limits for that model. 

For example, the model "claude-2.1" has the following limits:

```typescript
"claude-2.1": {
  MIN_TEMPERATURE: 0.0,
  MAX_TEMPERATURE: 1.0,
  MAX_TOKEN_OUTPUT_LENGTH: 4096,
  MAX_CONTEXT_LENGTH: 200000
}
```

This means that for the "claude-2.1" model, the minimum temperature is 0.0, the maximum temperature is 1.0, the maximum token output length is 4096, and the maximum context length is 200000.

The `CHAT_SETTING_LIMITS` object contains similar entries for various other models.
