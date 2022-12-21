export type SelectorT = string;

export type GetSummaryMetaT = {
   stepIndex: number;
}

export type CommandsConfigItemT = {
  getSpec: <Params = any>(selectors: Array<SelectorT>, params: Params, meta: GetSummaryMetaT) => string;
  getParamsVariations?: <Params = any>(params: Params, meta: GetSummaryMetaT) => Array<Params>;
  getSummary?: <Params = any>(selectors: Array<SelectorT>, params: Params, meta: GetSummaryMetaT) => string;
};

export type CommandsConfigT = {
  [key in string]: CommandsConfigT | CommandsConfigItemT;
}
