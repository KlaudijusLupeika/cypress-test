/// <reference types="cypress" />

describe('Spray mode', () => {

  beforeEach(() =>{

    cy.visit('https://csgoroll-www-master-h7r4kpopga-uc.a.run.app/dice', {
      auth: {
      username: 'ancient',
      password: 'things',
      }
    });

  });

  it('should change the button text according to Rolls input in Spray mode', () => {
    const input = 20;
    cy.get('[data-test="mode-batch"]').click();

    cy.get('#mat-input-3').clear().type(`${input}`);
    cy.contains(` ROLL ${input} TIMES `).should('contain.text', input)
  });



});