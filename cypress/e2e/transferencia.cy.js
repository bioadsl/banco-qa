// transferencia.cy.js - Cypress tests com base nos fluxos positivos e negativos

describe('Banco QA - Transferência', () => {

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('realiza transferência com saldo suficiente', () => {
    cy.get('#remetente').select('Fabricio');
    cy.get('#destino').select('Joana');
    cy.get('#valor').type('100');
    cy.get('#data').type('2025-06-01');
    cy.get('form').submit();
    cy.get('.alert-success').should('be.visible').and('contain', 'Transferência simulada com sucesso');
  });

  it('impede transferência com saldo insuficiente', () => {
    cy.get('#remetente').select('Renata');
    cy.get('#destino').select('Carlos');
    cy.get('#valor').type('9999');
    cy.get('#data').type('2025-06-01');
    cy.get('form').submit();
    cy.get('.alert-danger').should('contain', 'Saldo insuficiente');
  });

  it('valida campos obrigatórios vazios', () => {
    cy.get('form').submit();
    cy.get('.alert-danger').should('contain', 'Preencha todos os campos');
  });

  it('impede transferência para o mesmo cliente', () => {
    cy.get('#remetente').select('Carlos');
    cy.get('#destino').select('Carlos');
    cy.get('#valor').type('10');
    cy.get('#data').type('2025-06-01');
    cy.get('form').submit();
    cy.get('.alert-danger').should('contain', 'Não é possível transferir para o mesmo cliente');
  });

  it('impede transferência com valor negativo ou zero', () => {
    cy.get('#remetente').select('Tiago');
    cy.get('#destino').select('Marina');
    cy.get('#valor').type('-10');
    cy.get('#data').type('2025-06-01');
    cy.get('form').submit();
    cy.get('.alert-danger').should('contain', 'O valor da transferência deve ser maior que zero.');
  });

});
