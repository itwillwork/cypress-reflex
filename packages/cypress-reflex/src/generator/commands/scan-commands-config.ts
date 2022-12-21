import {
	CommandsConfigT,
} from './models';

const scanCommandsConfig = async (configFile: string): Promise < CommandsConfigT > => {
	if (!configFile) {
		return {};
	}

	const {
		default: rawSpecConfig,
	} = await import(configFile);

	return rawSpecConfig;
}

export {
	scanCommandsConfig,
}