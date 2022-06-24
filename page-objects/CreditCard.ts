import { Locator, Page } from '@playwright/test'

export class CreditCard {
    readonly page: Page
    readonly cardNumber: Locator
    readonly expire: Locator
    readonly cvc: Locator
    readonly continue: Locator
    readonly cardDeclined: Locator

    constructor(page: Page) {
        this.page = page
        this.cardNumber = page
            .frameLocator('html > iframe')
            .locator("[qa='card-number']")
        this.expire = page
            .frameLocator('html > iframe')
            .locator("[qa='expire-date']")
        this.cvc = page.frameLocator('html > iframe').locator("[qa='card-cvv']")
        this.continue = page
            .frameLocator('html > iframe')
            .locator("[data-qa='card-continue']")
        this.cardDeclined = page
            .frameLocator('html > iframe')
            .locator("[data-qa='card-continue-error-title']")
    }

    async fillCardDetails(
        numberCard: string,
        expireDate: string,
        cvcNum: string
    ) {
        await this.page.waitForLoadState('domcontentloaded')
        await this.cardNumber.click()
        await this.page.keyboard.type(numberCard, { delay: 200 })
        await this.expire.click()
        await this.page.keyboard.type(expireDate)
        await this.cvc.click()
        await this.page.keyboard.type(cvcNum)
        await this.continue.click()
    }
}
