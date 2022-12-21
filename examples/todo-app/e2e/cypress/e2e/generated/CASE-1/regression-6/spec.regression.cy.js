
    /**
      Describe: Добавление & редактирование & удаление todo
    */
    describe('cypress/e2e/generated/CASE-1/regression-6', () => {
  
        Cypress.on('fail', (error, runnable) => {
          if (/Expected to find element: .+, but never found it./.test(error.message)) {
            // skip error
            return;
          }

          throw error;
        });
    
        beforeEach(function () {
          
			cy.log('**Step [1/1]:** raw - ');
		

				
		  cy.task('api:create-task').as('testTask');
	
            
        });
    
        
    /** 
Test summary:
visit - {"url":"https://todomvc.com/examples/react/?id=${this.testTask.userId}"}
check:screenshot - 
action:todo-input:type-text - {"value":"${this.testTask.userId}"}
action:todo-input:type-enter - 
check:screenshot - 
action:todo-list:item:open-editor - {"itemIndex":0}
check:screenshot - 
action:todo-list:item:edit - {"value":"text🤡"}
check:screenshot - 
action:todo-list:item:delete - {"itemIndex":0}
check:screenshot - 
 */
  
        it('Test body', function() {
          const specPath = __dirname;

          
			cy.log('**Step [1/11]:** visit - {"url":"https://todomvc.com/examples/react/?id=${this.testTask.userId}"}');
		

                cy.visit(`https://todomvc.com/examples/react/?id=${this.testTask.userId}`);
            
			cy.log('**Step [2/11]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '2_{.todoapp}',
			            });
			          
			cy.log('**Step [3/11]:** action:todo-input:type-text - {"value":"${this.testTask.userId}"}');
		

						cy.get('.new-todo').type(`${this.testTask.userId}`).blur();
					
			cy.log('**Step [4/11]:** action:todo-input:type-enter - ');
		

						cy.get('.new-todo').type('{enter}').blur();
					
			cy.log('**Step [5/11]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '5_{.todoapp}',
			            });
			          
			cy.log('**Step [6/11]:** action:todo-list:item:open-editor - {"itemIndex":0}');
		

						cy.get(ul'.todo-list li').eq(0).get('label').dblclick();
					
			cy.log('**Step [7/11]:** check:screenshot - ');
		

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specPath,
			              name: '7_{.todo-list}',
			            });
			          
			cy.log('**Step [8/11]:** action:todo-list:item:edit - {"value":"text🤡"}');
		

							cy.get(ul'.todo-list li').eq(undefined).get('input.edit').type(`text🤡`).blur();
						
			cy.log('**Step [9/11]:** check:screenshot - ');
		

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specPath,
			              name: '9_{.todo-list}',
			            });
			          
			cy.log('**Step [10/11]:** action:todo-list:item:delete - {"itemIndex":0}');
		

							cy.get(ul'.todo-list li').eq(0).realHover().get('button.destroy').click();
						
			cy.log('**Step [11/11]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '11_{.todoapp}',
			            });
			          
        });
  
    });
  