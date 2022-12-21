
    /**
      Describe: выбор одного из вариантов и clear cmpleted & all checked
    */
    describe('cypress/e2e/generated/CASE-2/regression-0', () => {
  
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
          
// Step [1/2]: visit - {"url":"https://todomvc.com/examples/react/"}

                cy.visit(`https://todomvc.com/examples/react/`);
            
// Step [2/2]: raw - 

				
					cy.get('.new-todo').type('test 1{enter}').blur();
					cy.get('.new-todo').type('test 2{enter}').blur();
				
            
        });
    
        
    /** 
Test summary:
action:todo-list:item:select - 
check:screenshot - 
action:todo-filters:select - {"options":[0,1,2],"selectedOption":0}
check:screenshot - 
action:todo-list:clear-all - 
check:screenshot - 
 */
  
        it('Test body', function() {
          const specPath = __dirname;

          
// Step [1/6]: action:todo-list:item:select - 

						cy.get('ul.todo-list li:first input.toggle').click();
					
// Step [2/6]: check:screenshot - 

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '1_{.todoapp}',
			            });
			          
// Step [3/6]: action:todo-filters:select - {"options":[0,1,2],"selectedOption":0}

						cy.get('ul.filters li').eq(0).click();
					
// Step [4/6]: check:screenshot - 

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '3_{.todoapp}',
			            });
			          
// Step [5/6]: action:todo-list:clear-all - 

						cy.get('.todoapp .footer .clear-completed').click();
					
// Step [6/6]: check:screenshot - 

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '5_{.todoapp}',
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
  