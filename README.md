# My Playwright Project Overview

This project is an **end-to-end (E2E) testing framework** using **Playwright**.  
It automates testing of web applications across **Chromium, Firefox, and WebKit** browsers.

---

## Features

- Browser automation using **Playwright Test Runner**  
- **Page Object Model (POM)** structure for maintainability  
- **Cross-browser testing** (Chromium, Firefox, WebKit)  
- **Parallel test execution**  
- Configurable **environment variables** for sensitive data  

---

## Prerequisites

- **Node.js** (v18+ recommended)  
- **npm** (comes with Node.js)  

---

## Setup

1. **Clone the repository:**  
   - git clone https: https://github.com/DanielVasev/bright-ui-automation-task.git)
   - cd my-playwright-project

2. Install dependencies:
   - npm install

3. Install Playwright browsers:
   - npx playwright install

**Project Structure**

my-playwright-project/

  - tests/: //Test scripts
  - pages/: // Page Object Model (POM) classes
  - playwright.config.ts/: // Playwright configuration
  - package.json
  - README.md

5. Running Tests
   - Run all tests: npx playwright test
  
   - Run tests in headed mode (see the browser): npx playwright test --headed

   - Run tests in a specific browser: npx playwright test --project=firefox

   - Run a single test file: npx playwright test tests/example.spec.ts

6. Test Reporting
After test execution, Playwright generates an HTML report:

- npx playwright show-report
  Environment Variables (Optional)
