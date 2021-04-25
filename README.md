**********************************************************************************************************
Welcome to the WDIO - CUCUMBER framework
**********************************************************************************************************

A Behavioral driven automation framework with **webdriverio** and **cucumber-js**.


## Pre-requisites
Stable node version greater than or equal to `12.18.3`
A package manager. Either `npm` or 'yarn'


npm config set registry https://registry.npmjs.org/
npm config set registry https://registry.npmjs.org/ --global
npm config set strict-ssl false
npm config set strict-ssl false --global

Access to gitlabs `https://github.com/gopinathppm/test_gopinath_muthusamy.git`

## Framework Installation
* clone the repository from github
    Using SSH
        `git@github.com:gopinathppm/test_gopinath_muthusamy.git`
    Using HTTPS along with your sandbox credentials
        `https://github.com/gopinathppm/test_gopinath_muthusamy.git`

* Install the dependencies using the commands `npm install` or `yarn install`

### Browser driver configurations
For running the automated test cases through any browsers [eg: Chrome or firefox], you need suitable drivers relevant to your browser versions installed

## Automation Execution

* Mention the feature file you want to run in the wdio.conf-cucumber
* execute the command  `npm test` or `npm run test-cucumber`


Reports

Multiple html cucumber report has been added

https://github.com/wswebcreation/wdio-cucumberjs-json-reporter/tree/v5

Attached the test report for the execution

test/support/screenshots/execution_screenshot.png

To check in details:
Please open the below file in browser test/support/htmlReport/index.html
