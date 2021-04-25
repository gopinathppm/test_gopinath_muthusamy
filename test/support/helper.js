import * as assert from 'assert';

export const findElement = element => $(element);

export const findElements = element => $$(element);

export const checkIfElementExists = (element, timeout = 5000) => {
    try {
        $(element).waitForEnabled(timeout);
    } catch (error) {
        throw new Error(`Element with selector ${element} doesn't present on the page`).stack;
    }
};

export const getText = (element) => {
    try {
        checkIfElementExists(element);
        const text = $(element).getText(element);
        return text;
    }
    catch (err){
        throw new Error(element + `is not an element`).stack;
    }
};

export const assertTextEqual = (element, expectedText) => {
        const actualText = getText(element);
        assert.equal(actualText, expectedText, new Error(`Expected: ${expectedText} and actual: ${actualText}`).stack);
};

export const waitFor = (seconds) => {
    browser.pause(seconds * 1000);
};

export const setValue = (selector, value) => {
    $(selector).setValue(value);
}

export const click = selector => {
    $(selector).click();
};

export const verifyTitle = (value) => {
    const expTitile = browser.getTitle();
    assert.equal(expTitile, value);

};