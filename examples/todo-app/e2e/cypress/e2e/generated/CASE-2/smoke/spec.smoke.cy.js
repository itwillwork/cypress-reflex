
    /**
      Describe: Выбор одного из вариантов и clear completed
    */
    describe('cypress/e2e/generated/CASE-2/smoke', () => {
  
        beforeEach(function () {
          
			cy.log('**Step [1/5]:** visit - https://todomvc.com/examples/react/');
		

                cy.visit(`https://todomvc.com/examples/react/`);
            
			cy.log('**Step [2/5]:** action:todo-input:type-text - {"value":"test 1"}');
		

						cy.get('.new-todo').type(`test 1`).blur();
					
			cy.log('**Step [3/5]:** action:todo-input:type-enter - ');
		

						cy.get('.new-todo').type('{enter}').blur();
					
			cy.log('**Step [4/5]:** action:todo-input:type-text - {"value":"test 2"}');
		

						cy.get('.new-todo').type(`test 2`).blur();
					
			cy.log('**Step [5/5]:** action:todo-input:type-enter - ');
		

						cy.get('.new-todo').type('{enter}').blur();
					
        });
    
        
    /** 
Test summary:
action:todo-list:item:select - {"itemIndex":0}
check:screenshot - 
action:todo-filters:select - {"options":[0,1,2],"selectedOption":0}
check:screenshot - 
action:todo-list:clear-all - 
check:screenshot - 
 */
  
        it('Test body', function() {
          const specFile = __filename;

          
			cy.log('**Step [1/6]:** action:todo-list:item:select - {"itemIndex":0}');
		

							cy.get('ul.todo-list li').eq(0).find('input.toggle').click();
						
			cy.log('**Step [2/6]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specFile,
			              name: '2_{.todoapp}',
			            });
			          
			cy.log('**Step [3/6]:** action:todo-filters:select - {"options":[0,1,2],"selectedOption":0}');
		

						cy.get('ul.filters li').eq(0).click();
					
			cy.log('**Step [4/6]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specFile,
			              name: '4_{.todoapp}',
			            });
			          
			cy.log('**Step [5/6]:** action:todo-list:clear-all - ');
		

						cy.get('.todoapp .footer .clear-completed').click();
					
			cy.log('**Step [6/6]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specFile,
			              name: '6_{.todoapp}',
			            });
			          
        });
  
    });
  