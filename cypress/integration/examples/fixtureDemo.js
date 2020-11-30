/// <reference types="cypress" />
 
describe("Fuxture Demo",()=>{
    let data
    before(() => {
        cy.log("runs once before all tests in the block")
      })
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
    beforeEach(function(){
        cy.fixture('userData').as('user')
    })
    // beforeEach(() => {
    //   // runs before each test in the block
    // })
    // afterEach(() => {
    //   // runs after each test in the block
    // })
    // after(() => {
    //   // runs once after all tests in the block
    // })
    it("Test1",function () {
        cy.log('UserName: ' + this.user.userName)
    })
    it("Test2",function (){
        cy.log('PassWord: ' + this.user.passWord)
    })
  })