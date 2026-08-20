
// T3 - E2E using ExcelUtility

import { test, expect } from "../fixtures/testFixture";
import ExcelUtility from "../utils/ExcelUtility";

// Excel Utility
const excel = new ExcelUtility("./test-data/TestData.xlsx");
const usersData = excel.getSheetData("Users");

// Before Each
test.beforeEach(async ({ homePage }) => {
    await homePage.openHomePage();
    await homePage.clickLogin();
});

// After Each
test.afterEach(async ({ homePage }) => {
    await homePage.logout();
});

// Test for each Excel user
usersData.forEach((user, index) => {

test(`@regression @excel T3-E2E Add Product-User ${index + 1}`, async ({page, homePage,loginPage,computerPage,
            productPage, addToCartPage,cartPage }) => {
            // Login using Excel data
            await loginPage.login(user.email, user.password);
            // verify
            await expect(homePage.logoutLink).toBeVisible();
            // Open Cart and clear existing products
            await cartPage.openCart();
            await cartPage.clearCart();
            // Navigate to Computers
            await homePage.clickComputers();
            await computerPage.clickDesktop();
            // Select Product
            await productPage.clickBuildYourOwnComputer();
            // Configure Product
            await addToCartPage.selectProcessor(  "2.2 GHz Intel Pentium Dual-Core E2200" );
            await addToCartPage.selectRam(  "8GB [+60.00]" );
            await addToCartPage.selectHDD();
            await addToCartPage.selectOS();
            await addToCartPage.selectSoftware();
            // Add Product to Cart
            await addToCartPage.clickAddToCart();
            // Open Cart
            await cartPage.openCart();
            console.log("After opening cart:", page.url());
            // Verify Product
            await expect(
                await cartPage.getProductName()
            ).toContain("Build your own computer");
            // Verify Quantity
          await expect(await cartPage.getQuantity()).toBe("1");
            // Checkout
            await cartPage.acceptTermsOfService();
            await cartPage.clickCheckout();
        }
    );
});

