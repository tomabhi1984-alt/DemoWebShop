// custom fixture = to create and manage POM objects to the test files.
// custom fixture use into  hooks() ,test()

import { test as base } from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import ComputerPage from "../pages/ComputerPage";
import AddToCartPage from "../pages/AddToCartPage";


export const test = base.extend({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    registrationPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },

    computerPage: async ({ page }, use) => {
        await use(new ComputerPage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

    addToCartPage: async ({ page }, use) => {
        await use(new AddToCartPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    }
});


export { expect } from "@playwright/test";


