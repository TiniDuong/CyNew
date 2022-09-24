class Followaphotographer{
  elements = {
    getTheFistPhoto: () => cy.get("[data-test='photo-grid-multi-col-img']"),
    iconUser: () => cy.get('.GizhZ .OAOnt>img'),
    btnfolow: (btn)=> cy.get('[title= "'+ btn +'"]'),
    closephoto:()=>cy.get('.fdrIK')
    };

  ClickTheFirstPhoto() {
      this.elements.getTheFistPhoto().eq(0).click()
    }
  HoverOniconUser() {
    this.elements.iconUser().trigger('mousemove')
    this.elements.iconUser().invoke('show');
  }
  clickOnFollowButton(btn){
    this.elements.btnfolow(btn).click();
  }
  verifyIconTurninToFollowing (btn){
    this.elements.btnfolow(btn).should('be.visible', {timeout: 10000})
  }
  TurnInToFolow(btn){
    this.elements.btnfolow(btn).click();
    this.elements.closephoto().click();
  }
  }
module.exports = new Followaphotographer();
