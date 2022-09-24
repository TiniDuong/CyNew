import {
    Given,
    When,
    And,
    Then
  } from "@badeball/cypress-cucumber-preprocessor";
  const loginPage = require("../../../pages/LoginPage");
  Given('User is at the login page', () => {
    cy.fixture("dataTest.json").then((user) => {
    cy.visit(user.url)
  })
})
  When('User enters username as {string} and password as {string}', (username, password) => {
    cy.fixture("dataTest.json").then((user) => {
      loginPage.LoginWithAccount(user.email,user.password)
  })
})
  Then('User is able to successfully login to the Website as {string}', (titlename) => {
    loginPage.IsVisibilePage(titlename);
    loginPage.ClickIcon();
  })
  And('I logout page',()=>{
    loginPage.Logout()
  })