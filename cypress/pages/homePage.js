class HomePage {
    elements = {
        productsTitle: () => cy.get('.title'),
        firstProduct: () => cy.get('.inventory_item_name').first()
    }

    verifyHomePage() {
        this.elements.productsTitle().should('contain', 'Products')
    }

    clickFirstProduct() {
        this.elements.firstProduct().click()
    }
}
export default new HomePage()
