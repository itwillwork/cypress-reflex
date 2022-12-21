import {
	CommandsConfigT,
} from './models';
import {
	ParsedOptionsT,
} from '../models';

const scanCommandsConfig = async (options: ParsedOptionsT): Promise < CommandsConfigT > => {
	if (!options.commandsFullPath) {
		return {};
	}

	const {
		default: rawSpecConfig,
	} = await import(options.commandsFullPath);

	return rawSpecConfig;
}

export {
	scanCommandsConfig,
}