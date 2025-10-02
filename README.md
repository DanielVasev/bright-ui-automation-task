My Playwright Project
Overview

This project is an end-to-end (E2E) testing framework using Playwright
.
It automates testing of web applications across Chromium, Firefox, and WebKit browsers.

Features

Browser automation using Playwright Test runner

Page Object Model (POM) structure for maintainability

Cross-browser testing (Chromium, Firefox, WebKit)

Parallel test execution

Configurable environment variables for sensitive data

Prerequisites

Node.js
 (v18+ recommended)

npm (comes with Node.js)

Setup

Clone the repository:

git clone <your-repo-url>
cd my-playwright-project


Install dependencies:

npm install


Install Playwright browsers:

npx playwright install

Project Structure
my-playwright-project/
│
├─ tests/             # Test scripts
├─ pages/             # Page Object Model classes
├─ playwright.config.ts  # Playwright configuration
├─ package.json
└─ README.md

Running Tests
Run all tests
npx playwright test

Run tests in headed mode (see the browser)
npx playwright test --headed

Run tests in a specific browser
npx playwright test --project=firefox

Run a single test file
npx playwright test tests/example.spec.ts

Test Reporting

Playwright generates an HTML report after test execution:

npx playwright show-report
