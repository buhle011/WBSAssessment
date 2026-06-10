import { Page} from '@playwright/test';

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
}