import {
	SelectorT,
	RawCaseConfigStepT,
	RawCaseConfigT,
	CaseConfigT,
	CaseConfigStepT,
	AnyCaseConfigStepT,
} from './models';

const normalizeCaseConfigSteps = (
	rawSteps: string | Array < RawCaseConfigStepT | string > | undefined,
): CaseConfigStepT[] => {
	if (!rawSteps) {
		return [];
	}

	if (typeof rawSteps === "string") {
		const step: AnyCaseConfigStepT = {
			command: 'raw',
			isFixed: true,
			params: {
				content: rawSteps,
			},
			selectors: [],
		};

		return [step];
	}

	return rawSteps.map((rawStep): CaseConfigStepT => {
		if (typeof rawStep === "string") {
			const step: AnyCaseConfigStepT = {
				command: 'raw',
				isFixed: true,
				params: {
					content: rawStep,
				},
				selectors: [],
			};

			return step;
		}

		let selectors: Array<SelectorT> = [];

		if ('selector' in rawStep) {
			selectors.push(rawStep.selector);
		}

		if ('selectors' in rawStep) {
			selectors = rawStep.selectors;
		}

		return {
			command: rawStep.command,
			isFixed: !!rawStep.isFixed,
			params: rawStep.params,
			selectors,
		}
	});
}

const normalizeCaseConfig = (rawCaseConfig: RawCaseConfigT): CaseConfigT => {
	return {
		describe: rawCaseConfig.describe || '',
		before: normalizeCaseConfigSteps(rawCaseConfig.before),
		beforeEach: normalizeCaseConfigSteps(rawCaseConfig.beforeEach),
		after: normalizeCaseConfigSteps(rawCaseConfig.after),
		afterEach: normalizeCaseConfigSteps(rawCaseConfig.afterEach),
		body: normalizeCaseConfigSteps(rawCaseConfig.body),
	}
}

export {
	normalizeCaseConfig,
}