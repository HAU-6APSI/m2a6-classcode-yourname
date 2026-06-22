// ───────────────────────────────────────────────────────────────────────────
// useToggle - your first custom hook
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: custom hooks reuse stateful LOGIC (not markup).
// Read: content/m2-react Activity 6, and
//       content/react-theory/04-hooks-mental-model.md (custom hooks)
//
// Requirement:
//   Write a hook useToggle(initial = false) that returns a pair: [on, toggle]
//     - on     : the current boolean
//     - toggle : a function that flips the boolean
//
//   const [on, toggle] = useToggle()   // on starts false
//   toggle()                           // on becomes true
//
// A custom hook is just a function that starts with "use" and calls other hooks.

import { useState } from 'react'

export default function useToggle(initial = false) {
  // TODO: keep the boolean in state and return [on, toggle].
}
