describe('Click btn back lesson 1', function(){
    it('Click back', function(){
        cy.visit('http://127.0.0.1:5500/Lessons/Lesson1.html');

        cy.contains('Back').click();
        cy.url()
            .should('include', '/DragonLearn.html');
        cy.wait(1000);
    })
})