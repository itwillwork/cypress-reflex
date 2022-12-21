Cypress.Commands.add(
  'takeAndCompareScreenshot', {
    prevSubject: true,
  },
  (subject, {
    specPath,
    name
  }) => {
    const cySubject = cy.wrap(subject);

    const fullName = `${name}.${Cypress.browser.name}`;

    const screenshotExpected = `${specPath}/screenshots/${fullName}`;

    const shouldUpdateScreenshots = Cypress.config('shouldUpdateScreenshots');
    if (shouldUpdateScreenshots) {
      cySubject.screenshot(screenshotExpected, {
        overwrite: true,
      });
      return;
    }


    const pathToScreenshotExpected = `${screenshotExpected}.png`;

    const screenshotCurrent = `${specPath}/${fullName}.current`;
    const pathToScreenshotCurrent = `screenshots/${screenshotCurrent}.png`;

    const pathToScreenshotDiff = `screenshots/${specPath}/${fullName}.diff.png`;

    cySubject.screenshot(screenshotCurrent, {
      overwrite: true,
    });

    cy.task('compareSnapshotsPlugin', {
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