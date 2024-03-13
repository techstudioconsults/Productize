describe(`login test`, () => {
    beforeEach(() => {
        cy.visit(`/auth/login`);
    });

    it(`test login form`, () => {
        cy.contains(/sign in/i);
        cy.getDataTest(`email-input`).find(`input`).as(`email`);
        cy.getDataTest(`password-input`).find(`input`).as(`password`);
        cy.getDataTest(`login-btn`).as(`submit`);

        cy.contains(/welcome to productize/i).should(`not.exist`);
        cy.get(`@email`).type(`kinxly@gmail.com`);
        cy.get(`@password`).type(`Password1.`);
        cy.get(`@submit`).click();
        cy.contains(/welcome to productize/i).should(`exist`);
    });
});
