# UI Framework Documentation

## Overview

This folder contains the UI automation framework for the hotel booking website. It uses Cucumber with Playwright and TypeScript to validate end-to-end user journeys.

## Structure

- `features/`: contains Gherkin feature files for booking, contact, and navigation flows.
- `step_definitions/`: contains step implementations for each UI scenario.
- `pages/`: page object models with locators for key UI elements.
- `accelerators/`: reusable helper functions for clicking, typing, and verifying elements.
- `hooks/`: Playwright and Cucumber lifecycle hooks for browser setup and teardown.
- `manual-test-script.md`: manual steps for verifying the same UI flows without automation.

## Scenarios Covered

### Booking flow
- Navigate to the hotel booking website.
- Select check-in and check-out dates.
- Verify room availability and booking details.
- Complete reservation and verify confirmation.

### Contact form
- Open the Contact Us section.
- Fill the contact form using example data.
- Submit the form and verify the success confirmation.

### Navigation
- Navigate to rooms section and verify the available rooms list.
- Navigate to the admin section and verify login fields.
- Navigate to the location section and verify contact information.

## Data use in the UI framework

- Booking details are injected by the Scenario Outline `Examples` table.
- Contact form data is driven by the `Examples` table in the contact feature.
- Static values like dates are used in the booking flow to ensure predictable selector interactions.
- The ActionClass helper receives all input values and interacts with the page using the page object locators.

## How the tests work

- `hooks/hooks.ts` launches a Chromium browser and creates a Playwright page instance before every scenario.
- `ActionClass` provides common UI actions such as click, type, verify text, and flow control.
- Page objects centralize locator maintenance and make tests easier to read.
- Step definitions orchestrate the user journey by combining page actions and verifications.

## Running the UI tests

From the project root run:

```bash
npm run test:ui
```

This executes scenarios tagged with `@ui`.

## Notes

- The UI framework is designed for readability and maintainability.
- New features should add new page object locators and step definitions instead of using raw selectors in tests.
- Manual verification steps are available in `manual-test-script.md`.
