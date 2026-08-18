// import { test, expect } from "@playwright/test";
// import HomePage from "../pages/HomePage";
// import ComputerPage from "../pages/ComputerPage";
// import ProductPage from "../pages/ProductPage";
// import AddToCartPage from "../pages/AddToCartPage";
import { test, expect } from "../fixtures/testFixture";

test("Verify user can add product to cart", async ({ page,homePage,computerPage,productPage,addToCartPage }) => {

    // const homePage = new HomePage(page);
    // const computerPage = new ComputerPage(page);
    // const productPage = new ProductPage(page);
    // const addToCartPage = new AddToCartPage(page);

await homePage.openHomePage();

    await homePage.clickComputers();

    await computerPage.clickDesktop();

    await productPage.clickBuildYourOwnComputer();

    await addToCartPage.selectProcessor(   "2.2 GHz Intel Pentium Dual-Core E2200");

    await addToCartPage.selectRam( "8GB [+60.00]" );

    await addToCartPage.selectHDD();
    await addToCartPage.selectOS();
    await addToCartPage.selectSoftware();
    await addToCartPage.clickAddToCart();
    // Verify success message
    await expect(
        page.locator("#bar-notification .content")
    ).toContainText(
        "The product has been added to your shopping cart"
    );
});
//npx playwright test --grep "@functional" == 4 fun