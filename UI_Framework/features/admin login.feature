@ui @login
Feature: Admin Login Functionality

  Background:
    Given the user navigates to the hotel booking website
    And the user navigates to admin page

  
  Scenario Outline: Successful login with valid credentials
    
    When the user enters username "<username>" and password "<password>"
    And the user clicks on the login button
    Then the user should be logged in successfully
    And the admin dashboard should be displayed

   Examples:
      | username | password    |
      | admin    | password123 |

  
  Scenario Outline: Login with invalid credentials
    When the user enters username "<username>" and password "<password>"
    And the user clicks on the login button
    Then the user should see an error message

    Examples:
      | username | password    |
      | admin    | password555 | //valid username but wrong password
      | client   | password123 | //invalid username but valid password
      |          | password123 | //empty username but valid password
      | admin    |             | //valid username but empty password
      |          |             | //empty username and empty password

  @validLogin
  Scenario Outline: Logout after successful login
     When the user enters username "<username>" and password "<password>"
    And the user clicks on the login button
    Then the user should be logged in successfully
    When the user clicks on the logout button
    Then the user should be redirected to the login page
    And the login form should be visible

 Examples:
      | username | password    |
      | admin    | password123 |