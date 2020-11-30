/// <reference types="cypress" />

import BasePage from "./BasePage"

class LoginPage extends BasePage {

    login() {
        const basePage = new BasePage()
        basePage.launchApplication()
        cy.get(':nth-child(2) > .input').type("john")
        cy.get(':nth-child(4) > .input').type("demo {enter}")     
    
        cy.get('.ng-scope > :nth-child(1) > .ng-binding').then(($accountNumber) => {
            const accountNumberValue = $accountNumber.text()
            cy.log('Default Accout: ' + accountNumberValue)
        })
    
    
    
    }

}
export default LoginPage