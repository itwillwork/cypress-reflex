import {
	CaseConfigStepT
} from '../cases/models';
import {
	CommandsConfigT,
} from '../commands/models';

import {
	getCommandConfig
} from './get-command-config';
import {
	defaultCommandsConfigItem,
} from '../commands/default-config';

const generateStepsPreSpec = (steps: CaseConfigStepT[], commandsConfig: CommandsConfigT): string => {
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

		const getPreSpec = commandConfig?.getPreSpec || defaultCommandsConfigItem.getPreSpec;
		const spec = getPreSpec ? getPreSpec(step, meta) : '';

		if (spec) {
			result += `\n${spec}`;
		}
	});

	return result;
}

export {
	generateStepsPreSpec,
}