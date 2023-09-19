import { defineConfig } from "cypress";
import { addXrayResultUpload, configureXrayPlugin } from "cypress-xray-plugin/plugin.js";

export default defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'output/partial-[hash].xml',
    toConsole: true,
  },
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here

      configureXrayPlugin({
        jira: {
          url: "https://jira.lisec.com/",
          projectKey: "NG", // just a placeholder  
          // testExecutionIssueKey: "NG-13196", //Note: If this field is not provided then each time time new test test execution will be created
          // testCaseIssueKey: "NG-11803",
          uploadResults: true,
          // just a placeholder
          uploadScreenshots: true
        },
        xray: {
          uploadResults: true, //set to false -> if we don't want to write resuls to Jira everytime while running locally
          statusPassed: "PASS",
          statusFailed: "FAIL"
        },
        plugin: {
          overwriteIssueSummary: true
        }
      });
      addXrayResultUpload(on);
    },

    experimentalOriginDependencies: true

  },

  env: {
    JIRA_PROJECT_KEY: "NG",
    environment: 'azure-tst',
    tst_ids: 'https://tst-ids-01-svc.azurewebsites.net',
    dev_ids: 'https://dev-ids-01-svc.azurewebsites.net',
    uat_ids: 'https://uat-ids-01-svc.azurewebsites.net',
    tst: 'https://tst-ana-02-ana-svc.azurewebsites.net/',
    dev: 'https://dev-ana-02-ana-svc.azurewebsites.net/',
    uat: 'https://dem-ana-02-ana-svc.azurewebsites.net/',
    grep: ""
  },

  

},
);
