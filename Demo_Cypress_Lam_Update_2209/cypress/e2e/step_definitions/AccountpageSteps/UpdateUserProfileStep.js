import {
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const updateprofilepage = require("../../../pages/ProfilePage/Updateprofile");
//scenerrio 2
When('I go to the Profile page',()=>{
    updateprofilepage.GotoProfilePage()
    })
    
And('I click Edit tags link',()=>{
    updateprofilepage.ClickEdittagsLink();
     })
And('I edit the username field',()=>{
     // const timestamp=Date.now();
     updateprofilepage.EditUsername();
    })
And ('I click the Update Account button',()=>{
    updateprofilepage.updateNewUser();
        })
And ('I go to new username',()=>
    {
        updateprofilepage.GotoNewUser();    
})
Then ('I observe that it will take me to the Profile page with titlename contains as {string}',(titlepage)=>{
    updateprofilepage.observeProfilepage(titlepage);
})
And ('My full name is displayed as {}',(fullname)=>{
    updateprofilepage.VerifyMyFullnameisDisplayedOnProfilePage(fullname)
})
    