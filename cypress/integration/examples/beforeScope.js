/// <reference types="cypress" />
// before outside describe will work, inside describe will results in undefined just after the 1st it
let data;
before(function () {
  cy.log("runs once before all tests in the block")
  cy.fixture('userData').as('user').then((asOutput) => {
    data = asOutput;
  })
})
describe('With Alias', () => {
  it("Test2", function () {
    expect(this.user.passWord).to.equal('demo')
    cy.log('PassWord: ' + this.user.passWord)
  })
  it("Test1", function () {
    expect(this.user.userName).to.equal('john')
    cy.log('UserName: ' + this.user.userName)
  })

})
describe('With variable', () => {
  let credens;
  afterEach(() => {
    cy.log("runs after each test in the block");
  })
  after(() => {
    cy.log("runs once after all tests in the block");
  })
  before(() => {
    cy.log("runs once before all tests in the block")
    cy.fixture('userData').as('user').then((asOutput) => {
      credens = asOutput;
    })
  })
  beforeEach(() => {
    cy.log("before eack it block");
  })
  it("Test2", () => {
    expect(credens.passWord).to.equal('demo')
    cy.log('PassWord: ' + credens.passWord)
  })
  it("Test1", () => {
    expect(credens.userName).to.equal('john')
    cy.log('UserName: ' + credens.userName)
  })

})