Bug Report
 Title: Logout Button  Showing while user is not logged in

 Description: The logout button is visible on the homepage even when the user is not logged in, which can cause confusion for users.

Environment: 
 Browser: Chrome 
 OS: Windows 
 Device: Desktop
 Build/URL: https://automationintesting.online/  

Pre-conditions:
 1. User is on the homepage of the hotel booking website.
 2. User is not logged in.

Steps to Reproduce:
 1. Open the hotel booking website in a web browser.
 2. Navigate to admin page by clicking on the admin link.
 3. Observe the presence of the logout button on the homepage.  

 ❌ Actual Result: 
 The logout button is visible on the homepage even when the user is not logged in.

✅ Expected Result:
 The logout button should only be visible when the user is logged in. When the user is not logged in, the logout button should be hidden or not displayed at all.

Title: Amenities link not working

 Description: The Amenities link on the homepage is not functioning as expected, preventing users from accessing the amenities information.
 
Environment: 
 Browser: Chrome 
 OS: Windows 
 Device: Desktop
 Build/URL: https://automationintesting.online/

 Pre-conditions:
 1. User is on the homepage of the hotel booking website.
 2. User is not logged in.

Steps to Reproduce:
 1. Open the hotel booking website in a web browser.
 2. Navigate to Amenities page by clicking on the Amenities link.
 3. Observe the ability to access the amenities information.  

 ❌ Actual Result: 
 The amenities link is not functioning as expected.

✅ Expected Result:
 The amenities information should be accessible when the user clicks on the Amenities link.

 Title: Check Availability not working as expected

 Description: The check availablity allows check in date to be greater than check out date, which is not expected.
Environment: 
 Browser: Chrome 
 OS: Windows 
 Device: Desktop
 Build/URL: https://automationintesting.online/  

Pre-conditions:
 1. User is on the homepage of the hotel booking website.
 2. User is not logged in.

Steps to Reproduce:
 1. Open the hotel booking website in a web browser.
 2. Navigate to booking page by clicking on the book now button.
 3. Enter a check-in date that is later than the check-out date.
 4. Observe the behavior of the availability check.  

❌ Actual Result: 
    The system allows the user to check availability even when the check-in date is greater than the check-out date.

✅ Expected Result:
    The system should display an error message or prevent the user from checking availability when the check-in date is greater than the check-out date, ensuring that users enter valid date ranges for their bookings.
