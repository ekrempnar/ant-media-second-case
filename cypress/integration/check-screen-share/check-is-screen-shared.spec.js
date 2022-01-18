/// <reference types="cypress" />

import { PublisherMainPage } from "../../page-objects/publisher-page/PublisherMainPage";
import { PlayerMainPage } from "../../page-objects/player-page/PlayerMainPage";
import { Login } from "../../page-objects/server-page/Login";
import { WebRTCAppEE } from "../../page-objects/server-page/WebRTCAppEE";
import { it } from "mocha";

const publisherMainPage = new PublisherMainPage
const playerMainPage = new PlayerMainPage
const serverLoginPage = new Login
const webRTCPage = new WebRTCAppEE
 
describe('Check is screen sharing failed case', () => {
    it('Visit the publisher main page', () => {
        publisherMainPage.openPublisherPage()
        publisherMainPage.checkIsPublisherPageOpened()
        cy.wait(1000)
        publisherMainPage.selectScreenSharing()
        cy.wait(1000)
    })
    it('Start publishing and close browsers tab', () => {
        publisherMainPage.startPublishing()
        publisherMainPage.checkIsPublishingStarted()
        cy.wait(2000)
    })
    it('Visit the player page on a new tab', () => {
        playerMainPage.openPlayerPage()
        playerMainPage.checkIsPlayerPageOpened()
        cy.wait(3000)
    })
    it('Start playing', () => {
        cy.wait(2000)
        playerMainPage.startPlaying()
        cy.wait(2000)
        playerMainPage.checkIsPlayerPageOpened()
    })
    it('Check screen sharing failure', () => {
        cy.wait(2000)
        playerMainPage.checkIsScreenShared()
        cy.wait(2000)
    })
    it('Check screen sharing failure from server',()=> {
        serverLoginPage.login('test@antmedia.io','testtest')
        serverLoginPage.checkIsLoggedIn()
        webRTCPage.goToWebRTCApp()
        cy.wait(2000)
        webRTCPage.checkIsWebRTCDashboardOpened()
        cy.reload()
        cy.wait(2000)
        webRTCPage.checkStreamStatusFromServer()
    })
})