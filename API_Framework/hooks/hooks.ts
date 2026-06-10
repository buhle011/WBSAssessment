import { After } from '@cucumber/cucumber';

After(async function () {
    if (this.apiContext) {
        await this.apiContext.dispose();
    }
});