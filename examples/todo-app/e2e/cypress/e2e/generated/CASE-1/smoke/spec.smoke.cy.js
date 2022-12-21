
    /**
      Describe: Добавление & редактирование & удаление todo
    */
    describe('cypress/e2e/generated/CASE-1/smoke', () => {
  
        beforeEach(function () {
          
			// Step [1/1]: raw - 
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
action:todo-list:item:edit - {"itemIndex":0,"value":"text"}
check:screenshot - 
action:todo-list:item:delete - {"itemIndex":0}
check:screenshot - 
 */
  
        it('Test body', function() {
          const specPath = __dirname;

          
			// Step [1/11]: visit - {"url":"https://todomvc.com/examples/react/?id=${this.testTask.userId}"}
			cy.log('**Step [1/11]:** visit - {"url":"https://todomvc.com/examples/react/?id=${this.testTask.userId}"}');
		

                cy.visit(`https://todomvc.com/examples/react/?id=${this.testTask.userId}`);
            
			// Step [2/11]: check:screenshot - 
			cy.log('**Step [2/11]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '1_{.todoapp}',
			            });
			          
			// Step [3/11]: action:todo-input:type-text - {"value":"${this.testTask.userId}"}
			cy.log('**Step [3/11]:** action:todo-input:type-text - {"value":"${this.testTask.userId}"}');
		

						cy.get('.new-todo').type(`${this.testTask.userId}`).blur();
					
			// Step [4/11]: action:todo-input:type-enter - 
			cy.log('**Step [4/11]:** action:todo-input:type-enter - ');
		

						cy.get('.new-todo').type('{enter}').blur();
					
			// Step [5/11]: check:screenshot - 
			cy.log('**Step [5/11]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '4_{.todoapp}',
			            });
			          
			// Step [6/11]: action:todo-list:item:open-editor - {"itemIndex":0}
			cy.log('**Step [6/11]:** action:todo-list:item:open-editor - {"itemIndex":0}');
		

						cy.get(ul'.todo-list li').eq(0).get('label').dblclick();
					
			// Step [7/11]: check:screenshot - 
			cy.log('**Step [7/11]:** check:screenshot - ');
		

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specPath,
			              name: '6_{.todo-list}',
			            });
			          
			// Step [8/11]: action:todo-list:item:edit - {"itemIndex":0,"value":"text"}
			cy.log('**Step [8/11]:** action:todo-list:item:edit - {"itemIndex":0,"value":"text"}');
		

							cy.get(ul'.todo-list li').eq(0).get('input.edit').type(`text`).blur();
						
			// Step [9/11]: check:screenshot - 
			cy.log('**Step [9/11]:** check:screenshot - ');
		

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specPath,
			              name: '8_{.todo-list}',
			            });
			          
			// Step [10/11]: action:todo-list:item:delete - {"itemIndex":0}
			cy.log('**Step [10/11]:** action:todo-list:item:delete - {"itemIndex":0}');
		

							cy.get(ul'.todo-list li').eq(0).realHover().get('button.destroy').click();
						
			// Step [11/11]: check:screenshot - 
			cy.log('**Step [11/11]:** check:screenshot - ');
		

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '10_{.todoapp}',
			            });
			          
        });
  
    });
  