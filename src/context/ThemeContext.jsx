// ───────────────────────────────────────────────────────────────────────────
// ThemeContext - sharing a value with the Context API
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: the Context API (sharing a value without prop drilling).
// Read: content/m2-react Activity 6, and
//       content/react-theory/06-state-management.md (Context)
//
// Requirement:
//   Create a Context whose DEFAULT value is the string 'light', and export it
//   as `ThemeContext` so other files can both provide and read it.
//
//   Any component can later read it with useContext(ThemeContext), and a parent
//   can override it with <ThemeContext.Provider value="dark">...</ThemeContext.Provider>.

import { createContext } from 'react'

// TODO: replace null with a context created by createContext('light').
export const ThemeContext = null
