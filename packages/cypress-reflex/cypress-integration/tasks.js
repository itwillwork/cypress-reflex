const pngjs = require('pngjs');
const pixelmatch = require('pixelmatch');
const fs = require('fs');
const path = require('path');

const {
  PNG
} = pngjs;

const compareSnapshots = (args) => {
  const screenshotExpectedBuffer = fs.readFileSync(args.pathToScreenshotExpected, {
    encoding: 'base64',
  });
  const screenshotExpected = PNG.sync.read(Buffer.from(screenshotExpectedBuffer, 'base64'));

  const pathToScreenshotCurrentBuffer = fs.readFileSync(args.pathToScreenshotCurrent, {
    encoding: 'base64',
  });
  const screenshotCurrent = PNG.sync.read(Buffer.from(pathToScreenshotCurrentBuffer, 'base64'));

  const {
    width,
    height
  } = screenshotExpected;

  const diffImage = new PNG({
    width,
    height,
  });

  const numDiffPixels = pixelmatch(
    screenshotExpected.data,
    screenshotCurrent.data,
    diffImage.data,
    width,
    height, {
      threshold: 0.1,
    },
  );

  const diffPercent = (numDiffPixels / (width * height)) * 100;
  if (diffPercent > 0) {
    fs.writeFileSync(args.pathToScreenshotDiff, PNG.sync.write(diffImage));
  }

  return diffPercent;
};


const saveSnapshot = (args) => {
  const {
    from,
    to
  } = args;

  fs.mkdirSync(path.dirname(to), {
    recursive: true
  });

  fs.copyFileSync(from, to);

  return null;
}

const saveJSONFixture = (args) => {
  const { path, data } = args;

  fs.writeFileSync(path, JSON.stringify(data, null, 2));

  return null;
}

const getJSONFixture = (args) => {
  const { path } = args;

  const buffer = fs.readFileSync(path);

  return JSON.parse(buffer.toString());
}

const WRONG_SCREENSHOT_PATH_REGEXP = /cypress\/screenshots\/.+\/cypress/;

const registrateCypressReflexTasks = (on, config) => {
  on("task", {
    'cypress-reflex:save-snaphot': (...args) => {
      return saveSnapshot(...args);
    },
    'cypress-reflex:compare-snapshots': (...args) => {
      return compareSnapshots(...args);
    },
    'cypress-reflex:save-json-fixture': (...args) => {
      return saveJSONFixture(...args);
    },
    'cypress-reflex:get-json-fixture': (...args) => {
      return getJSONFixture(...args);
    },
  });

  // fix cypress, cli wrong screenshot path
  on('after:screenshot', (details) => {
    if (!details.testFailure && WRONG_SCREENSHOT_PATH_REGEXP.test(details.path)) {
      const replacementPath = details.path.replace(WRONG_SCREENSHOT_PATH_REGEXP, 'cypress/screenshots/cypress')

      fs.mkdirSync(path.dirname(replacementPath), {
        recursive: true
      });

      fs.renameSync(details.path, replacementPath);

      return {
        ...details,
        path: replacementPath,
      }
    }


    return details;
  });


  // fix cypress, different image ratio 
  // https://github.com/cypress-io/cypress/issues/7075
  // https://github.com/jaredpalmer/cypress-image-snapshot/issues/82
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--force-device-scale-factor=2')
    }
  
    return launchOptions
  })
}


module.exports = {
  registrateCypressReflexTasks,
}