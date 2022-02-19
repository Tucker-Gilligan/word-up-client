/// <reference types="cypress"/>

describe('Basic render', () => {
  it('Renders the header', () => {
    cy.visit('/');
    cy.get('#header').should('contain', 'Word Up');
  });
  
  it('contains 6 rows of 5 inputs', () => {
    cy.visit('/');
    cy.get('tbody').children().should('have.length', 6);
  });
});