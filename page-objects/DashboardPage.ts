import { Page, expect } from '@playwright/test'

export class DashboardPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goToEmployees() {
    await this.page.getByTestId('sideBar').getByRole('link', { name: 'Employees' }).click()
    await expect(this.page.getByRole('heading', { name: 'Employee hub' })).toBeVisible()
  }

  async verifyOnDashboard() {
    await expect(this.page.locator('h1')).toContainText('Your daily rota update')
  }
}