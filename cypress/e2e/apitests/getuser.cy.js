/// <reference types = "Cypress" />


describe('get api user test', ()=>{

        let accessToken = 'bb7c587929860444dd6711a969baa976e2d897f6e83af0f36b98b30f2c80272f'



    it('get users', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': "Bearer "+ accessToken
            }
        }).then((resp)=>{
            expect(resp.status).to.eq(200)
        })
    })


    it('get user by id', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/4896',
            headers: {
                'authorization': "Bearer "+ accessToken 
            }
        }).then((resp)=>{
            expect(resp.status).to.eq(200)
            expect(resp.body.name).to.eq('Arun Jha PhD')
        })


    })


})