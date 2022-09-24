class HomePage{
    elements = {
      Verify: ()=> cy.title(),
      };

      IsVisibilePage(titlename){
        this.elements.Verify().should('contain',titlename)
    }
    ClickIcon(){
      this.elements.DisplayIcon()}
  }
  module.exports = new HomePage();
  