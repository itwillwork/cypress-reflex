const { getCypressReflexEnv } = require("cypress-reflex/cypress-integration/env");
const { registrateCypressReflexTasks } = require("cypress-reflex/cypress-integration/tasks");

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      registrateCypressReflexTasks(on, config);

      return {
        ...config,
        ...getCypressReflexEnv(config),
      }
    },
  },
});
