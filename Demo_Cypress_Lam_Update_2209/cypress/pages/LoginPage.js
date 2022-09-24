class UnplashLoginPage {
    elements = {
      usernameInput: () => cy.get("#user_email"),
      passwordInput: () => cy.get("#user_password"),
      loginBtn: () => cy.get("[name='commit']"),
      Verify: ()=> cy.title(),
      DisplayIcon:()=> {
        cy.get("[title='View more links']").click().click()
      },
      logoutpage: ()=>{
          this.elements.DisplayIcon(),
          cy.get('[title="Your personal menu button"]').click(),
          cy.xpath("//*[@href='/logout']").click()
      }
    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }

    IsVisibilePage(titlename){
        this.elements.Verify().should('contain',titlename)
    }
    
    ClickIcon(){
        this.elements.DisplayIcon()}
    Logout(){
        this.elements.logoutpage()
        }
    LoginWithAccount(username,password){
      this.typeUsername(username);
      this.typePassword(password);
      this.clickLogin();
    }
}

module.exports = new UnplashLoginPage();