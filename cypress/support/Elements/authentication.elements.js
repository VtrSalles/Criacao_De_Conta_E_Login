

    export default class AuthenticationElement {
        static BtnSigIn() {
            return cy.get('.login')
        }

        static ImputEmailLogin() {
            return cy.get('#email')
        }

        static ImputSenhaLogin() {
            return cy.get('#passwd')
        }
        static BtnLogin() {
            return cy.get('#SubmitLogin')
        }
        static LableUsuarioLogado() {
            return cy.get('.account')
        }

        static AvisoErroLogin() {
            return cy.get('#center_column > :nth-child(2)')
        }

        static ImputEmailCriarConta() {
           return cy.get('#email_create')
        }

        static AvisoErroCriaçao() {
            return cy.get('#create_account_error')
        }
    }