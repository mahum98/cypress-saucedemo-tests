Overview

This project automates login and product navigation tests for SauceDemo (https://www.saucedemo.com) using Cypress, following the Page Object Model (POM) design pattern and Custom Commands for reusable steps.
The assignment required:
•Create a Cypress project
•Attempt a wrong login and verify error message
•Login successfully and verify landing on the home page
•Click a product and verify landing on product page
•Use Custom Commands for reusable steps
•Implement Page Object Model (POM) for all pages

Project Structure

cypress/pages/ → Contains POM classes for Login, Home, and Product pages
cypress/support/commands.js → Contains reusable Cypress custom commands (e.g., cy.login())
cypress/e2e/ → Contains test cases using POM and custom commands

How to Run Tests

1. Clone the repo:
git clone https://github.com/<your-username>/cypress-saucedemo-tests.git
cd cypress-saucedemo-tests
2. Install dependencies:
npm install
3. Run Cypress UI:
npx cypress open
4. Or run in headless mode:
npx cypress run

Features Implemented

Reusable Test Steps: Implemented custom cy.login(username, password) in commands.js to avoid duplicate login code.
POM Implementation: loginPage.js, homePage.js, productPage.js handle page interactions.
Clean and Maintainable Tests: Test cases only call POM methods and custom commands.

Test Scenarios

1. Login Tests:
     Wrong credentials → Displays error message.
     Correct credentials → Lands on home page.

2. Product Navigation:
     Click product → Lands on product details page.

Tech Used
Cypress 12+
JavaScript (ES6)
Page Object Model (POM)
Custom Cypress Commands

