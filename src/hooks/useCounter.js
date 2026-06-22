// ───────────────────────────────────────────────────────────────────────────
// useCounter - a custom hook that returns an object
// ───────────────────────────────────────────────────────────────────────────
//
// Concept: custom hooks (returning a bundle of state + actions).
// Read: content/m2-react Activity 6, and
//       content/react-theory/04-hooks-mental-model.md
//
// Requirement:
//   Write a hook useCounter(initial = 0) that returns an OBJECT:
//     { count, increment, decrement, reset }
//     - count     : the current number
//     - increment : adds 1
//     - decrement : subtracts 1
//     - reset     : sets count back to the initial value it was created with
//
//   const { count, increment, reset } = useCounter(5)  // count starts at 5

import { useState } from 'react'

export default function useCounter(initial = 0) {
  // TODO: keep the count in state and return { count, increment, decrement, reset }.
}
