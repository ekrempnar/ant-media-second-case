/// <reference types="cypress" />

export class Locators {

    // URL Locator 
    serverURL = 'https://ovh36.antmedia.io:5443/#/applications/WebRTCAppEE'

    //Text Field Locator
    userName = ':nth-child(2) > .form-control'
    password = ':nth-child(3) > .form-control'

    //Button Locator
    letsGoButton = '.btn'

    //Logo Locator
    logoText = '.logo-normal'

    //Main Dashboard Locator
    dashboardText = '.navbar-brand'

    //WebRTC Dashboard Locators
    webRTCDashboardText = '.navbar-brand'
    status = '.mat-row > .cdk-column-status'

    //Left Menu Locators
    webRTCApp = ':nth-child(2) > a > .sidebar-normal'

} 