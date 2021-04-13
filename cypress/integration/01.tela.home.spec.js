describe('teste da tela inicial', () => {
    it('verificando o conteuda ta tela', () => {
        cy.visit('http://localhost:3000/')
        cy.get('h1').contains('Bem vindo!')
        cy.get('h2').contains('Visitante')
    });
 });
 