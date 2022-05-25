/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../Pages/authentication.page')

When('preencho os dados de login com usuario valido', () => {
    global.usuario.email = 'testevalido@teste.com'
    global.usuario.nome = 'teste valido'
    
    AuthenticationPage.PreencheDadosLogin()
})