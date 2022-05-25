/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../Pages/authentication.page')

When('preencho os dados de login sem informar senha', () => {
    AuthenticationPage.digitaEmailLogin()
})

Then('o sistema notifica que e necessario informar a senha', () => {
    AuthenticationPage.ConfirmaSenhaNecessaria()
})