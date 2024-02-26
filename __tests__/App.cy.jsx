import React from 'react'
import App from '../src/App'

describe('App.jsx', () => {
  //custom command to mount the component
  function render() {
    cy.viewport(1920, 1080)
    cy.mount(<App />)
  }

  describe('when rendering the App component', () => {
    it('should show the whole app component', () => {
      render()
    })

    it('should show the navbar', () => {
      render()
      cy.get('.navbar').should('exist')
    })

    it('should show the logo', () => {
      render()
      cy.get('.navbar-logo').should('exist')
    })

    it('should show the footer', () => {
      render()
      cy.get('.footer').should('exist')
    })
  })
})
