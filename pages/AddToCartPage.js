import GenricUtils from "../utils/GenricUtils";

export default class AddToCartPage {
    constructor(page) {
        this.page = page;
        this.generic = new GenricUtils(page);

        // Locators
        this.productTitle = page.locator('h1[itemprop="name"]');
        this.processor = page.locator('//select[@name="product_attribute_16_5_4"]');
        this.ram = page.locator("#product_attribute_16_6_5").first();
       this.hdd = page.locator('(//input[@name="product_attribute_16_3_6"])[1]');
        this.os = page.locator('(//input[@name="product_attribute_16_4_7"])[3]');
        this.software = page.locator('(//input[@name="product_attribute_16_8_8"])[1]')
        this.addToCartButton = page.locator("#add-to-cart-button-16").first();
        this.successMessage = page.locator("#bar-notification .content");
    }

    // Methods

    async selectProcessor(value) {
    await this.processor.waitFor({ state: "visible" });
    await this.generic.selectDropdownByLabel( this.processor,value);
}

    async selectRam(value) {
        await this.generic.selectDropdownByLabel(this.ram, value);
    }

    async selectHDD() {
        await this.generic.clickOnElement(this.hdd);
    }

    async selectOS() {
        await this.generic.clickOnElement(this.os);
    }

    async selectSoftware() {
        await this.generic.clickOnElement(this.software);
    }

    async clickAddToCart() {
        await this.generic.clickOnElement(this.addToCartButton);
    }

    async getProductTitle() {
        return await this.generic.getText(this.productTitle);
    }
    async getSuccessMessage() {
    return await this.generic.getText(this.successMessage);
}
}