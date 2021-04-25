import { Given, Then, When } from 'cucumber';
import dataSelector from '../locators/locators';
import content from '../locators/contentValidation';
import * as helper from '../support/helper';

Given(/^I launch the application$/, () => {
    browser.maximizeWindow();
    browser.url("http://automationpractice.com/index.php?controller=authentication&back=my-account");
});

Then(/^I wait (\d+) seconds$/,(seconds) => {
    helper.waitFor(seconds);
});

Then(/^I verify the "([^"]*)" text as "([^"]*)"$/,(selector, expectedValue) => {
    selector = dataSelector[selector];
    expectedValue = content[expectedValue];
    helper.assertTextEqual(selector,expectedValue);
});

Then(/^I enter "([^"]*)" in "([^"]*)"$/, (value, selector) => {
    selector = dataSelector[selector];
    helper.setValue(selector,value);
});

When (/^I click on "([^"]*)"$/, selector => {
    selector = dataSelector[selector];
    helper.click(selector);
});
When (/^I order a "([^"]*)"$/, selector => {
    selector = dataSelector[selector];
    let t_shirt = dataSelector['tshirt'];
    let add_to_cart = dataSelector['addtocart'];
    let proceed_to_checkout = dataSelector['proceedto_checkout'];
    let proceed_to_checkout_1 = dataSelector['proceedto_checkout_1'];
    let agree_terms = dataSelector['agree'];
    let pay_by_bank_id = dataSelector['pay_by_bank'];
    let order_btn_id = dataSelector['order_btn'];
    let completion_message_finalpage = dataSelector['completion_message'];

    helper.click(t_shirt);
    $(selector).scrollIntoView();
    browser.pause('5000');
    $(selector).moveTo();
    $(add_to_cart).moveTo();
    helper.click(add_to_cart);
    browser.pause('10000');

    helper.click(proceed_to_checkout);
    $(proceed_to_checkout_1).scrollIntoView();
    helper.click(proceed_to_checkout_1);
    helper.click(proceed_to_checkout_1);
    helper.click(agree_terms);
    $(proceed_to_checkout_1).scrollIntoView();
    helper.click(proceed_to_checkout_1);
    helper.click(pay_by_bank_id);
    $(order_btn_id).scrollIntoView();
    helper.click(order_btn_id);
    helper.assertTextEqual(completion_message_finalpage, content['completion_message']);


});


When(/^I login with "([^"]*)" and "([^"]*)" in "([^"]*)" and "([^"]*)"$/, function (uid, pwd, uid_val, pwd_val) {

    uid = dataSelector[uid];
    pwd = dataSelector[pwd];

    helper.setValue(uid,uid_val);
    helper.setValue(pwd,pwd_val);

    helper.click()

});
