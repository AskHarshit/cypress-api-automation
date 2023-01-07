describe('demonstrate file upload in cypress', ()=> {
    before(()=> {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload', () => {
        const filepath = 'Screenshot_20221121_093832.png'
        cy.get('#file-upload').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('Screenshot_20221121_093832.png')
    })
})