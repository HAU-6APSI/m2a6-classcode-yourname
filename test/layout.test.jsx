import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Layout from '../src/components/Layout.jsx'

describe('Layout', () => {
  it('renders its children inside the <main>', () => {
    render(
      <Layout>
        <p>Page content</p>
      </Layout>,
    )
    expect(screen.getByRole('main')).toHaveTextContent('Page content')
  })

  it('has a header (banner) and a footer (contentinfo)', () => {
    render(
      <Layout>
        <p>x</p>
      </Layout>,
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
