import { test, expect } from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import users from "../test-data/users.json";

test.beforeEach(async ({ page }) => {
const homePage = new HomePage(page);
const loginPage = new LoginPage(page);


await homePage.openHomePage();
await homePage.clickLogin();
await loginPage.loginAsValidUser();


});

test("Valid Login with Registered User", async ({ page }) => {


// Verify login is successful
await expect(page.locator(".account").first())
    .toHaveText(users.validUser.email);

// Verify Log out link is visible
await expect(page.getByText("Log out")).toBeVisible();

console.log("Successful Login");


}); 

