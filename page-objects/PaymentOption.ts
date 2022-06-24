import { Locator, Page } from '@playwright/test'

export class PaymentOption {
    readonly page: Page
    readonly coverTransaction: Locator
    readonly creditCardButton: Locator

    constructor(page: Page) {
        this.page = page
        this.coverTransaction = page
            .frameLocator('html > iframe')
            .locator("[data-qa='cover-fee-checkbox']")
        this.creditCardButton = page
            .frameLocator('html > iframe')
            .locator("[data-qa='cc-button']")
    }

    async paymentCard() {
        await this.coverTransaction.click()
        await this.creditCardButton.click()
    }
}
