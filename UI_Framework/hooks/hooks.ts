import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { ActionClass } from '../accelerators/ActionClass';

let browser: Browser;
let context: BrowserContext;
let page: Page;

// Hook executed before every scenario to initialize Playwright and the shared action helper.
// Increase the hook timeouts to allow browser start/cleanup on slower environments.
Before({ timeout: 60000 }, async function () {
    browser = await chromium.launch({ headless: false,args: ['--start-maximized'] });
    context = await browser.newContext({ viewport: null });
    page = await context.newPage();

    this.page = page;
    this.actionClass = new ActionClass(page);
});

// Hook executed after every scenario to capture a screenshot on failure and clean up browser resources.
After({ timeout: 60000 }, async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({
            fullPage: true
        });

        await this.attach(screenshot, 'image/png');
    }

    await page.close();
    await context.close();
    await browser.close();
});