1. Initialize Node Project
   npm init -y

2.install playwright 
npm install @playwright/test 

3.Install Browsers

npx playwright install

4.Install Cucumber

npm install @cucumber/cucumber --save-dev

5.Install TypeScript

npm install typescript ts-node --save-dev

Install report dependencies

npm install cucumber-html-reporter --save-dev
## API Framework Documentation

The `API_Framework` folder contains the posts API tests and supporting helpers.
- `API_Framework/features/posts.feature` defines the Gherkin scenarios.
- `API_Framework/step_definitions/posts.steps.ts` contains the implementation of those test steps.
- `API_Framework/clients/postsClients.ts` is the HTTP client wrapper for posts endpoints.
- `API_Framework/payloads/posts.ts` provides test payload generation.
- `API_Framework/README.md` contains the API framework overview and usage guide.
- `API_Framework/manual-test-script.md` explains how to execute the tests manually.

## UI Framework Documentation

The `UI_Framework` folder contains the hotel booking UI tests and supporting page objects.
- `UI_Framework/features/booking.feature` defines the booking flow scenario.
- `UI_Framework/features/contact.feature` defines the contact form scenario.
- `UI_Framework/features/navigation.feature` defines navigation-related scenarios.
- `UI_Framework/step_definitions/booking.ts` implements booking user actions.
- `UI_Framework/step_definitions/contact.ts` implements contact form actions.
- `UI_Framework/step_definitions/navigation.ts` implements navigation actions.
- `UI_Framework/pages/BookPage.ts`, `UI_Framework/pages/ContactPage.ts`, and `UI_Framework/pages/RoomsPage.ts` hold locators.
- `UI_Framework/accelerators/ActionClass.ts` provides reusable UI actions.
- `UI_Framework/hooks/hooks.ts` sets up and tears down the browser.
- `UI_Framework/README.md` contains the UI framework overview.
- `UI_Framework/manual-test-script.md` contains manual verification steps.
