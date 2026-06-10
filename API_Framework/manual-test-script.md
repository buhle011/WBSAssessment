# Manual Test Script for Posts API

## Purpose

This document describes how to manually verify the API tests in the `API_Framework` folder.
The same flows covered by automated tests are described here so testers can validate them without automation.

## Pre-requisites

- API endpoint available at `https://jsonplaceholder.typicode.com`
- A REST client such as Postman, Insomnia, curl, or a browser extension
- Access to the `API_Framework/features/posts.feature` file for scenario details

## Test Data

The framework generates payloads with the following fields:
- `title`: `Test post for user {userId}`
- `body`: `This is a test body for user {userId}`
- `userId`: numeric identifier used to distinguish payloads

Example payload:

```json
{
  "title": "Test post for user 1",
  "body": "This is a test body for user 1",
  "userId": 1
}
```

## Manual Test Steps

### 1. Get post by id

1. Send a GET request to:
   `https://jsonplaceholder.typicode.com/posts/1`
2. Verify the response status is `200`.
3. Verify the returned JSON contains:
   - `id: 1`

Expected fields:
- `userId`
- `id`
- `title`
- `body`

### 2. Create a new post

1. Send a POST request to:
   `https://jsonplaceholder.typicode.com/posts`
2. Use the request body:

```json
{
  "title": "Test post for user 1",
  "body": "This is a test body for user 1",
  "userId": 1
}
```

3. Verify the response status is `201`.
4. Verify the response JSON contains the same `title`, `body`, and `userId`.
5. Save the returned `id` for later verification if needed.

### 3. Perform CRUD operations on posts resource

#### Create operation

1. Send a POST request to `https://jsonplaceholder.typicode.com/posts`
2. Use the request body:

```json
{
  "title": "Test post for user 2",
  "body": "This is a test body for user 2",
  "userId": 2
}
```

3. Verify the response status is `201`.
4. Capture the returned `id`.
5. Verify the created response body matches the request payload.

#### Update operation

1. Send a PATCH request to:
   `https://jsonplaceholder.typicode.com/posts/{id}`
   where `{id}` is the ID returned from the create operation.
2. Use the request body:

```json
{
  "id": {id},
  "title": "Updated Test post for user 2",
  "body": "Updated This is a test body for user 2",
  "userId": 2
}
```

3. Verify the response status is `200`.
4. Verify the returned JSON reflects the updated `title`, `body`, and `userId`.

#### Delete operation

1. Send a DELETE request to:
   `https://jsonplaceholder.typicode.com/posts/{id}`
   where `{id}` is the resource ID from the create step.
2. Verify the response status is `200`.
3. Confirm the endpoint returns an empty body or the expected delete response.

## Expected Results

- Get scenario should return `200` and `id: 1`.
- Create scenario should return `201` and payload fields should match.
- CRUD scenario should return `201` on create, `200` on update, and `200` on delete.

## Notes

- Because this API is a public test endpoint, the data is not persisted in a production database.
- The manual test script mirrors the automated Cucumber tests, so any mismatch should be investigated in both automation and API behavior.
