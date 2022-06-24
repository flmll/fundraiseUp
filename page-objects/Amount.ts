import { Locator, Page } from '@playwright/test'

export class Amount {
    readonly page: Page
    readonly monthly: Locator
    readonly sum: Locator
    readonly currency: Locator
    readonly donateButton: Locator

    constructor(page: Page) {
        this.page = page
        this.monthly = page
            .frameLocator('html > iframe')
            .locator("[data-qa='give-monthly']")
        this.sum = page
            .frameLocator('html > iframe')
            .locator("[data-qa='amount']")
        this.currency = page
            .frameLocator('html > iframe')
            .locator("[data-qa='currency-selector']")
        this.donateButton = page
            .frameLocator('html > iframe')
            .locator("[data-qa='donate-button']")
    }

    async chooseСurrency(currencies: string) {
        await this.currency.selectOption(currencies)
    }

    async donateMonthly(sum: string, currencies: string) {
        await this.monthly.click()
        await this.sum.fill(sum)
        await this.chooseСurrency(currencies)
        await this.donateButton.click()
    }
}
