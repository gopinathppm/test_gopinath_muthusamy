import { Given, Then, When } from 'cucumber';
import dataSelector from '../locators/locators';
import content from '../locators/contentValidation';
import * as helper from '../support/helper';


    Then(/^I validate the title of the page as "([^"]*)"$/, value => {
        let val = content[value];
        helper.verifyTitle(val);
    });

    Given(/^I validate windows$/, () => {
        let win = browser.getWindowHandles();
        console.log("win--->", win)
    });

    Then(/^I verify the order number$/,() => {

        let order_message = dataSelector['order_confirmation'];
        let message = helper.getText(order_message);
        message = message.split(" ");

        let order_no =message.filter(word => (word.length == 9 && word.match(/[A-Z]/)))
        let back_to_order_btn = dataSelector['back_to_order'];
        helper.click(back_to_order_btn);

        let order_no_verify = '//*[contains(text(),"'+order_no+'")]';

        console.log(order_no_verify);
        helper.click(order_no_verify)


    });
