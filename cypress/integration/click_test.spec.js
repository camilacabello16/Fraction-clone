describe('Click Lesson 1 - text', function(){
    it('Click text lesson 1', function(){
        cy.visit('http://127.0.0.1:5500/DragonLearn.html'); 
        cy.contains('Numerator and denominator').click();
        cy.url()
            .should("include", '/Lessons/Lesson1.html')  
            
        cy.wait(1000);
    })
})