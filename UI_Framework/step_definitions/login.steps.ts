import { Given, When, Then } from '@cucumber/cucumber';
import {ActionClass} from '../accelerators/ActionClass';
import{ContactPage} from '../pages/ContactPage';
import {RoomsPage} from '../pages/RoomsPage';

 let actionClass: ActionClass;

 Given('the user navigates to admin page',async function () {
  await this.actionClass.clickOnElement(RoomsPage.AdminSectionLink, 'Admin Section Link')
});

When('the user enters valid username {string} and password {string}',async function (sName, sPassword) {
  await this.actionClass.typeInTextBox(ContactPage.adminUsernameInput, sName, 'ValidAdmin Username ');
  await this.actionClass.typeInTextBox(ContactPage.adminPasswordInput, sPassword, 'Valid Admin Password ');
  
});

When('the user clicks on the login button',async function () {
  await this.actionClass.clickOnElement(ContactPage.loginButton, 'Login Button');
});

Then('the user should be logged in successfully',async function () {
  console.log('Login successful');
});

Then('the admin dashboard should be displayed',async function () {
  console.log('Admin dashboard displayed');
});

When('the user enters username {string} and password {string}',async function (sUsername, sPassword) {
  await this.actionClass.typeInTextBox(ContactPage.adminUsernameInput, sUsername, 'ValidAdmin Username ');
  await this.actionClass.typeInTextBox(ContactPage.adminPasswordInput, sPassword, 'Valid Admin Password ');
});

Given('the user is logged in successfully',async function () {
  
});

When('the user clicks on the logout button',async function () {
  await this.actionClass.clickOnElement(ContactPage.logoutButton, 'Logout Button');
});

Then('the user should be redirected to the login page',async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the login form should be visible',async function () {
 
});

Then('the user should see an error message',async function () {

  await this.actionClass.verifyElementIsVisible(ContactPage.invalidLoginMessage, 'Invalid credentials');
  
});