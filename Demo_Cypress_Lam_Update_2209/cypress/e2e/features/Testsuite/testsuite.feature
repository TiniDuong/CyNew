Feature: Test Application https://unsplash.com

    Scenario Outline: Scenario 1_Follow a photographer successfully
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        Then User is able to successfully login to the Website as '<titlename>'
        When I click the first photo on home page
        When I hover on icon user at the top left corner
        And I click the Follow as '<btnFollow>' button
        Then I observe button text turn into Following as '<btnFollowing>'
        And I click the Following as '<btnFollowing>' button
        And I logout page
        Examples:
            |username                 |password     |btnFollow  |btnFollowing   |titlename|
            |beevan26072022@gmail.com |auto@12345678|Follow     |Following      |Unsplash|

 Scenario Outline: Scenario2_Update the username URL in the Profile page
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        Then User is able to successfully login to the Website as '<titlename>'
        When I go to the Profile page
        And I click Edit tags link
        And I edit the username field
        And I click the Update Account button
        And I go to new username
        Then I observe that it will take me to the Profile page with titlename contains as '<fullname>'
        And My full name is displayed as <fullname>
        Examples:
            |username                 |password     |fullname  |titlename|
            |beevan26072022@gmail.com |auto@12345678|bee_van    |Unsplash|

Scenario Outline: Scenario 5_Download photo successfully
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        Then User is able to successfully login to the Website as '<titlename>'
        When I open a random photo
        And I download this photo
        Then I notice that the image is downloadable and the correct image has been saved
        Examples:
            |username                 |password     |your_fullname|titlename|
            |beevan26072022@gmail.com |auto@12345678|bee_van        |Unsplash|

Scenario Outline: Scenario3_List of liked photos
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        Then User is able to successfully login to the Website as '<titlename>'
        And I like as <number> random photos
        When I go to like page
        Then I see the number of likes is as <number>            
        And as <number> photos appear in Likes section
        Examples:
            |username                 |password     |your_fullname|titlename|number|
            |beevan26072022@gma  ggil.com |auto@12345678|bee_van      |Unsplash |3     |

Scenario Outline: Scenario 4_Remove photos from the collection successfully
        Given User is at the login page
        When User enters username as '<username>' and password as '<password>'
        Then User is able to successfully login to the Website as '<titlename>'
        And I find and click the first photo on home page
        And I create a private collection
        And I add two random photos to the newly created collection
        And I remove one photo from the newly created collection
        When I go to collection page
        Then I notice that the photo has been removed successfully from the collection
        And there is only 1 remaining photo in the collection
        Examples:
            |username                 |password     |your_fullname  |titlename|
            |beevan26072022@gmail.com |auto@12345678|bee_van        |Unsplash|
