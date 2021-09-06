describe('GedesCommerce End to End Testing', () => {
  before(() => {
    localStorage.clear()
  })

  it('Visit the page', () => {
    cy.visit('http://localhost:3000')

    // Login user
    const userNameInput = cy.get(
      '.r-padding-e65kyq > :nth-child(2) > .css-view-1dbjc4n',
    )
    userNameInput.type('hopkins')

    const passwordInput = cy.get(':nth-child(3) > .css-view-1dbjc4n')
    passwordInput.type('William56$hj')

    cy.get('.r-marginTop-156q2ks').click()

    cy.wait(2000)

    // Select a product category
    const selectorProductCategory = cy.get(
      '.r-marginBottom-1c6w074 > :nth-child(1) > .r-alignItems-1awozwy',
    )
    selectorProductCategory.click()

    const electronicsOption = cy.get(
      '.r-WebkitOverflowScrolling-150rngu > :nth-child(1) > :nth-child(1) > :nth-child(2)',
    )
    electronicsOption.click()

    // Validate product category and navigate to the detail screen
    const firstElectronicProduct = cy.get('.r-flexWrap-1w6e6rj > :nth-child(1)')
    firstElectronicProduct.should('contain', 'electronics')

    firstElectronicProduct.click()

    cy.wait(2000)

    // Add product to the cart
    const addToCartButton = cy.get(
      '.r-borderRadius-1ylenci > .css-view-1dbjc4n',
    )
    addToCartButton.click()

    // Open cart
    cy.get(
      '.r-flex-1d9yedq > .r-flexDirection-18u37iz > [style="transition-duration: 0s;"] > .css-view-1dbjc4n',
    ).click()

    cy.wait(2000)

    // Close session
    cy.get(
      '.r-outlineWidth-10paoce > .css-view-1dbjc4n > .r-height-1472mwg',
    ).click()
    cy.get(
      '.r-WebkitOverflowScrolling-150rngu > :nth-child(1) > :nth-child(2) > .r-alignItems-1awozwy',
    ).click()

    cy.get('.r-fontSize-1x35g6').should('contain', 'Iniciar sesión')
  })
})
