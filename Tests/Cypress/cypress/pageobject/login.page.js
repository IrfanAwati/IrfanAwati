class Login {
    valid() {
        cy.get("#Username").click()
        cy.get("#Username").type("lisec@lisec.com")
        cy.get("button[value='login']").click()
        cy.wait(3000)
        cy.get("#Password").click()
        cy.get("#Password").type("lisec")
        cy.get("button[value='login']").click()

    };
    invalid() {
        cy.get("#Username").click()
        cy.get("#Username").type("lisec@lisec.com")
        cy.get("button[value='login']").click()
        cy.wait(3000)
        cy.get("#Password").click()
        cy.get("#Password").type("li")
        cy.get("button[value='login']").click()
        cy.get("div[class='danger validation-summary-errors'] ul li").contains("Incorrect password")
    }
}


module.exports = new Login();