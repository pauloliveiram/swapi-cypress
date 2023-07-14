const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://swapi.dev/api/",
    "specPattern": "cypress/integration/api-tests/*.spec.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
        allureReuseAfterSpec: true,
        allureResultsPath: "allure-results",
    },
  },
  responseTimeout: 40000,
  video: false,
});
