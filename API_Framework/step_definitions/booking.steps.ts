import { Given, When, Then } from "@cucumber/cucumber";
import { expect, APIRequestContext, request } from "@playwright/test";

let apiContext: APIRequestContext;
let response: any;
let responseBody: any;
let bookingId: number;
let token: string;

const bookingPayload = {
  firstname: "John",
  lastname: "Snow",
  totalprice: 500,
  depositpaid: true,
  bookingdates: {
    checkin: "2026-06-01",
    checkout: "2026-06-10"
  },
  additionalneeds: "Breakfast"
};

Given("the Restful Booker API is available", async function () {
  apiContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com"
  });
});

Given("a valid authentication token is available", async function () {
  if (!apiContext) {
    apiContext = await request.newContext({
      baseURL: "https://restful-booker.herokuapp.com"
    });
  }

  response = await apiContext.post("/auth", {
    data: {
      username: "admin",
      password: "password123"
    }
  });

  expect(response.status()).toBe(200);

  responseBody = await response.json();
  token = responseBody.token;

  expect(token).toBeTruthy();
});

Given("a booking exists", async function () {

  if (!apiContext) {
    apiContext = await request.newContext({
      baseURL: "https://restful-booker.herokuapp.com"
    });
  }

  response = await apiContext.post("/booking", {
    data: bookingPayload
  });

  expect(response.status()).toBe(200);

  responseBody = await response.json();
  bookingId = responseBody.bookingid;

  expect(bookingId).toBeDefined();
});

When("the user creates a new booking", async function () {

  response = await apiContext.post("/booking", {
    data: bookingPayload
  });

  responseBody = await response.json();

  bookingId = responseBody.bookingid;
});

Then("the booking id should be generated", async function () {

  expect(bookingId).toBeDefined();
  expect(bookingId).toBeGreaterThan(0);
});

Then("the booking details should match the request payload",async function () {

    expect(responseBody.booking.firstname).toBe(bookingPayload.firstname);

    expect(responseBody.booking.lastname).toBe(bookingPayload.lastname);

    expect(responseBody.booking.totalprice).toBe(bookingPayload.totalprice);

    expect(responseBody.booking.additionalneeds).toBe(bookingPayload.additionalneeds);
  }
);

When("the user retrieves the booking by id", async function () {

  response = await apiContext.get(`/booking/${bookingId}`);

  responseBody = await response.json();
});

Then("the booking details should be returned successfully",async function () {

    expect(responseBody.firstname).toBe(bookingPayload.firstname);

    expect(responseBody.lastname).toBe(bookingPayload.lastname);
  }
);

When("the user updates the booking", async function () {

  const updatedPayload = {
    firstname: "Arya",
    lastname: "Stark",
    totalprice: 800,
    depositpaid: true,
    bookingdates: {
      checkin: "2026-07-01",
      checkout: "2026-07-10"
    },
    additionalneeds: "Lunch"
  };

  response = await apiContext.put(
    `/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      },
      data: updatedPayload
    }
  );

  responseBody = await response.json();
});

Then(
  "the booking details should be updated successfully",
  async function () {

    expect(responseBody.firstname).toBe("Arya");
    expect(responseBody.lastname).toBe("Stark");
    expect(responseBody.additionalneeds).toBe("Lunch");
  }
);

When("the user partially updates the booking", async function () {

  response = await apiContext.patch(
    `/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      },
      data: {
        firstname: "UpdatedUser"
      }
    }
  );

  responseBody = await response.json();
});

Then(
  "the booking first name should be updated",
  async function () {

    expect(responseBody.firstname)
      .toBe("UpdatedUser");
  }
);

When("the user deletes the booking", async function () {

  response = await apiContext.delete(
    `/booking/${bookingId}`,
    {
      headers: {
        Cookie: `token=${token}`
      }
    }
  );
});