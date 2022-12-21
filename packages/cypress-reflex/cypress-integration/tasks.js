const pngjs = require('pngjs');
const pixelmatch = require('pixelmatch');
const fs = require('fs');

const {
  PNG
} = pngjs;

const compareSnapshotsPlugin = (args) => {
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

const registrateCypressReflexTasks = (on, config) => {
  on("task", {
    compareSnapshotsPlugin: (...args) => {
      return compareSnapshotsPlugin(...args);
    },
  });
}

module.exports = {
  registrateCypressReflexTasks,
}