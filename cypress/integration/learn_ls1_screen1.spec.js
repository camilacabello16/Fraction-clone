describe('Learn Lesson 1', function(){
    it('Click answer', function(){
        cy.visit('http://127.0.0.1:5500/Lessons/Lesson1.html');

        //screen 1
        cy.get('#wrong_answer_1').contains('The circle is divided into this many pieces').click();
        cy.wait(1000)
        cy.get('#wrong_answer_2').contains('This is how many pieces are not shaded').click();
        cy.wait(1000)
        cy.get('#right_answer_1').contains('This is how many pieces are shaded').click();
        cy.wait(1000)
        cy.contains('Next').click();
        cy.wait(1000)

        //screen 2
        cy.get('#wrong_answer_3').contains('This is how many pieces are shaded').click();
        cy.wait(1000)
        cy.get('#wrong_answer_4').contains('This is how many pieces are not shaded').click();
        cy.wait(1000)
        cy.get('#right_answer_2').contains('The circle is divided into this many pieces').click();
        cy.wait(1000)
        cy.get('#spec_btn').click({force:true});
        cy.wait(1000)

        //screen 3
        cy.get('#opt-two').contains('Fraction denominator').click();
        cy.wait(1000)
        cy.get('#opt-one').contains('Fraction numerator').click();
        cy.wait(1000)
        cy.get('#opt-two').contains('Fraction denominator').click();
        cy.wait(1000)
        cy.get('#opt-three').contains('Fraction bar').click();
        cy.wait(1000)
        cy.get('#opt-two').contains('Fraction denominator').click();
        cy.wait(1000)

        //success
        cy.get('a[href="./success.html"]').click();
        cy.wait(1000);
    })
})