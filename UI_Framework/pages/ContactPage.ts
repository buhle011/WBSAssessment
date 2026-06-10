import { Page } from '@playwright/test';

// Page object model for the contact form.
// The locators include both form fields and success message verifications.
export class ContactPage {
    public static contactUsLink = "//a[@href='/#contact']";
    public static nameInput = "//input[@data-testid='ContactName']";
    public static firstname = "//input[@placeholder='Firstname']";
    public static lastname = "//input[@placeholder='Lastname']";
    public static emailInput = "//input[@data-testid='ContactEmail']";
    public static phoneInput = "//input[@data-testid='ContactPhone']";
    public static subjectInput = "//input[@data-testid='ContactSubject']";
    public static messageInput = "//textarea[@data-testid='ContactDescription']";
    public static submitButton = "//button[contains(text(),'Submit')]";
    public static successMessage = "//h3[contains(text(),'Thanks for getting in touch')]";
    public static email = "//input[@name='email']";
    public static phoneTextField = "//input[@name='phone']";
    public static adminUsernameInput = "//input[@id='username']";
    public static adminPasswordInput = "//input[@id='password']";
    public static loginButton = "//button[@type='submit']";
    public static logoutButton = "//button[text()='Logout']";
    public static invalidLoginMessage = "//div[@class='alert alert-danger']";   
}

