import {
	SelectorT,
	CommandsConfigT,
	GetSummaryMetaT,
	CommandsConfigItemT,
} from './models';

const defaultCommandsConfigItem: CommandsConfigItemT = {
	getSpec: () => '',
	getParamsVariations: () => [],
	getSummary: ({ command, params }) => `${command} - ${(command !== "raw" && params) ? JSON.stringify(params) : ''}`,
}

const defaultCommandsConfig: CommandsConfigT = {
	check: {
		screenshot: {
			getSpec: ({ selectors, params }, meta) => {
				return selectors.map((selector, selectorIndex) => {
					// TODO normilizer for selectors => filename
					return `
			            cy.get('${selector}').takeAndCompareScreenshot({
			              specPath,
			              name: '${meta.stepIndex}_{${selector}}',
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
		}
	},
	visit: {
		getSpec: ({selectors, params}, meta) => {
			// TODO improve types
			const url = (params as any)?.url;

			return `
                cy.visit(\`${url}\`);
            `;
		}
	},
}


export {
	defaultCommandsConfig,
	defaultCommandsConfigItem,
}