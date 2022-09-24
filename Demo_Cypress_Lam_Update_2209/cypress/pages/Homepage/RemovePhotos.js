const APIHelper = require("../APIHelperPage/APIHelper");

class RemovePhotos {
  elements =
    {
      thefirstphoto: () => cy.get('*[data-test="photo-grid-multi-col-img"]'),
      privateCollection: () => cy.get(".EdCFo [title='Add to collection']"),
      newCollection: () => cy.xpath("//button[text()='Create a new collection']"),
      titleCollection: () => cy.get("[name='title']"),
      privacybutton: () => cy.get("[name='privacy']"),
      btnCreate: () => cy.xpath("//button[text()='Create collection']"),
      waitTimeOut: () => cy.wait(10000),
      collectionsPage: () => cy.get(),
      ThePhotohasbeenRemoved: () => cy.get('.wl5gA').click(),
      //   visitCollections :()=>cy.visit('https://unsplash.com/@bee1659806163147/collections'),
      getTheFistPhoto: () => cy.get("div:nth-child(1) > figure:nth-child(1) .YVj9w"),
      Locator_btnNewCollector: () => cy.xpath("//button[text()='Create a new collection']"),
      Locator_nameCollector: () => cy.get("[name='title']"),
      Locator_namePrivacy: () => cy.get("[name='privacy']"),
      Locator_btnCreateCollection: () => cy.xpath("//button[text()='Create collection']"),
      Locator_img: () => cy.xpath('//*[@data-test="masonry-grid-count-three"]/div/div/figure//img'),////*[@data-test="masonry-grid-count-three"]/div/div/figure//img
      Locator_AddToCollection: () => cy.get(".EdCFo [title='Add to collection']"),
      Locator_btnImg: () => cy.get('.yOdfb > li>button>div>img', { timeout: 60000 }),
      Locator_btn1: () => cy.get('.yOdfb>li>button'),
      locator_btn2: () => cy.get("html > body > div:nth-of-type(5)>div>div>div>button"),
      locator_closeDialog: () => cy.get('.fdrIK'),
      // locator_titlMenuProfile:()=> cy.get("[title='Your personal menu button'] img"),
      // locator_viewprofile:()=> cy.xpath("//a[text()='View profile']"),
      // locator_tab:()=> cy.xpath('.ksdVo > li:nth-of-type(3)"]'),
    };

  //Main
  ClickTheFirstPhoto() {
    this.elements.getTheFistPhoto().click()
    //  APIHelper.Gettoken();
  }
  CreatePrivateCollection() {
    this.elements.PrivateCollection().click()
    this.elements.Locator_btnNewCollector().click()
    this.elements.Locator_nameCollector().type("colect1")
    this.elements.Locator_namePrivacy().click()
    this.elements.Locator_btnCreateCollection().click();
    cy.wait(10000);
    this.elements.closePhoto();
  }
  AddThefirtRandomphotostoCollection() {
    this.elements.Locator_img().its('length')
      .then((n) => Cypress._.random(0, Math.round((n - 1))))
    this.elements.Locator_btn1().then((k) => {
      cy.log('picked random index ${k}')
      this.elements.Locator_img().eq(k).click();
      this.elements.Locator_AddToCollection().then(($el) => {
        Cypress.dom.isDetached($el) // false
      })

      this.elements.Locator_AddToCollection().then((jQueryElement) => {
        let elemHtml = jQueryElement.get(0)
        elemHtml.addEventListener('keydown', (event) => {
          expect(event instanceof KeyboardEvent).to.be.true
          done()
        })
        this.elements.Locator_AddToCollection().click({ force: true });
      })
      this.elements.Locator_btnImg();
      this.elements.Locator_btnImg().then((jQueryElement) => {
      let elemHtml = jQueryElement.get(0)
        elemHtml.addEventListener('keydown', (event) => {
          expect(event instanceof KeyboardEvent).to.be.true
          done()
        })
        this.elements.Locator_btnImg().then(($el) => {
          Cypress.dom.isDetached($el) // false
        })
      })
    })
    this.elements.closePhoto();
  //  APIHelper.GetCollectionIdAPI();
  }
  AddTheSecondRandomphotostoCollection() {
    this.elements.AddRandomPhotoColection();
  }

  RemovePhoto() {
    this.elements.Locator_btn1().eq(0).click();
    this.elements.locator_btn2().click(),
      cy.wait(0);
    this.elements.locator_closeDialog().click();//click close a photo
    APIHelper.GetCollectionIdAPI();
    this.GetIdFromJsonFile(1);
  }
 
}
module.exports = new RemovePhotos();
