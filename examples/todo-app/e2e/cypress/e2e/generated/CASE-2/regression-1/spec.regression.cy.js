
    /**
      Describe: Выбор одного из вариантов и clear completed
    */
    describe('cypress/e2e/generated/CASE-2/regression-1', () => {
  
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
action:todo-list:item:select - {"itemIndex":0}
check:screenshot - 
action:todo-filters:select - {"options":[0,1,2],"selectedOption":1}
check:screenshot - 
action:todo-list:clear-all - 
check:screenshot - 
 */
  
        it('Test body', function() {
          const specPath = __dirname;

          
			// Step [1/6]: action:todo-list:item:select - {"itemIndex":0}
			cy.log('**Step [1/6]:** action:todo-list:item:select - {"itemIndex":0}');
		

							cy.get(ul'.todo-list li').eq(0).get('input.toggle').click();
						
			// Step [2/6]: check:screenshot - 
			cy.log('**Step [2/6]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '1_{.todoapp}',
			            });
			          
			// Step [3/6]: action:todo-filters:select - {"options":[0,1,2],"selectedOption":1}
			cy.log('**Step [3/6]:** action:todo-filters:select - {"options":[0,1,2],"selectedOption":1}');
		

						cy.get('ul.filters li').eq(1).click();
					
			// Step [4/6]: check:screenshot - 
			cy.log('**Step [4/6]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '3_{.todoapp}',
			            });
			          
			// Step [5/6]: action:todo-list:clear-all - 
			cy.log('**Step [5/6]:** action:todo-list:clear-all - ');
		

						cy.get('.todoapp .footer .clear-completed').click();
					
			// Step [6/6]: check:screenshot - 
			cy.log('**Step [6/6]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '5_{.todoapp}',
			            });
			          
        });
  
    });
  