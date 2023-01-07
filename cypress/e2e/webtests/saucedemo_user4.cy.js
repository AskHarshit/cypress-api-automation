/// <reference types = "Cypress" />

const logindata = require('../../fixtures/saucedemo_users')

describe ('sauce demo', ()=>{

    before('visiting url in before hook', ()=>{
        cy.log("I am in before")
        cy.visit('https://www.saucedemo.com/')
        cy.get("#user-name").type(logindata.username[3])
        cy.get("#password").type(logindata.password)
        cy.get("#login-button").click()
        cy.url().should('include', '/inventory.html')
    })


    it('validating performance glitch userflow', ()=>{

    cy.log("I am in 'it' block")
      cy.get("#add-to-cart-sauce-labs-onesie").click()
      cy.get("a[class='shopping_cart_link']").click()
      cy.url().should('include', '/cart.html')
      cy.get("#item_2_title_link").should('have.text', "Sauce Labs Onesie")
      cy.get(".inventory_item_price").should('have.text', "$7.99")
      cy.get("#checkout").click()
      cy.url().should('include', '/checkout-step-one.html')
      cy.get("#first-name").type("Harshit")
      cy.get("#last-name").type("Bhardwaj")
      cy.get("#postal-code").type("201301")
      cy.get("#continue").click()
      cy.url().should('include', '/checkout-step-two.html')
      cy.get(".title").should('have.text', "Checkout: Overview")
      cy.get(".cart_quantity").should('have.text', "1")
      cy.get(".inventory_item_name").should('have.text', "Sauce Labs Onesie")
      cy.get(".inventory_item_price").should('have.text', "$7.99")
      cy.get("div[class='summary_value_label']").should('have.text', "SauceCard #31337FREE PONY EXPRESS DELIVERY!")
      cy.get(".summary_subtotal_label").should('have.text', "Item total: $7.99")
      cy.get(".summary_tax_label").should('have.text', "Tax: $0.64")
      cy.get(".summary_total_label").should('have.text', "Total: $8.63")
      cy.get("#finish").click()
      cy.url().should('include', '/checkout-complete.html')
      cy.get(".complete-header").should('have.text', "THANK YOU FOR YOUR ORDER")





    })


})

