import GenricUtils from "../utils/GenricUtils";

export default class CartPage {

    constructor(page) {

        this.page = page;
        this.generic = new GenricUtils(page);

        // Locators
        this.shoppingCartLink = page.getByRole("link", {
            name: "Shopping cart",
            exact: true
        });

        this.productName = page.locator(".product-name").first();

        this.quantity = page.locator(
            ".cart-item-row .qty-input"
        ).first();

        this.termServiceBox = page.locator(
            '//input[@name="termsofservice"]'
        );

        this.checkoutButton = page.locator("#checkout").first();

        this.removeProduct = page.locator(
            'input[name="removefromcart"]'
        );

        this.updateCartButton = page.locator(
            'input[name="updatecart"]'
        );
    }


    // Open Shopping Cart
    async openCart() {

        for (let attempt = 1; attempt <= 3; attempt++) {

            console.log(`Opening cart... Attempt ${attempt}`);

            await this.shoppingCartLink.waitFor({
                state: "visible"
            });

            await this.shoppingCartLink.click();

            await this.page.waitForLoadState("domcontentloaded");

            if (this.page.url().includes("/cart")) {

                console.log(
                    "Cart opened:",
                    this.page.url()
                );

                return;
            }

            console.log(
                `Cart redirect detected. Current URL: ${this.page.url()}`
            );

            await this.page.waitForTimeout(1000);
        }

        throw new Error(
            `Unable to open cart. Current URL: ${this.page.url()}`
        );
    }


    // Get Product Name
    async getProductName() {

        await this.productName.waitFor({
            state: "visible"
        });

        return await this.generic.getText(
            this.productName
        );
    }


    // Get Product Quantity
    async getQuantity() {

        console.log(
            "Current URL:",
            this.page.url()
        );

        console.log(
            "Quantity count:",
            await this.quantity.count()
        );

        await this.quantity.waitFor({
            state: "visible"
        });

        return await this.generic.getInputValue(
            this.quantity
        );
    }


    // Accept Terms of Service
    async acceptTermsOfService() {

        await this.generic.clickOnElement(
            this.termServiceBox
        );
    }


    // Navigate to checkout page
    // Click Checkout button to proceed to checkout page
    async clickCheckout() {

        await this.generic.clickOnElement(
            this.checkoutButton
        );
    }


    // Clear Cart
    async clearCart() {

        await this.page.waitForLoadState(
            "domcontentloaded"
        );

        const count = await this.removeProduct.count();

        console.log(
            "Remove product count:",
            count
        );

        console.log(
            "Current URL:",
            this.page.url()
        );

        if (count > 0) {

            for (let i = 0; i < count; i++) {

                await this.removeProduct
                    .nth(i)
                    .check();
            }

            await this.generic.clickOnElement(
                this.updateCartButton
            );

            await this.page.waitForLoadState(
                "domcontentloaded"
            );
        }
    }
}