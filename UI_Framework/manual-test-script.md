# Manual Test Script for UI Framework

## Purpose

This document describes how to manually verify the UI test flows in the `UI_Framework` folder.
It mirrors the automated booking, contact, and navigation scenarios.

## Pre-requisites

- A browser (Chrome, Edge, Firefox)
- Access to `https://automationintesting.online/`
- A REST client is not required because these are UI tests

## Booking Flow Manual Steps

1. Open the hotel booking website.
2. Select a valid check-in date, for example `2026/06/22`.
3. Select a valid check-out date, for example `2026/06/27`.
4. Click the `Availability` button.
5. Click the first `Book Now` button.
6. Verify the reservation page shows the selected check-in and check-out dates.
7. Verify the room description and room features sections are displayed.
8. Verify that the total price is visible on the reservation page.
9. Click the `Reserve` button to continue.
10. Enter booking form details using the sample data below.
11. Verify the `Reserve Now` and `Cancel` buttons appear on the confirmation page.
12. Click `Reserve Now`.
13. Confirm that a booking confirmation message is displayed.

### Sample booking data

| Field     | Value                    |
|-----------|--------------------------|
| FirstName | Jon                      |
| LastName  | Snow                     |
| Email     | Jon.Snow@gmail.com       |
| Phone     | 073101488811             |

## Contact Form Manual Steps

1. Open the hotel booking website.
2. Click the `Contact Us` link.
3. Enter the contact form values below.
4. Click the `Submit` button.
5. Verify the page displays a confirmation message such as `Thanks for getting in touch`.

### Sample contact data

| Field   | Value                          |
|---------|--------------------------------|
| Name    | Jon Snow                       |
| Email   | jon.snow@nightwatch.com        |
| Phone   | 123-456-7890                   |
| Subject | Inquiry                        |
| Message | I would like to book a room    |

## Navigation Manual Steps

### Rooms section
1. Open the hotel booking website.
2. Click the `Rooms` navigation link.
3. Verify that the rooms page is displayed and a list of available rooms is visible.

### Admin section
1. Open the hotel booking website.
2. Click the `Admin` navigation link.
3. Verify that the admin login page appears with username and password fields.

### Location section
1. Open the hotel booking website.
2. Click the `Location` navigation link.
3. Verify that the location page displays contact information and map/address details.

## Expected results

- Booking flow should display a confirmation message after booking is completed.
- Contact form should display a success confirmation message after submission.
- Rooms navigation should show room cards.
- Admin navigation should show login fields.
- Location navigation should show contact information and address details.

## Notes

- These manual steps follow the same user journeys as the automated Cucumber scenarios.
- If any UI element changes, update both the page object locators and the manual test script.
