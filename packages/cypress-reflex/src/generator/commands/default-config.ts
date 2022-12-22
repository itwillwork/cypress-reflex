import {
	SelectorT,
	CommandsConfigT,
	GetSummaryMetaT,
	CommandsConfigItemT,
} from './models';

const defaultCommandsConfigItem: CommandsConfigItemT = {
	getPreSpec: () => '',
	getSpec: () => '',
	getParamsVariations: () => [],
	getSummary: ({ command, params }) => `${command} - ${params ? JSON.stringify(params) : ''}`,
}

const normalizeFileName = (rawFileName: string): string => rawFileName.replace(/[\"\'\`]/g, '');

const defaultCommandsConfig: CommandsConfigT = {
	check: {
		screenshot: {
			getSpec: ({ selectors, params }, meta) => {
				return selectors.map((selector, selectorIndex) => {
					const rawFileName = `${meta.stepIndex + 1}_{${selector}}`;

					return `
			            cy.get('${selector}').takeAndCompareScreenshot({
			              specFile,
			              name: '${normalizeFileName(rawFileName)}',
			            });
			          `
				}).join('\n');
			},
		},
		request: {
			getPreSpec: ({params}, meta) => {
				return `
					cy.intercept(\`${params.method}\`, \`${params.url}\`).as('request-${meta.stepIndex + 1}');
				`;
			},
			getSpec: ({ selectors, params }, meta) => {
				return `
					cy.wait('@request-${meta.stepIndex + 1}').takeAndCompareRequest({
						specFile,
						fixtureName: 'request-${meta.stepIndex + 1}',
						fields: ${JSON.stringify(params.fields)},
					});
				`
			},
			getSummary: ({ params, command }) => `${command} - ${params.method} ${params.url.replace(/\*/g, '_')}`,
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