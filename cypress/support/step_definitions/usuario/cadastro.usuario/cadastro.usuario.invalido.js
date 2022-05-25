/// <reference types="cypress" />
/* global Then, When, Given */
import AuthenticationPage from "../../../Pages/authentication.page"

When('informo um email invalido para cadastro', () => {
    AuthenticationPage.digitaEmailInvalidoCriarConta()
})

Then('o sistema notifica que o email utilizado é invalido', () => {
   AuthenticationPage.ConfirmaEmailInvalido()
})