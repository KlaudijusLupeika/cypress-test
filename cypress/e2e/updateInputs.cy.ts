/// <reference types="cypress" />

describe('Inputs update', () => {

  beforeEach(() =>{

    cy.visit('https://csgoroll-www-master-h7r4kpopga-uc.a.run.app/dice', {
      auth: {
      username: 'ancient',
      password: 'things',
      }
    });

  });

  it('should update inputs #1 and #2 values on input #0 change', () => {

    cy.get('#mat-input-0').clear().type('10');

    cy.get('#mat-input-1').should('have.value', '9.5');
    cy.get('#mat-input-2').should('have.value', '10');

  });

  it('should update inputs #0 and #2 values on input #1 change', () => {

    cy.get('#mat-input-0').clear().type('3');

    cy.get('#mat-input-1').should('have.value', '31.6666');
    cy.get('#mat-input-2').should('have.value', '3');

  });

  it('should update inputs #0 and #1 values on input #2 change', () => {

    cy.get('#mat-input-1').clear().type('7');

    cy.get('#mat-input-1').should('have.value', '7');
    cy.get('#mat-input-2').should('have.value', '13.5714');

  });

});