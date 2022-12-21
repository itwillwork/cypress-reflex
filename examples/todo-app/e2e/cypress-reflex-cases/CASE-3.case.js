const {
	visitAndCreateTasksSteps
} = require('./common-steps');

module.exports = {
	describe: "Select all & clear all selected",
	beforeEach: visitAndCreateTasksSteps,
	body: [{
		command: "action:todo-list:select-all",
		selector: ".todoapp",
	}, {
		command: "action:todo-filters:select",
		selector: ".filters",
		params: {
			options: [0, 1, 2],
			selectedOption: 0,
		},
	}, {
		command: "check:screenshot",
		selector: ".todoapp",
	}, {
		command: "action:todo-list:clear-all",
		selector: ".todoapp",
	}, {
		command: "check:screenshot",
		selector: ".todoapp",
	}],
}