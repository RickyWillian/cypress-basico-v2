Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Massa')
    cy.get('#lastName').type('de Teste')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('Teste teste testeLorem ipsum dolor sit amet. At neque atque qui officia voluptatum sit esse velit aut omnis modi sed maxime distinctio! Ut quod deserunt et quia ducimus et natus eius id repellendus dolorum est Quis dicta.',{delay: 0})
    cy.contains('button','Enviar').click()
})


