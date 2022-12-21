
    /**
      Describe: выбор одного из вариантов и clear cmpleted & all checked
    */
    describe('cypress/e2e/generated/CASE-3/regression-0', () => {
  
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
action:todo-list:select-all - 
check:screenshot - 
action:todo-list:clear-all - 
check:screenshot - 
 */
  
        it('Test body', function() {
          const specPath = __dirname;

          
// Step [1/4]: action:todo-list:select-all - 

						cy.get('.todoapp label[for="toggle-all"]').click();
					
// Step [2/4]: check:screenshot - 

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '1_{.todoapp}',
			            });
			          
// Step [3/4]: action:todo-list:clear-all - 

						cy.get('.todoapp .footer .clear-completed').click();
					
// Step [4/4]: check:screenshot - 

			            cy.get('.todoapp').takeAndCompareScreenshot({
			              specPath,
			              name: '3_{.todoapp}',
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
  