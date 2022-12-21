import { CaseConfigStepT, CaseConfigT } from '../cases/models';
import { CommandsConfigT, CommandsConfigItemT } from '../commands/models';
import { getCommandConfig } from './get-command-config';

const extendScenario = (steps: CaseConfigStepT[], commandsConfig: CommandsConfigT): CaseConfigStepT[][] => {
	const scenarios: CaseConfigStepT[][] = [];

	steps.forEach((step, stepIndex) => {
		if (step.isFixed) {
			return;
		}

		const commandConfig = getCommandConfig(commandsConfig, step.command);
		if (!commandConfig?.getParamsVariations) {
			return;
		}

		const paramsVariations = commandConfig.getParamsVariations(step.params, { stepIndex }) || [];

		paramsVariations.forEach((paramsVariation) => {
			const newScenario: CaseConfigStepT[]  = [...steps];

			newScenario[stepIndex] = {
				...newScenario[stepIndex],
				params: paramsVariation,
			};

			scenarios.push(newScenario);
		});
	});

	return scenarios;
}

const extendCase = (caseConfig: CaseConfigT, commandsConfig: CommandsConfigT): CaseConfigT[] => {
	const bodyVariants = extendScenario(caseConfig.body, commandsConfig);

	return bodyVariants.map((body) => {
		return {
			...caseConfig,
			body,
		}
	});
}


export {
	extendCase,
}