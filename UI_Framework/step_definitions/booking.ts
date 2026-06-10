import { Given, When, Then } from '@cucumber/cucumber';
import {ActionClass} from '../accelerators/ActionClass';
import { BookPage } from '../pages/BookPage';
import{ContactPage} from '../pages/ContactPage';


 let actionClass: ActionClass;

// Navigate to the hotel booking landing page.
Given('the user navigates to the hotel booking website',{timeout:60000},async function () {
  // Increase timeout to allow for slower network or page load delays.
  await this.actionClass.launchApplication('https://automationintesting.online/');
});

// Verify room availability by clicking the availability button.
When('the user checks the availability of rooms',async function () {
  await this.actionClass.clickOnElement(BookPage.availabilityButton, 'Availability Button');
});;

// Begin the booking flow by clicking the first available book now button.
When('the user select book now button',async function () {
  await this.actionClass.clickOnElement(BookPage.bookNowButton, 'Book Now Button');
});

// Choose a check-in date value in the date picker.
When('the user chooses a valid check-in date',{timeout:60000} , async function () {
  await this.actionClass.clickOnElement(BookPage.checkInDateInput, 'Check-in Date Input');        
  await this.actionClass.typeInTextBox(BookPage.checkInDateInput, '2026/06/22', 'Check-in Date Input');
});

// Choose a check-out date value in the date picker.
When('the user chooses a valid check-out date',{timeout:60000} , async function () {
  await this.actionClass.clickOnElement(BookPage.checkOutDateInput, 'Check-out Date Input');
  await this.actionClass.typeInTextBox(BookPage.checkOutDateInput, '2026/06/27', 'Check-out Date Input');
});

// Enter customer booking details provided by the scenario outline.
When('the user fills in the booking form with valid details {string},{string}, {string},{string}',{timeout:60000}, async function (sFirstName, sLastName, sEmail, sPhone) {
  await this.actionClass.typeInTextBox(ContactPage.firstname, sFirstName, 'First Name Input');
  await this.actionClass.typeInTextBox(ContactPage.lastname, sLastName, 'Last Name Input');
  await this.actionClass.typeInTextBox(ContactPage.email, sEmail, 'Email Input');
  await this.actionClass.typeInTextBox(ContactPage.phoneTextField, sPhone, 'Phone Input');
});

// Confirm the selected dates appear correctly on the reservation page.
When('the calender shows the selected check-in to check-out dates on the reserve page', async function () {
  await this.actionClass.scrollToElement(BookPage.selectedDates, 'Selected Dates');
  await this.actionClass.verifyElementIsVisible(BookPage.selectedDates, 'Selected', 'Selected Dates');
});

// Verify room summary and features are displayed before reservation.
When('the room discription and features are displayed on the reserve page', async function () {
 await this.actionClass.verifyElementIsVisible(BookPage.roomDescription, 'Room Description', 'Room Description');
 await this.actionClass.verifyElementIsVisible(BookPage.roomFeatures, 'Room Features', 'Room Features');
});

// Verify the total price field is visible on the reservation page.
When('verify total price displayed on the reserve page', async function () {

 await this.actionClass.verifyElementIsVisible(BookPage.totalPrice, 'Total', 'Total Price');
});

// Click the reserve button to continue to the confirmation stage.
When('the user click reserve button to confirm the booking', async function () {
  await this.actionClass.clickOnElement(BookPage.reserveButton, 'Reserve Button');
});

// Verify reserve and cancel buttons are present on the confirmation page.
When('the the reserve and cancel buttons are displayed on the confirmation page', async function () {
  await this.actionClass.verifyElementIsVisible(BookPage.reserveNowButton, 'Reserve Now', 'Reserve Now Button');
  await this.actionClass.verifyElementIsVisible(BookPage.cancelButton, 'Cancel', 'Cancel Button');
});

// Finalize the booking by clicking the reserve now button.
When('the user click reserve now button to finalize the booking', async function () {
  await this.actionClass.clickOnElement(BookPage.reserveNowButton, 'Reserve Now Button');
});

// Assert that the booking confirmation message is shown.
Then('the booking should be created successfully', async  function () {
   
    await this.actionClass.verifyElementIsVisible(BookPage.bookingConfirmationMessage, 'Booking Confirmed ');
});