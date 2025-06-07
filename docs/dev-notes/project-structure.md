
# Project Structure — Chatbot UI

**Purpose:** Outline of the directory and component structure for the Chatbot UI project.

---

## 🗂️ Top-Level Directory Layout

```
/chatbot-ui
├── .git/                  # Git metadata
├── app/                   # Next.js 13+ app directory
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── [locale]/         # Dynamic locale-based routes
│       └── [workspaceid]/
│           ├── layout.tsx
│           ├── page.tsx
│           └── components/  # Route-specific components
├── components/            # Reusable shared components
├── lib/                   # Client-side utility functions
├── public/                # Static assets (images, icons)
├── styles/                # Tailwind/global styles
├── types/                 # Custom TypeScript types
├── .env.local             # Local environment variables
├── package.json           # Project manifest
├── tsconfig.json          # TypeScript config
└── README.md              # Overview and setup instructions
```

---

## 🧠 Core Concepts

### `app/`
- This is a **Next.js App Router** project using `app/` directory routing.
- Nested folders match **locales** (language codes) and **workspace IDs**.

### `components/`
- Globally shared UI elements (e.g., `Sidebar.tsx`, `Header.tsx`, `Chat.tsx`)

### `lib/`
- Utility logic like:
  - `parseMemoryTrigger.ts`
  - `saveMemory.ts`
  - `browser-client.ts` (Supabase setup)

### `types/`
- Shared interfaces like `Message`, `Memory`, `Workspace` — useful for state and Supabase tables.

---

## 🛠️ Areas of Interest (aka "Danger Zones")

- `use-chat-handler.tsx`: Central logic for message flow, state updates, memory save
- `parseMemoryTrigger.ts`: Identifies memory commands from chat input
- Supabase hooks: Memory insert, fetch, etc — might create side effects
- Dynamic routing: Locale + Workspace ID nesting is deep — context required

---


