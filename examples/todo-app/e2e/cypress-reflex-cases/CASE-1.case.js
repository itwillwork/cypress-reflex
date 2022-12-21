module.exports = {
	describe: "Добавление & редактирование & удаление todo",
	beforeEach: `
		  cy.task('api:create-task').as('testTask');
	`,
	body: [{
		command: "visit",
		params: {
			url: "https://todomvc.com/examples/react/?id=${this.testTask.userId}",
		},
	}, {
		command: "check:screenshot",
		selector: ".todoapp",
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
		selector: ".todoapp",
	}, {
		command: "action:todo-list:item:open-editor",
		selector: ".todo-list",
		params: {
			itemIndex: 0,
		}
	}, {
		command: "check:screenshot",
		selectors: [
			".todo-list",
		],
	}, {
		command: "action:todo-list:item:edit",
		selector: ".todo-list",
		params: {
			itemIndex: 0,
			value: "text"
		}
	}, {
		command: "check:screenshot",
		selectors: [
			".todo-list",
		],
	}, {
		command: "action:todo-list:item:delete",
		selector: ".todo-list",
		params: {
			itemIndex: 0,
		}
	}, {
		command: "check:screenshot",
		selector: ".todoapp",
	}],
}