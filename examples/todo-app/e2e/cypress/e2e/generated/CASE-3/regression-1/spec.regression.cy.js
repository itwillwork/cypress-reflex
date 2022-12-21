
    /**
      Describe: Select all & clear all selected
    */
    describe('cypress/e2e/generated/CASE-3/regression-1', () => {
  
        Cypress.on('fail', (error, runnable) => {
          if (/Expected to find element: .+, but never found it./.test(error.message)) {
            // skip error
            return;
          }

          throw error;
        });
    
        beforeEach(function () {
          
			// Step [1/5]: visit - {"url":"https://todomvc.com/examples/react/"}
			cy.log('**Step [1/5]:** visit - {"url":"https://todomvc.com/examples/react/"}');
		

                cy.visit(`https://todomvc.com/examples/react/`);
            
			// Step [2/5]: action:todo-input:type-text - {"value":"test 1"}
			cy.log('**Step [2/5]:** action:todo-input:type-text - {"value":"test 1"}');
		

						cy.get('.new-todo').type(`test 1`).blur();
					
			// Step [3/5]: action:todo-input:type-enter - 
			cy.log('**Step [3/5]:** action:todo-input:type-enter - ');
		

						cy.get('.new-todo').type('{enter}').blur();
					
			// Step [4/5]: action:todo-input:type-text - {"value":"test 2"}
			cy.log('**Step [4/5]:** action:todo-input:type-text - {"value":"test 2"}');
		

						cy.get('.new-todo').type(`test 2`).blur();
					
			// Step [5/5]: action:todo-input:type-enter - 
			cy.log('**Step [5/5]:** action:todo-input:type-enter - ');
		

						cy.get('.new-todo').type('{enter}').blur();
					
        });
    
        
    /** 
Test summary:
action:todo-list:select-all - 
action:todo-filters:select - {"options":[0,1,2],"selectedOption":1}
check:screenshot - 
action:todo-list:clear-all - 
check:screenshot - 
 */
  
        it('Test body', function() {
          const specPath = __dirname;

          
			// Step [1/5]: action:todo-list:select-all - 
			cy.log('**Step [1/5]:** action:todo-list:select-all - ');
		

						cy.get('.todoapp label[for="toggle-all"]').click();
					
			// Step [2/5]: action:todo-filters:select - {"options":[0,1,2],"selectedOption":1}
			cy.log('**Step [2/5]:** action:todo-filters:select - {"options":[0,1,2],"selectedOption":1}');
		

						cy.get('ul.filters li').eq(1).click();
					
			// Step [3/5]: check:screenshot - 
			cy.log('**Step [3/5]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '2_{.todoapp}',
			            });
			          
			// Step [4/5]: action:todo-list:clear-all - 
			cy.log('**Step [4/5]:** action:todo-list:clear-all - ');
		

						cy.get('.todoapp .footer .clear-completed').click();
					
			// Step [5/5]: check:screenshot - 
			cy.log('**Step [5/5]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '4_{.todoapp}',
			            });
			          
        });
  
    });
  