import { Locator, Page } from '@playwright/test'

export class PersonalInformation {
    readonly page: Page
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly donateButton: Locator

    constructor(page: Page) {
        this.page = page
        this.firstName = page
            .frameLocator('html > iframe')
            .locator("[data-qa='personal-first-name']")
        this.lastName = page
            .frameLocator('html > iframe')
            .locator("[data-qa='personal-last-name']")
        this.email = page
            .frameLocator('html > iframe')
            .locator("[data-qa='personal-email']")
        this.donateButton = page
            .frameLocator('html > iframe')
            .locator("[data-qa='privacy-continue']")
    }

    async personalInfoDetails(
        namePers: string,
        lastPers: string,
        emailPers: string
    ) {
        await this.page.waitForLoadState('domcontentloaded')
        await this.firstName.click()
        await this.page.keyboard.type(namePers, { delay: 200 })
        await this.lastName.click()
        await this.page.keyboard.type(lastPers, { delay: 200 })
        await this.email.click()
        await this.page.keyboard.type(emailPers, { delay: 200 })
        await this.donateButton.click()
    }
}
