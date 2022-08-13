// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />

describe('Main', () => {
  it('should display header text', () => {
    cy.visit('/');
    cy.contains('h1', 'Vite + React');
    cy.contains('button', 'count is 0');
    cy.contains('p', 'Edit src/App.tsx and save to test HMR');
    cy.contains('p', 'Click on the Vite and React logos to learn more');
  });
});
