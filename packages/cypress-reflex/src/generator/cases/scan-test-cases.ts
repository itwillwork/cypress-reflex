import fs from 'fs';
import {
  TestCaseT
} from './models';
import {
  normalizeCaseConfig
} from './normalize-case-config';

const CONFIG_FILE_REG_EXP = /.case.js$/;

const checkIsCaseConfigFile = (path: string) => CONFIG_FILE_REG_EXP.test(path);

const getTestCase = async (caseConfigFile: string): Promise<TestCaseT> => {
  const {
    default: rawSpecConfig,
  } = await import(caseConfigFile);

  const normalizedCaseConfig = normalizeCaseConfig(rawSpecConfig);

  return {
    config: normalizedCaseConfig,
    basePath: caseConfigFile.replace(CONFIG_FILE_REG_EXP, ''),
  }
}

const scanTestCasesConfig = async (testCasesFolder: string): Promise<Array<TestCaseT>> => {
  const allFiles = fs.readdirSync(testCasesFolder);

  const caseConfigFiles = allFiles.filter(checkIsCaseConfigFile);

  return Promise.all(caseConfigFiles.map(getTestCase));
}

export {
  scanTestCasesConfig,
}