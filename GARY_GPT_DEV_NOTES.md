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

