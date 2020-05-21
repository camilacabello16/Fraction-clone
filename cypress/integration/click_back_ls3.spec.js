describe('Click btn back lesson 3', function(){
    it('Click back', function(){
        cy.visit('http://127.0.0.1:5500/Lessons/Lesson3.html');

        cy.contains('Back').click();
        cy.url()
            .should('include', '/DragonLearn.html')

        cy.wait(1000);
    })
})