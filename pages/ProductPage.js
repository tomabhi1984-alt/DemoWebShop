import GenricUtils from "../utils/GenricUtils";

export default class ProductPage {

    constructor(page) {

        this.page = page;
        this.generic = new GenricUtils(page);

        this.buildYourOwnComputer = page.locator("h2.product-title a", {
            hasText: "Build your own computer"
        });
    }

// Product test practice
    async clickBuildYourOwnComputer(){
        await this.buildYourOwnComputer.waitFor({
            state:"visible"
        });

        await this.generic.clickOnElement(
            this.buildYourOwnComputer
        );
    }
}