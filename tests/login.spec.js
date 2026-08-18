import { test, expect } from "../fixtures/testFixture";
import users from "../test-data/users.json";
import ExcelUtility from "../utils/ExcelUtility";

const excel = new ExcelUtility("./test-data/Testdata.xlsx");
const usersData = excel.getSheetData("Users");


test("@smoke Valid Login with Registered User", async ({homePage,loginPage}) => {
    await homePage.openHomePage();
    await homePage.clickLogin();
    // Reusable login method
    await loginPage.login( users.validUser.email,users.validUser.password);

    // Verify login is successful
    await expect( loginPage.page.locator(".account").first() ).toHaveText(users.validUser.email);

    // Verify Log out link is visible
    await expect(loginPage.page.getByText("Log out")).toBeVisible();

    console.log("Successful Login");   
});
usersData.forEach((user, index) => {

    test(`@smoke Excel Login - User ${index + 1}`, async ({ homePage, loginPage }) => {

        await homePage.openHomePage();
        await homePage.clickLogin();

        await loginPage.login(user.email, user.password);

        await expect(
            loginPage.page.locator(".account").first()
        ).toHaveText(user.email);

        await expect(
            loginPage.page.getByText("Log out")
        ).toBeVisible();

        // await homePage.logout();
        //await expect(page).toHaveTitle("Wrong Title");
    });

});
//npx playwright test --grep "@smoke"
