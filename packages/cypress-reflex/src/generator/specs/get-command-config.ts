import {
	CommandsConfigItemT,
	CommandsConfigT,
} from '../commands/models'
import get from 'lodash/get';

const checkIsCommandsConfigItem = (config: any): config is CommandsConfigItemT => {
    return !!config?.getSpec;
}

const getCommandConfig = (
	commandsConfig: CommandsConfigT, 
	command: string,
): CommandsConfigItemT | null => {
	const commandSlug = command.replace(/:/g, '.');

	const configItem = get(commandsConfig, commandSlug) || null;

	if (checkIsCommandsConfigItem(configItem)) {
		return configItem;
	}

	return null;
}

export {
	getCommandConfig,
}