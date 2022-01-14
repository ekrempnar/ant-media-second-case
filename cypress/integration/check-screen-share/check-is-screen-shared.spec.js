/// <reference types="cypress" />

import { PublisherMainPage } from "../../page-objects/publisher-page/PublisherMainPage";
import { PlayerMainPage } from "../../page-objects/player-page/PlayerMainPage";
import { Login } from "../../page-objects/server-page/Login";
import { WebRTCAppEE } from "../../page-objects/server-page/WebRTCAppEE";

const publisherMainPage = new PublisherMainPage
const playerMainPage = new PlayerMainPage
const serverLoginPage = new Login
const webRTCPage = new WebRTCAppEE

describe('Check is screen shared successfully', () => {
    it('Visit the publisher main page', () => {
        publisherMainPage.openPublisherPage()
        publisherMainPage.checkIsPublisherPageOpened()
        cy.wait(3000)
    })
    it('Start publishing', () => {
        publisherMainPage.startPublishing()
        publisherMainPage.checkIsPublishingStarted()
        cy.wait(3000)
    })
    it('Visit the player page', () => {
        playerMainPage.openPlayerPage()
        playerMainPage.checkIsPlayerPageOpened()
        cy.wait(3000)
    })
    it('Start playing', () => {
        cy.wait(2000)
        playerMainPage.startPlaying()
        cy.wait(2000)
    })
    it('Chcek From Server',()=> {
        serverLoginPage.login('test@antmedia.io','testtest')
        serverLoginPage.checkIsLoggedIn()
        webRTCPage.goToWebRTCApp()
        webRTCPage.checkIsWebRTCDashboardOpened()
        cy.wait(2000)
        cy.reload()
        cy.wait(2000)
        webRTCPage.checkStreamStatusFromServer()
    })
})