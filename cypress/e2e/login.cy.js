// cypress/integration/login.spec.js
describe('Teste de Login', () => {
  it('deve fazer login e redirecionar para a página principal', () => {
    // Acessa a página de login
    cy.visit('login.html');

    // Preenche os campos de nome de usuário e senha
    cy.get('#username').type('usuario_exemplo');
    cy.get('#password').type('senha_exemplo');

    // Clica no botão de login
    cy.get('button[type="submit"]').click();

    // Verifica se foi redirecionado para a página principal
    cy.url().should('include', 'principal.html');

    // Verifica o conteúdo da página principal
    cy.contains('Bem-vindo à Página Principal');
  });
});
