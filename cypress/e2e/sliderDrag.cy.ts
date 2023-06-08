/// <reference types="cypress" />

describe('Slider Drag', () => {

  beforeEach(() =>{

    cy.visit('https://csgoroll-www-master-h7r4kpopga-uc.a.run.app/dice', {
      auth: {
      username: 'ancient',
      password: 'things',
      }
    });

  });

  it('should should update input values after slider position change ', () => {

    cy.get('#mat-input-0').should('have.value', 47.5);
    cy.get('#mat-input-1').should('have.value', 2);
    cy.get('#mat-input-2').should('have.value', 47.5);
    cy.get('[data-test="profit-on-win"]').should('have.text', '1.00');

    cy.get('.handle').invoke('attr', 'style', 'left: 20%').click();

    cy.get('#mat-input-0').should('have.value', 20.17);
    cy.get('#mat-input-1').should('have.value', 4.7099);
    cy.get('#mat-input-2').should('have.value', 20.17);
    cy.get('[data-test="profit-on-win"]').should('have.text', '3.7099');

  });

});