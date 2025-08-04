import homePage from '../pages/homePage'
import productPage from '../pages/productPage'

describe('Product Navigation', () => {
    it('Should navigate to product page when product is clicked', () => {
        cy.login('standard_user', 'secret_sauce')
        homePage.verifyHomePage()
        homePage.clickFirstProduct()
        productPage.verifyProductPage()
    })
})
