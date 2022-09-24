const APIHelper = require("../APIHelperPage/APIHelper");
class AccountPage {
    elements = {
        Locator_figure: () => cy.get('//*[@data-test="masonry-grid-count-three"]/div/div/figure'),
        Locator_Like: () => cy.get('.EdCFo [title="Like"]'),
        Locator_Profile:() =>cy.get('#popover-avatar-loggedin-menu-desktop button'),
        Locator_CloserDialog: () => cy.get('.fdrIK'),
        Locator_img: () => cy.get("[title='Your personal menu button'] img"),
        Locator_Viewprofile: () => cy.xpath("//a[text()='View profile']"),
        Locator_userNavLinkLikes: () => cy.xpath('//*[@data-test="user-nav-link-likes"]'),
        Locator_numLikes: () => cy.get(".ksdVo > li:nth-of-type(2)"),
        Locator_figure1: () => cy.get('.mItv1 > div > figure'),
        Locator_visitCollections: () => cy.visit('https://unsplash.com/@bee1659806163147/collections'),
        locator_titlMenuProfile: () => cy.get("[title='Your personal menu button'] img"),
        locator_viewprofile: () => cy.xpath("//a[text()='View profile']"),
        locator_tab: () => cy.xpath('.ksdVo > li:nth-of-type(3)"]'),
    }
    //then go to visit like page
    GotoLikes() {
        this.elements.Locator_Profile().click()
        this.elements.Locator_Viewprofile().click()
        this.elements.Locator_userNavLinkLikes().click()
    }
    GetNumberLikes() {
        cy.reload();
        this.elements.Locator_numLikes().invoke('text').then((text) => {
            expect(text.trim()).to.include('3')
        });
    }
    checkNumberphotosinLikepage() {
        APIHelper.APIGetPhotoLiked();
        this.elements.Locator_figure1().should('be.visible');
        cy.readFile("cypress/fixtures/photoid.json", () => {
        }).then((data) => {
            for (var index in data) {
                cy.xpath("//*[@href='/photos/" + data[index].id + "']").should('be.visible')
            }
        })
    }
    GotoCollections() {
        this.elements.Locator_visitCollections();
    }
    VerifyThePhotohasbeenRemoved() {
        this.elements.locator_titlMenuProfile().click();
        this.elements.locator_viewprofile().click();
        this.elements.locator_tab().invoke('text').then((text) => {
            expect(text.trim()).to.include('1')
        });
    }

    GetIdFromJsonFile(count) {
        cy.readFile("cypress/fixtures/collectionId.json", () => {
        }).then((data) => {
            for (var index in data) {
                cy.xpath("//*[@href='/collections/" + data[index].id + "']").should('be.visible');
            }
        })
    }
}
module.exports = new AccountPage();
