import { Given, When, Then } from '@cucumber/cucumber';
import {ActionClass} from '../accelerators/ActionClass';
import { RoomsPage } from '../pages/RoomsPage';

let actionClass: ActionClass;
let roomsPage: RoomsPage;

// Navigate to the rooms section from the hotel website.
Given('the navigate to rooms section', async function (){
  await this.actionClass.clickOnElement(RoomsPage.roomsSectionLink, 'Rooms Section Link');
});

// Verify that room cards are visible on the rooms page.
Given('the rooms page is displayed with the list of available rooms', async function () {
  await this.actionClass.verifyElementsVisible(RoomsPage.roomsList, 'Rooms List');
});

// Click the admin section link to show the admin login page.
When('the user navigates to admin section', async function () {
  await this.actionClass.clickOnElement(RoomsPage.AdminSectionLink, 'Admin Section Link');
});

// Confirm the admin page contains the expected username/password fields.
Then('the admin login page should be displayed with username and password fields',  async function () {
    await this.actionClass.verifyElementText(RoomsPage.adminUsernameInput, 'Admin Username Input'); 
    await this.actionClass.verifyElementText(RoomsPage.adminPasswordInput, 'Admin Password Input');     
});

// Click the location link to navigate to the location section.
When('the user navigates to location section', async function () {
  await this.actionClass.clickOnElement(RoomsPage.locationLink, 'Location Link');
});

// Verify the location page shows contact information and map details.
Then('the location page should be displayed with the map and address details', async function () {
    await this.actionClass.verifyElementText(RoomsPage.contactInformationLink, 'Contact Information');
});