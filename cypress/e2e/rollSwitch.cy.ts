/// <reference types="cypress" />

describe('Roll switch', () => {

  beforeEach(() =>{

    cy.visit('https://csgoroll-www-master-h7r4kpopga-uc.a.run.app/dice', {
      auth: {
      username: 'ancient',
      password: 'things',
      }
    });

  });

  it('should toggle Roll switch between Under/Over ', () => {

    cy.get('[data-test="choice-label"]').should('have.text', ' Roll Under');
    cy.get('#mat-input-0').should('have.value', 47.5);
    cy.get('[data-test="choice-switch"]').click();

    cy.get('[data-test="choice-label"]').should('have.text', ' Roll Over');
    cy.get('#mat-input-0').should('have.value', 52.49);
    cy.get('[data-test="choice-switch"]').click();
    
    cy.get('[data-test="choice-label"]').should('have.text', ' Roll Under');
    cy.get('#mat-input-0').should('have.value', 47.5);

  });

});