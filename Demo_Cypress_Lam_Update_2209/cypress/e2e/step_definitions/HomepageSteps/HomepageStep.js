import {
 Given,
 When,
 Then,
 And
} from "@badeball/cypress-cucumber-preprocessor";
const Like_Photo = require("../../../pages/Homepage/LikePhoto");
const Followaphotographer = require("../../../pages/Homepage/Followaphotographer");
const RemovePhoto = require("../../../pages/Homepage/RemovePhotos");
const downloadPhoto = require("../../../pages/Homepage/DowloadPhoto");

And('I like as {int} random photos', (number) => {
  for (var i = 0; i < number; i++) {
    Like_Photo.LikeAPhotoRandom();
  }
})

When('I open a random photo', () => {
  downloadPhoto.ClickRamdomPhotos()
})
And('I download this photo', () => {
  downloadPhoto.DownloadPhotos()

})
Then('I notice that the image is downloadable and the correct image has been saved', () => {
  downloadPhoto.CheckImageFile()
})

When('I click the first photo on home page', () => {
  Followaphotographer.ClickTheFirstPhoto()
})
When('I hover on icon user at the top left corner', () => {
  Followaphotographer.HoverOniconUser()
})
And('I click the Follow as {string} button', (btn) => {
  Followaphotographer.clickOnFollowButton(btn)
})
Then('I observe button text turn into Following as {string}', (btn) => {
  Followaphotographer.verifyIconTurninToFollowing(btn)
})
And('I click the Following as {string} button', (btn) => {
  Followaphotographer.TurnInToFolow(btn)
})

And('I find and click the first photo on home page', () => {
  RemovePhoto.ClickTheFirstPhoto()
})
When('I create a private collection', () => {
  RemovePhoto.CreatePrivateCollection()
})
And('I add two random photos to the newly created collection', () => {
  RemovePhoto.AddThefirtRandomphotostoCollection();
  RemovePhoto.AddTheSecondRandomphotostoCollection();
})
And('I remove one photo from the newly created collection', () => {
  RemovePhoto.RemovePhoto()
})




