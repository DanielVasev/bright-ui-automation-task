import { test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { DashboardPage } from '../page-objects/DashboardPage'
import { EmployeePage } from '../page-objects/EmployeePage'

const credEmail = userName
const credPassword = Password

test.describe('Employee Management', () => {
  let loginPage: LoginPage
  let dashboardPage: DashboardPage
  let employeePage: EmployeePage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    employeePage = new EmployeePage(page)

    await loginPage.goto()
    await loginPage.login(credEmail, credPassword)
    await dashboardPage.goToEmployees()
  })

  test('Add first employee', async () => {
    await employeePage.addEmployee('Jhon', 'Velásquez', 'jhonVelasquez@test.co.uk', '01611118881', 'Tester')
    await employeePage.verifyEmployeeExists('Jhon Velásquez')
  })

  test('Add second employee', async () => {
    await employeePage.addEmployee('Olive', 'Oyl', 'oliveOyl@test.co.uk', '01611118881', 'QA Engineer')
    await employeePage.verifyEmployeeExists('Olive Oyl')
  })

  test('Verify employees list', async () => {
    await employeePage.verifyEmployeeExists('Jhon Velásquez')
    await employeePage.verifyEmployeeExists('Olive Oyl')
  })

  //Additional step / test to bring the environment in the initial state.
 test('Delete employees', async () => {
    await employeePage.deleteEmployee('Olive Oyl')
    await employeePage.deleteEmployee('Jhon Velásquez')
  }) 

})