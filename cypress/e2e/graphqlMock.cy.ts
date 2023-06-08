/// <reference types="cypress" />

describe('GraphQL Mock', () => {

  beforeEach(() => {
    cy.intercept('https://api-stage.csgoroll.com/graphql', {fixture: "mock.json"}).as('mockData');
  })

  it('should intercept graphql request and return mocked data', () => {
    const URL = 'https://api-stage.csgoroll.com/graphql'

    fetch(URL).then(res => res.json())
              .then(res => console.log('Mock response:',res));
    
    cy.wait('@mockData').then(intercepted => {
      console.log('Intercepted:', intercepted);
    })
    // Mocked response in console
  });

});