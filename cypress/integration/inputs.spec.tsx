describe('Input behavior', () => { 
  it('each input only accepts one character', () => {
    cy.visit('/');
    const firstRow = cy.get('#row-1-data-cell');
    const firstRowInputs = firstRow.children();
    firstRowInputs.each(($el) => {
      cy.wrap($el).should('have.attr', 'maxlength', '1');
    });
  });

  it('only one row of inputs is enabled at a time', () => {
    const checkForDisabled = (tdElement) => {
      tdElement.each(($el) => {
        cy.wrap($el).should('be.disabled');
      });
    }
    cy.visit('/');
    const secondRowInputs = cy.get('#row-2-data-cell').children();
    const thirdRowInputs = cy.get('#row-3-data-cell').children();
    const fourthRowInputs = cy.get('#row-4-data-cell').children();
    const fifthRowInputs = cy.get('#row-5-data-cell').children();
    const sixthRowInputs = cy.get('#row-6-data-cell').children();
    const inputRows = [secondRowInputs, thirdRowInputs, fourthRowInputs, fifthRowInputs, sixthRowInputs];
    inputRows.forEach((row) => {
      checkForDisabled(row);
    });
  });

  it('only accepts letters as valid inputs', () => {});
  it('only accepts valid words', () => {});
  it('renders a "submit" button', () => {});
});