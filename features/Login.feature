@login
Feature: Login

  Scenario: 1.The application allows you to login with a username and a password.
    Given I navigate to login page
    When I login as user "testuser"
    Then I see message "You logged into a secure area!"

  Scenario: 2.The application displayes an error when a wring username or password is entered
    Given I navigate to login page
    And I enter username "InvalidUser"
    And I enter password "Some pass W0rd"
    When I choose to login
    Then I see message "Your username is invalid!"


