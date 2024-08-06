it('testa a página da política de privacidade de forma independente', function(){
    cy.visit('./src/Privacy.html')
    cy.contains('CAC TAT - Política de privacidade').should('be.visible')
})