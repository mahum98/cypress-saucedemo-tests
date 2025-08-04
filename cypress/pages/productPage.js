class ProductPage {
    elements = {
        productTitle: () => cy.get('.inventory_details_name')
    }

    verifyProductPage() {
        this.elements.productTitle().should('be.visible')
    }
}
export default new ProductPage()
