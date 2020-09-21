/* global describe, it, cy, Cypress */

describe('Petgram tests', () => {
  it('Cheking app renderizes al home', () => {
    // Goes to specified URL
    cy.visit('/')
  })

  it('Navigates to a category and check render', () => {
    cy.visit('/pet/1')
    // CSS selector here
    cy.get('article')
  })

  it('Navbar navigation to home', () => {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })

  it('Non logged users see login/register form at favs', () => {
    cy.visit('/favs')
    cy.get('form')
  })
})
