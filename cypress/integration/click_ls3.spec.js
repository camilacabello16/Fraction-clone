describe('Click Lesson 3 - text', function(){
    it('Click text lesson 3', function(){
        cy.visit('http://127.0.0.1:5500/DragonLearn.html'); 
        cy.contains('Writing fractions').click();
        cy.url()
            .should("include", '/Lessons/Lesson3.html') 
            
        cy.wait(1000);
    })
})