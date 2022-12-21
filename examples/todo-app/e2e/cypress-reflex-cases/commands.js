module.exports = {
	'todo-input': {
		'type-text': {
			getSpec: (selector, params) => {
				// TODO
				// cy.get('#copyText').invoke('val', textToCopy)
				return `
						cy.get('${selector}').type(\`${params.value}\`).blur();
					`;
			},
			getParamsVariations: (params) => {
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
			getSummary: () => {
				return 'Type ....';
				// TODO
			},
		},
		'type-enter': {
			getSpec: (selector) => {
				return `
						cy.get('${selector}').type('{enter}').blur();
					`;
			},
		}
	},
	'todo-list': {
		'select-all': {
			getSpec: (selector) => {
				return `
						cy.get('${selector} label[for="toggle-all"]').click();
					`;
			},
		},
		'clear-all': {
			getSpec: (selector) => {
				return `
						cy.get('${selector} .footer .clear-completed').click();
					`;
			},
		}

	},
	'todo-item': {
		'open-editor': {
			getSpec: (selector, params) => {
				return `
						cy.get('${selector} label').dblclick();
					`;
			},
		},
		'select': {
			getSpec: (selector, params) => {
				return `
						cy.get('${selector} input.toggle').click();
					`;
			},
		},
		'edit-text': {
			getSpec: (selector, params) => {
				// TODO
				// cy.get('#copyText').invoke('val', textToCopy)
				return `
						cy.get('${selector} input.edit').type(\`${params.value}\`).blur();
					`;
			},
			getParamsVariations: (params) => {
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
			getSummary: () => {
				return 'Type ....';
				// TODO
			},
		},
		'delete': {
			getSpec: (selector, params) => {
				return `
						cy.get('${selector}').realHover().get('button.destroy').click();
					`;
			},
		}
	},
	'todo-filters': {
		'select': {
			getSpec: (selector, params) => {
				// ul.filters
				return `
						cy.get('${selector} li').eq(${params.selectedOption}).click();
					`;
			},
			getParamsVariations: (params) => {
				return params.options.filter(option => option !== params.selectedOption).map(option => {
					return {
						...params,
						selectedOption: option,
					}
				});
			},
			getSummary: () => {
				// TODO
			},
		}
	}
}