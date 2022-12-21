
    /**
      Describe: Добавление & редактирование & удаление TODO
    */
    describe('cypress/e2e/generated/CASE-1/regression-4', () => {
  
        Cypress.on('fail', (error, runnable) => {
          if (/Expected to find element: .+, but never found it./.test(error.message)) {
            // skip error
            return;
          }

          throw error;
        });
    
        before(function () {
          
// Step [1/1]: raw - 

				
		// TODO before
	
            
        });
    
        beforeEach(function () {
          
// Step [1/1]: raw - 

				
		  cy.task('api:create-task').as('testTask');
	
            
        });
    
        
    /** 
Test summary:
visit - {"url":"https://todomvc.com/examples/react/?id=${this.testTask.userId}"}
raw - 
check:screenshot - 
action:todo-input:type-text - {"value":"${this.testTask.userId}"}
action:todo-input:type-enter - 
check:screenshot - 
action:todo-list:item:open-editor - 
check:screenshot - 
action:todo-list:item:edit - {"value":" text "}
check:screenshot - 
action:todo-list:item:delete - 
check:screenshot - 
 */
  
        it('Test body', function() {
          const specPath = __dirname;

          
// Step [1/12]: visit - {"url":"https://todomvc.com/examples/react/?id=${this.testTask.userId}"}

                cy.visit(`https://todomvc.com/examples/react/?id=${this.testTask.userId}`);
            
// Step [2/12]: raw - 

				
				cy.wait(1000); // TODO remove
			
            
// Step [3/12]: check:screenshot - 

			            cy.get('.header').takeAndCompareScreenshot({
			              specPath,
			              name: '2_{.header}',
			            });
			          
// Step [4/12]: action:todo-input:type-text - {"value":"${this.testTask.userId}"}

						cy.get('.new-todo').type(`${this.testTask.userId}`).blur();
					
// Step [5/12]: action:todo-input:type-enter - 

						cy.get('.new-todo').type('{enter}').blur();
					
// Step [6/12]: check:screenshot - 

			            cy.get('.header').takeAndCompareScreenshot({
			              specPath,
			              name: '5_{.header}',
			            });
			          

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specPath,
			              name: '5_{.todo-list}',
			            });
			          

			            cy.get('.todo-count').takeAndCompareScreenshot({
			              specPath,
			              name: '5_{.todo-count}',
			            });
			          
// Step [7/12]: action:todo-list:item:open-editor - 

						cy.get('ul.todo-list li:first label').dblclick();
					
// Step [8/12]: check:screenshot - 

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specPath,
			              name: '7_{.todo-list}',
			            });
			          
// Step [9/12]: action:todo-list:item:edit - {"value":" text "}

							cy.get('ul.todo-list li:first input.edit').type(` text `).blur();
						
// Step [10/12]: check:screenshot - 

			            cy.get('.todo-list').takeAndCompareScreenshot({
			              specPath,
			              name: '9_{.todo-list}',
			            });
			          
// Step [11/12]: action:todo-list:item:delete - 

						cy.get('ul.todo-list li:first').realHover().get('button.destroy').click();
					
// Step [12/12]: check:screenshot - 

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '11_{.todoapp}',
			            });
			          
        });
  
        after(function () {
          
// Step [1/1]: raw - 

				
		// TODO after
	
            
        });
    
        afterEach(function () {
          
// Step [1/1]: raw - 

				
		// TODO afterEach
	
            
        });
    
    });
  