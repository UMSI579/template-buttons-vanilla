describe('Test the template', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test.
    cy.visit('http://localhost:8080')
  })
  it('has elements', () => {
    cy.get('#button-1').should('include.text', 'Button')
    cy.get('#problem-1').should('include.text', 'Problem 1')
  })
})
