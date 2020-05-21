describe('Click image lesson 1', function(){
    it('Click lesson 1', function(){
        cy.visit('http://127.0.0.1:5500/DragonLearn.html');

        cy.get('#img_ls_1').click()
        cy.url()
            .should("include", '/Lessons/Lesson1.html')  

        cy.wait(1000);
    })
})