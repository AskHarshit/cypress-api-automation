/// <reference types = "Cypress" />

const logindata = require('../../fixtures/saucedemo_users')

describe ('social media links and dropdown validation', ()=>{

    beforeEach('visiting url in before hook', ()=>{
        cy.log("I am in before")
        cy.visit('https://www.saucedemo.com/')
        cy.get("#user-name").type(logindata.username[0])
        cy.get("#password").type(logindata.password)
        cy.get("#login-button").click()
        cy.url().should('include', '/inventory.html')
    })


    it('validating footer text and links', ()=>{

        cy.get("a[href='https://twitter.com/saucelabs']").should('have.text', 'Twitter')
        cy.get("a[href='https://www.facebook.com/saucelabs']").should('have.text', 'Facebook')
        cy.get("a[href='https://www.linkedin.com/company/sauce-labs/']").should('have.text', 'LinkedIn')
        cy.get(".footer_copy").should('have.text', '© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')
    

    })

    it('validating drop down of inventory page', ()=>{
        
        cy.get(".product_sort_container").as('dropdown').select('Price (low to high)')
        cy.get('@dropdown').should('have.value', 'lohi')
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)")
        .should('have.text', '$7.99')

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)")
        .should('have.text', '$9.99')

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)")
        .should('have.text', '$15.99')

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)")
        .should('have.text', '$15.99')

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)")
        .should('have.text', '$29.99')

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)")
        .should('have.text', '$49.99')
        
            })


    })


