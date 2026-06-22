import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useCounter from '../src/hooks/useCounter.js'

describe('useCounter', () => {
  it('starts at the initial value', () => {
    const { result } = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })

  it('increments and decrements', () => {
    const { result } = renderHook(() => useCounter(0))
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(0)
  })

  it('resets back to the initial value', () => {
    const { result } = renderHook(() => useCounter(5))
    act(() => result.current.increment())
    act(() => result.current.increment())
    act(() => result.current.reset())
    expect(result.current.count).toBe(5)
  })
})
