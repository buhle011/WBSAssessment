import { Page, expect } from '@playwright/test';

export class ActionClass {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Function to launch an application
  async launchApplication(url: string) {
    try {
      await this.page.goto(url);
    } catch (error) {
      console.error(`Failed to launch application: ${url}`, error);
      throw error;
    }
  }

   // Function to type in text box
  async typeInTextBox(locator: string, data: string, elementName: string): Promise<void> {
    try {
      const element = this.page.locator(locator);

      // Ensure element is visible
      await expect(element).toBeVisible();

      // Clear existing value
      await element.fill('');

      // Type new value
      await element.fill(data);

      console.log(`Entered data in ${elementName} textbox`);

    } catch (error) {
      console.error(`Failed to enter data in ${elementName} textbox`, error);
      throw error; // equivalent to Assert.fail
    }
  }

  // Function to click on an element
  async clickOnElement(locator: string, elementName: string): Promise<boolean> {
    try {
      const element = this.page.locator(locator);

      await element.scrollIntoViewIfNeeded();
      await expect(element).toBeVisible();

      await element.click();

      console.log(`Clicked on ${elementName}`);
      return true;

    } catch (error) {
      console.error(`Failed to click on ${elementName}`, error);
      throw error; 
    }
  }

  // Function to scroll down to an element
  async scrollToElement(locator: string, elementName: string): Promise<boolean> {
   try {
    const element = this.page.locator(locator);

    await element.scrollIntoViewIfNeeded();

    console.log(`Scrolled up to ${elementName}`);
    return true;
  } catch (error) {
    console.error(`Failed to scroll up to ${elementName}`, error);
    throw error;
  }
  }

// Function to click radio button 
  async clickRadioButtton(locator: string, elementName: string): Promise<boolean> {
    try {
      const element = this.page.locator(locator);

      await expect(element).toBeVisible();

      await element.click();
      console.log(`Clicked on ${elementName} radio button`);
      return true;  

       } catch (error) {
      console.error(`Failed to click on ${elementName}`, error);
      throw error; 
    }
  }  
  
  // Function to click checkbox
  async clickCheckBox(locator: string, elementName: string): Promise<boolean> {
    try {
      const element = this.page.locator(locator);                       

      await expect(element).toBeVisible();

      await element.click();
      console.log(`Clicked on ${elementName} checkbox`);
      return true;    
  } catch (error) {
      console.error(`Failed to click on ${elementName}`, error);
      throw error; 
    }
  }

// Function to select dropdown value
  async selectDropdownValue(locator: string, value: string, elementName: string): Promise<boolean> {
    try {
      const element = this.page.locator(locator);
      await expect(element).toBeVisible();
      await element.selectOption(value);
      console.log(`Selected value '${value}' in ${elementName} dropdown`);
      return true;
    } catch (error) {
      console.error(`Failed to select value in ${elementName} dropdown`, error);
      throw error;
    }
  }
  // Function to get the page object
  getPage(): Page {
    return this.page;
  }

  // Function to verify element text
  async verifyElementIsVisible(locator: string, expectedText: string, elementName: string): Promise<boolean> {
    try {       
    const element = this.page.locator(locator);
      await expect(element).toBeVisible();
      console.log(`Verifying text of ${elementName}`);
      const actualText = await element.textContent();
      await expect(element).toHaveText(expectedText);
      return true;
    } catch (error) {
      console.error(`Failed to verify text of ${elementName}`, error);
      throw error;
    }
  }

// Verify list of elements is visible on page
async verifyElementsVisible(locator: string,elementName: string): Promise<boolean> {
  try {
    const elements = this.page.locator(locator);

    const count = await elements.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(elements.nth(i)).toBeVisible();
    }

    console.log(
      `${elementName} list verified successfully. Total items: ${count}`
    );

    return true;
  } catch (error) {
    console.error(`Failed to verify ${elementName} list`, error);
    throw error;
  }


}
}