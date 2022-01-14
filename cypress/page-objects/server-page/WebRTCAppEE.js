import { Locators } from "./Locators";

const locators = new Locators

export class WebRTCAppEE {
    goToWebRTCApp(){
        cy.get(locators.webRTCApp).click()
    }
    checkIsWebRTCDashboardOpened(){
        cy.get(locators.webRTCDashboardText).should('contain', 'WebRTCAppEE')
    }
    checkStreamStatusFromServer(){
        cy.get(locators.status).should('contain','Broadcasting')
    }
}