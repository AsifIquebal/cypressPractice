/// <reference types="cypress" />

// If you store and access the fixture data using this test context object, make sure to use function () { ... } callbacks. 
// Otherwise the test engine will NOT have this pointing at the test context.
describe('Will Fail', () => {
    beforeEach(() => {
        cy.fixture('userData').as('user')
    })
    it("Test1",() => {
        cy.log('UserName: ' + this.user.userName)
    })
    it("Test2",() => {
        cy.log('PassWord: ' + this.user.passWord)
    })
  })

describe("Fixture Demo",()=>{
    let data
    beforeEach(function () {
        cy.fixture("userData").then((user) => {
            data = user
          })
      })
    it("Test1",()=>{
        cy.log('UserName: ' + data.userName)
    })
    it("Test2",()=>{
        cy.log('PassWord: ' + data.passWord)
    })
})

describe('With Alias', () => {
    beforeEach(function () {
        cy.log("runs once before all tests in the block")
        cy.fixture('userData').as('user')
      })
    it("Test2", function () {
        expect(this.user.passWord).to.equal('demo')
        cy.log('PassWord: ' + this.user.passWord)
    })
    it("Test1", function () {
        expect(this.user.userName).to.equal('john')
        cy.log('UserName: ' + this.user.userName)
    })
  })