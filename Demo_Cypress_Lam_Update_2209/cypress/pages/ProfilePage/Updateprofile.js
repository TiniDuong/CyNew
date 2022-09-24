class UpdateProfile {
    elements = {
        Profilepage: () => cy.get('[title="Your personal menu button"] img'),
        ViewProfile: () => cy.xpath("//a[text()='View profile']"),
        gotolink: () => cy.xpath('//*[contains(@class, "iqGFX")]//a[text()="Edit profile"]'),
        TypeNewUsername: () => {
            const timestamp = Date.now();
            const username = 'bee' + timestamp
            cy.get('#user_username').clear()
            cy.get('#user_username').type(username)
            cy.writeFile("cypress/fixtures/test.json", { "username1": username })
        },
        BtnUpdateAccount: () => cy.get(".btn-default"),
        NewUsername: () => {
            cy.readFile("cypress/fixtures/test.json", (err, data) => {
                if (err) {
                    return console.error(err);
                };
            }).then((data) => {
                cy.visit('https://unsplash.com/@' + data.username1)
            })
        },
        titleProfilepage: () => cy.title(),
        MyFullname: (fullname) => cy.xpath("//*[text()='" + fullname + "']"),
    };
    GotoProfilePage() {
        this.elements.Profilepage().should('be.visible').click();
        this.elements.ViewProfile().click()
    }
    ClickEdittagsLink() {
        this.elements.gotolink().click()
    }
    EditUsername() {
        this.elements.TypeNewUsername()
    }
    updateNewUser() {

        this.elements.BtnUpdateAccount().click()
    }
    GotoNewUser() {
        this.elements.NewUsername()
    }
    observeProfilepage(titlepage) {
        this.elements.titleProfilepage().should('contain', titlepage)
    }
    VerifyMyFullnameisDisplayedOnProfilePage(fullname) {
        this.elements.MyFullname(fullname).should('be.visible')
    }
}
module.exports = new UpdateProfile();
