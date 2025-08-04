import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'

describe('Login Tests', () => {
    it('Should show error for wrong login', () => {
        loginPage.visit()
        loginPage.login('wrong_user', 'wrong_pass')
        loginPage.elements.errorMsg().should('contain', 'Username and password do not match')
    })

    it('Should login successfully and land on home page', () => {
        cy.login('standard_user', 'secret_sauce')
        homePage.verifyHomePage()
    })
})
