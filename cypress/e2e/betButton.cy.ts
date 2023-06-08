/// <reference types="cypress" />

describe('Bet buttons', () => {
  
  const startValue = 1;

  beforeEach(() =>{
    
    cy.visit('https://csgoroll-www-master-h7r4kpopga-uc.a.run.app/dice', {
      auth: {
      username: 'ancient',
      password: 'things',
      }
    });

  });

  it('+1 should increase bet amount by 1', () => {

    cy.get('#mat-input-4').should('have.value', 1);
    cy.get('[data-test="plus-1"]').click();
    cy.get('#mat-input-4').should('have.value', startValue + 1);

  });

  it('+10 should increase bet amount by 10', () => {

    cy.get('#mat-input-4').should('have.value', 1);
    cy.get('[data-test="plus-10"]').click();
    cy.get('#mat-input-4').should('have.value', startValue + 10);

  });

  it('1/2 should divide bet amount by 2', () => {

    cy.get('#mat-input-4').should('have.value', 1);
    cy.get('[data-test="1-div-2"]').click();
    cy.get('#mat-input-4').should('have.value', startValue / 2);

  });

  it('x2 should double bet amount by 2', () => {

    cy.get('#mat-input-4').should('have.value', 1);
    cy.get('[data-test="x2"]').click();
    cy.get('#mat-input-4').should('have.value', startValue * 2);

  });

});