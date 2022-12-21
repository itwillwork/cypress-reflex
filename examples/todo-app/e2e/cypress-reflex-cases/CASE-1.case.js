module.exports = {
	describe: [
		"Добавление & редактирование & удаление TODO",
	],
	before: `
		// TODO before
	`,
	beforeEach: `
		  cy.task('api:create-task').as('testTask');
	`,
	after: `
		// TODO after
	`,
	afterEach: `
		// TODO afterEach
	`,
	scenario: [{
		command: "visit",
		url: "https://todomvc.com/examples/react/?id=${this.testTask.userId}",
	}, {
		command: "raw",
		content: `
			cy.wait(1000); // TODO remove
		`,
	}, {
		command: "check:screenshot",
		selectors: [
			".header",
		],
	}, {
		command: "action:todo-input:type-text",
		selector: ".new-todo",
		params: {
			value: "${this.testTask.userId}"
		}
	}, {
		command: "action:todo-input:type-enter",
		selector: ".new-todo",
	}, {
		command: "check:screenshot",
		selectors: [
			".header",
			".todo-list",
			".todo-count",
		],
	}, {
		command: "action:todo-item:open-editor",
		selector: "ul.todo-list li:first",
	}, {
		command: "check:screenshot",
		selectors: [
			".todo-list",
		],
	}, {
		command: "action:todo-item:edit-text",
		selector: "ul.todo-list li:first",
		params: {
			value: "text"
		}
	}, {
		command: "check:screenshot",
		selectors: [
			".todo-list",
		],
	}, {
		command: "action:todo-item:delete",
		selector: "ul.todo-list li:first",
	}, {
		command: "check:screenshot",
		selectors: [
			".todoapp",
		],
	}],
}