import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import useToggle from '../src/hooks/useToggle.js'

describe('useToggle', () => {
  it('starts false by default', () => {
    const { result } = renderHook(() => useToggle())
    expect(result.current[0]).toBe(false)
  })

  it('flips when toggle is called', () => {
    const { result } = renderHook(() => useToggle())
    act(() => result.current[1]())
    expect(result.current[0]).toBe(true)
    act(() => result.current[1]())
    expect(result.current[0]).toBe(false)
  })

  it('respects the initial value argument', () => {
    const { result } = renderHook(() => useToggle(true))
    expect(result.current[0]).toBe(true)
  })
})
