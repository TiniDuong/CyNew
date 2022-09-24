const APIHelper = require("../APIHelperPage/APIHelper");

class LikePhoto {
  elements = {
    Locator_figure:() =>  cy.xpath('//*[@data-test="masonry-grid-count-three"]/div/div/figure'),//.mItv1 > div > div > figure
    Locator_Like:()=>cy.get('.EdCFo [title="Like"]'),
    Locator_CloserDialog:()=> cy.get('.fdrIK'),
    Locator_img:()=>cy.get("[title='Your personal menu button'] img"),
    Locator_Viewprofile:()=> cy.xpath("//a[text()='View profile']"),
    Locator_userNavLinkLikes:()=>cy.xpath('//*[@data-test="user-nav-link-likes"]'),
    Locator_numLikes: ()=> cy.get(".ksdVo > li:nth-of-type(2)"),
    Locator_figure1:()=> cy.get('//*[@data-test="masonry-grid-count-three"]/div/figure'),
  }
  //like 3 photo
    LikeAPhotoRandom(){
      this.elements.Locator_figure().its('length')
      .then((n) => Cypress._.random(0, n - 1))
      .then((k) => {
        cy.log('picked random index ${k}')
        // get all elements again and pick one
        this.elements.Locator_figure().eq(k).click();
        this.elements.Locator_Like().click();
        this.elements.Locator_CloserDialog().click();
      })
    }
}
module.exports = new LikePhoto();
