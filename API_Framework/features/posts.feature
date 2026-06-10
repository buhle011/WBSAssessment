# API tests for the posts endpoint
# This feature file validates get, create, update, and delete operations
@api
Feature: Posts API Testing

  # Retrieve an existing post by id and verify the returned id
  @get
  Scenario: Get post by id
    Given the posts API is available
    When the user gets post with id 1
    Then the response status should be 200
    And the returned post id should be 1

  # Create a new post resource and validate the response body matches the request payload
  @post
  Scenario: Create new resource
    Given the posts API is available
    When the user creates a new post
    Then the response status should be 201
    And the created post should match the request payload

  # Full CRUD flow: create, update, and delete a post in a single scenario
  @crud
  Scenario: Perform CRUD operations on posts resource
    Given the posts API is available
    When the user performs create operation
    Then the response status should be 201
    And the created post should match the request payload
    When the user performs update operation
    Then the response status should be 200
    And the updated post should match the request payload
    When the user performs delete operation
    Then the response status should be 200