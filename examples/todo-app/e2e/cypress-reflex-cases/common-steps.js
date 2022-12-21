module.exports = {
	visitAndCreateTasksSteps: [{
		command: "visit",
		params: {
			url: "https://todomvc.com/examples/react/",
		},
	}, {
		command: "action:todo-input:type-text",
		selector: ".new-todo",
		params: {
			value: "test 1"
		}
	}, {
		command: "action:todo-input:type-enter",
		selector: ".new-todo",
	}, {
		command: "action:todo-input:type-text",
		selector: ".new-todo",
		params: {
			value: "test 2"
		}
	}, {
		command: "action:todo-input:type-enter",
		selector: ".new-todo",
	}]
}