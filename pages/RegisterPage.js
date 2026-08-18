import GenricUtils from "../utils/genricUtils";
import users from "../test-data/users.json"

export default class RegisterPage {
    constructor(page) {
        this.page = page;
        this.generic=new GenricUtils(page)

        // Gender
        this.genderMale = page.locator("#gender-male");

        // Registration fields
        this.firstName = page.locator("#FirstName");
        this.lastName = page.locator("#LastName");
        this.email = page.locator("#Email");
        this.password = page.locator("#Password");
        this.confirmPassword = page.locator("#ConfirmPassword");
        // Register button
        this.registerButton = page.locator("#register-button");
        // Success message
        this.successMessage = page.locator(".result");
    }
      async register(firstName, lastName, email, password, confirmPassword) {
        await this.generic.enterTextField(this.firstName, firstName);
        await this.generic.enterTextField(this.lastName, lastName);
        await this.generic.enterTextField(this.email, email);
        await this.generic.enterTextField(this.password, password);
        await this.generic.enterTextField(this.confirmPassword, confirmPassword);
        await this.generic.clickOnElement(this.registerButton); }
     
    async getSuccessMessage() {
    return await this.generic.getText(this.successMessage);
}
}

