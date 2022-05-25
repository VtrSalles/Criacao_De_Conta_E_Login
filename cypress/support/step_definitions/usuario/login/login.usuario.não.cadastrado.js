/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../Pages/authentication.page')

When('preencho os dados de login com usuario não cadastrado', () => {
    AuthenticationPage.DigitaEmailNãoCadastrado()
    AuthenticationPage.digitaSenhaLogin()
})