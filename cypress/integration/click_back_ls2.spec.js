describe('Click btn back lesson 2', function(){
    it('Click back', function(){
        cy.visit('http://127.0.0.1:5500/Lessons/Lesson2.html');

        cy.contains('Back').click();
        cy.url()
            .should('include', '/DragonLearn.html');

        cy.wait(1000);
    })
})