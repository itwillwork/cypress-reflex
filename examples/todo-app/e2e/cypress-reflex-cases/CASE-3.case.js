module.exports = {
	describe: [
		"выбор одного из вариантов и clear cmpleted & all checked",
	],
	before: `
		// TODO before
	`,
	beforeEach: `
		cy.visit('https://todomvc.com/examples/react/');
		cy.get('.new-todo').type('test 1{enter}').blur();
		cy.get('.new-todo').type('test 2{enter}').blur();			
	`,
	after: `
		// TODO after
	`,
	afterEach: `
		// TODO afterEach
	`,
	scenario: [{
		command: "action:todo-list:select-all",
		selector: ".todoapp",
	}, {
		command: "check:screenshot",
		selectors: [
			".todoapp",
		],
	}, {
		command: "action:todo-list:clear-all",
		selector: ".todoapp",
	}, {
		command: "check:screenshot",
		selectors: [
			".todoapp",
		],
	}],
}