describe(`Form tests`, () => {
    beforeEach(() => {
        cy.visit(`/auth/login`);
    });

    it(`form should render`, () => {
        cy.contains(/Sign in/i);
        cy.getDataTest(`email-input`).find(`input`).type(`kinxly@gmail.com`);
        cy.getDataTest(`login-btn`).click();
    });
});
