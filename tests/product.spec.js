// import { test, expect } from "@playwright/test";
// import HomePage from "../pages/HomePage";
// import ComputerPage from "../pages/ComputerPage";
// import ProductPage from "../pages/ProductPage";
import { test, expect } from "../fixtures/testFixture";  //Custom Fixture + @functional tag

test("@functional Verify user can open Build Your Own Computer product", async ({ page,homePage, computerPage,productPage}) => {

    // const homePage = new HomePage(page);
    // const computerPage = new ComputerPage(page);
    // const productPage = new ProductPage(page);

    await homePage.openHomePage();
    await homePage.clickComputers();
    await computerPage.clickDesktop();
    await productPage.clickBuildYourOwnComputer();

    // Verify Product Page
    await expect(page).toHaveURL(/build-your-own-computer/);
    // Verify Product Title
    await expect(
        page.getByRole("heading", {
            name: "Build your own computer"
        })
    ).toBeVisible();
    // 📸 Manual screenshot
await page.screenshot({
    path: "screenshots/product-page.png",
    fullPage: true
});
});

//npx playwright test --grep "@functional"