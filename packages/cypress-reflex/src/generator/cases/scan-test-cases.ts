import fs from 'fs';
import path from 'path';
import {
  TestCaseT
} from './models';
import {
  normalizeCaseConfig
} from './normalize-case-config';
import {
  ParsedOptionsT
} from '../models';

const CONFIG_FILE_REG_EXP = /.case.js$/;

const checkIsCaseConfigFile = (path: string) => CONFIG_FILE_REG_EXP.test(path);

const scanTestCasesConfig = async (options: ParsedOptionsT): Promise < Array < TestCaseT >> => {
  const allFiles = fs.readdirSync(options.casesPath);

  const caseConfigFiles = allFiles.filter(checkIsCaseConfigFile);

  const promises = caseConfigFiles.map(async (caseConfigFile: string): Promise < TestCaseT > => {    
    const fullPath = path.resolve(options.casesFullPath, caseConfigFile);

    const {
      default: rawSpecConfig,
    } = await import(fullPath);

    const normalizedCaseConfig = normalizeCaseConfig(rawSpecConfig);

    return {
      config: normalizedCaseConfig,
      basePath: fullPath.replace(options.casesFullPath, '').replace(CONFIG_FILE_REG_EXP, ''),
    }
  });

  return Promise.all(promises);
}

export {
  scanTestCasesConfig,
}