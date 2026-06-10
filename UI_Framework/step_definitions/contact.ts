import { Given, When, Then } from '@cucumber/cucumber';
import {ActionClass} from '../accelerators/ActionClass';
import { ContactPage } from '../pages/ContactPage';


 let actionClass: ActionClass;

// Click the Contact Us link to open the contact form.
When('the user clicks on the Contact Us link', async function () {
  await this.actionClass.clickOnElement(ContactPage.contactUsLink, 'Contact Us Link');
});

// Fill the contact form fields using data from the scenario outline examples.
When('the user enters their {string}, {string},{string},{string} and {string} in the contact form', async function (sName, sEmail, sPhone, sSubject, sMessage) {
 await this.actionClass.typeInTextBox(ContactPage.nameInput, sName, 'Name Input');
 await this.actionClass.typeInTextBox(ContactPage.emailInput, sEmail, 'Email Input');
 await this.actionClass.typeInTextBox(ContactPage.phoneInput, sPhone, 'Phone Input');
 await this.actionClass.typeInTextBox(ContactPage.subjectInput, sSubject, 'Subject Input');
 await this.actionClass.typeInTextBox(ContactPage.messageInput, sMessage, 'Message Input');
});

// Submit the contact form.
When('the user submits the contact form', async function () {
  await this.actionClass.clickOnElement(ContactPage.submitButton, 'Submit Button');
});

// Verify that the success message is displayed after form submission.
Then('a confirmation message should be displayed confirming that the message has been sent', async function () {
  const element = this.actionClass.getPage().locator(ContactPage.successMessage);
  await element.waitFor({ state: 'visible', timeout: 5000 });
  const text = await element.textContent();
  if (!text || !text.includes('Thanks for getting in touch')) {
    throw new Error('Confirmation message not displayed');
  }
});