/// <reference types="cypress" />
import BasePage from "./BasePage"
class LoginPage extends BasePage {
    login(userName, passWord) {
        const basePage = new BasePage()
        basePage.launchApplication()
        cy.get(':nth-child(2) > .input').type(userName)
        cy.get(':nth-child(4) > .input').type(passWord+"{enter}")   
        //cy.get(':nth-child(5) > .button').click  
        cy.get('.ng-scope > :nth-child(1) > .ng-binding').then(($accountNumber) => {
            const accountNumberValue = $accountNumber.text()
            cy.log('Default Accout: ' + accountNumberValue)
        })
    }
}
export default LoginPage