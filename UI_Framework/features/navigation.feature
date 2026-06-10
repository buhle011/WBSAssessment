# UI tests for site navigation and page visibility.
# These scenarios validate navigation to rooms, admin, and location sections.
@navigation @ui
Feature: Navigate to menu

Background: User is on the hotel booking website
    Given the user navigates to the hotel booking website

     @rooms 
    Scenario: The user should be able to navigate to rooms section
    And the navigate to rooms section
    And the rooms page is displayed with the list of available rooms

     @admin
    Scenario: The user should be able to navigate to admin section
    When the user navigates to admin section
    Then the admin login page should be displayed with username and password fields

    @location
    Scenario: The user should be able to navigate to location section
    When the user navigates to location section
    Then the location page should be displayed with the map and address details
    



  
