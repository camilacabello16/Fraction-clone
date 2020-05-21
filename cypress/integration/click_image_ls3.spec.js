describe('Click image lesson 3', function(){
    it('Click lesson 3', function(){
        cy.visit('http://127.0.0.1:5500/DragonLearn.html');

        cy.get('#img_ls_3').click()
        cy.url()
            .should("include", '/Lessons/Lesson3.html')  

        cy.wait(1000);
    })
})