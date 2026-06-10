# API Framework Documentation

## Overview

This folder contains the Posts API automation framework built with Cucumber, Playwright, and TypeScript.
The framework tests a RESTful posts endpoint by validating the following flows:
- Retrieving a post by id
- Creating a new post resource
- Performing a full CRUD flow (create, update, delete)

## Structure

- `features/posts.feature`
  - Defines the BDD scenarios and tags for the API tests.
- `step_definitions/posts.steps.ts`
  - Implements the step definitions used by the feature file.
- `clients/postsClients.ts`
  - Encapsulates HTTP calls to the posts API.
- `payloads/posts.ts`
  - Generates reusable request payloads for test data.
- `manual-test-script.md`
  - Provides manual verification steps to exercise the same scenarios.

## Test scenarios

The API framework includes three main scenarios:

1. `@get` - Get post by id
   - Verifies a basic GET operation.
   - Expects HTTP 200 and the returned `id` value.

2. `@post` - Create new resource
   - Verifies POST creation of a post.
   - Expects HTTP 201 and response values matching the request payload.

3. `@crud` - Perform CRUD operations on posts resource
   - Verifies create, update, and delete operations in one scenario.
   - Uses generated payload data for create and update steps.
   - Verifies response statuses and payload integrity.

## How data is used

- The framework uses `PostPayloads.getRandomResource(userId)` to build request objects.
- This helper function generates a unique `title` and `body` based on the provided `userId`.
- The created payload includes `userId`, and the response is validated against that same payload.
- During CRUD execution, the created post is updated using values derived from the original payload.

## How tests work

- `posts.steps.ts` creates a Playwright API request context with `jsonplaceholder.typicode.com` as the base URL.
- `PostsClient` wraps the HTTP methods for `GET`, `POST`, `PATCH`, and `DELETE`.
- Shared state is stored in module-level variables so that each step can access the `response` and `responseBody`.
- The common step `Then the response status should be {int}` asserts the HTTP status code for the last executed request.

## Running the API tests

From the project root, run:

```bash
npm run test:api
```

This executes the Cucumber scenarios tagged with `@api`.

## Notes

- The test uses the public `jsonplaceholder.typicode.com` endpoint for posts operations.
- The update operation uses `PATCH` to ensure compatibility with the endpoint behavior.
- Manual test guidance is available in `manual-test-script.md`.
