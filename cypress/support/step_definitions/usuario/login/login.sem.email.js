/// <reference types="cypress" />
/* global Then, When, Given */
import AuthenticationPage from "../../../Pages/authentication.page"

When('preencho os dados de login sem informar email', () => {
    cy.get('#passwd').type('12345')
})

Then('o sistema notifica que e necessario informar o email', () => {
    AuthenticationPage.ConfirmaEmailNecessario()
})