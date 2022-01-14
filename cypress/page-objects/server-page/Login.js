/// <reference types="cypress" />

import { Locators } from "./Locators";

const locators = new Locators

export class Login{
    login(username,password){
        cy.visit(locators.serverURL)
        cy.get(locators.userName).type(username)
        cy.get(locators.password).type(password)
        cy.get(locators.letsGoButton).click()
    }
    checkIsLoggedIn(){
        cy.get(locators.logoText).should('contain','Ant Media Server')
        cy.get(locators.dashboardText).should('contain','Dashboard')
    }
}