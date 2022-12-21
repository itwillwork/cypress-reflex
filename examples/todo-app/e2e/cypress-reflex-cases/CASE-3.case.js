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