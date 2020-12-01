/// <reference types="cypress" />
// before outside describe will work, inside describe will results in undefined just after the 1st it
before(function () {
    cy.log("runs once before all tests in the block")
    cy.fixture('userData').as('user')
  })
describe('With Alias', () => {
    
    // beforeEach(() => {
    //   // runs before each test in the block
    // })
    // afterEach(() => {
    //   // runs after each test in the block
    // })
    // after(() => {
    //   // runs once after all tests in the block
    // })
    it("Test2", function () {
        expect(this.user.passWord).to.equal('demo')
        cy.log('PassWord: ' + this.user.passWord)
    })
    it("Test1", function () {
        expect(this.user.userName).to.equal('john')
        cy.log('UserName: ' + this.user.userName)
    })
    
  })