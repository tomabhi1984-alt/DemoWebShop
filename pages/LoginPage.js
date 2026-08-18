import GenricUtils from "../utils/GenricUtils";
import users from "../test-data/users.json"
export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.generic=new GenricUtils(page)

        // Locators
        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.loginButton = page.locator('input[value="Log in"]');
    } 
    // Reusable Login Method
    async login(email, password) {
        await this.generic.enterTextField(this.email, email);
        await this.generic.enterTextField(this.password, password);
        await this.generic.clickOnElement(this.loginButton);
    }
   
}

