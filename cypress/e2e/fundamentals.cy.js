describe('Fundamentals test', () => {
 beforeEach(()=>{
  cy.visit('/fundamentals')
   })
  it('Contains correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals')
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
  })

  it('Accordion works correctly', () => {
    
    cy.get('[data-test="accordion-item-1"]').click()
    cy.get('[data-test="accordion-item-2"]').click()
    cy.get('[data-test="accordion-item-3"]').click()
    cy.get('[data-test="accordion-item-4"]').click()
    cy.get('[data-test="accordion-item-5"]').click()
    cy.get('[data-test="accordion-item-6"]').click()
    cy.get('[data-test="accordion-item-7"]').click()
    cy.get('[data-test="accordion-item-8"]').click()
  })

  it('Accordion Item 5 contains correct text', () => {
    
    cy.get('[data-test="accordion-item-5"]').click().contains(/After you get an element, you probably want to do something with that/i)
  })
  
})