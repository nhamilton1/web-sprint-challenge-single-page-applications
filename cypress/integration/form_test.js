
describe('Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('#name-input')
    const cheeseInput = () => cy.get(':nth-child(6) > input')
    const garlicInput = () => cy.get(':nth-child(7) > input')
    const sausageInput = () => cy.get(':nth-child(8) > input')
    const pepperoniInput = () => cy.get(':nth-child(9) > input')
    const dropDownInput = () => cy.get('#size-dropdown')
    const instInput = () => cy.get('#special-text')
    const oderBtn = () => cy.get('#order-button')

    it('test that you can add text to the box', () =>{
        //assertion(s)
        nameInput()
            .should('exist')
            .type('Nick')
            .should('have.value', 'Nick')
    })

    it('test that you can select multiple toppings', () => {
        cheeseInput().click()
        garlicInput().click()
        sausageInput().click()
        pepperoniInput().click()
    })


    it('test that you can submit the form', () => {
        nameInput().type('Nick')
        dropDownInput().select('large')
        garlicInput().click()
        sausageInput().click()
        instInput().type('This is a test')
        oderBtn().click()
    })

})