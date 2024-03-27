describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    //cy.contains('app is running!');
  });
  it('has the correct title', () => {
    cy.visit('/');
    cy.title().should('equal', 'Testing');
  });
});
