/// <reference types="cypress" />

import { Locators } from "./Locators";

const locators = new Locators

export class PlayerMainPage {
    openPlayerPage() {
        cy.visit(locators.playerURL)
    }
    checkIsPlayerPageOpened() {
        cy.url().should('eq', locators.playerURL)
    }
    startPlaying() {
        cy.get(locators.startPlayerButton).click()
    }
    checkIsPlayerStarted() {
        cy.get(locators.startPlayerButton).should('be.disabled')
    }
    checkIsScreenShared() {
        cy.get(locators.stopPlayerButton).should('be.disabled')
    }
}