Automated Web Testing with Playwright
Description

This project demonstrates automated web testing using Playwright, a powerful end-to-end testing framework. The project includes custom HTML pages (index.html, login.html) designed for test automation and interaction via Playwright. The Playwright tests are written in JavaScript and interact with the web elements to validate behaviors like form submissions, alerts, and page navigation.
Project Structure

graph

project-root/
├── public/                 # Contains the HTML files
│   ├── index.html          # Practice web elements page
│   └── login.html          # Simple login page for testing
├── tests/                  # Contains the Playwright test files
│   └── test.spec.js        # Playwright tests for automation
├── node_modules/           # Node.js dependencies (auto-generated)
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation

Files:

    index.html: A practice page with multiple web elements like buttons, form fields, and a dynamic table for adding and validating rows.
    login.html: A simple login page with form validation for email and password fields.
    test.spec.js: A Playwright test file that automates interactions with index.html and login.html to verify functionalities such as alert handling, form submissions, and page navigation.

Features

    Automated tests: Tests written in Playwright to automate interactions with custom web pages.
    Form validation: Includes login form validation with Playwright.
    Dynamic content testing: Tests dynamic behavior, such as adding new rows to a table.
    Cross-browser testing: Can be extended to run tests on different browsers like Chromium, Firefox, and WebKit.

Getting Started
Prerequisites

    Node.js: Ensure you have Node.js installed. You can download it here.
    Playwright: Installed via npm as part of this project.

Installation

    Clone the repository:

    bash

git clone https://github.com/yourusername/repo-name.git

Navigate into the project directory:

bash

cd repo-name

Install the dependencies:

bash

    npm install

Running the Tests

    Run the Playwright tests:

    To execute the Playwright tests, run the following command:

    bash

npx playwright test

This will run the tests defined in test.spec.js, which will interact with index.html and login.html to verify their functionalities.

Headless mode:

By default, Playwright runs tests in headless mode. To run tests in headed mode (where you can visually see the browser interactions), run:

bash

    npx playwright test --headed

Testing Overview

The Playwright tests validate the following scenarios:

    index.html:
        Verifies that the page title is correct.
        Simulates button clicks and handles JavaScript alerts.
        Tests dynamic table row addition.

    login.html:
        Tests login form validation, ensuring the password is between 5 and 9 characters.
        Simulates form submission and checks if the user is redirected to the correct page.

Customize Playwright Configurations

You can modify browser settings or adjust test parameters by editing the Playwright configuration file (playwright.config.js) if necessary. You can also extend the test suite by adding more tests in the tests/ folder.
Future Improvements

    Add more tests for edge cases like invalid form submissions.
    Integrate with GitHub Actions to run tests automatically on each commit.
    Expand cross-browser support to include Firefox and WebKit.


Feel free to modify the README based on any additional features or tests that you add to your project!
