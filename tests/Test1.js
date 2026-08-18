// (all right ) but no CUSTOM FIXTURE so go = T2

import { test, expect } from "@playwright/test";   // replace (c.fixture) in T2  
import HomePage from "../pages/HomePage";     // 
import LoginPage from "../pages/LoginPage";   // 
import ComputerPage from "../pages/ComputerPage"; //
import ProductPage from "../pages/ProductPage";   //
import AddToCartPage from "../pages/AddToCartPage";//
import CartPage from "../pages/CartPage";            //
// checkout.spec.js

test.beforeEach(async ({ page }) => {             // hooks
    const homePage = new HomePage(page);       // (c.fixture) in T2 
    const loginPage = new LoginPage(page);     // (c.fixture) in T2 
    await homePage.openHomePage();
    await homePage.clickLogin();
    await loginPage.loginAsValidUser();
});
test.afterEach(async ({ page }) => {
    const homePage = new HomePage(page);  // (c.fixture) in T2
    await homePage.logout();
});

test("E2E - Add Product to Cart and Checkout", async ({ page }) => {
         // object create
    const homePage = new HomePage(page);         //  (c.fixture) in T2 
    const computerPage = new ComputerPage(page); //
    const productPage = new ProductPage(page);   //
    const addToCartPage = new AddToCartPage(page); //
    const cartPage = new CartPage(page);          //

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
        // verify
    await expect(await cartPage.getProductName()).toContain("Build your own computer");
       // verify
    await expect(await cartPage.getQuantity()).toBe("1");
    await cartPage.acceptTermsOfService();
    await cartPage.clickCheckout();

});