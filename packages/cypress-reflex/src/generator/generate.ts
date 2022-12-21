import { scanCommandsConfig } from './commands/scan-commands-config';
import { defaultCommandsConfig } from './commands/default-config';
import { mergeCommandsConfigs } from './commands/merge-commands-configs';

import { scanTestCasesConfig } from './cases/scan-test-cases';
import { generateSpecs } from './specs/generate-specs';

type OptionsT = {
  outputBasePath: string,
  commandsConfig: string,
}

const exampleOptions: OptionsT = {
  outputBasePath: 'prototype-c/cases',
  commandsConfig: 'commandsConfig',
};

(async (testCasesPath: string, options: OptionsT): Promise<void> => {
  const projectCommandsConfig = await scanCommandsConfig(options.commandsConfig);
  const commandsConfig = mergeCommandsConfigs(defaultCommandsConfig, projectCommandsConfig);

  const testCases = await scanTestCasesConfig(testCasesPath);

  await Promise.all(testCases.map(async (testCase) => {
    await generateSpecs(testCase, commandsConfig, { basePath: options.outputBasePath });
  }));
})('prototype-c/cases', exampleOptions);