/// <reference types="cypress" />

import { Locators } from "./Locators"

const locators = new Locators

export class PublisherMainPage {
    openPublisherPage () {
        cy.visit(locators.publisherURL)
    }
    checkIsPublisherPageOpened () {
        cy.url().should('eq',locators.publisherURL)
    }
    selectScreenSharing(){
        cy.get(locators.optionsButton).click()
        cy.get(locators.selectScreenButton).should('have.text','Screen').click()
    }
    startPublishing(){
        cy.get(locators.startPublishingButton).click()
    }
    checkIsPublishingStarted(){
        cy.get(locators.publishingAlert).should('contain','Publishing')
        cy.get(locators.publishingAlert).should('have.css', 'background-color').and('eq', 'rgb(40, 167, 69)')
    }
}