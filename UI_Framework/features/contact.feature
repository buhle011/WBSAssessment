# UI tests for the hotel contact form.
# This feature validates the Contact Us user journey and the form submission confirmation.
@contact @ui
Feature: Contact Hotel

  Scenario Outline: Customer contacts the hotel successfully
    Given the user navigates to the hotel booking website
    When the user clicks on the Contact Us link
    And the user enters their "<name>", "<email>","<phone>","<subject>" and "<message>" in the contact form
    And the user submits the contact form
    Then a confirmation message should be displayed confirming that the message has been sent

    Examples:
      | name       | email                   |phone         | subject | message                          |
      | Jon Snow   | jon.snow@nightwatch.com | 123-456-7890 | Inquiry | I would like to book a room      |