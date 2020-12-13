/// <reference types="cypress" />

import LoginPage from "../../page_objects/LoginPage"
import BillPaymentsPage from "../../page_objects/BillPaymentsPage"
import BasePage from "../../page_objects/BasePage"

const loginPage = new LoginPage
const billPaymentsPage = new BillPaymentsPage
const basePage = new BasePage

describe("Bill Payment Test", () => {

    it("Pay a Bill", () => {
        cy.fixture("userData").then(function (user) {
            cy.log('user: ' + user.userName)
            cy.log('user: ' + user.passWord)
            loginPage.login(user.userName, user.passWord)
            billPaymentsPage.enterPayeeDetailsAndPay()
            basePage.logOutFromApplication()
        })
    })
})