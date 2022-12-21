module.exports = {
	action: {
		'todo-input': {
			'type-text': {
				getSpec: ({ selectors, params }) => {
					// TODO
					// cy.get('#copyText').invoke('val', textToCopy)
					return `
						cy.get('${selectors[0]}').type(\`${params.value}\`).blur();
					`;
				},
				getParamsVariations: ({ params }) => {
					return [
						` ${params.value} `,
						"   ",
						// "0",
						// "-1",
						// "--1",
						// "e",
						// "test\"test",
						// "test'test",
						`${params.value}🤡`,
					].map(value => ({
						value
					}));
				},
			},
			'type-enter': {
				getSpec: ({ selectors }) => {
					return `
						cy.get('${selectors[0]}').type('{enter}').blur();
					`;
				},
			}
		},
		'todo-list': {
			'select-all': {
				getSpec: ({ selectors }) => {
					return `
						cy.get('${selectors[0]} label[for="toggle-all"]').click();
					`;
				},
			},
			'clear-all': {
				getSpec: ({ selectors }) => {
					return `
						cy.get('${selectors[0]} .footer .clear-completed').click();
					`;
				},
			},
			"item": {
				'open-editor': {
					getSpec: ({selectors }) => {
						return `
						cy.get('${selectors[0]} label').dblclick();
					`;
					},
				},
				'select': {
					getSpec: ({ selectors }) => {
						return `
						cy.get('${selectors[0]} input.toggle').click();
					`;
					},
				},
				'edit': {
					getSpec: ({ selectors, params }) => {
						// TODO
						// cy.get('#copyText').invoke('val', textToCopy)
						return `
							cy.get('${selectors[0]} input.edit').type(\`${params.value}\`).blur();
						`;
					},
					getParamsVariations: ({ params }) => {
						return [
							` ${params.value} `,
							"   ",
							// "0",
							// "-1",
							// "--1",
							// "e",
							// "test\"test",
							// "test'test",
							`${params.value}🤡`,
						].map(value => ({
							value
						}));
					},
				},
				'delete': {
					getSpec: ({ selectors }) => {
						return `
						cy.get('${selectors[0]}').realHover().get('button.destroy').click();
					`;
					},
				}
			}
		},
		'todo-filters': {
			'select': {
				getSpec: ({ selectors, params }) => {
					// ul.filters
					return `
						cy.get('${selectors[0]} li').eq(${params.selectedOption}).click();
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
		}
	}
}