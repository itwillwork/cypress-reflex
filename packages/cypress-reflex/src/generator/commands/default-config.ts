import {
	SelectorT,
	CommandsConfigT,
	GetSummaryMetaT,
	CommandsConfigItemT,
} from './models';

const defaultCommandsConfigItem: CommandsConfigItemT = {
	getSpec: () => '',
	getParamsVariations: () => [],
	getSummary: ({ command, params }) => `${command} - ${params ? JSON.stringify(params) : ''}`,
}

const defaultCommandsConfig: CommandsConfigT = {
	check: {
		screenshot: {
			getSpec: ({ selectors, params }, meta) => {
				return selectors.map((selector, selectorIndex) => {
					// TODO normilizer for selectors => filename
					return `
			            cy.get('${selector}').takeAndCompareScreenshot({
			              specFile,
			              name: '${meta.stepIndex + 1}_{${selector}}',
			            });
			          `
				}).join('\n');
			},
		},
	},
	raw: {
		getSpec: ({ selectors, params }, meta) => {
			// TODO improve types
			const content = (params as any)?.content;

			return `
				${content}
            `;
		},
		getSummary: ({ command }) => `${command}`,
	},
	visit: {
		getSpec: ({selectors, params}, meta) => {
			// TODO improve types
			const url = (params as any)?.url;

			return `
                cy.visit(\`${url}\`);
            `;
		},
		getSummary: ({ command, params }) => `${command} - ${params.url}`,
	},
}


export {
	defaultCommandsConfig,
	defaultCommandsConfigItem,
}