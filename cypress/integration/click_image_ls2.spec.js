describe('Click image lesson 2', function(){
    it('Click lesson 2', function(){
        cy.visit('http://127.0.0.1:5500/DragonLearn.html');

        cy.get('#img_ls_2').click()
        cy.url()
            .should("include", '/Lessons/Lesson2.html')  

        cy.wait(1000);
    })
})