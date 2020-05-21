describe('Learn Lesson 2', function(){
    it('Learn lesson 2', function(){
        cy.visit('http://127.0.0.1:5500/Lessons/Lesson2.html');

        cy.get('#wrong-answer-2').contains('OK').click();
        cy.wait(1000);
        cy.get('#wrong-answer-1').contains('OK').click();
        cy.wait(1000);
        cy.get('#right-ans').contains('OK').click();
        cy.wait(1000);

        //screen 2
        cy.get('#wrong-screen-2').contains('Yes').click();
        cy.wait(1000);
        cy.get('#right-screen-2').contains('No').click();
        cy.wait(1000);

        //screen 3
        cy.get('#wrong-screen-3').contains('Yes').click();
        cy.wait(1000);
        cy.get('#right-screen-3').contains('No').click();
        cy.wait(1000);

        //screen 4
        cy.get('#wrong-screen-4').contains('No').click();
        cy.wait(1000);
        cy.get('#right-screen-4').contains('Yes').click();
        cy.wait(1000);

        //screen 5
        cy.get('#wrong-screen-5').contains('Yes').click();
        cy.wait(1000);
        cy.get('#right-screen-5').contains('No').click();
        cy.wait(1000);

        //screen 6
        cy.get('#type_cypress').type('13');
        cy.get('#btn-done-six').contains('Done').click();
        cy.wait(1000);
        cy.get('#type_cypress').clear()  
        cy.wait(1000);
        cy.get('#type_cypress').type('35');
        cy.get('#btn-done-six').contains('Done').click(); 
        cy.wait(1000);

        //screen 7
        cy.get('#type_cypress_screen_seven').type('16');
        cy.get('#btn-done-six').contains('Done').click({force:true});
        cy.wait(1000);
        cy.get('#type_cypress_screen_seven').clear()  
        cy.wait(1000);
        cy.get('#type_cypress_screen_seven').type('11');
        cy.get('#btn-done-seven').contains('Done').click(); 
        cy.wait(1000);

        //screen 8
        cy.get('#type_cypress_screen_eight').type('16');
        cy.get('#btn-done-six').contains('Done').click({force:true});
        cy.wait(1000);
        cy.get('#type_cypress_screen_eight').clear()  
        cy.wait(1000);
        cy.get('#type_cypress_screen_eight').type('133');
        cy.get('#btn-done-eight').contains('Done').click(); 
        cy.wait(1000);


    })
})