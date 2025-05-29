describe('Banco QA - Transferência', () => {
  beforeEach(() => {
    cy.visit('/'); // Corrigido: sem /frontend, pois live-server já aponta direto pra /frontend
  });

  it('realiza transferência com saldo suficiente', () => {
    cy.get('select').select('Carlos');
    cy.get('input[type="number"]').type('50');
    cy.get('input[type="date"]').type('2025-05-29');
    cy.contains('Transferir').click();
    cy.contains('Transferência simulada com sucesso.').should('be.visible');
    cy.get('.table').contains('Fabricio').parent().contains('R$150,00');
    cy.get('.list-group').should('contain', 'Carlos');
  });

  it('impede transferência com saldo insuficiente', () => {
    cy.get('select').select('Joana');
    cy.get('input[type="number"]').type('300');
    cy.get('input[type="date"]').type('2025-05-29');
    cy.contains('Transferir').click();
    cy.contains('Saldo insuficiente.').should('be.visible');
  });

  it('valida campos obrigatórios vazios', () => {
    cy.contains('Transferir').click();
    cy.contains('Preencha todos os campos.').should('be.visible');
  });
});
