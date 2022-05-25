import AuthenticationElement from "../Elements/authentication.elements"
const { faker } = require('@faker-js/faker')
let user

user = { email: faker.internet.email(),
    }

    export default class AuthenticationPage {

        static CliqueAcessarAuthentication() {
           return cy.visit('').then(()=> {
                    AuthenticationElement.BtnSigIn()
                    .click().url().should('include','?controller=authentication&back=my-account')
            })
        }

        static digitaEmailLogin() {
           return AuthenticationElement.ImputEmailLogin().type(global.usuario.email)
        }

        static DigitaEmailNãoCadastrado() {
            return AuthenticationElement.ImputEmailLogin().type('teste.valido@teste.com')
        }

        static digitaSenhaLogin() {
           return AuthenticationElement.ImputSenhaLogin().type(global.usuario.senha)
        }

        static digitaSenhaErrada() {
            return AuthenticationElement.ImputSenhaLogin().type('255626')
        }

        static PreencheDadosLogin() {
           return this.digitaEmailLogin().then(()=> {
            this.digitaSenhaLogin()
            })
        }

        static ClicaRealizarLogin() {
            return AuthenticationElement.BtnLogin().click()
        }

        static AutenticaLogin() {
            return AuthenticationElement.LableUsuarioLogado().should('have.text', global.usuario.nome)
        }

        static ConfirmaErroAutenticaçao() {
            return AuthenticationElement.AvisoErroLogin().should('be.visible')
                .find('ol > li').should('have.text', 'Authentication failed.')
        }

        static ConfirmaEmailNecessario() {
            return AuthenticationElement.AvisoErroLogin().should('be.visible')
            .find('ol > li').should('have.text','An email address required.')
        }

        static ConfirmaSenhaNecessaria() {
            return AuthenticationElement.AvisoErroLogin().should('be.visible')
            .find('ol > li').should('have.text','Password is required.')
        }

        static digitarEmailNovoCriarConta() {
            return AuthenticationElement.ImputEmailCriarConta().type(`${user.email}{enter}`)
                .url().should('include','#account-creation')
        }

        static digitaEmailUsadoCriarConta() {
            return AuthenticationElement.ImputEmailCriarConta().type('meuemail@google.com{enter}')
        }

        static digitaEmailInvalidoCriarConta() {
            return AuthenticationElement.ImputEmailCriarConta().type('email invalido{enter}')
        }

        static confirmaContaCriada() {
            return AuthenticationElement.LableUsuarioLogado()
        }

        static ConfirmaEmailInvalido() {
            return AuthenticationElement.AvisoErroCriaçao().should('be.visible')
            .find('ol > li').should('have.text', 'Invalid email address.')
        }

        static ConfirmaEmailJaCadastrado() {
            return AuthenticationElement.AvisoErroCriaçao().should('be.visible')
                .find('ol > li')
                    .should('have.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one. ')
            }
    }