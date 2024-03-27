describe('Counter Test', () => {
  beforeEach(() => {
    cy.visit('/counter');
  });

  it('increment the counter', () => {
    //   cy.visit('/counter');
    cy.get('[id="count"]').should('have.text', '5');
    cy.get('[id="increment-btn"]').click();
    cy.get('[id="count"]').should('have.text', '6');
  });

  it('decrements the count', () => {
    //   cy.visit('/counter');

    cy.get('[id="decrement-btn"]').click();
    cy.get('[id="count"]').should('have.text', '4');
  });

  it('resets the count', () => {
    cy.get('[id="reset-input"]').type('123');
    cy.get('[id="reset-btn"]').click();
    cy.get('[id="count"]').should('have.text', '123');
  });
  it('resets the count V2', () => {
    cy.byTestId('count').should('have.text', '5');
    // cy.byTestId('reset-input').first().type('123');
    // cy.byTestId('reset-btn').click();
    // cy.byTestId('count').should('have.text', '123');
  });
});
