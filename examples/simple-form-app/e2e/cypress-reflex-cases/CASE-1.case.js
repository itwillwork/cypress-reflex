module.exports = {
	describe: "Регистрация",
	body: [{
		command: "visit",
		params: {
			url: "http://localhost:3000/",
		},
	}, {
		command: "action:text-input:type",
		selector: '[data-test-id="name"]',
		params: {
			value: "Ivan"
		}
	}, {
		command: "action:number-input:type",
		selector: '[data-test-id="age"]',
		params: {
			value: "24"
		}
	}, {
		command: "action:dropdown:select",
		selector: '[data-test-id="profession"]',
		params: {
			options: ['driver', 'doctor', 'teacher'],
			selectedOption: 'teacher',
		},
	}, {
		command: "check:screenshot",
		selector: '[data-test-id="app"]'
	}, {
		command: "action:form:submit",
		selector: '[data-test-id="sign-up-form"]',
	}, {
		command: "check:screenshot",
		selector: '[data-test-id="app"]'
	}],
}