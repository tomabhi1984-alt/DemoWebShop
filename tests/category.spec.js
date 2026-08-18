// import { test, expect } from "@playwright/test";
// import HomePage from "../pages/HomePage";
// import ComputerPage from "../pages/ComputerPage";
import { test, expect } from "../fixtures/testFixture";

test("@functional Verify user can navigate to Desktop category", async ({ page,homePage,computerPage}) => {
    //const homePage = new HomePage(page);       //c.fixture + POm 
    //const computerPage = new ComputerPage(page);
    await homePage.openHomePage();
    await homePage.clickComputers();
    await computerPage.clickDesktop();

    await expect(page).toHaveURL(/desktops/);
    await expect(
        page.getByRole("link", {
            name: "Build your own computer",
            exact: true
        })
    ).toBeVisible();
});
       //npx playwright test --grep "@functional"