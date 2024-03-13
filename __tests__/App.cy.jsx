import React from 'react'
import App from '../src/App'

describe('App.jsx', () => {
  //custom command to mount the component
  function renderApp() {
    cy.viewport(1920, 1080)
    cy.mount(<App />)
  }

  describe('when rendering the App component', () => {
    it('should show the whole app component', () => {
      renderApp()
    })

    it('should show the navbar', () => {
      renderApp()
      cy.get('.navbar').should('exist')
    })

    it('should show the footer', () => {
      renderApp()
      cy.get('.footer').should('be.visible')
    })
  })
})
