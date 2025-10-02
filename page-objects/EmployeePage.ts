import { Page, expect } from '@playwright/test'

export class EmployeePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async addEmployee(firstName: string, lastName: string, email: string, phone: string, job: string) {
    await this.page.getByRole('button', { name: 'Add employee' }).click()
    await this.page.getByRole('textbox', { name: 'First name' }).fill(firstName)
    await this.page.getByRole('textbox', { name: 'Last name' }).fill(lastName)
    await this.page.getByRole('textbox', { name: 'Email address' }).fill(email)
    await this.page.getByRole('textbox', { name: 'Phone number (optional)' }).fill(phone)
    await this.page.getByRole('textbox', { name: 'Job title (optional)' }).fill(job)

    // Pick any available date
    await this.page.locator('#startDate').click()
    await this.page.getByRole('gridcell', { name: 'Wed Oct 01' }).locator('div').nth(1).click()
    await this.page.getByRole('button', { name: 'Save new employee' }).click()

    await expect(this.page.getByRole('heading', { name: 'Success! New employee added' })).toBeVisible()
    await this.page.getByRole('button', { name: 'Close modal' }).click()
  }

  async verifyEmployeeExists(name: string) {
    //await expect(this.page.getByText(name)).toBeVisible()
    await expect(this.page.getByRole('heading', { name: name }).first()).toBeVisible()
    await expect(this.page.locator('#main-content')).toContainText(name)
  }

   async deleteEmployee(name: string) {
    const employName = name.split(" ")[0]
  await this.page.getByPlaceholder('Name or job title...').click()
  await this.page.getByPlaceholder('Name or job title...').fill(employName)
  await this.page.getByTestId('EditButton').click()
  await this.page.getByRole('link', { name: 'Delete employee record' }).click()
  await this.page.getByTestId('checkboxLabel').locator('svg').click()
  await this.page.getByRole('button', { name: employName }).click()
  await this.page.getByRole('button', { name: 'Return to employee hub' }).click()
  await this.page.reload()

  } 
}