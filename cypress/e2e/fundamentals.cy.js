describe('Fundamentals test', () => {
  it('Contains correct header text', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
  })

  it('Accordion works correctly', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="accordion-item-1"]').click()
    cy.get('[data-test="accordion-item-2"]').click()
    cy.get('[data-test="accordion-item-3"]').click()
    cy.get('[data-test="accordion-item-4"]').click()
    cy.get('[data-test="accordion-item-5"]').click()
    cy.get('[data-test="accordion-item-6"]').click()
    cy.get('[data-test="accordion-item-7"]').click()
    cy.get('[data-test="accordion-item-8"]').click()
  })
})