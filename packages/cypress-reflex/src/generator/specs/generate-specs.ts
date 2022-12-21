import fs from 'fs';
import {
  CommandsConfigT
} from '../commands/models';
import {
  TestCaseT
} from '../cases/models';
import {
  extendCase
} from "./extend-case";
import {
  generateStepsSpec
} from './generate-steps-spec';
import {
  generateCaseSpec
} from './generate-case-spec';

type OptionsT = {
  basePath: string;
}

const generateSpecs = async (
  testCase: TestCaseT,
  commandsConfig: CommandsConfigT,
  options: OptionsT,
): Promise < void > => {
  const specPath = options.basePath + testCase.basePath;

  const {
    config: smokeConfig
  } = testCase;

  const smokeSpecPath = `${specPath}/smoke`;
  const smokeSpecFileContent = generateCaseSpec(smokeConfig, commandsConfig, {
    isSmoke: true,
    specPath: smokeSpecPath,
  });
  fs.mkdirSync(smokeSpecPath, {
    recursive: true
  });
  fs.writeFileSync(smokeSpecPath + '/spec.smoke.cy.js', smokeSpecFileContent);

  const regressionConfigs = extendCase(smokeConfig, commandsConfig);
  
  regressionConfigs.forEach((regressionConfig, testIndex) => {
    const regressionSpecPath = `${specPath}/regression-${testIndex}`;

    const regressionSpecFileContent = generateCaseSpec(regressionConfig, commandsConfig, {
      isSmoke: false,
      specPath: regressionSpecPath,
    });

    fs.writeFileSync(regressionSpecPath + '/spec.regression.cy.js', regressionSpecFileContent);
  });
}

export {
  generateSpecs,
}