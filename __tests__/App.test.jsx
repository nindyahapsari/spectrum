import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'

describe('App', () => {
  function renderApp() {
    return render(<App />)
  }

  describe.skip('when render App component', () => {
    it('should render the whole app', () => {
      renderApp()
      expect(screen.getByText(/PlaneWreck/i)).toBeInTheDocument()
    })

    it('should render the Navbar', () => {
      const { container } = renderApp()
      const navbarElement = container.querySelector('.navbar')
      expect(navbarElement).toBeInTheDocument()
    })

    it('should render the Footer', () => {
      const { container } = renderApp()
      const footerElement = container.querySelector('.footer')
      expect(footerElement).toBeInTheDocument()
    })
  })
})
