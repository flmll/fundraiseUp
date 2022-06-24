import { test, expect } from '@playwright/test'
import { Amount } from '../page-objects/Amount'
import { HomePage } from '../page-objects/HomePage'
import { CreditCard } from '../page-objects/CreditCard'
import { PaymentOption } from '../page-objects/PaymentOption'
import { PersonalInformation } from '../page-objects/PersonalInformation'

test.describe('Payments', () => {
    let homePage: HomePage
    let amount: Amount
    let payment: PaymentOption
    let card: CreditCard
    let persInfo: PersonalInformation

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        amount = new Amount(page)
        payment = new PaymentOption(page)
        card = new CreditCard(page)
        persInfo = new PersonalInformation(page)

        await homePage.visit()
        await homePage.giveMe.click()
    })

    test('Unsuccessful payment', async () => {
        await amount.donateMonthly('100', 'USD')
        await payment.paymentCard()
        await card.fillCardDetails('4242424242424242', '0424', '000')
        await persInfo.personalInfoDetails(
            'Anton',
            'Antonovich',
            'antontest@gmail.com'
        )

        await expect(card.cardDeclined).toBeVisible()
        await expect(card.cardDeclined).toContainText('Your card was declined.')
    })

    test('Copy Unsuccessful payment', async () => {
        await amount.donateMonthly('100', 'USD')
        await payment.paymentCard()
        await card.fillCardDetails('4242424242424242', '0424', '000')
        await persInfo.personalInfoDetails(
            'Anton',
            'Antonovich',
            'antontest@gmail.com'
        )

        await expect(card.cardDeclined).toBeVisible()
        await expect(card.cardDeclined).toContainText('Your card was declined.')
    })
})
