/// <reference types = "Cypress" />
/// <reference types = "@shelex/cypress-allure-plugin" />

const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const { isFileExist, findFiles } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      on('task', {downloadFile});
      on('task', { isFileExist, findFiles });
      return config;
    },
  },
});

