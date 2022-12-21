import path from 'path';

import { scanCommandsConfig } from './commands/scan-commands-config';
import { defaultCommandsConfig } from './commands/default-config';
import { mergeCommandsConfigs } from './commands/merge-commands-configs';

import { scanTestCasesConfig } from './cases/scan-test-cases';
import { generateSpecs } from './specs/generate-specs';

import { ParsedOptionsT } from './models';

type OptionsT = {
  cases: string;
  output: string;
  commands: string;
}

const generate = async (options: OptionsT): Promise<void> => {
  const workingDir = process.cwd();

  const parsedOptions: ParsedOptionsT = {
    workingDir,
    casesPath: options.cases,
    casesFullPath: path.resolve(workingDir, options.cases),
    outputPath: options.output,
    outputFullPath: path.resolve(workingDir, options.output),
    commandsPath: options.commands,
    commandsFullPath: path.resolve(workingDir, options.commands),
  }

  const projectCommandsConfig = await scanCommandsConfig(parsedOptions);
  const commandsConfig = mergeCommandsConfigs(defaultCommandsConfig, projectCommandsConfig);

  const testCases = await scanTestCasesConfig(parsedOptions);

  await Promise.all(testCases.map(async (testCase) => {
    await generateSpecs(testCase, commandsConfig, parsedOptions);
  }));
};


export { generate };
