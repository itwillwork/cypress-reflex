[WIP] cypress-reflex
=============

Для чего создан
-------
Хочу писать один простой e2e тест, и генерировать из него все возможных варианты и тем самым детально фиксировать поведение интерфейса.

**Например:** 

Форма с именем и возрастом, с кнопкой submit (дергающая запрос).

Можно вместо имени вписать: "  ", " name ", " name🤡 "

Вместо возраста можно вписать: "0", "-1", "--1", "e", " {age} ", "notnumber"

Таким образом получается: 1 + 3 + 6 = 10 вариантов заполнения формы. 

Которые не хочется писать вручную(

Еще пример:
![image](https://user-images.githubusercontent.com/15855766/209735630-512220e9-350b-49df-9992-cf2190d4ffbf.png)

**Для всех тестов хочется:**

1. Фиксировать как выглядит интерфейс (визуальный регресс, через сравнение скриншотов);
2. Фиксировать что отправляется при этом на бекенд, проверять форму запроса (body, query, url, headers и т.п.);

**Основные концепции:**
1. Нам не всегда важно правильное ли поведение, а только отслеживаем его изменение, через скриншоты и слепки запросов. 
2. Пишем тесты исходя из дизайн системы. То есть размечаем интерфейс на компоненты, пишем какие варианты использования этого компонента есть, и из этой информации один тест превращается во множество.
![image](https://user-images.githubusercontent.com/15855766/209735641-088ddbcb-19d4-414c-a0c8-2f8b0b136671.png)


Quick start
-------

1. Установить зависимость
```
npm i --save-dev cypress-reflex
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

### Road map

- [ ] Переименовать пакет cypress-reflex => cypress-reflex-cli
- [ ] Накидать инструкцию
