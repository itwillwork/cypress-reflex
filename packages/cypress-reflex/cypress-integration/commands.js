const path = require('path');
const fs = require('fs');

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

    const pathToScreenshotExpected = `${specPath}/screenshots/${fullName}.png`;

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