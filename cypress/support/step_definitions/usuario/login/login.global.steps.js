/// <reference types="cypress" />
/* global Then, When, Given */
import AuthenticationPage from "../../../Pages/authentication.page"


And('clico para realizar login', () => {
    AuthenticationPage.ClicaRealizarLogin()
})

Then('o sistema realiza o login me autenticando na pagina', () => {
    AuthenticationPage.AutenticaLogin()
})

Then('o sistema notifica que houve problema com a autenticaçao', () => {
    AuthenticationPage.ConfirmaErroAutenticaçao()
})