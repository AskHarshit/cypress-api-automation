/// <reference types = "Cypress" />

describe ('sauce demo second user flow', ()=>{

    it('locked out user validation', ()=>{
      cy.visit('https://www.saucedemo.com/', {timeout:30000})
      cy.get("#user-name").type("locked_out_user")
      cy.get("#password").type("secret_sauce")
      cy.get("#login-button").click()
      cy.get("h3[data-test='error']").should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    })

})