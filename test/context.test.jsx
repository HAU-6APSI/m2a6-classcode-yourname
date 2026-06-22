import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from '../src/context/ThemeContext.jsx'
import ThemedButton from '../src/components/ThemedButton.jsx'

describe('ThemeContext + ThemedButton', () => {
  it('uses the default theme "light" when there is no provider', () => {
    render(<ThemedButton />)
    expect(screen.getByRole('button')).toHaveTextContent('Theme: light')
  })

  it('reads the value from a provider', () => {
    render(
      <ThemeContext.Provider value="dark">
        <ThemedButton />
      </ThemeContext.Provider>,
    )
    expect(screen.getByRole('button')).toHaveTextContent('Theme: dark')
  })
})
