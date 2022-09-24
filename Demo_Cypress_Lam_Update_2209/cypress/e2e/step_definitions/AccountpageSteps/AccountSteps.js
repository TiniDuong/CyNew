import {
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const accountpage = require("../../../pages/ProfilePage/Accountpage");
  const apihelper = require("../../../pages/APIHelperPage/APIHelper")
  When ('I go to like page',()=>{
    accountpage.GotoLikes()
  })
  Then ('I see the number of likes is as {int}',()=>{
    accountpage.GetNumberLikes();
    apihelper.APIGetPhotoLiked();
   
  })         
  And ('as {int} photos appear in Likes section',()=>{
    accountpage.checkNumberphotosinLikepage()
    apihelper.ReadResultRespond();
  })    
  And ('I go to collection page',()=>{
    accountpage.GotoCollectionsPage()
})
Then('I notice that the photo has been removed successfully from the collection',()=>{
  accountpage.VerifyThePhotohasbeenRemoved()
})