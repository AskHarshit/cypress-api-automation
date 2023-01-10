/// <reference types = "Cypress" />

const dataJson = require('../../fixtures/createuser')


    describe('post user request',()=>{
        let accessToken = 'bb7c587929860444dd6711a969baa976e2d897f6e83af0f36b98b30f2c80272f'
        let randomText = ""
        let testEmail = ""


        it('create user test',()=>{

            var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            for(var i=0;i<10;i++)
            randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length))
            testEmail= randomText + '@gmail.com'

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'authorization': "Bearer "+ accessToken
                },
                body: {
                    "name":dataJson.name,
                    "gender":dataJson.gender,
                    "email":testEmail,
                    "status":dataJson.status
                }
            }).then((resp)=>{
                // cy.log(JSON.stringify(resp))
                expect(resp.status).to.eq(201)
                expect(resp.body).has.property('email',testEmail)
                expect(resp.body).has.property('gender',dataJson.gender)
                expect(resp.body).has.property('status',dataJson.status)

            }).then((resp)=>{

                const userId = resp.body.id
                
                    cy.log("user id is: " + userId)

                    cy.request({

                        method: 'GET',
                        url: 'https://gorest.co.in/public/v2/users/'+userId,
                        headers: {
                            'authorization': "Bearer "+ accessToken 
                                }
                        }).then((resp)=>{
                        expect(resp.status).to.eq(200)
                        expect(resp.body).has.property('id',userId)
                        expect(resp.body).has.property('email',testEmail)
                        expect(resp.body).has.property('gender',dataJson.gender)
                        expect(resp.body).has.property('status',dataJson.status)
                     })

            })

    


        })

    




    })