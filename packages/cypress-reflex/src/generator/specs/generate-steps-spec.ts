import {
	CaseConfigStepT
} from '../cases/models';
import {
	CommandsConfigT,
	CommandsConfigItemT
} from '../commands/models';

import {
	getCommandConfig
} from './get-command-config';

const getCommonSummaryPrefix = (
	stepIndex: number, 
	stepsLength: number,
): string => {
	return `Step [${stepIndex + 1}/${stepsLength}]:`;
}

const generateStepsSpec = (steps: CaseConfigStepT[], commandsConfig: CommandsConfigT): string => {
	let result = '';

	const stepsLength = steps.length;

	steps.forEach((step, stepIndex) => {
		const meta = {
			stepIndex,
			stepsLength,
		};

		const commandConfig = getCommandConfig(commandsConfig, step.command);
		if (!commandConfig) {
			return;
		}

		const commonSummaryPrefix = getCommonSummaryPrefix(stepIndex, stepsLength);
		const stepSummary = commandConfig.getSummary?.(step.selectors, step.params, meta) || '-';
		const summaryComment = `// ${commonSummaryPrefix} ${stepSummary}`;

		result += `\n${summaryComment}`;

		const stepSpec = commandConfig.getSpec(step.selectors, step.params, meta);
		result += `\n${stepSpec}`;
	});

	return result;
}

export {
	generateStepsSpec,
}