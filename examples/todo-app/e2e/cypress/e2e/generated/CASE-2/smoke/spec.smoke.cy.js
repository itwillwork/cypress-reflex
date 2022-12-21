
    /**
      Describe: выбор одного из вариантов и clear cmpleted & all checked
    */
    describe('[smoke] cypress/e2e/generated/CASE-2/smoke', () => {
  
        before(function () {
          
// Step [1/1]: -

				
		// TODO before
	
            
        });
    
        beforeEach(function () {
          
// Step [1/1]: -

				
		cy.visit('https://todomvc.com/examples/react/');
		cy.get('.new-todo').type('test 1{enter}').blur();
		cy.get('.new-todo').type('test 2{enter}').blur();			
	
            
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
  