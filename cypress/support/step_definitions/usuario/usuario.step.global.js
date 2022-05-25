/// <reference types="cypress" />
/* global Then, When, Given */
const AuthenticationPage = require('../../Pages/authentication.page')

Given('clico para realizar sign-in', () => {
    AuthenticationPage.CliqueAcessarAuthentication()

    })