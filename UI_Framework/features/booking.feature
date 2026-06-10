# UI test definitions for the hotel room booking flow.
# This feature covers the full end-to-end booking experience from navigation to confirmation.
    @booking @ui
    Feature: Hotel Room Booking

    Background: User is on the hotel booking website
        Given the user navigates to the hotel booking website

        Scenario Outline: End-to-end booking flow with valid details
        # The booking scenario covers selecting valid dates, checking room availability, verifying details on the reservation page, and confirming the booking with valid user information.
        And the user chooses a valid check-in date
        And the user chooses a valid check-out date
        When the user checks the availability of rooms
        And the user select book now button
        And the calender shows the selected check-in to check-out dates on the reserve page
        And  the room discription and features are displayed on the reserve page
        And verify total price displayed on the reserve page
        And the user click reserve button to confirm the booking
        And the user fills in the booking form with valid details "<firstName>","<lastName>", "<email>","<phone>"
        And the the reserve and cancel buttons are displayed on the confirmation page
        And the user click reserve now button to finalize the booking
        Then the booking should be created successfully

        Examples:
            | firstName  | lastName | email             |phone         |
            | Jon        | Snow     | Jon.Snow@gmail.com| 073101488811 |  

        