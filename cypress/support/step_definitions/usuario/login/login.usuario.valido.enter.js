/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../../Pages/authentication.page')

When('preencho os dados de login com usuario valido, pressionando enter em seguida', () => {
    global.usuario.email = 'valido.enter@teste.com'
    global.usuario.nome = 'valido enter'
    
    AuthenticationPage.PreencheDadosLogin().type('{enter}')
})