
    /**
      Describe: Регистрация
    */
    describe('cypress/e2e/generated/CASE-1/regression-5', () => {
  
        Cypress.on('fail', (error, runnable) => {
          if (/No request ever occurred/.test(error.message)) {
            // skip requests error
            return;
          }

          if (/Expected to find element: .+, but never found it./.test(error.message)) {
            // skip get error
            return;
          }

          throw error;
        });
    
        
    /** 
Test summary:
visit - http://localhost:3000/
action:text-input:type - {"value":"Ivan"}
action:number-input:type - {"value":"-1"}
action:dropdown:select - {"options":["driver","doctor","teacher"],"selectedOption":"teacher"}
check:screenshot - 
action:form:submit - 
check:screenshot - 
check:request - POST __/api/sign-up_
 */
  
        it('Test body', function() {
          const specFile = __filename;

          

					cy.intercept(`POST`, `**/api/sign-up*`).as('request-8');
				
          
			cy.log('**Step [1/8]:** visit - http://localhost:3000/');
		

                cy.visit(`http://localhost:3000/`);
            
			cy.log('**Step [2/8]:** action:text-input:type - {"value":"Ivan"}');
		

						cy.get('input[data-test-id="name"]').type(`Ivan`).blur();
					
			cy.log('**Step [3/8]:** action:number-input:type - {"value":"-1"}');
		

						cy.get('input[data-test-id="age"]').type(`-1`).blur();
					
			cy.log('**Step [4/8]:** action:dropdown:select - {"options":["driver","doctor","teacher"],"selectedOption":"teacher"}');
		

						cy.get('select[data-test-id="profession"]').select('teacher');
					
			cy.log('**Step [5/8]:** check:screenshot - ');
		

			            cy.get('[data-test-id="app"]').takeAndCompareScreenshot({
			              specFile,
			              name: '5_{[data-test-id=app]}',
			            });
			          
			cy.log('**Step [6/8]:** action:form:submit - ');
		

						cy.get('form[data-test-id="sign-up-form"]').find('input[type="submit"]').click();
					
			cy.log('**Step [7/8]:** check:screenshot - ');
		

			            cy.get('[data-test-id="app"]').takeAndCompareScreenshot({
			              specFile,
			              name: '7_{[data-test-id=app]}',
			            });
			          
			cy.log('**Step [8/8]:** check:request - POST __/api/sign-up_');
		

					cy.wait('@request-8').takeAndCompareRequest({
						specFile,
						fixtureName: 'request-8',
						fields: ["request.headers.origin","request.url","request.method","request.query","request.body"],
					});
				
        });
  
    });
  