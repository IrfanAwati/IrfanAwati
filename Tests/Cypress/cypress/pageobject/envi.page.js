

class URL {
    
    static getBaseURL() {
        const enviornment = Cypress.env('environment')
        
        switch (enviornment) {
            case 'azure-dev':
                return Cypress.env('dev')
            case 'azure-tst':
                return Cypress.env('tst')
            case 'azure-uat':
                return Cypress.env('uat')
            default:
                break
        }
        return ''
    }
    
    static getIdsBaseURL() {
        const enviornment = Cypress.env('environment')
        
        switch (enviornment) {
            case 'azure-dev':
                return Cypress.env('dev_ids')
            case 'azure-tst':
                return Cypress.env('tst_ids')
            case 'azure-uat':
                return Cypress.env('uat_ids')
            default:
                break
        }
        return ''
    }
    
    valid() {
        cy.visit(URL.getBaseURL())
        cy.wait(5000)
        
        cy.origin(URL.getIdsBaseURL(), () => {
            const login = Cypress.require('../pageobject/login.page')
            login.valid()
        })
    }

    invalid() {
        cy.visit(URL.getBaseURL())
        cy.wait(5000)
        
        cy.origin(URL.getIdsBaseURL(), () => {
            const login = Cypress.require('../pageobject/login.page')
            login.invalid()
        })
    }
}

module.exports = new URL();