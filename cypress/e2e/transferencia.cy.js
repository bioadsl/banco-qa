describe('Banco QA - Transferência', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('realiza transferência com saldo suficiente', () => {
    cy.get('select#remetente').select('Fabricio');
    cy.get('select#destino').select('Carlos');
    cy.get('input[type="number"]').clear().type('50');
    cy.get('input[type="date"]').clear().type('2025-05-30');
    cy.contains('Transferir').click();
    cy.get('.alert-success').should('contain', 'Transferência simulada com sucesso.');
  });

  it('impede transferência com saldo insuficiente', () => {
    cy.get('select#remetente').select('Carlos');
    cy.get('select#destino').select('Joana');
    cy.get('input[type="number"]').clear().type('9999');
    cy.get('input[type="date"]').clear().type('2025-05-30');
    cy.contains('Transferir').click();
    cy.get('.alert-danger').should('contain', 'Saldo insuficiente.');
  });

  it('valida campos obrigatórios vazios', () => {
    cy.contains('Transferir').click();
    cy.get('.alert-danger').should('contain', 'Preencha todos os campos.');
  });
});
