/// <reference types="cypress" />

export class Locators {

    // URL Locator 
    publisherURL = 'https://ovh36.antmedia.io:5443/WebRTCAppEE/index.html'

    //Button Locator
    startPublishingButton = '#start_publish_button'
    stopPublishingButton = '#stop_publish_button'
    optionsButton = '#options'
    selectScreenButton = ':nth-child(4) > :nth-child(7)'

    //Alert Locator
    publishingAlert = '#broadcastingInfo'

} 