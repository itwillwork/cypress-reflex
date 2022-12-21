const { getCypressReflexEnv } = require("cypress-reflex/cypress-integration/env");
const { registrateCypressReflexTasks } = require("cypress-reflex/cypress-integration/tasks");

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      on("task", {
        async 'api:create-task'() {
          // fake request
          await new Promise(res => setTimeout(res, 1000));

          return {
            userId: 1,
          };
        }
      });

      registrateCypressReflexTasks(on, config);

      return {
        ...config,
        ...getCypressReflexEnv(config),
      }
    },
  },
});
