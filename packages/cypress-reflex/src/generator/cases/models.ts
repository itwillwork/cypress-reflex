export type SelectorT = string;

export type RawCaseConfigStepT <T = any> = {
  command: string;
  isFixed? : boolean;
  params: T;
} & ({
  selector: SelectorT;
} | {
  selectors: Array<SelectorT>;
})

export type RawCaseConfigT = {
  describe?: string;
  before?: string | Array<RawCaseConfigStepT | string>;
  beforeEach?: string | Array<RawCaseConfigStepT | string>;
  after?: string | Array<RawCaseConfigStepT | string>;
  afterEach?: string | Array<RawCaseConfigStepT | string>;
  body: string | Array<RawCaseConfigStepT | string>;
};

export type CaseConfigStepT<C = string, P = any> = {
  command: C;
  isFixed: boolean;
  params: P;
  selectors: Array<string>;
};

export type CaseConfigT = {
  describe: string;
  before: CaseConfigStepT[];
  beforeEach: CaseConfigStepT[];
  after: CaseConfigStepT[];
  afterEach: CaseConfigStepT[];
  body: CaseConfigStepT[];
}

export type TestCaseT = {
  config: CaseConfigT;
  basePath: string;
}

export type AnyCaseConfigStepT = 
  CaseConfigStepT<'visit', {
    url: string;
  }> |
  CaseConfigStepT<'raw', {
    content: string;
  }>;