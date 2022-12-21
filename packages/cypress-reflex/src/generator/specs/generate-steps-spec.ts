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
import {
	defaultCommandsConfigItem,
} from '../commands/default-config';

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

		const getSummary = commandConfig?.getSummary || defaultCommandsConfigItem.getSummary;
		const stepSummary = getSummary ? getSummary(step, meta) : '';

		result += `
			cy.log('**${commonSummaryPrefix}** ${stepSummary}');
		`;

		const getSpec = commandConfig.getSpec || defaultCommandsConfigItem.getSpec;
		const spec = getSpec(step, meta);

		result += `\n${spec}`;
	});

	return result;
}

export {
	generateStepsSpec,
}