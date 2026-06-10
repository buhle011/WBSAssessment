import { Page } from '@playwright/test';

// Page object model for the booking flow.
// Each locator represents an element used during the reservation process.
export class BookPage {

    public static availabilityButton  = "//button[@class='btn btn-primary w-100 py-2']"; 
    public static bookNowButton = "(//a[@class='btn btn-primary'])[1]"; 
    public static checkInDateInput = "(//input[@type='text'])[1]";
    public static checkOutDateInput = "(//input[@type='text'])[2]";
    public static roomDescription = "//h2[contains(text(),'Room Description')]";
    public static roomFeatures = "//h2[contains(text(),'Room Features')]";
    public static selectedDates = "//div[@class='rbc-event-content']";
    public static totalPrice = "//span[contains(text(),'Total')]";
    public static reserveButton = "//button[contains(text(),'Reserve')]";
    public static cancelButton = "//button[contains(text(),'Cancel')]";
    public static reserveNowButton = "//button[contains(text(),'Reserve Now')]";
    public static bookingConfirmationMessage = "//h2[text()='Booking Confirmed']";

} 