module.exports = {
	visitAndCreateTasksSteps: [{
		command: "visit",
		params: {
			url: "https://todomvc.com/examples/react/",
		},
	}, {
		command: "raw",
		params: {
			content: `
					cy.get('.new-todo').type('test 1{enter}').blur();
					cy.get('.new-todo').type('test 2{enter}').blur();
				`,
		}
	}, ]
}