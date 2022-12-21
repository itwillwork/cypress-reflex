const { visitAndCreateTasksSteps } = require('./common-steps');

module.exports = {
	describe: "выбор одного из вариантов и clear cmpleted & all checked",
	before: `
		// TODO before
	`,
	beforeEach:visitAndCreateTasksSteps,
	after: `
		// TODO after
	`,
	afterEach: `
		// TODO afterEach
	`,
	body: [{
		command: "action:todo-list:item:select",
		selector: "ul.todo-list li:first",
	}, {
		command: "check:screenshot",
		selectors: [
			".todoapp",
		],
	}, {
		command: "action:todo-filters:select",
		selector: "ul.filters",
		params: {
			options: [0, 1, 2],
			selectedOption: 0,
		},
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
	}, ],
}