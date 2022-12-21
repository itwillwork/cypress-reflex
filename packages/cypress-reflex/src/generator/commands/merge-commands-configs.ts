import {
	CommandsConfigT,
} from './models';
import merge from 'lodash/merge';

const mergeCommandsConfigs = (...configs: Array<CommandsConfigT>) => {
	return merge({}, ...configs);
}

export {
	mergeCommandsConfigs
}