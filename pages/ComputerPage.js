import GenricUtils from "../utils/GenricUtils";
export default class ComputerPage {
    constructor(page) {
        this.page = page;
        this.generic=new GenricUtils(page)
        // Locators
          this.desktopLink = page.getByRole("link", {name: "Desktops",exact: true}).first();
        this.notebookLink = page.getByRole("link", { name: "Notebooks" });
        this.accessoriesLink = page.getByRole("link", { name: "Accessories" });
    }

    // Methods
    async clickDesktop() {
        await this.generic.clickOnElement(this.desktopLink);
    }

    async clickNotebook() {
        await this.generic.clickOnElement(this.notebookLink);
    }

    async clickAccessories() {
        await this.generic.clickOnElement(this.accessoriesLink);
    }
}

