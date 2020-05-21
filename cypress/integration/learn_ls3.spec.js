describe('Learn Lesson 3', function(){
    it('Fill out answer', function(){
        cy.visit('http://127.0.0.1:5500/Lessons/Lesson3.html');

        cy.get('input[value="Done"]').click({ multiple: true, force:true });
        cy.wait(1000); 

        cy.get('#spec-num').type('1');
        cy.get('#spec-deno').type('4');
        cy.get('input[value="Done"]').click({multiple:true});

        cy.get('input[value="Done"]').click({ multiple: true, force:true });
        cy.wait(1000); 

        cy.get('#spec-test-num').type('4');
        cy.get('#spec-test-deno').type('5');
        cy.get('input[value="Done"]').click({multiple:true, force:true});
        cy.wait(1000);
    })
})