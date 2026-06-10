import { Page } from '@playwright/test';

// Page object model for navigation elements and destination pages.
export class RoomsPage {
  public static menuLink = ".navbar-toggler-icon";
  public static roomsSectionLink = "//a[@href='/#rooms']";
  public static roomsList = ".card-title";
  public static AdminSectionLink = "(//a[@href='/admin'])[1]";
  public static adminUsernameInput = "//input[@id='username']";
  public static adminPasswordInput = "//input[@id='password']";
  public static locationLink = "//a[text()= 'Location']"; 
  public static contactInformationLink = "//h3[text()= 'Contact Information']";

} 