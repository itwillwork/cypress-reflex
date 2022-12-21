# cypress-reflex

### Quick start


1. Установить зависимость
```
npm run cypress-reflex
```

2. В файл `cypress/support/e2e.js` добавить строку:

```
import "cypress-reflex/cypress-integration/commands";
```

3. В файл `cypress.config.js` добавить строки:
```
const { getCypressReflexEnv } = require("cypress-reflex/cypress-integration/env");
const { registrateCypressReflexTasks } = require("cypress-reflex/cypress-integration/tasks");

// ...

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // ...

      registrateCypressReflexTasks(on, config);

      // ...
      return {
        ...config,
        ...getCypressReflexEnv(config),
      }
    },
  },
});
```

4. Добавить необходимые конфиги

5. Добавить в `package.json` комманду для генерации тестов
```
"generate-tests": "rm -rf cypress/e2e/generated && cypress-reflex --cases=cypress-reflex-cases --commands=cypress-reflex-cases/commands.js --output=cypress/e2e/generated"
```