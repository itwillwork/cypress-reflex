import {
	SelectorT,
	CommandsConfigT,
	GetSummaryMetaT,
} from './models';

const defaultCommandsConfig: CommandsConfigT = {
	check: {
		screenshot: {
			getSpec: (selectors, params, meta) => {
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
		getSpec: (selectors, params, meta) => {
			// TODO improve types
			const content = (params as any)?.content;

			return `
                cy.visit(\`${content}\`);
            `;
		}
	},
	visit: {
		getSpec: (selectors, params, meta) => {
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
}