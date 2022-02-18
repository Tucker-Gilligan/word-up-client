/// <reference types="cypress"/>

describe('Renders the home page', () => {
  it('renders correctly', () => {
    cy.visit('/')
    cy.get('#header').should('contain', 'Word Up')
  });
});