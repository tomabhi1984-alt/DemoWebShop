// import { test, expect } from "@playwright/test";
// import HomePage from "../pages/HomePage";
// import RegisterPage from "../pages/RegisterPage";
// import users from "../test-data/users.json";

import { test, expect } from "../fixtures/testFixture";
import users from "../test-data/users.json";

// test("User Registration", async ({ page }) => {
//     const homePage = new HomePage(page);
//     const registrationPage = new RegistrationPage(page);
//     await homePage.openHomePage();
//     await homePage.clickRegister();
//     await registrationPage.register(
//         users.user1.firstName,
//         users.user1.lastName,
//         users.user1.email,
//         users.user1.password,
//         users.user1.confirmPassword
//     );
// });

// replace with
test("@functional User Registration", async ({ homePage,registrationPage}) => {

    await homePage.openHomePage();
    await homePage.clickRegister();

    await registrationPage.register(
        users.validUser.firstName,
        users.validUser.lastName,
        users.validUser.email,
        users.validUser.password,
        users.validUser.confirmPassword
    );
});
 // npx playwright test --grep "@functional"