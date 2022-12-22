module.exports = {
	action: {
		'text-input': {
			'type': {
				getSpec: ({ selectors, params }) => {
					return `
						cy.get('input${selectors[0]}').type(\`${params.value}\`).blur();
					`;
				},
				getParamsVariations: ({ params }) => {
					return [
						` ${params.value} `,
						`   `,
						`${params.value}🤡`,
					].map(value => ({
						value
					}));
				},
			},
		},
		'number-input': {
			'type': {
				getSpec: ({ selectors, params }) => {
					return `
						cy.get('input${selectors[0]}').type(\`${params.value}\`).blur();
					`;
				},
				getParamsVariations: ({ params }) => {
					return [
						"0",
						"-1",
						"--1",
						"e",
						` ${params.value} `,
						`text`,
					].map(value => ({
						value
					}));
				},
			},
		},
		'dropdown': {
			'select': {
				getSpec: ({ selectors, params }) => {
					return `
						cy.get('select${selectors[0]}').select('${params.selectedOption}');
					`;
				},
				getParamsVariations: ({ params }) => {
					return params.options.filter(option => option !== params.selectedOption).map(option => {
						return {
							...params,
							selectedOption: option,
						}
					});
				},
			}
		},
		'form': {
			'submit': {
				getSpec: ({ selectors }) => {
					return `
						cy.get('form${selectors[0]}').find('input[type="submit"]').click();
					`;
				},
			}
		}
	}
}