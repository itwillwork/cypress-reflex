import { CaseConfigStepT } from '../cases/models';

export type CommandT = string;
export type SelectorT = string;

export type GetSummaryMetaT = {
   stepIndex: number;
}

export type CommandsConfigItemT = {
  getSpec: <Params = any>(step: CaseConfigStepT<Params>, meta: GetSummaryMetaT) => string;
  getParamsVariations?: <Params = any>(step: CaseConfigStepT<Params>, meta: GetSummaryMetaT) => Array<Params>;
  getSummary?: <Params = any>(step: CaseConfigStepT<Params>, meta: GetSummaryMetaT) => string;
};

export type CommandsConfigT = {
  [key in string]: CommandsConfigT | CommandsConfigItemT;
}
