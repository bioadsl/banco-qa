describe('Banco QA - Transferência', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('realiza transferência com saldo suficiente', () => {
    cy.get('select').select('Carlos');
    cy.get('input[type="number"]').clear().type('50');
    cy.get('input[type="date"]').clear().type('2025-05-29');
    cy.contains('Transferir').click();
    cy.get('.alert-success').should('contain', 'Transferência simulada com sucesso.');
    cy.get('tr').contains('Fabricio').parent().should('contain', 'R$ 150,00');
    cy.get('tr').contains('Carlos').parent().should('contain', 'R$ 250,00');
  });

  it('impede transferência com saldo insuficiente', () => {
    cy.get('select').select('Joana');
    cy.get('input[type="number"]').clear().type('300');
    cy.get('input[type="date"]').clear().type('2025-05-29');
    cy.contains('Transferir').click();
    cy.get('.alert-danger').should('contain', 'Saldo insuficiente.');
  });

  it('valida campos obrigatórios vazios', () => {
    cy.contains('Transferir').click();
    cy.get('.alert-danger').should('contain', 'Preencha todos os campos.');
  });
});
