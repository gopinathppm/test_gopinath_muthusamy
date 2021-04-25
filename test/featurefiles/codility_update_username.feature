Feature: To update the username

  Background:
    Given I launch the application
      And I enter "gopinathppm@gmail.com" in "uid"
      And I enter "test@123" in "pwd"
     When I click on "login"


  Scenario: Verify the user is able to update the user name

    When I click on "personal_info"
     And I click on "information"
    Then I enter "Test User" in "firstname"
     And I enter "test@123" in "oldPassword"
    When I click on "save"
    Then I verify the "verification_message_information" text as "verification_message_information"