
    /**
      Describe: Регистрация
    */
    describe('cypress/e2e/generated/CASE-1/smoke', () => {
  
        
    /** 
Test summary:
visit - http://localhost:3000/
action:text-input:type - {"value":"Ivan"}
action:number-input:type - {"value":"24"}
action:dropdown:select - {"options":["driver","doctor","teacher"],"selectedOption":"teacher"}
check:screenshot - 
action:form:submit - 
check:screenshot - 
 */
  
        it('Test body', function() {
          const specFile = __filename;

          
			cy.log('**Step [1/7]:** visit - http://localhost:3000/');
		

                cy.visit(`http://localhost:3000/`);
            
			cy.log('**Step [2/7]:** action:text-input:type - {"value":"Ivan"}');
		

						cy.get('input[data-test-id="name"]').type(`Ivan`).blur();
					
			cy.log('**Step [3/7]:** action:number-input:type - {"value":"24"}');
		

						cy.get('input[data-test-id="age"]').type(`24`).blur();
					
			cy.log('**Step [4/7]:** action:dropdown:select - {"options":["driver","doctor","teacher"],"selectedOption":"teacher"}');
		

						cy.get('select[data-test-id="profession"]').select('teacher');
					
			cy.log('**Step [5/7]:** check:screenshot - ');
		

			            cy.get('[data-test-id="app"]').takeAndCompareScreenshot({
			              specFile,
			              name: '5_{[data-test-id=app]}',
			            });
			          
			cy.log('**Step [6/7]:** action:form:submit - ');

cy.intercept("POST", "**/api/sign-up*").as('request-step-1');

						cy.get('form[data-test-id="sign-up-form"]').find('input[type="submit"]').click();
				
cy.get('@request-step-1').takeAndCompareRequest({
	specFile,
	fixtureName: 'fixute-1',
	fields: [
		'request.headers.origin',
		'request.url',
		'request.method',
		'request.query',
		'request.body'
	],
});

			cy.log('**Step [7/7]:** check:screenshot - ');
		

			            cy.get('[data-test-id="app"]').takeAndCompareScreenshot({
			              specFile,
			              name: '7_{[data-test-id=app]}',
			            });
			          
        });
  
    });
  