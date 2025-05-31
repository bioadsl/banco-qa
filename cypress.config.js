const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "http://localhost/banco-qa/frontend/",
    supportFile: false
  }
});
