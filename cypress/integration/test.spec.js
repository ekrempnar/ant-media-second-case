describe('Component screenshot', () => {
    before(() => {
        cy.exec('rimraf C:\Users\ekrem\Projects\ant-media-second-case\cypress\screenshots')
        cy.exec('rimraf C:\Users\ekrem\Projects\ant-media-second-case\cypress\snaphots')
      
      })
    it('test', () => {
      cy.visit('https://ovh36.antmedia.io:5443/WebRTCAppEE/index.html');
      cy.wait(1000)
      cy.get('#start_publish_button').click()
      cy.wait(10000)
      cy.get('#localVideo').then((element) => {
        cy.wrap(element).matchImageSnapshot('publisher');
      })
      
  });

  it('Test2', ()=> {
    cy.visit('https://ovh36.antmedia.io:5443/WebRTCAppEE/player.html');
    cy.wait(2000)
    cy.get('#start_play_button').click()
    cy.wait(10000)
    cy.get('#remoteVideo').then((element) => {
        cy.wrap(element).matchImageSnapshot('player');
      })
  })
});