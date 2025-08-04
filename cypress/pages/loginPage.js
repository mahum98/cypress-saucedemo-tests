class LoginPage {
    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMsg: () => cy.get('[data-test="error"]')
    }

    visit() {
        cy.visit('https://www.saucedemo.com')
    }

    login(username, password) {
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
        this.elements.loginBtn().click()
    }
}
export default new LoginPage()
