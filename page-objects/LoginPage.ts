import { Page, expect } from '@playwright/test'

export class LoginPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto('https://sandbox-app.brighthr.com/lite')
  }

  async login(email: string, password: string) {
    await this.page.getByRole('link', { name: 'Log in' }).click()
    await expect(this.page.getByRole('heading', { name: 'Login to Bright' })).toBeVisible()

    await this.page.getByRole('textbox', { name: 'Email address' }).fill(email)
    await this.page.getByRole('textbox', { name: 'Password visibility' }).fill(password)
    await this.page.getByRole('button', { name: 'Login' }).click()

    await expect(this.page.getByTestId('sideBar').getByRole('link', { name: 'Home' })).toBeVisible()
  }
}