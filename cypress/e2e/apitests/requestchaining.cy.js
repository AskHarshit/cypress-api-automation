/// <reference types = "Cypress" />



describe('pass json value/array from one request to another',()=>{

    let accessToken = 'bb7c587929860444dd6711a969baa976e2d897f6e83af0f36b98b30f2c80272f'

        it('get id information',()=>{
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users',
                    headers: {
                        'authorization': "Bearer "+ accessToken 
                            }


                }).then((resp)=>{
                   const idValue = resp.body[0].id
                   return idValue

                })
                .then((idValue)=>{

                    cy.request({
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v2/users/'+idValue,
                        headers: {
                            'authorization': "Bearer "+ accessToken 
                                }
                    }).then((resp)=>{
                        expect(resp.status).to.eq(200)
                        expect(resp.body).to.have.property('id',idValue)
                    })


                })


        })

        it('second test to check query param',()=>{
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/?query=1818',
                headers: {
                    'authorization': "Bearer "+ accessToken 
                        }


            }).then((resp)=>{
               const idValue = resp.body
               return idValue

            })
            .then((idValue)=>{
                for(let i=0;i<idValue.length;i++){
                    cy.request({
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v2/users/?query='+idValue[i].id,
                        headers: {
                            'authorization': "Bearer "+ accessToken 
                                }
                    }).then((resp)=>{
                        expect(resp.status).to.eq(200)
                        expect(resp.body[i]).to.have.property('id',idValue[i].id)
                    })


                }

                


            })


    })

})