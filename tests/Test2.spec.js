// T2= added CUSTOM FIXTURE
//Parallel execution also done

import { test, expect } from "../fixtures/testFixture";
import users from "../test-data/users.json"

test.beforeEach(async ({ homePage, loginPage }) => { // custom fixture use in hooks
    await homePage.openHomePage();
    await homePage.clickLogin();
    await loginPage.login( users.validUser.email, users.validUser.password ); //Test data management 
});
test.afterEach(async ({ homePage }) => {  // custom fixture use in hooks
    await homePage.logout();
});

test("@regression E2E - Add Product to Cart and Checkout", async ({ homePage, computerPage,productPage, addToCartPage,cartPage }) => 
    {
    // Open Cart and clean existing products
    await cartPage.openCart();
    await cartPage.clearCart();
    //calling()
    await homePage.clickComputers();
    await computerPage.clickDesktop();
    await productPage.clickBuildYourOwnComputer();
    await addToCartPage.selectProcessor( "2.2 GHz Intel Pentium Dual-Core E2200" );
    await addToCartPage.selectRam("8GB [+60.00]" );
    await addToCartPage.selectHDD();
    await addToCartPage.selectOS();
    await addToCartPage.selectSoftware();
    await addToCartPage.clickAddToCart();
    await cartPage.openCart();
        // verify product
    await expect(await cartPage.getProductName()).toContain("Build your own computer");
       // verify Quantity
    await expect(await cartPage.getQuantity()).toBe("1");
//     // 📸 Manual screenshot
// await page.screenshot({path: "screenshots/cart-verified.png",fullPage: true});
    await cartPage.acceptTermsOfService();
    await cartPage.clickCheckout();

});
//npx playwright test --grep "@regression"

// npx playwright test
//         ↓
// Tests execute
//         ↓
// npx playwright show-report reports/html --port 9324
//         ↓
// http://localhost:9324 (chrome)
//         ↓
// 6. Press Ctrl+C to quit