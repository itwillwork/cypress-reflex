import { CaseConfigT, CaseConfigStepT } from '../cases/models';
import { CommandsConfigT } from '../commands/models';
import { generateStepsSpec } from './generate-steps-spec';
import { getCommandConfig } from './get-command-config';
import { defaultCommandsConfigItem } from '../commands/default-config';

type OptionsT = { 
  specPath: string;
  isSmoke: boolean;
};

const getScenarioSummaryComment = (
  steps: CaseConfigStepT[], 
  commandsConfig: CommandsConfigT,
): string => {
  const comment = steps.reduce((result, step, stepIndex) => {
    const commandConfig = getCommandConfig(commandsConfig, step.command);
    if (!commandConfig) {
      return result;
    }

    const getSummary = commandConfig?.getSummary || defaultCommandsConfigItem.getSummary;
    if (!getSummary) {
      return result;
    }

    const summary = getSummary(step, { stepIndex });
    if (!summary.length) {
      return result;
    }

    return result + `${summary}\n`;
  }, '\nTest summary:\n');
  
  return `
    /** ${comment} */
  `
}


const getSpecDescribe = (options: OptionsT) => {
  return `${options.specPath}`;
};


const generateCaseSpec = (
  caseConfig: CaseConfigT, 
  commandsConfig: CommandsConfigT,
  options: OptionsT,
) => {
  const {
    describe,
    before,
    beforeEach,
    after,
    afterEach,
    body,
  } = caseConfig;

  let result = '';

  result += `
    /**
      Describe: ${describe || '-'}
    */
    describe('${getSpecDescribe(options)}', () => {
  `;

  if (!options.isSmoke) {
    result += `
        Cypress.on('fail', (error, runnable) => {
          if (/Expected to find element: .+, but never found it./.test(error.message)) {
            // skip error
            return;
          }

          throw error;
        });
    `
  }

  if (before?.length) {
    result += `
        before(function () {
          ${generateStepsSpec(before, commandsConfig)}
        });
    `
  }

  if (beforeEach?.length) {
    result += `
        beforeEach(function () {
          ${generateStepsSpec(beforeEach, commandsConfig)}
        });
    `
  }

  result += `
        ${getScenarioSummaryComment(body, commandsConfig)}
        it('Test body', function() {
          const specFile = __filename;

          ${generateStepsSpec(body, commandsConfig)}
        });
  `;

  if (after?.length) {
    result += `
        after(function () {
          ${generateStepsSpec(after, commandsConfig)}
        });
    `
  }

  if (afterEach?.length) {
    result += `
        afterEach(function () {
          ${generateStepsSpec(afterEach, commandsConfig)}
        });
    `
  }

  result += `
    });
  `;

  return result;
}

export {
  generateCaseSpec,
}