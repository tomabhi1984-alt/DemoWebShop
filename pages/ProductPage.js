import GenricUtils from "../utils/genricUtils";

export default class ProductPage {

    constructor(page) {

        this.page = page;
        this.generic = new GenricUtils(page);

        this.buildYourOwnComputer = page.locator("h2.product-title a", {
            hasText: "Build your own computer"
        });
    }


    async clickBuildYourOwnComputer(){
        await this.buildYourOwnComputer.waitFor({
            state:"visible"
        });

        await this.generic.clickOnElement(
            this.buildYourOwnComputer
        );
    }
}