import GenricUtils from "../utils/GenricUtils";
export default class HomePage {
    constructor(page) {
        this.page = page;
        this.generic=new GenricUtils(page)

        // Locators
        this.loginLink = page.locator(".ico-login");
        this.registerLink = page.locator(".ico-register");
        this.shoppingCart = page.getByRole("link", { name: "Shopping cart" });
        this.computersLink = page.getByRole("link", { name: "Computers" }).first();
        this.logoutLink =page.locator(".ico-logout")
    }

    //wow..keeps navigation in your utility
    async openHomePage() {
       await this.generic.navigateTo()
    }

    async clickLogin() { 
        await this.generic.clickOnElement(this.loginLink)
    }

    async clickRegister() {
        await this.generic.clickOnElement(this.registerLink)
    }

    async clickShoppingCart() {
        await this.generic.clickOnElement(this.ShoppingCart)
    }
     // Click Computers
    async clickComputers() {
        await this.generic.clickOnElement(this.computersLink);
    }
    async logout() {
        await this.generic.clickOnElement(this.logoutLink)
    }
}

