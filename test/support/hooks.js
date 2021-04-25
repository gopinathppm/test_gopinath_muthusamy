const {After, Status} =  require('cucumber');

After((scenario)=>{
    // Here it is added to a failed step, but each time you call `browser.saveScreenshot()` it will automatically bee added to the report
    if (scenario.result.status === 'failed') {
        // It will add the screenshot to the JSON
        browser.saveScreenshot()
    }
    return scenario.status;
});