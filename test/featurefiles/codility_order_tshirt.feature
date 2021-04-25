Feature: To order a t-shirt

  Background:
    Given I launch the application
      And I enter "gopinathppm@gmail.com" in "uid"
      And I enter "test@123" in "pwd"
     When I click on "login"

  Scenario: Verify the user is able to order a Tshirt

     Then I order a "tshirt_1"
      And I verify the order number
