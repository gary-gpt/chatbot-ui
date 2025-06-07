# 🧠 GaryGPT Dev Notes

A running log of what we’ve built, broken, and maybe accidentally fixed.

---

## 📅 [2025-06-06] – v1.0 Baseline Commit

**Tag:** `v1.0`
**Status:** Broken-ish, but boots

### What’s Working:
- Supabase connection is live
- Memory insert using trigger phrase (`remember this:`) works
- Chat UI loads, accepts input
- Messages successfully store to database

### What’s Broken:
- After memory is saved:
  - Input box clears, but...
  - UI locks up (no further interaction possible)
  - Console shows no fatal error, but state is stuck
- `setUserInput("")` and/or `setIsGenerating(false)` may not be firing
- Possible async logic hang in `use-chat-handler.tsx`

---

## 🛠 Current Fix Strategy
- Rebuilding `use-chat-handler.tsx` with clean async flow
- Testing whether clearing input and toggling state after memory insert works
- May need to separate the “memory save” path from normal message flow
- Investigating if triggers like `remember this:` are being passed to LLM when they shouldn’t be

---

## 🧪 Environment Notes
- Local project is committed to Git
- Tag `v1.0` created before breaking further stuff
- Working in WebStorm
- Supabase local instance confirmed running at:
  `http://127.0.0.1:54321`

---

## ✅ Todo (Short-Term)
- [ ] Fix UI lockup after memory insert
- [ ] Clean up `use-chat-handler.tsx` and simplify state logic
- [ ] Add logic to suppress trigger messages from being sent to LLM
- [ ] Show “Memory Stored” confirmation in chat after memory insert
- [ ] Begin saving chat history in Supabase

---

## 🧹 Future Plans (Not Urgent, But Sexy)
- Enable memory *recall* from DB
- Add flexible trigger phrase detection (e.g. “don’t forget”, “add to memory”)
- Build in file upload + real-time code editing
- Git integration (read/write, diff view, commit via chat)
- Add project browser to interact with codebase in the UI

---

## 🧾 Notes to Future Gary (and Future Chet)
- Always commit before testing anything sketchy
- Keep Chet sassy, but not destructive
- Document every weird bug or workaround — you will forget
- Don’t trust the AI unless it shows you the whole damn file

---
## 📅 [2025-06-06] – v1.1 Modularity Push + Madge Map

**Tag:** `v1.1`  
**Status:** Back in modular hell (but on purpose)

### What We Did:
- Rebuilt `use-chat-handler.tsx` and `insertMemory.ts` with modular functions
- Created `/app/memory-test/page.tsx` for isolated memory testing
- Insert attempts technically worked before (V1.0), now intermittent/broken
- Memory route throws 404 or relation not found despite working Supabase API elsewhere in UI

### New Hypothesis:
- Our modular approach may not be aligning with how other parts of the project interact with Supabase
- Other features are still connecting and storing fine — memory may be wired differently
- Need full visibility into the codebase to trace what's **actually** calling what

### New Tool: Madge
- Installed Madge globally (with `sudo`) after `EACCES` error
- Ran into missing Graphviz (`gvpr not found`)
- Installing Graphviz to enable SVG graph output (`brew install graphviz`)
- Will use `madge --image graph.svg .` to generate visual dependency map

### Why Madge (vs Nx Graph):
- Nx is great for mono-repos and workspaces
- Madge is lighter, CLI-friendly, and ideal for mapping existing Next.js projects
- Doesn’t require project restructuring

---

## 🎯 Next Moves
- [ ] Finish Graphviz install, generate `graph.svg` from Madge
- [ ] Analyze what’s calling `insertMemory.ts` and how memory module connects to Supabase
- [ ] Verify table name casing (`Memory` vs `memory`) and schema visibility
- [ ] Use Madge to find orphaned or incorrectly routed modules
- [ ] Optional: Revert to v1.0 branch and re-compare behavior

---

## 🔁 Reminder
- Supabase still works for everything *else* — which means:
  - Our local instance is running fine
  - Something specific to memory insert (or modular import) is failing silently
- Do not assume. VERIFY.


