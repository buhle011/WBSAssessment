import { Given, When, Then } from "@cucumber/cucumber";
import { expect, APIRequestContext, request } from "@playwright/test";
import { PostsClient } from "../clients/postsClients";
import { PostPayloads } from "../payloads/posts";

// Reusable API context for Playwright requests
let apiContext: APIRequestContext;
let postsClient: PostsClient;
let response: any;
let responseBody: any;
let createdPostPayload: any;

// Establish the base API URL and prepare a client wrapper for posts operations.
Given("the posts API is available", async function () {
  apiContext = await request.newContext({
    baseURL: "https://jsonplaceholder.typicode.com"
  });
  postsClient = new PostsClient(apiContext);
});

// Retrieve a post by its id and store the response body for later assertions.
When("the user gets post with id {int}", async function (postId: number) {
  response = await postsClient.getPost(postId);
  responseBody = await response.json();
});

// Assert that the returned JSON contains the expected post id.
Then("the returned post id should be {int}", function (expectedId: number) {
  expect(responseBody.id).toBe(expectedId);
});

// Build a new post payload, send it to the posts endpoint, and save the created object.
When("the user creates a new post", async function () {
  createdPostPayload = PostPayloads.getRandomResource(1);
  response = await postsClient.createPost(createdPostPayload);
  responseBody = await response.json();
  createdPostPayload.id = responseBody.id;
});

// Validate that the created post response matches the generated request data.
Then("the created post should match the request payload", function () {
  expect(responseBody.title).toBe(createdPostPayload.title);
  expect(responseBody.body).toBe(createdPostPayload.body);
  expect(Number(responseBody.userId)).toBe(Number(createdPostPayload.userId));
});

// Validate HTTP status codes for all scenarios that use the shared response object.
Then("the response status should be {int}", function (statusCode: number) {
  expect(response.status()).toBe(statusCode);
});

// Create a new post as the first step in the CRUD scenario.
When("the user performs create operation", async function () {
  createdPostPayload = PostPayloads.getRandomResource(2);
  response = await postsClient.createPost(createdPostPayload);
  responseBody = await response.json();
  createdPostPayload.id = responseBody.id;
});

// Update the resource created in the CRUD flow, then parse the JSON response.
When("the user performs update operation", async function () {
  const updatePayload = {
    id: createdPostPayload?.id ?? 1,
    title: `Updated ${createdPostPayload.title}`,
    body: `Updated ${createdPostPayload.body}`,
    userId: createdPostPayload.userId
  };

  response = await postsClient.updatePost(updatePayload);
  try {
    responseBody = await response.json();
  } catch (error) {
    const text = await response.text();
    throw new Error(`Failed parsing update response as JSON: status=${response.status()}, content-type=${response.headers()["content-type"]}, body=${text}`);
  }
  createdPostPayload = updatePayload;
});

// Assert that the update response matches the request payload used for patching.
Then("the updated post should match the request payload", function () {
  expect(responseBody.title).toBe(createdPostPayload.title);
  expect(responseBody.body).toBe(createdPostPayload.body);
  expect(Number(responseBody.userId)).toBe(Number(createdPostPayload.userId));
});

// Delete the resource created in the CRUD scenario and ignore any empty response body.
When("the user performs delete operation", async function () {
  const postId = createdPostPayload?.id ?? 1;
  response = await postsClient.deletePost(postId);
  responseBody = {};
  try {
    responseBody = await response.json();
  } catch {
    responseBody = {};
  }
});
