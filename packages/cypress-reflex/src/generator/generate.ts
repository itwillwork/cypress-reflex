import { scanCommandsConfig } from './commands/scan-commands-config';
import { defaultCommandsConfig } from './commands/default-config';
import { mergeCommandsConfigs } from './commands/merge-commands-configs';

import { scanTestCasesConfig } from './cases/scan-test-cases';
import { generateSpecs } from './specs/generate-specs';

type OptionsT = {
  output: string,
  commands: string,
}

const generate = async (testCasesPath: string, options: OptionsT): Promise<void> => {
  const projectCommandsConfig = await scanCommandsConfig(options.commands);
  const commandsConfig = mergeCommandsConfigs(defaultCommandsConfig, projectCommandsConfig);

  const testCases = await scanTestCasesConfig(testCasesPath);

  await Promise.all(testCases.map(async (testCase) => {
    await generateSpecs(testCase, commandsConfig, { basePath: options.output });
  }));
};


export { generate };
