
    /**
      Describe: Добавление & редактирование & удаление todo
    */
    describe('cypress/e2e/generated/CASE-1/regression-2', () => {
  
        Cypress.on('fail', (error, runnable) => {
          if (/Expected to find element: .+, but never found it./.test(error.message)) {
            // skip error
            return;
          }

          throw error;
        });
    
        beforeEach(function () {
          
			cy.log('**Step [1/1]:** raw');
		

				
		  cy.task('api:create-task').as('testTask');
	
            
        });
    
        
    /** 
Test summary:
visit - https://todomvc.com/examples/react/?id=${this.testTask.userId}
action:todo-input:type-text - {"value":"   "}
action:todo-input:type-enter - 
check:screenshot - 
action:todo-list:item:open-editor - {"itemIndex":0}
check:screenshot - 
action:todo-list:item:edit - {"itemIndex":0,"value":"text"}
check:screenshot - 
action:todo-list:item:delete - {"itemIndex":0}
check:screenshot - 
 */
  
        it('Test body', function() {
          const specFile = __filename;

          
			cy.log('**Step [1/10]:** visit - https://todomvc.com/examples/react/?id=${this.testTask.userId}');
		

                cy.visit(`https://todomvc.com/examples/react/?id=${this.testTask.userId}`);
            
			cy.log('**Step [2/10]:** action:todo-input:type-text - {"value":"   "}');
		

						cy.get('.new-todo').type(`   `).blur();
					
			cy.log('**Step [3/10]:** action:todo-input:type-enter - ');
		

						cy.get('.new-todo').type('{enter}').blur();
					
			cy.log('**Step [4/10]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specFile,
			              name: '4_{.todoapp}',
			            });
			          
			cy.log('**Step [5/10]:** action:todo-list:item:open-editor - {"itemIndex":0}');
		

						cy.get('ul.todo-list li').eq(0).find('label').dblclick();
					
			cy.log('**Step [6/10]:** check:screenshot - ');
		

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specFile,
			              name: '6_{.todo-list}',
			            });
			          
			cy.log('**Step [7/10]:** action:todo-list:item:edit - {"itemIndex":0,"value":"text"}');
		

							cy.get('ul.todo-list li').eq(0).find('input.edit').type(`text`).blur();
						
			cy.log('**Step [8/10]:** check:screenshot - ');
		

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specFile,
			              name: '8_{.todo-list}',
			            });
			          
			cy.log('**Step [9/10]:** action:todo-list:item:delete - {"itemIndex":0}');
		

							cy.get('ul.todo-list li').eq(0).realHover().find('button.destroy').click();
						
			cy.log('**Step [10/10]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specFile,
			              name: '10_{.todoapp}',
			            });
			          
        });
  
    });
  