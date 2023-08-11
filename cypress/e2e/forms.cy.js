describe('Forms tests', () => {
   beforeEach(()=>{
    cy.visit('/forms')
   }
   )
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').type('aaaa@aaa.com')
        cy.contains(/Successfully subbed: aaaa@aaa.com! /i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: aaaa@aaa.com!/i).should('exist')
    })
})