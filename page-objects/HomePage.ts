import { Locator, Page } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly giveMe: Locator

    constructor(page: Page) {
        this.page = page
        this.giveMe = page.locator("//iframe[@id='XBGSFAMB']")
    }

    async visit() {
        await this.page.goto('https://data.fundraiseup.com/qa-test-7R58U3/')
    }
}
