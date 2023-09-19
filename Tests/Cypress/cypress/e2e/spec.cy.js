
const url = require("../pageobject/envi.page")
const registeryCypressGrep = require('@cypress/grep')
registeryCypressGrep()

// To run this test via command line the ideal command will be:
// npx cypress run --env environment="azure-tst",JIRA_URL="https://jira.lisec.com",JIRA_USERNAME="Ranorex",JIRA_PASSWORD="***",

//For running tests based on keyword e.g. smoke
// npx cypress run --env grep=smoketest,environment="azure-tst",JIRA_URL="https://jira.lisec.com",JIRA_USERNAME="Ranorex",JIRA_PASSWORD="***"

// change the value of environment, JIRA_USERNAME, JIRA_PASSWORD and testExecutionIssueKey as required

describe('Test Login', () => {
 

  it('Login using correct Username and correct Password NG-11735 (smoketest)', () => {
    
    url.valid() 
    // opens the URL and runs the login method with valid inputs
    // cy.wait(5000)
    // If the url is redirected to other url in our case during authorization we have to use origin "https://docs.cypress.io/api/commands/origin" 
    // All the actions related to this url will be written inside the origin block
    //cy.origin('https://tst-ids-01-svc.azurewebsites.net', () => {...your code related to the url goes here..}

    // once we are logged in and the Url changes back to the main url we can write the rest of the test steps in the main it block.
    cy.wait(10000)
    cy.get(".Multiterm.Multiterm-", {timeout: 15000}).should("contain.text", "Analytics")

  })

  
  it('Login using correct Username and incorrect Password NG-11737 (regressiontest)', () => {

    url.invalid() // opens the URL and runs the login method with invalid password

    //In case you are writing test cases for the login page where we use origin, 
    // then you can create different methods inside the class and write your test steps there as shown in this example. 
    // This will help to run the tests in different enviornment without making any major changes. Helps in maintainability.

  })
})

