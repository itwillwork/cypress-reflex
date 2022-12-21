
    describe('cypress/e2e/generated/CASE-1/regression-0', () => {
  
        Cypress.on('fail', (error, runnable) => {
          if (/Expected to find element: .+, but never found it./.test(error.message)) {
            // skip error
            return;
          }

          throw error;
        });
    
        before(function () {
          
// Step [1/1]: -

				
		// TODO before
	
            
        });
    
        beforeEach(function () {
          
// Step [1/1]: -

				
		  cy.task('api:create-task').as('testTask');
	
            
        });
    
        
    /**
      Test summary:
    */
  
        it('Test body', function() {
          const specPath = __dirname;

          
        });
  
        after(function () {
          
// Step [1/1]: -

				
		// TODO after
	
            
        });
    
        afterEach(function () {
          
// Step [1/1]: -

				
		// TODO afterEach
	
            
        });
    
    });
  