/// <reference types="cypress" />
/* global Then, When, Given */
import AuthenticationPage from '../../../Pages/authentication.page'
const { faker } = require('@faker-js/faker')
let user

user = { email: faker.internet.email(),
    name: {
        first: faker.name.firstName(),
        last: faker.name.lastName()},
        password: faker.internet.password(),
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.datatype.number({min:1, max:10}),
    postcode: faker.datatype.number({min:10000, max:99999}),
    phone: faker.phone.phoneNumberFormat()
    }

When('Informo o email para cadastro', () => {
    AuthenticationPage.digitarEmailNovoCriarConta()
})

And('finalizo meu cadastro de usuario preenchendo todos os dados', () => {
    cy.get('#id_gender1').scrollIntoView()
         .check()
    cy.get('#customer_firstname').type(user.name.first)
    cy.get('#customer_lastname').type(user.name.last)
    cy.get('#passwd').type(user.password)
    cy.get('#days').select('1')
    cy.get("#months").select('January')
    cy.get('#years').select('1995')
   // cy.wait(2000)
    cy.get('#address1').type(user.street)
    cy.get('#city').type(user.city)
   // cy.wait(500)
    cy.get('#id_state').select(`${user.state}`)
    cy.get('#postcode').type(`${user.postcode}`)
    cy.get('#id_country').select('United States')
    cy.get('#phone_mobile').type(user.phone)
    cy.get('#alias').clear()
        .type(faker.internet.email())
    cy.get('#submitAccount > span').click()
})

Then('o sistema realiza meu cadastro me autenticando na pagina', () => {
    AuthenticationPage.confirmaContaCriada().should('have.text', `${user.name.first} ${user.name.last}`)
    .url().should('include', 'controller=my-account')
})