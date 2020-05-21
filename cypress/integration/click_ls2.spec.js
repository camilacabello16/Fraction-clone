describe('Click Lesson 2 - text', function(){
    it('Click text lesson 2', function(){
        cy.visit('http://127.0.0.1:5500/DragonLearn.html'); 
        cy.contains('Find numerator and denominator').click();
        cy.url()
            .should("include", '/Lessons/Lesson2.html')   
            
        cy.wait(1000);
    })
})