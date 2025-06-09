---
source: lib/models/llm/anthropic-llm-list.ts
generated: 2025-06-08T22:34:14.750Z
tags: []
hash: a5e672ebeaa72d226f5b813ab528d8a2e7d13fc91935ab1d9ee558543281c8b3
---

# Anthropic Language Learning Models (LLM) List

This TypeScript file, located at `/Users/garymason/chatbot-ui/lib/models/llm/anthropic-llm-list.ts`, contains a list of Language Learning Models (LLMs) provided by Anthropic. Each model is represented as a constant object of type `LLM`, and the list of all models is exported as `ANTHROPIC_LLM_LIST`.

## Constants

### ANTHROPIC_PLATFORM_LINK

This constant is a string that contains the URL to the documentation for getting started with the Anthropic API.

```ts
const ANTHROPIC_PLATFORM_LINK = "https://docs.anthropic.com/claude/reference/getting-started-with-the-api"
```

### Language Learning Models (LLMs)

Each LLM is represented as a constant object of type `LLM`. The properties of this object include the model's ID, name, provider, hosted ID, a link to the platform, whether it accepts image input, and its pricing details.

#### CLAUDE_2

This is an LLM named "Claude 2". It does not accept image input. The pricing details are in USD and per 1M tokens.

```ts
const CLAUDE_2: LLM = {
  // ...
}
```

#### CLAUDE_INSTANT

This is an LLM named "Claude Instant". It does not accept image input. The pricing details are in USD and per 1M tokens.

```ts
const CLAUDE_INSTANT: LLM = {
  // ...
}
```

#### CLAUDE_3_HAIKU

This is an LLM named "Claude 3 Haiku". It accepts image input. The pricing details are in USD and per 1M tokens.

```ts
const CLAUDE_3_HAIKU: LLM = {
  // ...
}
```

#### CLAUDE_3_SONNET

This is an LLM named "Claude 3 Sonnet". It accepts image input. The pricing details are in USD and per 1M tokens.

```ts
const CLAUDE_3_SONNET: LLM = {
  // ...
}
```

#### CLAUDE_3_OPUS

This is an LLM named "Claude 3 Opus". It accepts image input. The pricing details are in USD and per 1M tokens.

```ts
const CLAUDE_3_OPUS: LLM = {
  // ...
}
```

#### CLAUDE_3_5_SONNET

This is an LLM named "Claude 3.5 Sonnet". It accepts image input. The pricing details are in USD and per 1M tokens.

```ts
const CLAUDE_3_5_SONNET: LLM = {
  // ...
}
```

## Exported List

The `ANTHROPIC_LLM_LIST` is an array that contains all the LLMs. This list is exported for use in other parts of the application.

```ts
export const ANTHROPIC_LLM_LIST: LLM[] = [
  CLAUDE_2,
  CLAUDE_INSTANT,
  CLAUDE_3_HAIKU,
  CLAUDE_3_SONNET,
  CLAUDE_3_OPUS,
  CLAUDE_3_5_SONNET
]
```