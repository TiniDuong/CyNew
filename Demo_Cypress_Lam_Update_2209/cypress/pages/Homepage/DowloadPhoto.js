const APIHelper = require("../APIHelperPage/APIHelper");
class DowloadPhoto {
  elements = {
      Locator_figure:() =>  cy.xpath('//*[@data-test="masonry-grid-count-three"]/div/div/figure'),//.mItv1 > div > div > figure
      Locator_downloadbuton:()=> cy.xpath("//span[text()='Download']"),
      Locator_saythankscardClosebutton:()=>cy.xpath('//*[@data-test="say-thanks-card"]//div//*[@data-test="say-thanks-card-close-button"]'),////*[@data-test="say-thanks-card"]//div//*[@data-test="say-thanks-card-close-button"]
      Locator_CloserDialog:()=> cy.get('.fdrIK'),
    };
    //Main
    //***START FUNC****//
    ClickRamdomPhotos(){
       this.elements.Locator_figure().its('length')
        .then((n) => Cypress._.random(0, n -2))
        .then((k) => {
          cy.log('picked random index ${k}')
          this.elements.Locator_figure().eq(k).click();
          cy.log('href',cy.location('pathname').as('text'));
          cy.get('@text').then((data)=>{
             cy.log(data);
             cy.writeFile('cypress/fixtures/url.json', {endpoint:data})
          })
     })
    }
    DownloadPhotos(){
      this.elements.Locator_downloadbuton().click();
      this.elements.Locator_saythankscardClosebutton().click({force:true});
      this.elements.Locator_CloserDialog().click();
      cy.reload();
    }
    CheckImageFile(){
      APIHelper.TrackAPhotoDownloadAPI();
      APIHelper.CheckImageLAPI();
    }
}
module.exports = new DowloadPhoto();
