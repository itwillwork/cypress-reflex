const path = require('path');
const fs = require('fs');

const get = require('lodash/get');
const set = require('lodash/set');

Cypress.Commands.add(
  'takeAndCompareScreenshot', {
    prevSubject: true,
  },
  (subject, {
    specFile,
    name
  }) => {
    const specPath = path.dirname(specFile);

    const fullName = `${name}.${Cypress.browser.name}`;

    cy.wrap(subject).screenshot(`${specFile}/${fullName}.current`, {
      overwrite: true,
    });

    const screenshotsFolder = Cypress.config('screenshotsFolder');
    const pathToScreenshotDiff = path.resolve(screenshotsFolder, `${specFile}/${fullName}.diff.png`);
    const pathToScreenshotCurrent = path.resolve(screenshotsFolder, `${specFile}/${fullName}.current.png`);

    const pathToScreenshotExpected = `${specPath}/fixtures/${fullName}.png`;

    const shouldUpdateScreenshots = Cypress.config('shouldUpdateScreenshots');
    if (shouldUpdateScreenshots) {
      cy.task('cypress-reflex:save-snaphot', {
        from: pathToScreenshotCurrent,
        to: pathToScreenshotExpected,
      });
      
      return;
    }

    cy.task('cypress-reflex:compare-snapshots', {
      pathToScreenshotExpected,
      pathToScreenshotCurrent,
      pathToScreenshotDiff,
    }).then((diffPercent) => {
      if (diffPercent > 0.0005) {
        const message = `The screenshot:[${pathToScreenshotCurrent}] differs from :[${pathToScreenshotExpected}], check the diff: [${pathToScreenshotDiff}]`;
        throw new Error(message);
      }
    });
  });

Cypress.Commands.add(
  'takeAndCompareRequest', {
    prevSubject: true,
  },
  (lastInterception, {
    specFile,
    fixtureName,
    fields,
  }) => {
    const specPath = path.dirname(specFile);

    // Available "fields" values:
    // request.headers.origin
    // request.url
    // request.method
    // request.query
    // request.body
    // response.headers.connection
    // response.statusCode
    // response.body

    const currentRequest = {};

    fields.forEach(field => {
      const value = get(lastInterception, field);
      set(currentRequest, field, value);
    });

    const pathToExpectedRequest = `${specPath}/fixtures/${fixtureName}-request.json`;

    const shouldUpdateScreenshots = Cypress.config('shouldUpdateScreenshots');
    if (shouldUpdateScreenshots) {
      cy.task('cypress-reflex:save-json-fixture', {
        path: pathToExpectedRequest,
        data: currentRequest,
      });
      
      return;
    }

    cy.task('cypress-reflex:get-json-fixture', {
      path: pathToExpectedRequest,
    }).then((expectedRequest) => {
      cy
      .log(`Current request: ${JSON.stringify(currentRequest)}`)
      .log(`Expected request: ${JSON.stringify(expectedRequest)}`).then(() => {
        expect(expectedRequest).to.deep.equal(currentRequest);
      });
    });
  });