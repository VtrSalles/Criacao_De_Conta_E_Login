/// <reference types="cypress" />
/* global Then, When, Given */
import AuthenticationPage from "../../../Pages/authentication.page"

When('informo um email ja utilizado para cadastro', () => {
    AuthenticationPage.digitaEmailUsadoCriarConta()
})

Then('o sistema notifica que o email utilizado ja foi cadastrado', () => {
    AuthenticationPage.ConfirmaEmailJaCadastrado()
})