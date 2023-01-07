/// <reference types = "Cypress" />

const logindata = require('../../fixtures/saucedemo_users')

describe ('sauce demo', ()=>{

    before('visiting url in before hook', ()=>{
        cy.log("I am in before")
        cy.visit('https://www.saucedemo.com/', {timeout:30000})
        cy.get("#user-name").type(logindata.username[2])
        cy.get("#password").type(logindata.password)
        cy.get("#login-button").click()
        cy.url().should('include', '/inventory.html')
    })


    // after('logging out of the sauce demo', ()=>{
    //     cy.log("I am in after")
    //     cy.get(".bm-burger-button", {timeout:10000}).click()
    //     cy.get("#logout_sidebar_link").click()
    //     cy.url().should('eq', 'https://www.saucedemo.com/')
    // })


    it.only('problem user - ordering validation', ()=>{

    cy.log("I am in 'it' block")

    // cy.get("button[id='add-to-cart-test.allthethings()-t-shirt-(red)']").should('be.disabled')
    // cy.get("button[id='add-to-cart-sauce-labs-bolt-t-shirt']").should('be.disabled')
    // cy.get("button[id='add-to-cart-sauce-labs-fleece-jacket']").should('be.disabled')

    cy.get("#add-to-cart-sauce-labs-onesie").click()
    cy.get("a[class='shopping_cart_link']").click()
    cy.url().should('include', '/cart.html')
    cy.get("#item_2_title_link").should('have.text', "Sauce Labs Onesie")
    cy.get(".inventory_item_price").should('have.text', "$7.99")
    cy.get("#checkout").click()
    cy.url().should('include', '/checkout-step-one.html')
    cy.get("#first-name").type("Harshit")
    cy.get("#last-name").type("Bhardwaj")
    cy.get("#first-name").should('have.value', 'j')
    cy.get("#postal-code").type("201301")
    cy.get("#continue").click()
    cy.get("h3[data-test='error']").should('have.text', 'Error: Last Name is required')
    cy.get("#react-burger-menu-btn").click()
    cy.get("#logout_sidebar_link").click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
    

    })
    

})