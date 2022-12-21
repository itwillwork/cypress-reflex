import { CaseConfigStepT, CaseConfigT } from '../cases/models';
import { CommandsConfigT, CommandsConfigItemT } from '../commands/models';
import { getCommandConfig } from './get-command-config';
import { defaultCommandsConfigItem } from '../commands/default-config'

const extendScenario = (steps: CaseConfigStepT[], commandsConfig: CommandsConfigT): CaseConfigStepT[][] => {
	const scenarios: CaseConfigStepT[][] = [];

	steps.forEach((step, stepIndex) => {
		if (step.isFixed) {
			return;
		}

		const commandConfig = getCommandConfig(commandsConfig, step.command);
		const getParamsVariations = commandConfig?.getParamsVariations || defaultCommandsConfigItem.getParamsVariations;
		if (!getParamsVariations) {
			return;
		}
		
		const paramsVariations = getParamsVariations(step, { stepIndex }) || [];

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
	const restBodyVariants = extendScenario(caseConfig.body, commandsConfig);

	const allBodyVariants = [caseConfig.body, ...restBodyVariants];
	
	return allBodyVariants.map((body) => {
		return {
			...caseConfig,
			body,
		}
	});
}


export {
	extendCase,
}